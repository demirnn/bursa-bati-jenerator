
import React, { useEffect } from 'react';
import { SECTORS } from '../constants';
import SEO from '../components/SEO';

const SectorsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <SEO
        title="Sektörel Uygulamalar"
        description="Fabrika, hayvancılık, inşaat ve sağlık sektörleri için özel jeneratör çözümleri. Bursa ve çevre illerde kesintisiz enerji."
        canonical="/sectors"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Sektörel Uygulamalar', url: '/sectors' },
        ]}
      />
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-slate-900">Sektörel Uygulamalar</h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-4">Kullanım Senaryoları ve Çözüm Ortaklığı</p>
          <div className="h-1 w-20 bg-blue-600 mt-6"></div>
        </div>

        <div className="grid gap-12">
          {SECTORS.map((sector, index) => (
            <div key={sector.id} className="grid lg:grid-cols-2 gap-8 items-center border-b border-slate-100 pb-12 last:border-0 group">
              <div className={`relative overflow-hidden aspect-video shadow-2xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={sector.image}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  alt={sector.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all"></div>
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-4 mb-6">
                   <div className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center text-2xl">
                     <i className={`fas ${sector.icon}`}></i>
                   </div>
                   <h2 className="text-3xl font-black uppercase tracking-tight">{sector.title}</h2>
                </div>
                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8 border-l-4 border-blue-600 pl-6">
                  {sector.description}
                </p>
                <div className="bg-slate-50 p-6 border border-slate-100 italic text-slate-500 text-sm">
                  "Bursa'nın her köşesinde, {sector.title.toLowerCase()} sektörünün ihtiyaç duyduğu kesintisiz enerjiyi en yüksek standartlarda sağlıyoruz."
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectorsPage;
