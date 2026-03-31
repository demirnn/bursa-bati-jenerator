
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50/50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900">Bursa Servis Hizmetleri</h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-l border-t border-slate-200 bg-white shadow-sm">
          {SERVICES.map((service, i) => (
            <div key={service.id} className="p-10 border-r border-b border-slate-200 hover:bg-slate-900 hover:text-white transition-all group">
              <div className="text-4xl mb-8 text-blue-600 group-hover:text-blue-400 transition-colors">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h4 className="text-lg font-black uppercase mb-4 tracking-tight leading-none">{service.title}</h4>
              <p className="text-sm font-medium leading-relaxed opacity-60 mb-8 group-hover:opacity-80 transition-opacity">
                {service.description}
              </p>
              <div className="pt-4 border-t border-slate-100 group-hover:border-white/10">
                <span className="font-mono text-[10px] tracking-tighter text-slate-300">SOP_REV_00{i+1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;