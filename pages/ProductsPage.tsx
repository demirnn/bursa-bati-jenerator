
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ProductsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      id: 'portable',
      name: 'Portatif Ürünler',
      description: 'Ev, kamp ve küçük işletmeler için kompakt enerji çözümleri.',
      image: 'https://gobizjenerator.com/home-categ/portable-gensets.webp',
      icon: 'fas fa-charging-station'
    },
    {
      id: 'industrial',
      name: 'Endüstriyel Ürünler',
      description: 'Ağır sanayi, inşaat ve tesisler için yüksek kapasiteli jeneratörler.',
      image: 'https://gobizjenerator.com/home-categ/endustriyel-gensets.webp',
      icon: 'fas fa-industry'
    },
    {
      id: 'marine',
      name: 'Marin Jeneratörler',
      description: 'Deniz araçları için özel tasarlanmış, korozyona dayanıklı sistemler.',
      image: 'https://gobizjenerator.com/home-categ/marine-gensets.webp',
      icon: 'fas fa-ship'
    },
    {
      id: 'ai-generator',
      name: 'Akıllı Ai-Jeneratör',
      description: 'Yapay zeka destekli, verimlilik odaklı yeni nesil güç sistemleri.',
      image: 'https://gobizjenerator.com/home-categ/ai-generator.webp',
      icon: 'fas fa-microchip'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <SEO
        title="Ürün Katalogları"
        description="Portatif, endüstriyel ve marin jeneratör ürün katalogları. İhtiyacınıza uygun dizel jeneratör çözümlerini keşfedin."
        canonical="/products"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Ürün Katalogları', url: '/products' },
        ]}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">Ürün Katalogları</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">İhtiyacınıza uygun enerji çözümünü seçin</p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={cat.id === 'ai-generator' ? '/gobiz-kit' : `/products/${cat.id}`}
              className="group relative bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-all duration-500"></div>
                <div className="absolute top-8 left-8">
                  <div className="w-12 h-12 bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg">
                    <i className={cat.icon}></i>
                  </div>
                </div>
              </div>
              
              <div className="p-10 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8 text-sm">
                    {cat.description}
                  </p>
                </div>
                
                <div className="flex items-center text-slate-900 font-black uppercase text-xs tracking-widest group-hover:text-blue-600 transition-colors">
                  Kataloğu İncele <i className="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
                </div>
              </div>

              {/* Industrial Border Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-blue-600 transition-colors"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
