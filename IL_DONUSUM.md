# Yalova / İnan Emin Dönüşümü — Değişiklik Listesi

**Kaynak Proje:** gobiz_servisler_www (Bursa Batı Jeneratör)  
**Hedef:** Yalova İnan Emin Elektrik Jeneratör  
**Durum:** Beklemede

---

## Firma Bilgileri (Yeni)
- **Firma:** İnan Emin Elektrik Jeneratör
- **E-posta:** eminturgut1987@gmail.com
- **Tel:** 0544 578 40 86
- **Adres:** Gazi Osman Paşa Mah. Buse Sok. No:11 Merkez, Yalova
- **Bölge:** Yalova + Altınova + Çınarcık + Armutlu + Çiftlikköy + Termal

---

## Değiştirilecek Dosyalar

### constants.tsx
- `COMPANY_NAME` → "İnan Emin Elektrik Jeneratör"
- `CONTACT_EMAIL` → "eminturgut1987@gmail.com"
- `ADDRESS` → "Gazi Osman Paşa Mah. Buse Sok. No:11 Merkez, Yalova"
- "Bursa sanayisi/OSB" → "Yalova / Altınova OSB"
- "Bursa Sanayi Serisi" → kaldır veya "Yalova Sanayi Serisi" olarak güncelle
- Referans: "Demir Otomotiv (Bursa OSB)" → Yalova firması ile güncelle

### index.html
- `<title>` → "Yalova İnan Emin Jeneratör | Endüstriyel ve Taşınabilir Jeneratör Çözümleri"
- `meta description` → Yalova odaklı
- `meta keywords` → Yalova jeneratör, Altınova OSB, Çınarcık jeneratör
- `og:url` → yeni domain
- `og:title` → "İnan Emin Jeneratör | Yalova"
- `twitter:url`, `twitter:title` → güncelle
- `canonical` → yeni domain
- JSON-LD LocalBusiness:
  - `name` → "İnan Emin Elektrik Jeneratör"
  - `streetAddress` → "Gazi Osman Paşa Mah. Buse Sok. No:11"
  - `addressLocality` → "Yalova"
  - `telephone` → "+90 544 578 40 86"

### components/SEO.tsx
- `BASE_URL` → yeni domain (örn: `https://inaneminjenerator.com`)
- `SITE_NAME` → "İnan Emin Elektrik Jeneratör"

### components/Hero.tsx
- "TEKNİK SERVİS & SATIŞ MERKEZİ // BURSA MERKEZ" → "YALOVA MERKEZ"
- "Bursa'nın dev fabrikalarından Gemlik'in balıkçı teknelerine kadar..." → Yalova bölgesi metni
- "UNIT_SERIAL: BURSA-BATI-2025" → "UNIT_SERIAL: YALOVA-INAN-2025"

### components/Footer.tsx
- "Bursa sanayisinin kalbinde..." → "Yalova'nın kalbinde..."
- "7/24 BURSA MOBİL SERVİS" → "7/24 YALOVA MOBİL SERVİS"
- "Bursa / Türkiye" → "Yalova / Türkiye"
- GoBiz Market linki kontrol et

### components/Contact.tsx
- "Bursa teknik ekibimiz 7/24 operasyoneldir." → "Yalova teknik ekibimiz 7/24 operasyoneldir."
- "BURSA_BATI_JEN_SYSTEM_LOG" → güncelle

### components/ContactWidget.tsx
- "bursa_service_v2.1" → "yalova_service_v1.0"

### components/ProductSection.tsx
- "Bursa Satış Portföyü" → "Yalova Satış Portföyü"

### components/Services.tsx
- "Bursa Servis Hizmetleri" → "Yalova Servis Hizmetleri"

### components/GeneratorSelector.tsx
- "Bursa OSB'de tekstil fabrikası..." → Yalova/Altınova OSB örneği
- "Gemlik limanında balıkçı teknesi..." → kaldır veya Yalova'ya uygun yap

### pages/AboutPage.tsx
- "Batı Jeneratör Marka Koruma" → "İnan Emin Marka Koruma"
- "Batı Jeneratör Hakkımızda" → "İnan Emin Jeneratör Hakkımızda"
- "Batı Jeneratör, Bursa merkezli..." → Yalova metni
- alt="Batı Jeneratör Ofis" → "İnan Emin Jeneratör Ofis"

### pages/ContactPage.tsx
- description meta → Yalova güncelle
- "Batı Jeneratör Konum" → "İnan Emin Jeneratör Konum"
- `info@batijenerator.com` → `eminturgut1987@gmail.com`

### pages/HomePage.tsx
- meta description → Yalova odaklı
- "Batı Jeneratör'ün Bursa'daki köklü geçmişi..." → Yalova metni

### pages/ServicesPage.tsx
- "Bursa Servis Hizmetleri" → "Yalova Servis Hizmetleri"
- "Bursa ve çevre illerde 7/24..." → "Yalova ve çevre illerde 7/24..."

### pages/SectorsPage.tsx
- "Bursa'nın her köşesinde..." → "Yalova'nın her köşesinde..."
- meta description → Yalova

### pages/CategoryProducts.tsx
- "Bursa Batı Jeneratör güvencesiyle" → "İnan Emin Jeneratör güvencesiyle"

### services/geminiService.ts
- "Bursa sanayisi" → "Yalova / Altınova OSB"
- "Bursa Batı Jeneratör firmasının uzmanlığını vurgula" → "İnan Emin Elektrik Jeneratör"

### public/sitemap.xml
- Tüm `bursabatijenerator.com.tr` → yeni domain

### public/robots.txt
- Sitemap URL → yeni domain

---

## Toplam
- **15 dosya**
- **~55 satır değişiklik**
- Yapacak agent: `frontend-developer`
