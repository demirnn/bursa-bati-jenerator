
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactWidget from './components/ContactWidget';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const CategoryProducts = lazy(() => import('./pages/CategoryProducts'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const PortableProductDetail = lazy(() => import('./pages/PortableProductDetail'));
const SectorsPage = lazy(() => import('./pages/SectorsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const GobizKitPage = lazy(() => import('./pages/GobizKitPage'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Yükleniyor...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white pb-20 md:pb-0 overflow-x-hidden relative font-sans flex flex-col w-full max-w-[100vw]">
        <Navbar />

        <main className="flex-grow w-full">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:category" element={<CategoryProducts />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/portable-product/:id" element={<PortableProductDetail />} />
              <Route path="/sectors" element={<SectorsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gobiz-kit" element={<GobizKitPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />

        {/* Mobil İletişim Widget'ı */}
        <ContactWidget />
      </div>
    </Router>
  );
};

export default App;
