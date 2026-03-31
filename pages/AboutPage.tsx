
import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certificates = [
    { title: 'ISO 9001:2015', desc: 'Kalite Yönetim Sistemi Sertifikası', icon: 'fa-certificate' },
    { title: 'ISO 14001:2015', desc: 'Çevre Yönetim Sistemi Sertifikası', icon: 'fa-leaf' },
    { title: 'ISO 45001:2018', desc: 'İş Sağlığı ve Güvenliği Sertifikası', icon: 'fa-shield-alt' },
    { title: 'TSE Hizmet Yeterlilik', desc: 'Teknik Servis Standart Uygunluk', icon: 'fa-check-double' },
    { title: 'CE Uygunluk Belgesi', desc: 'Avrupa Standartları Uygunluk', icon: 'fa-euro-sign' },
    { title: 'Marka Tescil Belgesi', desc: 'Batı Jeneratör Marka Koruma', icon: 'fa-trademark' },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <SEO
        title="Hakkımızda"
        description="Batı Jeneratör, Bursa merkezli enerji sektöründe 15+ yıllık tecrübesiyle kesintisiz güç çözümleri sunan öncü bir kuruluştur. ISO sertifikalı, 1000+ mutlu müşteri."
        canonical="/about"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Hakkımızda', url: '/about' },
        ]}
      />
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-8">
              Batı Jeneratör <br/> <span className="text-blue-600">Hakkımızda</span>
            </h1>
            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                Batı Jeneratör, Bursa merkezli olarak enerji sektöründe uzun yıllara dayanan tecrübesiyle, kesintisiz güç çözümleri sunan öncü bir kuruluştur. Kuruluşumuzdan bu yana, sanayiden tarıma, sağlıktan kamu hizmetlerine kadar geniş bir yelpazede Bursa ve çevre illerin enerji ihtiyacını karşılamaktayız.
              </p>
              <p>
                Müşteri memnuniyetini odak noktamıza alarak, sadece satış değil, projelendirme, montaj ve 7/24 teknik servis hizmetlerimizle enerjinin her anında yanınızdayız. Uzman teknik kadromuz ve geniş yedek parça ağımızla, jeneratörlerinizin en yüksek performansta çalışmasını sağlıyoruz.
              </p>
              <p>
                Teknolojiyi yakından takip ederek, çevre dostu ve yüksek verimli yeni nesil jeneratör sistemlerini portföyümüze ekliyor, Bursa'nın enerjisini geleceğe taşıyoruz.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center p-6 bg-slate-50 border border-slate-100">
                <div className="text-3xl font-black text-blue-600 mb-2">15+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Yıllık Tecrübe</div>
              </div>
              <div className="text-center p-6 bg-slate-50 border border-slate-100">
                <div className="text-3xl font-black text-blue-600 mb-2">1000+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Mutlu Müşteri</div>
              </div>
              <div className="text-center p-6 bg-slate-50 border border-slate-100">
                <div className="text-3xl font-black text-blue-600 mb-2">7/24</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Teknik Destek</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-slate-100 overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipMDfzKFDg3_ZwQpRhlCLHvRdiXNAC1_Xd4te6vk=s1360-w1360-h1020-rw"
                alt="Batı Jeneratör Ofis"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-12 hidden md:block">
              <div className="text-5xl font-black mb-2 italic">BATI</div>
              <div className="text-sm font-bold uppercase tracking-[0.3em]">GÜÇ SİSTEMLERİ</div>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="bg-slate-900 text-white p-16 md:p-24 rounded-3xl overflow-hidden relative">
          <div className="relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Sertifika ve Evraklarımız</h2>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Uluslararası Standartlarda Kalite ve Güven</p>
              <div className="h-1 w-20 bg-blue-600 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 bg-blue-600 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
                    <i className={`fas ${cert.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-black uppercase mb-2 tracking-tight">{cert.title}</h3>
                  <p className="text-slate-400 text-sm font-medium">{cert.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 p-8 border border-white/10 bg-white/5 text-center">
              <p className="text-slate-400 text-sm italic">
                * Tüm teknik evraklarımız ve sertifikalarımız güncel olup, talep edilmesi durumunda asılları veya onaylı suretleri ibraz edilebilir.
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -ml-48 -mb-48"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
