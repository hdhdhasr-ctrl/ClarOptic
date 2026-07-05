import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Camera, Smartphone, Award } from 'lucide-react';
import heroImg from '../assets/images/phone_cpl_kit_1783272836990.jpg';

interface HeroSectionProps {
  onShopClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-radial from-[#131b2d] via-[#0b0c10] to-[#07080a] pt-24 pb-16 px-4 overflow-hidden border-b border-gray-900">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column - Copy & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Camera className="w-3.5 h-3.5" />
            Next-Gen Smartphone Optics
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none"
          >
            Shoot Like a Pro. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Right From Your Phone.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg sm:text-xl max-w-xl leading-relaxed font-sans"
          >
            Cut glare, boost color, and shoot like a pro. Eliminate washed-out reflections from water, windows, and sky instantly with our precision-engineered 52mm circular polarizer filter.
          </motion.p>

          {/* Quick Perks List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md pt-2"
          >
            <div className="flex items-center gap-2.5 text-gray-300 text-sm">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-500/30">
                <Check className="w-3 h-3 text-cyan-400" />
              </div>
              <span>Instant glare & reflection elimination</span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-300 text-sm">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-500/30">
                <Check className="w-3 h-3 text-cyan-400" />
              </div>
              <span>Dramatic blue sky contrast</span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-300 text-sm">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-500/30">
                <Check className="w-3 h-3 text-cyan-400" />
              </div>
              <span>Universal smartphone clip-on fit</span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-300 text-sm">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-500/30">
                <Check className="w-3 h-3 text-cyan-400" />
              </div>
              <span>True-to-life color saturation</span>
            </div>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onShopClick}
              className="cursor-pointer px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-full shadow-[0_4px_20px_0_rgba(6,182,212,0.4)] hover:shadow-[0_4px_25px_0_rgba(6,182,212,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center"
            >
              Get Yours Today
            </button>
            <div className="flex flex-col items-center sm:items-start text-xs text-gray-400 justify-center">
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="font-semibold text-white">4.8 / 5 Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full pt-8 mt-4 border-t border-gray-900 grid grid-cols-3 gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 text-center sm:text-left">
              <Smartphone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <div>
                <h4 className="text-white text-xs font-semibold">Universal Fit</h4>
                <p className="text-[11px] text-gray-400">Clip-on for iOS & Android</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 text-center sm:text-left">
              <Award className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <div>
                <h4 className="text-white text-xs font-semibold">HD Optical Glass</h4>
                <p className="text-[11px] text-gray-400">Nano-coated clarity</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 text-center sm:text-left">
              <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <div>
                <h4 className="text-white text-xs font-semibold">Free Carrying Case</h4>
                <p className="text-[11px] text-gray-400">Durable, soft-padded shell</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Premium Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="lg:col-span-5 relative w-full flex justify-center lg:justify-end"
        >
          {/* Radial decorative backglow */}
          <div className="absolute inset-0 bg-radial from-cyan-500/20 via-transparent to-transparent rounded-full filter blur-2xl scale-75" />
          
          <div className="relative group max-w-[420px] lg:max-w-full">
            {/* Ambient border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000" />
            
            <div className="relative bg-gray-950 border border-gray-800 p-2.5 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="ClarOptic 52mm CPL Circular Polarizer Filter clipped onto phone"
                className="w-full h-auto object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              {/* Image Caption overlay overlaying subtly */}
              <div className="absolute bottom-5 left-5 right-5 bg-black/75 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center justify-between text-xs text-white">
                <div>
                  <p className="font-semibold text-cyan-400">ClarOptic Universal CPL</p>
                  <p className="text-[10px] text-gray-300">52mm Double-Threaded Aluminum Frame</p>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-cyan-950 border border-cyan-400/30 text-cyan-400 text-[10px] uppercase font-bold">
                  Premium Glass
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
