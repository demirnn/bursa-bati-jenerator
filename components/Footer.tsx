
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, CONTACT_PHONE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-20 border-t-4 border-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-8 group">
              <div className="bg-blue-600 p-2 group-hover:bg-white transition-colors">
                <i className="fas fa-bolt text-white group-hover:text-slate-950 text-xl"></i>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                BATI <span className="text-blue-500">JENERATÖR</span>
              </span>
            </Link>
            <p className="max-w-md text-slate-500 font-medium leading-relaxed mb-8">
              Bursa sanayisinin kalbinde, her kVA değerinde kesintisiz enerji mühendisliği. Satış sonrası 7/24 tam destek.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/Bat%C4%B1-Jenerat%C3%B6r-G%C3%BC%C3%A7-Sistemleri-61557928436444/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://gobizenerji.com.tr/balikesir-bati-jenerator-guc-sistemleri-845" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all" title="GoBiz Market">
                <i className="fas fa-shopping-cart"></i>
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-blue-500 font-black mb-8 uppercase text-xs tracking-[0.3em]">Hızlı Erişim</h4>
            <ul className="space-y-4 font-bold uppercase text-xs tracking-widest">
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">Hakkımızda</Link></li>
              <li><Link to="/sectors" className="hover:text-blue-500 transition-colors">Sektörler</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Hizmetler</Link></li>
              <li><Link to="/products" className="hover:text-blue-500 transition-colors">Ürünler</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-blue-500 font-black mb-8 uppercase text-xs tracking-[0.3em]">Sistem Durumu</h4>
            <div className="bg-white/5 p-6 border border-white/10">
              <div className="flex items-center text-xs font-mono mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                TEKNİK EKİP: AKTİF
              </div>
              <div className="text-xs font-mono text-slate-500">
                7/24 BURSA MOBİL SERVİS: <br />
                <span className="text-white">{CONTACT_PHONE}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-600 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. DESIGN_SPEC: INDUSTRIAL_V2</p>
          <p>Bursa / Türkiye - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
