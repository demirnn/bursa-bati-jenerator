# SEO Raporu — gobiz_servisler_www (Bursa Batı Jeneratör)
**Tarih:** 2026-03-30  
**Tahmini SEO Puanı: 72/100**

---

## ✅ Güçlü Yönler

### Teknik SEO
- ✅ `sitemap.xml` mevcut (tüm sayfalar ekli)
- ✅ `robots.txt` mevcut
- ✅ `react-helmet-async` ile sayfa bazlı SEO yönetimi (`SEO.tsx` component)
- ✅ Canonical URL her sayfada
- ✅ Open Graph tags (og:title, og:description, og:image, og:url)
- ✅ Twitter Card tags
- ✅ JSON-LD: LocalBusiness + BreadcrumbList + Product schema
- ✅ `robots: index, follow`
- ✅ `theme-color` meta
- ✅ Breadcrumb navigation (görsel + schema)

### İçerik SEO
- ✅ H1-H2-H3 hiyerarşisi sayfalar genelinde tutarlı
- ✅ Bölgesel içerik (Bursa, OSB, Gemlik referansları)
- ✅ Sektörel sayfalar (hayvancılık, fabrika, inşaat vb.)
- ✅ URL yapısı temiz ve anlamlı (`/products/industrial`, `/services`)

---

## ❌ Sorunlar

### 🔴 Kritik
| # | Sorun | Dosya |
|---|-------|-------|
| 1 | **og:image** gerçek görsel yok (`/og-image.jpg` 404 verir) | index.html |
| 2 | **Twitter image** aynı eksik görsel | index.html |
| 3 | **JSON-LD adres boş:** `"streetAddress": "Bursa Batı Jeneratör Adresi"` — placeholder! | index.html |
| 4 | **Telefon numarası yok** — LocalBusiness schema'da `telephone` alanı eksik | index.html |

### 🟡 Orta
| # | Sorun | Dosya |
|---|-------|-------|
| 5 | Ürün detay sayfalarında dinamik SEO title çalışıyor ama **ürün görselleri harici kaynak** — `referrerPolicy="no-referrer"` | ProductDetail.tsx |
| 6 | **sitemap.xml** sabit URL'ler — ürün detay sayfaları yok | public/sitemap.xml |
| 7 | `GobizKitPage` (/gobiz-kit) sitemap'te eksik | public/sitemap.xml |
| 8 | `geminiService.ts` içindeki AI prompt Bursa'ya özel hardcode — başka şehir için yanlış yanıt üretir | services/geminiService.ts |
| 9 | `manifest.json` site adı güncellenmemiş olabilir | public/manifest.json |

### 🟢 Düşük
| # | Sorun | Dosya |
|---|-------|-------|
| 10 | Bazı görsellerde `alt` text generik ("Batı Jeneratör Ofis") — daha keyword odaklı olmalı | pages/AboutPage.tsx |
| 11 | Font Awesome ve Tailwind CDN'den geliyor — sayfa yükleme performansı etkilenebilir | index.html |
| 12 | `CONTACT_EMAIL` ve `ADDRESS` constants'ta tanımlı ama ContactPage'de ayrıca hardcode tekrar | pages/ContactPage.tsx |

---

## 📋 Öneriler

### 1. Acil Düzeltmeler
```
- /public/og-image.jpg oluştur (1200x630px)
- JSON-LD'deki placeholder adres düzelt
- telephone alanı ekle: "telephone": "+90 XXX XXX XX XX"
```

### 2. Sitemap Genişletme
```xml
<url>
  <loc>https://bursabatijenerator.com.tr/gobiz-kit</loc>
  <priority>0.8</priority>
</url>
```

### 3. Google E-E-A-T İyileştirme
- Hakkımızda sayfasına **uzman biyografisi** ekle
- **Müşteri yorumları** için Review schema ekle
- **Sertifikalar** sayfaya görsel olarak yerleştir

### 4. Yerel SEO
- Google Business Profile entegrasyonu için `sameAs` JSON-LD alanı ekle
- Her şehir/ilçe için ayrı landing page oluştur (Gemlik, İnegöl, Nilüfer vb.)

---

## 📊 Sayfa Bazlı Puan

| Sayfa | Puan | Notlar |
|-------|------|--------|
| Ana Sayfa | 75/100 | og:image eksik |
| Ürünler | 70/100 | Dinamik meta iyi |
| Ürün Detay | 80/100 | Product schema var |
| Hizmetler | 70/100 | Bölgesel içerik iyi |
| Sektörler | 72/100 | |
| Hakkımızda | 65/100 | alt text zayıf |
| İletişim | 68/100 | Schema adresi hatalı |

---

## 🔄 Yalova / İnan Emin Geçişi İçin SEO Notları

Firma değişikliğinde şunlar güncellenmeli:
- `BASE_URL` → yeni domain (örn: `inaneminjenerator.com`)
- `og:image` → Yalova görseli
- LocalBusiness schema → Yalova adres, telefon, koordinatlar
- sitemap.xml → yeni domain
- robots.txt → yeni domain sitemap URL'i
- Keyword odağı: "Yalova jeneratör" + "Altınova OSB" + "Çınarcık" + "Termal"
