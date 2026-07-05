import React from 'react';
import { Camera, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050608] border-t border-gray-950 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Brand info (Cols: 5/12) */}
        <div className="md:col-span-5 space-y-4 text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
              <Camera className="w-4.5 h-4.5" />
            </div>
            <span className="text-white font-extrabold text-lg tracking-tight">
              ClarOptic
            </span>
          </div>
          
          <p className="text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed">
            Cut glare, boost color, and shoot like a pro — right from your phone. Elevating mobile cinematography and photography with state-of-the-art analog glass filters.
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
            <Mail className="w-3.5 h-3.5 text-cyan-500" />
            <span>znnkstudio.gm@gmail.com</span>
          </div>
        </div>

        {/* Middle Column: Quick Customer Care links (Cols: 3/12) */}
        <div className="md:col-span-3 text-left space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono text-cyan-400">
            Customer Care
          </h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li><a href="#shop-now-section" className="hover:text-cyan-400 transition-colors">Order Tracker</a></li>
            <li><a href="#shop-now-section" className="hover:text-cyan-400 transition-colors">Universal Fit guide</a></li>
          </ul>
        </div>

        {/* Right Column: Security Seals and certificates (Cols: 4/12) */}
        <div className="md:col-span-4 text-left space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono text-cyan-400">
            Secure Payments
          </h4>
          <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
            All payments are encrypted using bank-grade AES-256 standard protocols. Your order credentials are never saved on our databases.
          </p>
          
          <div className="flex items-center gap-3 p-3 bg-gray-950 rounded-xl border border-gray-900 max-w-xs">
            <ShieldCheck className="w-7 h-7 text-cyan-400 flex-shrink-0" />
            <div className="space-y-0.5">
              <h5 className="text-white text-[11px] font-bold">Norton Secured Merchant</h5>
              <p className="text-[9px] text-gray-500 font-mono">100% Secure SSL Certificate</p>
            </div>
          </div>
        </div>

      </div>

      {/* Under footer copyright lines */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
        <div>
          © {currentYear} ClarOptic. All Rights Reserved. Co-branded with Shopify Buy Button.
        </div>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-cyan-400 transition-colors">Privacy Policy</span>
          <span className="cursor-pointer hover:text-cyan-400 transition-colors">Terms of Service</span>
          <span className="cursor-pointer hover:text-cyan-400 transition-colors">Sitemap</span>
        </div>
      </div>
    </footer>
  );
};
