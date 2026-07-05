import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, RotateCcw, Flame, Sparkles } from 'lucide-react';
import { ShopifyBuyButton } from './ShopifyBuyButton';
import purchaseImg from '../assets/images/phone_cpl_kit_1783272836990.jpg';

export const PurchaseSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  // Promotional countdown timer for higher conversion
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          clearInterval(timer);
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="shop-now-section" className="py-24 px-4 bg-radial from-[#131b2d] via-[#0b0c10] to-[#07080a] relative overflow-hidden border-b border-gray-900">
      {/* Visual lighting background sparkles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Card Frame wrapping product purchase elements */}
        <div className="bg-gray-950/60 backdrop-blur-xl border border-gray-900 rounded-3xl p-6 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Product Image & Trust Badges (Cols 5/12) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30" />
              <div className="relative bg-gray-950 p-2 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={purchaseImg}
                  alt="ClarOptic 52mm CPL polarizer smartphone kit"
                  className="w-full h-auto object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Sale Tag overlay */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-xs font-mono font-bold rounded-md shadow-lg uppercase">
                  SAVE 33% OFF
                </span>
              </div>
            </div>

            {/* Quick Purchase Guarantees list */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3.5 text-left text-gray-300">
                <div className="p-2 bg-cyan-950/40 border border-cyan-500/20 rounded-xl text-cyan-400">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold">Fast Shipping</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Title, Pricing, Urgency & Checkout (Cols 7/12) */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400 text-sm">
                  {'★'.repeat(5)}
                </div>
                <span className="text-xs text-gray-400 font-mono">(284 Customer Reviews)</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                ClarOptic 52mm CPL Filter Kit
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Unlock DSLR-level polarization on your smartphone. Complete kit includes: 52mm Pro CPL Filter, Universal Lens Clip, ABS Lens Cap, Semi-Rigid Zippered Carrying Case, and Microfiber Cloth.
              </p>
            </div>

            {/* Pricing Section with contrast badges */}
            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-baseline gap-3.5">
                <span className="text-3xl sm:text-4xl font-black text-white font-mono">$49.99</span>
                <span className="text-base text-gray-500 line-through font-mono">$69.99</span>
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-400/40 text-cyan-400 uppercase">
                  You Save $20
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-mono bg-cyan-950 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>In Stock & Ready to Ship</span>
              </div>
            </div>

            {/* Urgency Factor Banner */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 bg-red-950/15 border border-red-500/20 rounded-2xl text-red-200">
              <div className="flex items-center gap-2.5 text-sm">
                <Flame className="w-5 h-5 text-red-500 animate-pulse flex-shrink-0" />
                <span className="font-bold">Urgency Alert: Only 12 kits left at this price!</span>
              </div>
              
              <div className="text-xs font-mono font-semibold bg-red-950/40 border border-red-500/30 px-3 py-1.5 rounded-lg text-center">
                OFFER EXPIRES IN: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>

            {/* Shopify Checkout Button Container */}
            <div className="space-y-4 pt-2">
              <div className="text-xs text-gray-400 font-mono text-center sm:text-left">
                ✓ SECURE SSL ENCRYPTED CHECKOUT VIA SHOPIFY
              </div>
              
              {/* Actual Shopify Buy Button component */}
              <ShopifyBuyButton
                productId="10923842175314"
                domain="ignca0-wb.myshopify.com"
                accessToken="1e498220940cef091a228d39678f608c"
                buttonText="Add to cart • $49.99"
                className="w-full"
              />
              
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 pt-1 text-[11px] text-gray-500 font-mono">
                <span>✓ Verified Merchant Secured</span>
                <span>✓ Mastercard, Visa, Amex</span>
                <span>✓ 100% Secure Checkout</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
