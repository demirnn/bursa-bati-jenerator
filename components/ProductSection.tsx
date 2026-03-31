
import React, { useState, useEffect } from 'react';
import { getProductsByCategory } from '../services/googleSheetsService';
import { SheetProduct } from '../types';

const ProductSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'portable' | 'industrial' | 'marine' | 'ai-generator'>('portable');
  const [products, setProducts] = useState<SheetProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await getProductsByCategory(activeTab);
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [activeTab]);

  const tabs = [
    { id: 'portable', label: 'PORTATİF ÜRÜNLER' },
    { id: 'industrial', label: 'ENDÜSTRİYEL ÜRÜNLER' },
    { id: 'marine', label: 'MARİN JENERATÖRLER' },
    { id: 'ai-generator', label: 'AKILLI AI-JENERATÖR' },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 border-l-4 border-slate-900 pl-8">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900">Ürün Kataloğu</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-2">Bursa Satış Portföyü // Canlı Veri Akışı</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-100 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 font-black uppercase text-xs tracking-widest transition-all ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {loading ? (
          <div className="py-20 text-center">
            <i className="fas fa-sync-alt animate-spin text-4xl text-blue-600 mb-4"></i>
            <p className="font-black uppercase tracking-widest text-xs text-slate-400">Veriler Senkronize Ediliyor...</p>
          </div>
        ) : products.length > 0 ? (
          <div className="overflow-x-auto border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-slate-900 text-white font-black uppercase text-[10px] tracking-widest">
                  <th className="p-6 border-r border-white/10">Görsel</th>
                  <th className="p-6 border-r border-white/10">Model</th>
                  <th className="p-6 border-r border-white/10">Güç (Standby)</th>
                  <th className="p-6 border-r border-white/10">Güç (Prime)</th>
                  <th className="p-6 border-r border-white/10">Amper</th>
                  <th className="p-6 border-r border-white/10">Yakıt</th>
                  <th className="p-6 border-r border-white/10">Motor</th>
                  <th className="p-6">İşlem</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors group">
                    <td className="p-4 border-r border-slate-200 w-32">
                      <div className="aspect-video overflow-hidden border border-slate-100">
                        <img
                          src={product.image}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          alt={product.modelName}
                          loading="lazy"
                        />
                      </div>
                    </td>
                    <td className="p-6 border-r border-slate-200">
                      <div className="font-black text-slate-900 uppercase tracking-tight">{product.modelName}</div>
                      <div className="text-[9px] text-slate-400 font-bold uppercase mt-1">{product.brand}</div>
                    </td>
                    <td className="p-6 border-r border-slate-200">
                      <div className="font-bold text-slate-900">{product.standbyPowerKva} kVA</div>
                      <div className="text-[10px] text-slate-400">{product.standbyPowerKw} kW</div>
                    </td>
                    <td className="p-6 border-r border-slate-200">
                      <div className="font-bold text-slate-900">{product.primePowerKva} kVA</div>
                      <div className="text-[10px] text-slate-400">{product.primePowerKw} kW</div>
                    </td>
                    <td className="p-6 border-r border-slate-200 font-mono font-bold text-blue-600">
                      {product.ampere} A
                    </td>
                    <td className="p-6 border-r border-slate-200">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-black uppercase rounded">
                        {product.fuelType}
                      </span>
                    </td>
                    <td className="p-6 border-r border-slate-200 text-[11px] font-bold text-slate-500">
                      {product.brand} / {product.speedMaxMin}
                    </td>
                    <td className="p-6">
                      <a 
                        href="#contact" 
                        className="inline-flex items-center justify-center w-10 h-10 bg-slate-900 text-white hover:bg-blue-600 transition-all"
                        title="Teklif Al"
                      >
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-slate-200">
            <i className="fas fa-exclamation-triangle text-4xl text-slate-200 mb-4 block"></i>
            <p className="font-black uppercase tracking-widest text-xs text-slate-400">Bu kategoride henüz ürün bulunmuyor.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
