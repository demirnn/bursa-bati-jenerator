
import React from 'react';
import { SECTORS } from '../constants';

const Sectors: React.FC = () => {
  return (
    <section id="sectors" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-7xl font-black uppercase tracking-tighter text-slate-100 absolute -top-4 left-4">SECTORS</h2>
          <div className="relative z-10">
            <h3 className="text-4xl font-black uppercase tracking-tighter text-slate-900">Sektörel Uygulamalar</h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-2">Kullanım Senaryoları ve Çözüm Ortaklığı</p>
          </div>
        </div>

        <div className="table-grid bg-white border-l border-t border-slate-200">
          {SECTORS.map((sector, index) => (
            <div key={sector.id} className="grid md:grid-cols-12 border-b border-slate-200 group">
              <div className="md:col-span-4 border-r border-slate-200 relative overflow-hidden h-64 md:h-auto">
                <img src={sector.image} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={sector.title} loading="lazy" />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all"></div>
              </div>
              <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center bg-white group-hover:bg-slate-50/50 transition-all">
                <div className="flex items-center space-x-4 mb-6">
                   <div className="w-16 h-16 bg-white border border-slate-200 text-slate-900 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                     <i className={`fas ${sector.icon}`}></i>
                   </div>
                   <h4 className="text-3xl font-black uppercase tracking-tight">{sector.title}</h4>
                </div>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 border-l-2 border-slate-200 pl-6">
                  {sector.description}
                </p>
                <div className="flex items-center space-x-12 font-mono text-[10px] text-slate-400 uppercase">
                  <span>Ref: #BRS-{index+100}</span>
                  <span>Cat: Industrial_Grade</span>
                  <a href="#contact" className="ml-auto text-blue-600 font-black hover:underline tracking-widest underline-offset-4 uppercase">Teknik Detay İste</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;