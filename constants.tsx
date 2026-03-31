
import { Service, Product, Testimonial } from './types';

export const COMPANY_NAME = "Batı Jeneratör Güç Sistemleri";
export const CONTACT_PHONE = "+90 553 852 12 62"; 
export const CONTACT_EMAIL = "info@batijenerator.com.tr";
export const ADDRESS = "Üçevler Mah. Üstay Sk. No:8 Merkez, Bursa";
export const WORKING_HOURS = "Pazartesi-Cuma: 08:00-18:00, Cumartesi: 09:00-18:00";

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Satış & Projelendirme',
    description: 'Bursa sanayisine özel güç analizi ve ihtiyaca uygun jeneratör seçimi ile anahtar teslim kurulum hizmeti.',
    icon: 'fa-shopping-cart'
  },
  {
    id: 's2',
    title: '7/24 Teknik Servis',
    description: 'Uzman kadromuzla Bursa ve çevre illerde her marka jeneratör için kesintisiz teknik müdahale ve onarım.',
    icon: 'fa-tools'
  },
  {
    id: 's3',
    title: 'Orijinal Yedek Parça',
    description: 'Geniş stok ağımızla jeneratörleriniz için %100 orijinal ve garantili yedek parça tedariği.',
    icon: 'fa-cogs'
  },
  {
    id: 's4',
    title: 'Periyodik Bakım',
    description: 'İşletmenizin enerjisinin kesilmemesi için önleyici bakım programları ve detaylı performans raporlama.',
    icon: 'fa-calendar-check'
  }
];

