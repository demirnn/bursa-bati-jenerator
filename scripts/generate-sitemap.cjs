const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://bursabatijenerator.com.tr';
const PORTABLE_SHEET_ID = '1DVSfj8Pk4Cd5hCQLZQe4QHP8v6EdDR_PCof5Hv6wMb8';
const INDUSTRIAL_SHEET_ID = '18CDzN7MXrdIfqH6Ud8wHk3DMESWK7DQ5RNA-lz_uOK8';
const API_KEY = 'AIzaSyA8HEXFSEvSB4qW7wTfW6188I7U1o43hVA';

const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/products', changefreq: 'weekly', priority: '0.8' },
  { loc: '/products/portable', changefreq: 'weekly', priority: '0.7' },
  { loc: '/products/industrial', changefreq: 'weekly', priority: '0.7' },
  { loc: '/products/marine', changefreq: 'weekly', priority: '0.7' },
  { loc: '/gobiz-kit', changefreq: 'monthly', priority: '0.8' },
  { loc: '/sectors', changefreq: 'monthly', priority: '0.7' },
  { loc: '/services', changefreq: 'monthly', priority: '0.7' },
  { loc: '/about', changefreq: 'monthly', priority: '0.6' },
  { loc: '/contact', changefreq: 'yearly', priority: '0.6' },
];

async function fetchPortableIds() {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${PORTABLE_SHEET_ID}/values/SETS!A1:BB1?key=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    if (!data.values || !data.values[0]) return [];

    const ids = [];
    for (let col = 2; col < data.values[0].length; col++) {
      if (data.values[0][col]) {
        ids.push(`portable-${col - 1}`);
      }
    }
    return ids;
  } catch (e) {
    console.error('Portable fetch error:', e.message);
    return [];
  }
}

async function fetchIndustrialIds() {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${INDUSTRIAL_SHEET_ID}/values/SETS!A1:GY1?key=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    if (!data.values || !data.values[0]) return [];

    const ids = [];
    for (let col = 1; col < data.values[0].length; col++) {
      if (data.values[0][col]) {
        ids.push(`industrial-${col}`);
      }
    }
    return ids;
  } catch (e) {
    console.error('Industrial fetch error:', e.message);
    return [];
  }
}

function buildUrl(entry) {
  return `  <url>
    <loc>${BASE_URL}${entry.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`;
}

async function generate() {
  console.log('Sitemap oluşturuluyor...');

  const [portableIds, industrialIds] = await Promise.all([
    fetchPortableIds(),
    fetchIndustrialIds(),
  ]);

  console.log(`  ${portableIds.length} portatif ürün bulundu`);
  console.log(`  ${industrialIds.length} endüstriyel ürün bulundu`);

  const productPages = [
    ...portableIds.map(id => ({
      loc: `/portable-product/${id}`,
      changefreq: 'weekly',
      priority: '0.6',
    })),
    ...industrialIds.map(id => ({
      loc: `/product/${id}`,
      changefreq: 'weekly',
      priority: '0.6',
    })),
  ];

  const allPages = [...staticPages, ...productPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(buildUrl).join('\n')}
</urlset>
`;

  const publicPath = path.resolve(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, xml, 'utf-8');
  console.log(`Sitemap oluşturuldu: ${allPages.length} URL (${publicPath})`);
}

generate().catch(console.error);
