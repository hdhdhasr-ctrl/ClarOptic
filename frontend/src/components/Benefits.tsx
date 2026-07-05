import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, EyeOff, Layers, ShieldCheck } from 'lucide-react';
import { BenefitItem } from '../types';

export const Benefits: React.FC = () => {
  const benefitsList: BenefitItem[] = [
    {
      id: 'color-boost',
      title: 'Instant Color & Contrast Boost',
      description: 'Filters out polarized light from skies, foliage, and surfaces, unleashing rich, saturated colors and stunning natural depth in every photo.',
      iconName: 'Sparkles',
    },
    {
      id: 'cut-glare',
      title: 'Cuts Glare & Reflections',
      description: 'Dramatically reduces distracting reflections from water, glass windows, wet roads, and shiny leaves so your sensor captures what actually matters.',
      iconName: 'EyeOff',
    },
    {
      id: 'hd-glass',
      title: 'HD Glass with Nanocoating',
      description: 'Made from high-definition Japanese optical glass with 16 layers of anti-reflective, oil-resistant, and scratch-resistant nanocoating.',
      iconName: 'Layers',
    },
    {
      id: 'portable-tough',
      title: 'Water-Resistant & Portable',
      description: 'Featuring a lightweight, double-threaded aviation-grade aluminum ring that fits securely into a pocket-sized soft-shell carrying case.',
      iconName: 'ShieldCheck',
    },
  ];

  // Helper to resolve icon from string name
  const renderIcon = (name: string) => {
    const iconClass = "w-6 h-6 text-cyan-400";
    switch (name) {
      case 'Sparkles': return <Sparkles className={iconClass} />;
      case 'EyeOff': return <EyeOff className={iconClass} />;
      case 'Layers': return <Layers className={iconClass} />;
      case 'ShieldCheck': return <ShieldCheck className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section className="py-20 px-4 bg-[#07080a] border-b border-gray-900 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Mobile Masterpieces
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Professional DSLR-grade polarizer chemistry, miniaturized for your pocket. Designed to capture pristine images instantly without digital manipulation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsList.map((benefit, idx) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(6,182,212,0.4)', transition: { duration: 0.2 } }}
              className="bg-gray-950 border border-gray-900 rounded-2xl p-6 text-left flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Icon Container with subtle glow */}
                <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-950 group-hover:border-cyan-400/50 transition-all duration-300">
                  {renderIcon(benefit.iconName)}
                </div>
                
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Subtle accent bar at the bottom */}
              <div className="h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 mt-6 rounded-full group-hover:w-1/3 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
