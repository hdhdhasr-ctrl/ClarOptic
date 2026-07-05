import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Box, Layers, Hammer, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';
import kitImg from '../assets/images/phone_cpl_kit_1783272836990.jpg';
import compatibilityImg from '../assets/images/compatibility_diagram_1783272849837.jpg';

export const ProductSpecs: React.FC = () => {
  const [activeImageTab, setActiveImageTab] = useState<'kit' | 'compatibility'>('kit');
  const kitItems = [
    { name: '52mm CPL Filter Ring', desc: 'Precision double-threaded polarizing glass.' },
    { name: 'Universal Spring Clip', desc: 'Secure fit with protective rubber pads.' },
    { name: 'Rigid Lens Cap', desc: 'Durable ABS plastic protection.' },
    { name: 'Zippered Hard Shell Case', desc: 'Soft interior padding with mesh accessory pockets.' },
    { name: 'Microfiber Cleaning Cloth', desc: 'Scratch-free polishing cloth.' },
  ];

  const technicalSpecs = [
    { label: 'Filter Diameter', value: '52mm Standard Thread' },
    { label: 'Glass Material', value: 'High-Definition Japanese Optical Glass' },
    { label: 'Frame Construction', value: 'Aviation-Grade Anodized Aluminum' },
    { label: 'Optical Coatings', value: '16-Layer Double-Sided Nano-Coating' },
    { label: 'Polarization Rate', value: '99.9% Light Filtration Efficiency' },
    { label: 'Profile Depth', value: 'Slim 4.6mm ring prevents vignetting' },
  ];

  return (
    <section className="py-20 px-4 bg-[#0a0a0c] border-b border-gray-900 relative">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold font-mono">
            TECHNICAL SPECS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What's in the Box & Specs
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Every ClarOptic kit is bundled with premium protective travel gear and high-durability accessories, assuring your glass remains flawless on any adventure.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Image and Package Checklist (Columns: 6/12) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              {/* Image Toggle Tabs */}
              <div className="flex justify-start gap-2">
                <button
                  onClick={() => setActiveImageTab('kit')}
                  className={`cursor-pointer px-4 py-2 rounded-lg text-xs font-semibold font-mono border transition-all duration-200 ${
                    activeImageTab === 'kit'
                      ? 'bg-cyan-950/50 border-cyan-500/40 text-white shadow-[0_2px_10px_rgba(6,182,212,0.15)]'
                      : 'bg-gray-950 border-gray-900 text-gray-400 hover:text-white'
                  }`}
                >
                  Kit Contents
                </button>
                <button
                  onClick={() => setActiveImageTab('compatibility')}
                  className={`cursor-pointer px-4 py-2 rounded-lg text-xs font-semibold font-mono border transition-all duration-200 ${
                    activeImageTab === 'compatibility'
                      ? 'bg-cyan-950/50 border-cyan-500/40 text-white shadow-[0_2px_10px_rgba(6,182,212,0.15)]'
                      : 'bg-gray-950 border-gray-900 text-gray-400 hover:text-white'
                  }`}
                >
                  Device Compatibility
                </button>
              </div>

              <div className="relative group">
                {/* Outer boundary neon frame */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-md opacity-25 group-hover:opacity-45 transition duration-500" />
                
                <div className="relative bg-gray-950 border border-gray-800 p-2 rounded-2xl overflow-hidden shadow-2xl aspect-square flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImageTab}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      src={activeImageTab === 'kit' ? kitImg : compatibilityImg}
                      alt={activeImageTab === 'kit' ? "ClarOptic CPL product kit contents" : "ClarOptic device compatibility blueprint"}
                      className="w-full h-full object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* What's In the Box Checklist */}
            <div className="bg-gray-950 border border-gray-900 p-6 rounded-2xl text-left space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Box className="w-5 h-5 text-cyan-400" />
                The Complete Traveler Kit
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {kitItems.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white text-xs font-semibold">{item.name}</h4>
                      <p className="text-[11px] text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Technical Data Sheet (Columns: 6/12) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="bg-gray-950 border border-gray-900 rounded-2xl overflow-hidden">
              <div className="border-b border-gray-900 bg-cyan-950/20 px-6 py-4 flex items-center justify-between">
                <h3 className="text-white font-extrabold text-sm tracking-wide uppercase flex items-center gap-2 font-mono">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  OPTICAL CLARITY BLUEPRINT
                </h3>
                <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-400/30 text-cyan-400 text-[10px] font-mono">
                  V.1.02
                </span>
              </div>

              {/* Specs Rows */}
              <div className="divide-y divide-gray-900 font-mono">
                {technicalSpecs.map((spec, idx) => (
                  <div key={idx} className="px-6 py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center hover:bg-gray-900/20 transition-colors">
                    <span className="sm:col-span-5 text-gray-400 text-xs uppercase font-medium">
                      {spec.label}
                    </span>
                    <span className="sm:col-span-7 text-white text-xs font-semibold sm:text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compatibility Note Box */}
            <div className="bg-cyan-950/20 border border-cyan-500/20 p-5 rounded-2xl flex items-start gap-4">
              <div className="p-2 bg-cyan-950 border border-cyan-500/30 rounded-xl text-cyan-400">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-white text-xs font-bold">Universal 52mm Compatibility</h4>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  The threaded 52mm aluminum clip supports standard step-up rings and fits all smartphones, tablets, and laptops including multi-lens systems (iPhone 13/14/15/16 Pro Max, Samsung Galaxy Ultra, Google Pixel Pro).
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
