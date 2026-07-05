import React from 'react';
import { Camera, ArrowRight, ShieldCheck } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { ComparisonSlider } from './components/ComparisonSlider';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import { ProductSpecs } from './components/ProductSpecs';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { PurchaseSection } from './components/PurchaseSection';
import { Footer } from './components/Footer';

export default function App() {
  // Smooth scroll helper to navigate directly to checkout / buy section
  const scrollToShop = () => {
    const element = document.getElementById('shop-now-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-white font-sans antialiased overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#07080a]/85 backdrop-blur-md border-b border-gray-900/60 py-4 px-4 sm:px-6 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Brand */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
              <Camera className="w-4.5 h-4.5" />
            </div>
            <span className="text-white font-extrabold text-lg tracking-tight">
              ClarOptic
            </span>
          </div>

          {/* Quick Stats Badging */}
          <div className="hidden sm:flex items-center gap-2.5 px-3 py-1 rounded-full bg-cyan-950/20 border border-cyan-500/20 text-[11px] text-cyan-400 font-mono font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>UNIVERSAL 52MM CPL COMPATIBILITY</span>
          </div>

          {/* Checkout Nav CTA */}
          <button
            onClick={scrollToShop}
            className="cursor-pointer inline-flex items-center gap-1.5 px-4.5 py-2 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-extrabold rounded-full transition-all shadow-[0_2px_10px_rgba(6,182,212,0.25)] hover:shadow-[0_2px_15px_rgba(6,182,212,0.4)] active:scale-95"
          >
            <span>Get Yours</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Sections */}
      <main>
        {/* Hero Banner Section */}
        <HeroSection onShopClick={scrollToShop} />

        {/* Before/After Draggable Slider */}
        <ComparisonSlider />

        {/* Core Product Benefits Grid */}
        <Benefits />

        {/* Visual 3-Step Setup Instructions */}
        <HowItWorks />

        {/* Photo Environments Scenarios / Tabbed Case Study */}
        <UseCases />

        {/* Kit Contents & Technical Specification Sheets */}
        <ProductSpecs />

        {/* Stars Reviews & Customer Testimonial Dashboard */}
        <Reviews />

        {/* Interactive FAQ Accordeon */}
        <FAQ />

        {/* High-Converting Pricing & Shopify Checkout Box */}
        <PurchaseSection />
      </main>

      {/* Footer Details */}
      <Footer />

    </div>
  );
}
