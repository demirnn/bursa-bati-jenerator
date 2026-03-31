const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { createServer } = require('http');
const { execSync } = require('child_process');

const DIST_DIR = path.resolve(__dirname, '..', 'dist');

// Statik sayfalar - ürün sayfaları Google JS rendering'e bırakılıyor
const ROUTES = [
  '/',
  '/products',
  '/products/portable',
  '/products/industrial',
  '/products/marine',
  '/sectors',
  '/services',
  '/about',
  '/contact',
  '/gobiz-kit',
];

function startServer(port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);

      // SPA fallback: dosya yoksa index.html döndür
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(DIST_DIR, 'index.html');
      }

      const ext = path.extname(filePath);
      const contentTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.webp': 'image/webp',
        '.xml': 'application/xml',
      };

      res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    });

    server.listen(port, () => resolve(server));
  });
}

async function prerender() {
  console.log('Prerendering başlatılıyor...');

  const port = 4173;
  const server = await startServer(port);

  let executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  const nixPath = '/nix/var/nix/profiles/default/bin/chromium';
  if (!executablePath && require('fs').existsSync(nixPath)) {
    executablePath = nixPath;
  }

  if (!executablePath) {
    try {
      executablePath = execSync('which chromium').toString().trim();
    } catch (e) {
      try {
        executablePath = execSync('which google-chrome').toString().trim();
      } catch (e) {}
    }
  }

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: executablePath || undefined,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();
      const url = `http://localhost:${port}${route}`;

      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

      // React'ın renderlamasını bekle
      await page.waitForSelector('main', { timeout: 10000 });

      // Duplicate meta tag temizliği — Helmet (data-rh) etiketlerini tercih et
      let html = await page.evaluate(() => {
        function dedup(selector) {
          const els = [...document.querySelectorAll(selector)];
          if (els.length <= 1) return;
          // data-rh olan varsa onu tut, yoksa sonuncuyu tut
          const helmet = els.find(e => e.hasAttribute('data-rh'));
          const keep = helmet || els[els.length - 1];
          els.forEach(e => { if (e !== keep) e.remove(); });
        }

        dedup('title');
        dedup('meta[name="description"]');
        dedup('link[rel="canonical"]');
        ['og:title', 'og:description', 'og:url', 'og:image', 'og:type'].forEach(p =>
          dedup(`meta[property="${p}"]`)
        );
        ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'].forEach(n =>
          dedup(`meta[name="${n}"]`)
        );

        return document.documentElement.outerHTML;
      });
      html = '<!DOCTYPE html>' + html;

      // Dosya yolunu oluştur
      const filePath = route === '/'
        ? path.join(DIST_DIR, 'index.html')
        : path.join(DIST_DIR, route, 'index.html');

      const dir = path.dirname(filePath);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(filePath, html, 'utf-8');

      console.log(`  ✓ ${route}`);
      await page.close();
    } catch (err) {
      console.error(`  ✗ ${route}: ${err.message}`);
    }
  }

  await browser.close();
  server.close();
  console.log(`Prerendering tamamlandı: ${ROUTES.length} sayfa`);
}

prerender().catch(console.error);
