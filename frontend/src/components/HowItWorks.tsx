import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, RotateCw, Sparkles, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Clip It On',
      description: 'Clamp the universal spring clip and align the 52mm thread directly over your phone\'s primary camera lens.',
      subtext: 'Fits 99% of phones, even with slim cases.',
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
    },
    {
      number: '02',
      title: 'Rotate the Ring',
      description: 'Spin the rotating bezel of the polarizer ring while watching your screen. Watch reflections and glare melt away.',
      subtext: 'Full 360° adjustability for any lighting angle.',
      icon: <RotateCw className="w-6 h-6 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />,
    },
    {
      number: '03',
      title: 'Shoot Like a Pro',
      description: 'Press the shutter button! Capture spectacular, saturated shots with clear water, glass, and rich skies instantly.',
      subtext: 'No editing, Lightroom, or presets required.',
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#0a0a0c] border-b border-gray-900 relative">
      {/* Background ambient mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold font-mono">
            EASY 3-STEP SETUP
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            You don't need to be an expert photographer. Our clip-on mechanical polarizer upgrades your smartphone optics natively, in under ten seconds.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-cyan-950 via-cyan-500/30 to-cyan-950 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative z-10 flex flex-col items-center bg-gray-950/40 backdrop-blur-md border border-gray-900 rounded-2xl p-8 hover:border-cyan-500/25 group transition-colors duration-300"
            >
              {/* Step Badge & Icon */}
              <div className="relative mb-6">
                {/* Number Circle */}
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-cyan-500 text-black font-extrabold text-xs flex items-center justify-center font-mono shadow-[0_0_8px_rgba(6,182,212,0.6)]">
                  {step.number}
                </div>
                
                {/* Icon wrapper */}
                <div className="w-16 h-16 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-950 group-hover:scale-105 transition-all duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Step Text */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-2 text-xs text-cyan-400 font-mono flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                  <span>{step.subtext}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
