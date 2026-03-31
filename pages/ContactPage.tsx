
import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <SEO
        title="İletişim"
        description="Bursa Batı Jeneratör iletişim bilgileri. Adres: Üçevler Mah. Üstay Sk. No:8 Merkez, Bursa. 7/24 teknik destek için bizi arayın."
        canonical="/contact"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/' },
          { name: 'İletişim', url: '/contact' },
        ]}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">
              İletişim
            </h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Bizimle İletişime Geçin, Enerjinizi Kesintisiz Kılalım</p>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-10 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-black uppercase tracking-tight mb-8 border-b-2 border-blue-600 inline-block">İletişim Bilgileri</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-slate-100 flex items-center justify-center text-blue-600 text-xl mr-6 shrink-0">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Adres</h3>
                      <p className="text-slate-900 font-black uppercase tracking-tight leading-tight">
                        Üçevler Mah. Üstay Sk. No:8 Merkez, Bursa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-slate-100 flex items-center justify-center text-blue-600 text-xl mr-6 shrink-0">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Telefon</h3>
                      <p className="text-slate-900 font-black uppercase tracking-tight leading-tight">
                        +90 532 201 25 16
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-slate-100 flex items-center justify-center text-blue-600 text-xl mr-6 shrink-0">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">E-Posta</h3>
                      <p className="text-slate-900 font-black uppercase tracking-tight leading-tight">
                        info@batijenerator.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-slate-100 flex items-center justify-center text-blue-600 text-xl mr-6 shrink-0">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Çalışma Saatleri</h3>
                      <p className="text-slate-900 font-black uppercase tracking-tight leading-tight">
                        Pazartesi - Cumartesi: 09:00 - 18:00 <br/>
                        Pazar: Kapalı (7/24 Teknik Destek)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 p-10 text-white">
                <h2 className="text-2xl font-black uppercase tracking-tight mb-4 italic">7/24 Teknik Servis</h2>
                <p className="text-blue-100 font-medium mb-6">Acil enerji ihtiyaçlarınız ve teknik destek için her zaman yanınızdayız.</p>
                <a href="tel:+905322012516" className="inline-block bg-white text-blue-600 px-8 py-4 font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all">
                  Hemen Ara
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white border border-slate-200 shadow-sm overflow-hidden h-full min-h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774913.1181478447!2d28.50063493157426!3d40.651834118780734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b5d578abdb36e3%3A0xff972ce61d9f2e96!2zQmF0xLEgSmVuZXJhdMO2ciBHw7zDpyBTaXN0ZW1sZXJp!5e0!3m2!1str!2str!4v1773070516489!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Batı Jeneratör Konum"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
