
import React from 'react';
import { CONTACT_PHONE } from '../constants';

const ContactWidget: React.FC = () => {
  const whatsappNumber = CONTACT_PHONE.replace(/\s+/g, '').replace('+', '');

  return (
    <div className="fixed bottom-0 inset-x-0 w-full max-w-[100vw] z-50 md:hidden bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
      <div className="grid grid-cols-3 h-16 w-full">
        <a 
          href={`tel:${CONTACT_PHONE}`}
          className="flex flex-col items-center justify-center border-r border-slate-200 bg-slate-900 text-white active:bg-blue-600 transition-colors px-1"
        >
          <i className="fas fa-phone-alt text-lg mb-1"></i>
          <span className="text-[9px] font-black uppercase tracking-tighter truncate w-full text-center">ARA</span>
        </a>
        
        <a 
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center border-r border-slate-200 bg-white text-slate-900 active:bg-slate-50 transition-colors px-1"
        >
          <i className="fab fa-whatsapp text-xl mb-1 text-green-600"></i>
          <span className="text-[9px] font-black uppercase tracking-tighter truncate w-full text-center">WHATSAPP</span>
        </a>

        <a 
          href="#contact"
          className="flex flex-col items-center justify-center bg-blue-600 text-white active:bg-slate-900 transition-colors px-1"
        >
          <i className="fas fa-file-signature text-lg mb-1"></i>
          <span className="text-[9px] font-black uppercase tracking-tighter truncate w-full text-center">TEKLİF AL</span>
        </a>
      </div>
      <div className="bg-slate-900 text-[8px] text-slate-500 py-1 px-4 font-mono flex justify-between uppercase tracking-widest overflow-hidden w-full whitespace-nowrap">
        <span className="truncate">status: online</span>
        <span className="truncate">bursa_service_v2.1</span>
      </div>
    </div>
  );
};

export default ContactWidget;