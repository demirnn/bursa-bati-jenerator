import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const GobizKitPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <SEO
        title="Gobiz-Kit Akıllı AI Jeneratör"
        description="Yapay zeka destekli yeni nesil jeneratör sistemi. %40 yakıt tasarrufu, kestirimci bakım, 7/24 akıllı izleme ve bulut tabanlı uzaktan yönetim."
        canonical="/gobiz-kit"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Ürünler', url: '/products' },
          { name: 'Gobiz-Kit Akıllı AI Jeneratör', url: '/gobiz-kit' },
        ]}
      />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-block border border-blue-600 px-4 py-1 mb-6 font-bold uppercase text-[10px] tracking-widest text-blue-600 bg-blue-50">
              YENİ NESİL TEKNOLOJİ
            </div>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 mb-6">
              Gobiz-Kit <br/> <span className="text-blue-600">Akıllı Ai-Jeneratör</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
              Yapay zeka destekli, verimlilik odaklı yeni nesil güç sistemleri. Enerji tüketiminizi optimize edin, arızaları önceden tahmin edin ve işletmenizin kesintisiz çalışmasını sağlayın.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-slate-900 transition-all text-sm">
                TEKLİF İSTE
              </a>
              <a href="#features" className="border border-slate-200 text-slate-900 px-8 py-4 font-black uppercase tracking-widest hover:bg-slate-50 transition-all text-sm">
                ÖZELLİKLERİ İNCELE
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-slate-100 overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://gobizjenerator.com/gobiz-kit/gobiz-ai-kapak.gif"
                alt="Yapay Zeka Destekli Jeneratör"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-8 hidden md:block border border-slate-700 shadow-xl">
              <div className="text-3xl font-black mb-1 text-blue-400">%40</div>
              <div className="text-[10px] font-bold uppercase tracking-widest">Yakıt Tasarrufu</div>
            </div>
            <div className="absolute -top-8 -right-8 bg-blue-600 text-white p-8 hidden md:block shadow-xl">
              <div className="text-3xl font-black mb-1">7/24</div>
              <div className="text-[10px] font-bold uppercase tracking-widest">Akıllı İzleme</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-4">Neden Gobiz-Kit?</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <i className="fas fa-brain"></i>
              </div>
              <h3 className="text-xl font-black uppercase mb-4 text-slate-900">Yapay Zeka Analizi</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Geçmiş kullanım verilerini analiz ederek gelecekteki enerji ihtiyaçlarınızı tahmin eder ve jeneratörün çalışma prensibini buna göre optimize eder.
              </p>
            </div>
            
            <div className="p-10 border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-black uppercase mb-4 text-slate-900">Maksimum Verimlilik</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Yük durumuna göre motor devrini ve yakıt enjeksiyonunu otomatik ayarlayarak %40'a varan yakıt tasarrufu sağlar ve karbon ayak izini azaltır.
              </p>
            </div>
            
            <div className="p-10 border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-black uppercase mb-4 text-slate-900">Kestirimci Bakım</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Sensörlerden gelen verileri anlık işleyerek olası arızaları önceden tespit eder ve teknik ekibe otomatik bildirim gönderir.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-slate-900 text-white p-12 md:p-20 rounded-3xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">Teknik Özellikler</h2>
                <p className="text-slate-400 font-medium mb-10 leading-relaxed">
                  Gobiz-Kit, mevcut jeneratör sistemlerine entegre edilebilen veya yeni nesil jeneratörlerimizde standart olarak sunulan akıllı bir kontrol ve yönetim modülüdür.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-4">
                    <i className="fas fa-check text-blue-500"></i>
                    <span className="font-bold">Bulut Tabanlı Uzaktan İzleme (IoT)</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <i className="fas fa-check text-blue-500"></i>
                    <span className="font-bold">Mobil Uygulama Entegrasyonu</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <i className="fas fa-check text-blue-500"></i>
                    <span className="font-bold">Otomatik Yük Transferi Optimizasyonu</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <i className="fas fa-check text-blue-500"></i>
                    <span className="font-bold">Gerçek Zamanlı Yakıt ve Isı Analizi</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <i className="fas fa-check text-blue-500"></i>
                    <span className="font-bold">Gelişmiş Raporlama ve İstatistik</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800 p-8 border border-slate-700 rounded-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                  <div className="font-black uppercase tracking-widest text-sm">Sistem Durumu</div>
                  <div className="flex items-center text-green-400 text-xs font-bold">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    AKTİF
                  </div>
                </div>
                <div className="space-y-6 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Yük Durumu:</span>
                    <span className="text-white font-bold">%68</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Yakıt Verimliliği:</span>
                    <span className="text-blue-400 font-bold">Optimum</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tahmini Kalan Süre:</span>
                    <span className="text-white font-bold">14 Saat 20 Dk</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sonraki Bakım:</span>
                    <span className="text-yellow-400 font-bold">24 Gün Sonra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full -mr-48 -mt-48"></div>
        </div>
      </div>
    </div>
  );
};

export default GobizKitPage;