export const SECTORS = [
  {
    id: 'factory',
    title: 'Fabrika & Sanayi',
    description: 'Bursa OSB bölgelerinde üretim bandının durmaması için yüksek kapasiteli, senkronize jeneratör çözümleri.',
    icon: 'fa-industry',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'livestock',
    title: 'Hayvancılık & Tarım',
    description: 'Karacabey ve Mustafakemalpaşa bölgelerindeki çiftliklerde havalandırma ve sağım sistemleri için otomatik kesintisiz enerji.',
    icon: 'fa-cow',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'construction',
    title: 'İnşaat & Şantiye',
    description: 'Şehirleşen Bursa\'nın yeni projelerinde, zorlu saha koşullarına dayanıklı mobil ve sabit güç üniteleri.',
    icon: 'fa-building',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hospital',
    title: 'Sağlık & Kamu',
    description: 'Hastaneler ve veri merkezleri gibi kritik altyapılarda 0.1 saniye altında devreye giren güvenilir sistemler.',
    icon: 'fa-hospital',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRODUCTS: Product[] = [
  // PORTATİF ÜRÜNLER (Benzinli)
  {
    id: 'p1',
    name: 'GO-BM3 Benzinli Jeneratör',
    type: 'Portable',
    power: '3.00 kVA',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800',
    specs: {
      fuel: 'Benzinli',
      engine: 'GO-210E',
      weight: '45 kg',
      capacity: '5.50 L',
      document: 'https://gobusiness.com.tr/tema/genel/uploads/urunler/dokuman/GO-BM3.pdf'
    }
  },
  {
    id: 'p2',
    name: 'GO-BM4 Benzinli Jeneratör',
    type: 'Portable',
    power: '3.80 kVA',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    specs: {
      fuel: 'Benzinli',
      engine: 'GO-240',
      weight: '47 kg',
      capacity: '15.00 L',
      document: 'https://gobusiness.com.tr/tema/genel/uploads/urunler/dokuman/GO-BM4.pdf'
    }
  },
  {
    id: 'p3',
    name: 'GO-BM6 Benzinli Jeneratör',
    type: 'Portable',
    power: '6.60 kVA',
    image: 'https://images.unsplash.com/photo-1597430302684-d3f39a48514b?auto=format&fit=crop&q=80&w=800',
    specs: {
      fuel: 'Benzinli',
      engine: 'GO-390',
      weight: '82 kg',
      capacity: '15.00 L',
      document: 'https://gobusiness.com.tr/tema/genel/uploads/urunler/dokuman/GO-BM6.pdf'
    }
  },
  {
    id: 'p4',
    name: 'GO-BM8 Benzinli Jeneratör',
    type: 'Portable',
    power: '8.00 kVA',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    specs: {
      fuel: 'Benzinli',
      engine: 'GO-420',
      weight: '85 kg',
      capacity: '15.00 L',
      document: 'https://gobusiness.com.tr/tema/genel/uploads/urunler/dokuman/GO-BM8.pdf'
    }
  },
  {
    id: 'p5',
    name: 'GO-BM10 Benzinli Jeneratör',
    type: 'Portable',
    power: '10.00 kVA',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=800',
    specs: {
      fuel: 'Benzinli',
      engine: 'GO-460E',
      weight: '93 kg',
      capacity: '17.00 L',
      document: 'https://gobusiness.com.tr/tema/genel/uploads/urunler/dokuman/GO-BM10.pdf'
    }
  },
  {
    id: 'p6',
    name: 'GO-BM12 Benzinli Jeneratör',
    type: 'Portable',
    power: '12.00 kVA',
    image: 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=800',
    specs: {
      fuel: 'Benzinli',
      engine: 'GO-460E',
      weight: '95 kg',
      capacity: '18.00 L',
      document: 'https://gobusiness.com.tr/tema/genel/uploads/urunler/dokuman/GO-BM12.pdf'
    }
  },
  // ENDÜSTRİYEL ÜRÜNLER
  {
    id: 'i1',
    name: 'Bursa Sanayi Serisi - 500',
    type: 'Industrial',
    power: '500 kVA',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    specs: {
      fuel: 'Dizel',
      engine: 'Baudouin / Perkins',
      weight: '3200 kg',
      capacity: '800 L'
    }
  },
  {
    id: 'i2',
    name: 'Bursa Sanayi Serisi - 1000',
    type: 'Industrial',
    power: '1000 kVA',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    specs: {
      fuel: 'Dizel',
      engine: 'Baudouin / Perkins',
      weight: '5800 kg',
      capacity: '1500 L'
    }
  },
  // MARİN JENERATÖRLER
  {
    id: 'm1',
    name: 'Marin Güç Ünitesi - M15',
    type: 'Marine',
    power: '15 kVA',
    image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=800',
    specs: {
      fuel: 'Dizel',
      engine: 'Marine Grade',
      weight: '280 kg',
      capacity: '60 L'
    }
  },
  {
    id: 'm2',
    name: 'Marin Güç Ünitesi - M50',
    type: 'Marine',
    power: '50 kVA',
    image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=800',
    specs: {
      fuel: 'Dizel',
      engine: 'Marine Grade',
      weight: '650 kg',
      capacity: '120 L'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Levent Demir',
    company: 'Demir Otomotiv (Bursa OSB)',
    comment: 'OSB içindeki tesisimizde enerji sürekliliği hayati önem taşıyor. Batı Jeneratör Bursa ekibine teşekkür ederiz.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Selin Yıldız',
    company: 'Yıldız Çiftliği',
    comment: 'Hayvanlarımızın refahı için elektrik kesintisi kabul edilemez. Kurdukları sistem tıkır tıkır çalışıyor.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Ahmet Yılmaz',
    company: 'Yılmaz İnşaat A.Ş.',
    comment: 'Şantiyelerimizdeki ağır çalışma koşullarında bile jeneratörleriniz performansından ödün vermiyor. Servis hızı mükemmel.',
    rating: 5
  },
  {
    id: 't4',
    name: 'Merve Kaya',
    company: 'Kaya Tekstil',
    comment: 'Tekstil üretiminde hassas makinelerimiz için sunduğunuz senkronize çözümler sayesinde artık elektrik kesintilerinden korkmuyoruz.',
    rating: 5
  }
];

export const GOBIZ_CERTIFICATES = [
  {
    id: 'c1',
    title: 'ISO 9001:2015',
    subtitle: 'Kalite Yönetim Sistemi',
    description: 'Kalite yönetim sistemimizin uluslararası standartlara uygunluğunu belgeleyen sertifika.',
    issuer: 'TÜV SÜD',
    validity: '2025-12-31',
    icon: 'fa-award'
  },
  {
    id: 'c2',
    title: 'ISO 14001:2015',
    subtitle: 'Çevre Yönetim Sistemi',
    description: 'Çevresel etkileri minimize eden üretim süreçlerimizi belgeleyen sertifika.',
    issuer: 'Bureau Veritas',
    validity: '2025-08-15',
    icon: 'fa-leaf'
  },
  {
    id: 'c3',
    title: 'CE Uygunluk Belgesi',
    subtitle: 'Avrupa Uygunluk',
    description: 'Ürünlerimizin Avrupa Birliği standartlarına uygunluğunu belgeleyen sertifika.',
    issuer: 'Notified Body',
    validity: '2026-03-20',
    icon: 'fa-euro-sign'
  },
  {
    id: 'c4',
    title: 'ISO 45001:2018',
    subtitle: 'İş Sağlığı ve Güvenliği',
    description: 'İş sağlığı ve güvenliği yönetim sistemimizin standartlara uygunluğu.',
    issuer: 'SGS',
    validity: '2025-11-10',
    icon: 'fa-user-shield'
  },
  {
    id: 'c5',
    title: 'TSE Hizmet Yeterlilik Belgesi',
    subtitle: 'Hizmet Kalitesi',
    description: 'Satış sonrası hizmetlerimizin TSE standartlarına uygunluğunu belgeleyen sertifika.',
    issuer: 'TSE',
    validity: '2025-06-30',
    icon: 'fa-check-double'
  }
];
