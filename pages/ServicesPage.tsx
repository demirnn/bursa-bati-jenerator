
import React, { useEffect } from 'react';
import { SERVICES } from '../constants';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <SEO
        title="Servis Hizmetleri"
        description="Bursa'da 7/24 jeneratör teknik servis, periyodik bakım, orijinal yedek parça ve acil müdahale hizmetleri. Uzman kadro ile garantili işçilik."
        canonical="/services"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Servis Hizmetleri', url: '/services' },
        ]}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-slate-900">Bursa Servis Hizmetleri</h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-4">Profesyonel Teknik Destek ve Çözüm Merkezi</p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => (
            <div key={service.id} className="bg-white p-12 border border-slate-200 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 font-black text-8xl -mr-4 -mt-4">
                0{i+1}
              </div>
              <div className="text-5xl mb-8 text-blue-600">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h2 className="text-2xl font-black uppercase mb-6 tracking-tight">{service.title}</h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-sm font-bold text-slate-400 uppercase tracking-widest">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i> 7/24 Acil Müdahale
                </div>
                <div className="flex items-center text-sm font-bold text-slate-400 uppercase tracking-widest">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i> Uzman Teknik Kadro
                </div>
                <div className="flex items-center text-sm font-bold text-slate-400 uppercase tracking-widest">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i> Garantili İşçilik
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
                <span className="font-mono text-xs text-slate-300">REF_CODE: BATI-SRV-00{i+1}</span>
                <a href="#contact" className="text-blue-600 font-black uppercase text-xs tracking-widest hover:underline">Detaylı Bilgi Al</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 text-white p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-black uppercase mb-4">Acil Servis Hattı</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Jeneratörünüzde bir sorun mu var? Bursa ve çevre illerde 7/24 kesintisiz teknik destek için yanınızdayız.</p>
            <a href="tel:+905538521262" className="text-4xl font-black text-blue-400 hover:text-blue-300 transition-colors tracking-tighter">
              +90 553 852 12 62
            </a>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <i className="fas fa-bolt text-[300px] absolute -top-20 -left-20"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
