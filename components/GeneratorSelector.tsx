
import React, { useState } from 'react';
import { getGeneratorRecommendation } from '../services/geminiService';

const GeneratorSelector: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const quickQueries = [
    { label: 'Fabrika', text: "Bursa OSB'de tekstil fabrikası üretim hattı için 1000 kVA senkronize jeneratör sistemi..." },
    { label: 'Balıkçılık', text: "Gemlik limanında balıkçı teknesi ve soğuk hava deposu için deniz suyuna dayanıklı jeneratör..." },
    { label: 'Hayvancılık', text: "Karacabey'de 500 büyükbaşlık süt çiftliği sağım ve havalandırma sistemleri için otomatik jeneratör..." },
  ];

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    const recommendation = await getGeneratorRecommendation(query);
    setResult(recommendation);
    setLoading(false);
  };

  const handleQuickSelect = (text: string) => {
    setQuery(text);
    setResult(''); // Yeni sorguda eski sonucu temizle
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="border border-slate-200 overflow-hidden bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-200">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-slate-900">Akıllı Güç Analizi</h2>
              <p className="text-slate-500 font-medium mb-8">
                İhtiyacınızı tanımlayın veya aşağıdaki hazır kategorilerden birini seçin.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {quickQueries.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleQuickSelect(item.text)}
                    className="px-4 py-2 border border-slate-200 text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all bg-slate-50/50"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <form onSubmit={handleAsk} className="space-y-6">
                <div className="border border-slate-200 p-4 bg-slate-50/30">
                  <textarea
                    className="w-full bg-transparent outline-none font-bold placeholder:text-slate-300 resize-none text-slate-900"
                    rows={3}
                    placeholder="Örn: Mudanya'da 20m tekne için soğutucu destekli jeneratör..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                <button
                  disabled={loading}
                  className="w-full bg-slate-900 text-white font-black uppercase tracking-[0.2em] py-4 hover:bg-blue-600 disabled:bg-slate-200 transition-all flex items-center justify-center space-x-3 text-sm"
                >
                  {loading ? (
                    <i className="fas fa-sync-alt animate-spin"></i>
                  ) : (
                    <>
                      <i className="fas fa-microchip"></i>
                      <span>SİSTEMİ ÇALIŞTIR</span>
                    </>
                  )}
                </button>
              </form>
            </div>
            
            <div className="p-8 md:p-12 bg-slate-50/50 flex flex-col justify-center min-h-[300px]">
              <div className="font-mono text-[10px] text-slate-300 mb-6 uppercase tracking-widest">
                // AI_ANALYSIS_OUTPUT_STREAM:
              </div>
              {result ? (
                <div className="animate-in fade-in duration-700">
                   <p className="text-xl font-bold text-slate-800 leading-relaxed italic border-l-4 border-blue-600 pl-6">
                    {result}
                  </p>
                </div>
              ) : (
                <div className="text-center opacity-20">
                  <i className="fas fa-terminal text-4xl mb-4 block"></i>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em]">Veri Girişi Bekleniyor...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneratorSelector;
