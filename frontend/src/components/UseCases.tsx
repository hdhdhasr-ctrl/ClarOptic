import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, User, Car, Glasses, ArrowRight, Check } from 'lucide-react';
import { UseCase } from '../types';

export const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('landscape');

  const useCases: UseCase[] = [
    {
      id: 'landscape',
      title: 'Travel & Landscape',
      description: 'Make skies deep cobalt blue, pop the contrast in white fluffy clouds, and bring out the true, rich emerald green of forests without digital color boosting.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      iconName: 'Compass',
      tag: 'Scenery',
    },
    {
      id: 'portrait',
      title: 'Portraits & Skintones',
      description: 'Eliminate distracting oily shine and glare on forehead, nose, and cheeks. Get matte, flawless skin textures and deep, glinting eye highlights natively.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      iconName: 'User',
      tag: 'People',
    },
    {
      id: 'driving',
      title: 'Driving & Roadtrips',
      description: 'Cut intense sun glare bouncing off your car windshield or dashboard. Capture incredibly crisp steering-wheel POVs or scenic road views from behind the glass.',
      image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&q=80',
      iconName: 'Car',
      tag: 'Travel',
    },
    {
      id: 'glass-water',
      title: 'Shooting Glass & Water',
      description: 'Erase reflections on water surfaces to reveal rocks, coral, and fish swimming underneath. Peer completely through reflective storefront windows and display cases.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      iconName: 'Glasses',
      tag: 'Water',
    },
  ];

  const activeData = useCases.find((uc) => uc.id === activeTab) || useCases[0];

  const renderTabIcon = (name: string, isActive: boolean) => {
    const iconClass = `w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-300'}`;
    switch (name) {
      case 'Compass': return <Compass className={iconClass} />;
      case 'User': return <User className={iconClass} />;
      case 'Car': return <Car className={iconClass} />;
      case 'Glasses': return <Glasses className={iconClass} />;
      default: return <Compass className={iconClass} />;
    }
  };

  return (
    <section className="py-20 px-4 bg-[#07080a] border-b border-gray-900 relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Versatile for Every Environment
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            From mountain peaks to portrait studios, a circular polarizer is the single most valuable analog accessory for smartphone photo creators.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {useCases.map((uc) => {
            const isActive = uc.id === activeTab;
            return (
              <button
                key={uc.id}
                onClick={() => setActiveTab(uc.id)}
                className={`cursor-pointer px-5 py-3 rounded-xl flex items-center gap-2.5 text-sm font-semibold border transition-all duration-200 group ${
                  isActive
                    ? 'bg-cyan-950/50 border-cyan-500/40 text-white shadow-[0_2px_10px_rgba(6,182,212,0.15)]'
                    : 'bg-gray-950 border-gray-900 text-gray-400 hover:text-white hover:border-gray-800'
                }`}
              >
                {renderTabIcon(uc.iconName, isActive)}
                <span>{uc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panel Content Box */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-gray-950 border border-gray-900 p-6 sm:p-10 rounded-3xl items-center relative overflow-hidden"
            >
              {/* Radial gradient background accent */}
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/5 rounded-full blur-[80px]" />

              {/* Text Side (Columns: 7/12) */}
              <div className="md:col-span-7 space-y-6 text-left relative z-10">
                <span className="px-3 py-1 rounded bg-cyan-950 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
                  {activeData.tag} Scenario
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {activeData.title}
                </h3>
                
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {activeData.description}
                </p>

                {/* Specific features checklists */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="text-sm text-gray-400">
                      Eliminates hazy atmospheric shine.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="text-sm text-gray-400">
                      Enhances natural color saturation by removing stray white reflections.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="text-sm text-gray-400">
                      Compatible with Wide, Ultra-Wide, and Telephoto phone lenses.
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-2 text-cyan-400 text-xs font-semibold font-mono uppercase tracking-wider">
                  <span>DSLR Optical Physics inside</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Image Side (Columns: 5/12) */}
              <div className="md:col-span-5 relative w-full aspect-square rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
                <img
                  src={activeData.image}
                  alt={`${activeData.title} use case demonstration`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-[10px] text-cyan-400 uppercase font-mono tracking-wider font-bold">Photo Style</p>
                  <p className="text-xs text-white font-semibold">Native Unedited Capture</p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
