
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_PHONE } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Sektörler', href: '/sectors' },
    { name: 'Hizmetler', href: '/services' },
    { name: 'Ürünler', href: '/products' },
    { name: 'İletişim', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 w-full max-w-[100vw] z-50 transition-all border-b border-slate-200 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className={`absolute inset-0 w-full h-full -z-10 transition-all ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/90 md:bg-transparent'}`}></div>
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <Link to="/" className="flex items-center space-x-3 group z-50">
          <div className="bg-slate-900 p-2 group-hover:bg-blue-600 transition-colors">
            <i className="fas fa-bolt text-white text-xl"></i>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase leading-none">
            Batı <br/> <span className="text-blue-600">Jeneratör</span>
          </span>
        </Link>

        {/* Mobil Menü Butonu */}
        <button 
          className="md:hidden flex flex-col items-center justify-center p-2 z-50 text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block w-6 h-[2px] bg-slate-800 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-slate-800 mt-[4px] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-[2px] bg-slate-800 mt-[4px] transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
        </button>

        {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center border-l border-slate-200 h-16">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-6 h-full flex items-center font-bold uppercase text-[10px] tracking-widest hover:text-blue-600 transition-all border-r border-slate-200"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href} 
                className="px-6 h-full flex items-center font-bold uppercase text-[10px] tracking-widest hover:text-blue-600 transition-all border-r border-slate-200"
              >
                {link.name}
              </Link>
            )
          ))}
          <a 
            href={`tel:${CONTACT_PHONE}`}
            className="px-8 h-full flex items-center bg-slate-900 text-white font-black hover:bg-blue-600 transition-all border-r border-slate-200 text-xs tracking-tighter"
          >
            DESTEK HATTI
          </a>
        </div>
        
        {/* Mobil Menü Arkaplanı & Linkleri */}
        <div className={`fixed inset-0 bg-white z-40 md:hidden flex flex-col transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="pt-28 pb-8 h-full overflow-y-auto w-full px-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-black uppercase tracking-widest text-slate-800 hover:text-blue-600 border-b border-slate-100 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-2xl font-black uppercase tracking-widest text-slate-800 hover:text-blue-600 border-b border-slate-100 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a 
              href={`tel:${CONTACT_PHONE}`}
              className="mt-6 py-4 text-center bg-blue-600 text-white font-black hover:bg-slate-900 transition-colors text-lg tracking-widest rounded-lg shadow-lg"
            >
              DESTEK HATTI
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;