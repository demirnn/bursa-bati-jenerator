
import React, { useState } from 'react';
import { CONTACT_PHONE, CONTACT_EMAIL, ADDRESS, WORKING_HOURS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: 'Teknik Servis Birimi',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Merhaba, web sitenizden yeni bir form dolduruldu:\n\n*Gönderen:* ${formData.name}\n*İrtibat No:* ${formData.phone}\n*Departman/Konu:* ${formData.department}\n*Mesaj:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/905538521262?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 border border-slate-200 shadow-sm">
          <div className="lg:col-span-5 bg-slate-900 text-white p-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-8">İletişim Prosedürü</h3>
            <p className="text-slate-400 font-medium mb-12 leading-relaxed">
              Bursa teknik ekibimiz 7/24 operasyoneldir. Acil servis ve satış talepleri için kayıt oluşturun.
            </p>

            <div className="space-y-8">
              {[
                { label: 'Telefon', val: CONTACT_PHONE, icon: 'fa-phone-alt' },
                { label: 'E-Posta', val: CONTACT_EMAIL, icon: 'fa-envelope' },
                { label: 'Adres', val: ADDRESS, icon: 'fa-map-marker-alt' },
                { label: 'Çalışma Saatleri', val: WORKING_HOURS, icon: 'fa-clock' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-1">{item.label}</div>
                    <div className="text-lg font-bold tracking-tight">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-12 border-t border-white/5 font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">
              // BURSA_BATI_JEN_SYSTEM_LOG: CONNECTED
            </div>
          </div>

          <div className="lg:col-span-7 p-12 bg-white">
            <form className="grid gap-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-b border-slate-200 pb-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">Gönderen</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent outline-none font-bold placeholder:text-slate-100 text-slate-900" 
                    placeholder="İSİM / UNVAN" 
                  />
                </div>
                <div className="border-b border-slate-200 pb-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">İrtibat No</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-transparent outline-none font-bold placeholder:text-slate-100 text-slate-900" 
                    placeholder="+90 5XX..." 
                  />
                </div>
              </div>
              <div className="border-b border-slate-200 pb-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">Departman / Konu</label>
                <select 
                  value={formData.department}
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                  className="w-full bg-transparent outline-none font-bold uppercase cursor-pointer text-slate-900"
                >
                  <option>Teknik Servis Birimi</option>
                  <option>Satış & Projelendirme</option>
                  <option>Bakım Anlaşması</option>
                </select>
              </div>
              <div className="border border-slate-200 p-4 bg-slate-50/30">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-300 mb-4">Detaylı Mesaj</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent outline-none font-medium resize-none text-slate-900" 
                  placeholder="TALEBİNİZİ BURAYA YAZIN..."
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white p-6 font-black uppercase tracking-[0.3em] hover:bg-slate-900 transition-all text-sm">
                FORMU KAYDET VE GÖNDER
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;