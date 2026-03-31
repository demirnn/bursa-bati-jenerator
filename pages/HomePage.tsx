
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import { TESTIMONIALS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Endüstriyel ve Taşınabilir Jeneratör Çözümleri"
        description="Bursa Batı Jeneratör: Fabrika, tarım, hayvancılık ve denizcilik sektörleri için yüksek kaliteli, kesintisiz güç ve profesyonel jeneratör çözümleri."
        canonical="/"
      />
      <Hero />

      {/* Gobiz-Kit Banner */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-block border border-blue-500 px-3 py-1 mb-4 font-bold uppercase text-[10px] tracking-widest text-blue-400">
                YENİ NESİL TEKNOLOJİ
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
                Gobiz-Kit <span className="text-blue-500">Akıllı Ai-Jeneratör</span>
              </h2>
              <p className="text-slate-400 font-medium leading-relaxed text-lg">
                Yapay zeka destekli, verimlilik odaklı yeni nesil güç sistemleri. Enerji tüketiminizi optimize edin ve arızaları önceden tahmin edin.
              </p>
            </div>
            <div className="shrink-0">
              <Link to="/gobiz-kit" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all text-sm shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                Kataloğu İncele <i className="fas fa-arrow-right ml-3"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
      </section>

      {/* Quick Navigation Teasers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/about" className="group p-10 bg-slate-50 border border-slate-200 hover:bg-slate-900 transition-all">
              <div className="text-3xl text-blue-600 mb-6 group-hover:text-white transition-colors">
                <i className="fas fa-info-circle"></i>
              </div>
              <h3 className="text-xl font-black uppercase mb-4 group-hover:text-white transition-colors">Hakkımızda</h3>
              <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors mb-6">Batı Jeneratör'ün Bursa'daki köklü geçmişi ve vizyonu hakkında bilgi edinin.</p>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 group-hover:text-blue-400">Devamını Oku <i className="fas fa-arrow-right ml-2"></i></span>
            </Link>

            <Link to="/sectors" className="group p-10 bg-slate-50 border border-slate-200 hover:bg-slate-900 transition-all">
              <div className="text-3xl text-blue-600 mb-6 group-hover:text-white transition-colors">
                <i className="fas fa-industry"></i>
              </div>
              <h3 className="text-xl font-black uppercase mb-4 group-hover:text-white transition-colors">Sektörler</h3>
              <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors mb-6">Sanayiden tarıma, her sektör için özel olarak tasarlanmış enerji çözümlerimiz.</p>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 group-hover:text-blue-400">Sektörleri İncele <i className="fas fa-arrow-right ml-2"></i></span>
            </Link>

            <Link to="/services" className="group p-10 bg-slate-50 border border-slate-200 hover:bg-slate-900 transition-all">
              <div className="text-3xl text-blue-600 mb-6 group-hover:text-white transition-colors">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="text-xl font-black uppercase mb-4 group-hover:text-white transition-colors">Hizmetler</h3>
              <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors mb-6">7/24 teknik servis, periyodik bakım ve orijinal yedek parça desteğimiz.</p>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 group-hover:text-blue-400">Hizmetleri Gör <i className="fas fa-arrow-right ml-2"></i></span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Table Style */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
         <div className="container mx-auto px-4">
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-16 text-center text-slate-900">Onaylı Referanslar</h3>

          <div className="grid md:grid-cols-2 border-l border-t border-slate-200 bg-white shadow-sm">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-12 border-r border-b border-slate-200">
                <div className="flex mb-6 text-blue-600">
                  {[...Array(t.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star mr-1 text-sm"></i>
                  ))}
                </div>
                <p className="text-xl font-bold text-slate-700 italic mb-8 leading-relaxed">"{t.comment}"</p>
                <div className="flex items-center space-x-4 border-t border-slate-100 pt-6">
                  <div className="w-12 h-12 bg-slate-100 border border-slate-200 text-slate-900 flex items-center justify-center font-black">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black uppercase tracking-tight text-xs text-slate-900">{t.name}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default HomePage;
