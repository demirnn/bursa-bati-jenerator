
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductsByCategory } from '../services/googleSheetsService';
import { SheetProduct } from '../types';
import SEO from '../components/SEO';

const CategoryProducts: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [products, setProducts] = useState<SheetProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<SheetProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  useEffect(() => {
    if (category === 'ai-generator') {
      navigate('/gobiz-kit', { replace: true });
      return;
    }

    const fetchProducts = async () => {
      if (category) {
        setLoading(true);
        try {
          const data = await getProductsByCategory(category);
          setProducts(data);
          setFilteredProducts(data);
          setSelectedBrand('all');
        } catch (error) {
          console.error('Error fetching products:', error);
          setProducts([]);
          setFilteredProducts([]);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProducts();
  }, [category]);

  useEffect(() => {
    if (selectedBrand === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.engineBrand === selectedBrand || p.brand === selectedBrand));
    }
  }, [selectedBrand, products]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Ürünler Yükleniyor...</p>
        </div>
      </div>
    );
  }

  const brands = Array.from(new Set(products.map(p => p.engineBrand || p.brand).filter(Boolean))).sort();

  const categoryTitle = category === 'industrial' ? 'Endüstriyel Jeneratörler' :
                       category === 'portable' ? 'Portatif Jeneratörler' :
                       category === 'marine' ? 'Marin Jeneratörler' : 'Ürünler';

  const categoryDescriptions: Record<string, string> = {
    industrial: 'Ağır sanayi, inşaat ve tesisler için yüksek kapasiteli endüstriyel dizel jeneratörler. Bursa Batı Jeneratör güvencesiyle.',
    portable: 'Ev, kamp ve küçük işletmeler için kompakt portatif jeneratörler. Taşınabilir enerji çözümleri.',
    marine: 'Deniz araçları için özel tasarlanmış, korozyona dayanıklı marin jeneratör sistemleri.',
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <SEO
        title={categoryTitle}
        description={categoryDescriptions[category || ''] || `${categoryTitle} - Bursa Batı Jeneratör ürün katalogu.`}
        canonical={`/products/${category}`}
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Ürünler', url: '/products' },
          { name: categoryTitle, url: `/products/${category}` },
        ]}
      />
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <Link to="/products" className="text-blue-600 font-bold uppercase text-xs tracking-widest hover:underline mb-4 inline-block">
              ← Tüm Kategoriler
            </Link>
            <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-900">{categoryTitle}</h1>
            <div className="h-1 w-20 bg-blue-600 mt-4"></div>
          </div>

          {category === 'industrial' && brands.length > 0 && (
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Motor Markası Filtrele</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedBrand('all')}
                  className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest border transition-all ${
                    selectedBrand === 'all' 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' 
                    : 'bg-white border-slate-200 text-slate-400 hover:border-slate-900 hover:text-slate-900'
                  }`}
                >
                  Tümü
                </button>
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand!)}
                    className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest border transition-all ${
                      selectedBrand === brand 
                      ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' 
                      : 'bg-white border-slate-200 text-slate-400 hover:border-slate-900 hover:text-slate-900'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-slate-200 p-20 text-center shadow-sm">
            <i className="fas fa-box-open text-4xl text-slate-200 mb-4"></i>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Bu kriterlere uygun ürün bulunamadı.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id} 
                to={product.category === 'portable' ? `/portable-product/${product.id}` : `/product/${product.id}`}
                className="group bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="aspect-video overflow-hidden bg-slate-100 relative">
                  <img
                    src={product.image}
                    alt={product.modelName}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900 text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                    {product.brand}
                  </div>
                </div>
                
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {product.modelName}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="border-l-2 border-blue-600 pl-3">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Standby</div>
                      <div className="text-lg font-black text-slate-900">{product.standbyPowerKva} kVA</div>
                    </div>
                    <div className="border-l-2 border-slate-200 pl-3">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Prime</div>
                      <div className="text-lg font-black text-slate-900">{product.primePowerKva} kVA</div>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                      <span className="text-slate-400">Yakıt Tipi</span>
                      <span className="text-slate-900">{product.fuelType}</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                      <span className="text-slate-400">Frekans</span>
                      <span className="text-slate-900">{product.frequency} Hz</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                      <span className="text-slate-400">Amper</span>
                      <span className="text-slate-900">{product.ampere} A</span>
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <div className="w-full bg-slate-900 text-white py-4 text-center font-black uppercase tracking-widest text-xs group-hover:bg-blue-600 transition-colors">
                    Detayları İncele
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
