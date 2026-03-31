
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../services/googleSheetsService';
import { SheetProduct } from '../types';
import { GOBIZ_CERTIFICATES } from '../constants';
import SEO from '../components/SEO';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<SheetProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'images' | 'specs' | 'dimensions' | 'docs' | 'certs'>('specs');

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        setLoading(true);
        try {
          const data = await getProductById(id);
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product:', error);
          setProduct(null);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Ürün Detayları Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase mb-4">Ürün Bulunamadı</h2>
          <Link to="/products" className="text-blue-600 font-bold uppercase text-xs tracking-widest hover:underline">
            Ürünlere Dön
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'images', name: 'Görseller' },
    { id: 'specs', name: 'Teknik Özellikler' },
    { id: 'dimensions', name: 'Ölçüler & Özellikler' },
    { id: 'docs', name: 'Dokümantasyon' },
    { id: 'certs', name: 'Sertifikalar' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <SEO
        title={`${product.modelName} - ${product.brand} ${product.category === 'industrial' ? 'Endüstriyel' : 'Portatif'} Jeneratör`}
        description={`${product.modelName} ${product.brand} jeneratör. Standby: ${product.standbyPowerKva} kVA, Prime: ${product.primePowerKva} kVA. Teknik özellikler, boyutlar ve dokümantasyon.`}
        canonical={`/product/${id}`}
        ogImage={product.image}
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Ürünler', url: '/products' },
          { name: product.category === 'industrial' ? 'Endüstriyel Jeneratörler' : 'Portatif Jeneratörler', url: `/products/${product.category}` },
          { name: product.modelName, url: `/product/${id}` },
        ]}
        product={{
          name: product.modelName,
          description: `${product.modelName} ${product.brand} ${product.category === 'industrial' ? 'endüstriyel' : 'portatif'} jeneratör. Standby: ${product.standbyPowerKva} kVA, Prime: ${product.primePowerKva} kVA.`,
          image: product.image,
          brand: product.brand,
          category: product.category === 'industrial' ? 'Endüstriyel Jeneratör' : 'Portatif Jeneratör',
          sku: product.id,
        }}
      />
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to={`/products/${product.category}`} className="text-blue-600 font-bold uppercase text-xs tracking-widest hover:underline">
            ← {product.category === 'industrial' ? 'Endüstriyel' : 'Portatif'} Jeneratörler
          </Link>
        </div>

        {/* Header Section */}
        <div className="bg-white border border-slate-200 shadow-sm mb-8 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="aspect-video md:aspect-auto bg-slate-100">
              <img
                src={product.image}
                alt={product.modelName}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-12 flex flex-col justify-center">
              <div className="text-blue-600 font-black uppercase text-xs tracking-[0.3em] mb-4">
                {product.brand} / {product.category === 'industrial' ? 'ENDÜSTRİYEL' : 'PORTATİF'}
              </div>
              <h1 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-8 leading-none">
                {product.modelName}
              </h1>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Standby Güç</div>
                  <div className="text-3xl font-black text-slate-900">{product.standbyPowerKva} kVA</div>
                  <div className="text-sm font-bold text-slate-500">{product.standbyPowerKw} kW</div>
                </div>
                <div className="border-l-4 border-slate-200 pl-6">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Prime Güç</div>
                  <div className="text-3xl font-black text-slate-900">{product.primePowerKva} kVA</div>
                  <div className="text-sm font-bold text-slate-500">{product.primePowerKw} kW</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="bg-slate-50 border border-slate-200 px-6 py-3 rounded-none">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Frekans</div>
                  <div className="text-sm font-black text-slate-900">{product.frequency} Hz</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 px-6 py-3 rounded-none">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Kontrol Paneli</div>
                  <div className="text-sm font-black text-slate-900">{product.controlPanel || '-'}</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 px-6 py-3 rounded-none">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Kabin</div>
                  <div className="text-sm font-black text-slate-900">{product.soundproofingCabin || '-'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-wrap border-b border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-8 py-6 text-xs font-black uppercase tracking-widest transition-all border-r border-slate-200 ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="p-12">
            {activeTab === 'images' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[product.mainImage, product.secondImage, product.thirdImage].filter(Boolean).map((img, i) => (
                  <div key={i} className="aspect-square bg-slate-100 border border-slate-200 overflow-hidden">
                    <img
                      src={img}
                      alt={`${product.modelName} - ${i + 1}`}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tighter mb-8 border-b-2 border-blue-600 inline-block">Motor Özellikleri</h3>
                  <div className="space-y-4">
                    <SpecRow label="Marka" value={product.engineBrand} />
                    <SpecRow label="Model" value={product.engineModel} />
                    <SpecRow label="Silindir Sayısı" value={product.numberOfCylinders} />
                    <SpecRow label="Çap x Strok" value={`${product.bore} x ${product.stroke}`} />
                    <SpecRow label="Silindir Hacmi" value={product.cylinderVolume} />
                    <SpecRow label="Emme Sistemi" value={product.aspiration} />
                    <SpecRow label="Regülatör" value={product.governor} />
                    <SpecRow label="Sıkıştırma Oranı" value={product.compressionRatio} />
                    <SpecRow label="Devir" value={product.speedMaxMin} />
                    <SpecRow label="Yağ Kapasitesi" value={product.oilCapacity} />
                    <SpecRow label="Soğutma Sıvısı" value={product.coolingFluidCapacity} />
                    <SpecRow label="Yakıt Tüketimi %100" value={product.fuelConsumption100} />
                    <SpecRow label="Yakıt Tüketimi %75" value={product.fuelConsumption75} />
                    <SpecRow label="Yakıt Tüketimi %50" value={product.fuelConsumption50} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tighter mb-8 border-b-2 border-blue-600 inline-block">Alternatör Özellikleri</h3>
                  <div className="space-y-4">
                    <SpecRow label="Marka" value={product.alternatorBrand} />
                    <SpecRow label="Voltaj" value={`${product.voltage} V`} />
                    <SpecRow label="Faz" value={product.phase} />
                    <SpecRow label="Voltaj Regülasyonu" value={product.voltageRegulation} />
                    <SpecRow label="İzolasyon Sistemi" value={product.insulationSystem} />
                    <SpecRow label="Koruma Sınıfı" value={product.protectionClass} />
                    <SpecRow label="Güç Faktörü" value={product.powerFactor} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'dimensions' && (
              <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tighter mb-8 border-b-2 border-blue-600 inline-block">Kabinli Ölçüler</h3>
                  <div className="space-y-4">
                    <SpecRow label="Uzunluk" value={product.cabinetLength} />
                    <SpecRow label="Genişlik" value={product.cabinetWidth} />
                    <SpecRow label="Yükseklik" value={product.cabinetHeight} />
                    <SpecRow label="Kuru Ağırlık" value={`${product.cabinetDryWeight} kg`} />
                    <SpecRow label="Yakıt Kapasitesi" value={`${product.cabinetFuelCapacity} lt`} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tighter mb-8 border-b-2 border-blue-600 inline-block">Kabinsiz Ölçüler</h3>
                  <div className="space-y-4">
                    <SpecRow label="Uzunluk" value={product.openLength} />
                    <SpecRow label="Genişlik" value={product.openWidth} />
                    <SpecRow label="Yükseklik" value={product.openHeight} />
                    <SpecRow label="Kuru Ağırlık" value={`${product.openDryWeight} kg`} />
                    <SpecRow label="Yakıt Kapasitesi" value={`${product.openFuelCapacity} lt`} />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-lg font-black uppercase tracking-tighter mb-8 border-b-2 border-blue-600 inline-block">Ek Özellikler</h3>
                  <div className="grid md:grid-cols-2 gap-x-20 gap-y-4">
                    <SpecRow label="Batarya & Akü" value={product.battery} />
                    <SpecRow label="Motor Emisyonu" value={product.engineEmission} />
                    <SpecRow label="Motor Sertifikaları" value={product.engineCertificates} />
                    <SpecRow label="Genset Sertifikaları" value={product.gensetCertificates} />
                    <SpecRow label="CO2 Salınımı" value={product.co2Emission} />
                    <SpecRow label="Kömür Tasarrufu" value={product.coalSaving} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'docs' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <DocLink label="TR Datasheet" url={product.datasheetTr} />
                <DocLink label="EN Datasheet" url={product.datasheetEn} />
                <DocLink label="Motor Datasheet" url={product.motorDatasheet} />
                <DocLink label="TR Kullanım Kılavuzu" url={product.userManualTr} />
                <DocLink label="EN Kullanım Kılavuzu" url={product.userManualEn} />
              </div>
            )}

            {activeTab === 'certs' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {GOBIZ_CERTIFICATES.map((cert) => (
                  <div key={cert.id} className="bg-slate-50 p-8 border border-slate-200 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl group-hover:scale-110 transition-transform">
                      <i className={`fas ${cert.icon}`}></i>
                    </div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center text-xl mr-4">
                        <i className={`fas ${cert.icon}`}></i>
                      </div>
                      <div>
                        <h4 className="text-sm font-black uppercase tracking-tight">{cert.title}</h4>
                        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{cert.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SpecRow: React.FC<{ label: string; value: any }> = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
    <span className="text-sm font-black text-slate-900">{value || '-'}</span>
  </div>
);

const DocLink: React.FC<{ label: string; url?: string }> = ({ label, url }) => {
  if (!url) return null;
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center p-6 border border-slate-200 hover:border-blue-600 hover:bg-slate-50 transition-all group"
    >
      <div className="w-12 h-12 bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors mr-4">
        <i className="fas fa-file-pdf text-xl"></i>
      </div>
      <div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Döküman</div>
        <div className="text-sm font-black text-slate-900 uppercase tracking-tight">{label}</div>
      </div>
    </a>
  );
};

export default ProductDetail;
