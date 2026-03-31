
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-0 border border-slate-200 shadow-sm bg-white">
          <div className="lg:col-span-7 p-6 md:p-16 flex flex-col justify-center bg-white overflow-hidden">
            <div className="inline-block border border-slate-200 px-3 md:px-4 py-1 mb-8 self-start font-bold uppercase text-[9px] md:text-[10px] tracking-widest text-slate-400 max-w-full break-words">
              TEKNİK SERVİS & SATIŞ MERKEZİ // BURSA MERKEZ
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter uppercase break-words w-full">
              Gücü <br /> <span className="text-blue-600">Kontrol</span> <br /> Altına Alın
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg mb-12 border-l-4 border-blue-600 pl-4 md:pl-6 font-medium italic">
              Bursa'nın dev fabrikalarından Gemlik'in balıkçı teknelerine kadar, enerjinin her damlasını profesyonellikle yönetiyoruz.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full">
              <a href="tel:+905538521262" className="bg-slate-900 text-white px-6 sm:px-10 py-4 sm:py-5 font-black uppercase tracking-widest hover:bg-blue-600 transition-all text-sm flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                <i className="fas fa-phone-alt"></i> HEMEN ARA
              </a>
              <a href="https://wa.me/905538521262" target="_blank" rel="noopener noreferrer" className="border border-slate-200 text-slate-900 px-6 sm:px-10 py-4 sm:py-5 font-black uppercase tracking-widest hover:bg-slate-50 transition-all text-sm flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                <i className="fab fa-whatsapp text-green-600 text-lg"></i> WHATSAPP'TAN ULAŞ
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative bg-slate-100 min-h-[400px] border-l border-slate-200">
            <img
              src="https://gobizjenerator.com/home-categ/endustriyel-gensets.webp"
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
              alt="Endüstriyel Jeneratör"
            />
            <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply"></div>
            <div className="absolute bottom-0 left-0 bg-slate-900 text-white p-6 font-mono text-[10px]">
              UNIT_SERIAL: BURSA-BATI-2025<br />
              LOCATION: UCEVLER_MERKEZ<br />
              STATUS: OPERATIONAL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;