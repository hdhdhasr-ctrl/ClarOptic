import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqList: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Does it fit my phone case?',
      answer: 'Yes! The spring-loaded universal clip features a generous 25mm depth and non-slip rubber padding, which allows it to fit over slim and medium phone cases easily. For extra-bulky or heavily armored cases, we recommend sliding the case off so the filter glass sits completely flush against the lens camera bump, ensuring maximum edge-to-edge optical clarity and zero light leakage.'
    },
    {
      id: 'faq-2',
      question: 'Will it work on tablets, laptops, and front cameras?',
      answer: 'Absolutely. Because our universal clip operates independently of brand-specific geometries, you can easily slide it over the front/rear cameras of iPads, Android tablets, MacBooks, or Windows laptops. It is an exceptional tool for reducing office window glare during video calls or creating professional content on any portable lens.'
    },
    {
      id: 'faq-3',
      question: 'How do I clean the polarizer lens?',
      answer: 'Treat your CPL filter exactly like high-end professional camera glass. Use the included premium microfiber cleaning cloth to gently wipe away fingerprints, oils, or dust in a soft, circular motion from the center outward. Avoid abrasive clothes, towels, or harsh household glass cleaners. If needed, a single drop of dedicated camera lens cleaning solution is perfect.'
    },
    {
      id: 'faq-4',
      question: 'How is this better than digital editing/Lightroom filters?',
      answer: 'Polarization is an physical wave-interference phenomenon that can NOT be replicated in digital post-processing. While you can artificially boost colors or paint out glare in editing software, a digital filter cannot recover details lost underneath reflections (like rocks under water or items behind a reflective storefront window). An analog CPL physically captures those details right at the sensor.'
    }
  ];

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 bg-[#0a0a0c] border-b border-gray-900 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold font-mono">
            GET ANSWERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Got questions about phone optics or polarizer chemistry? We have got you covered. Check out our technical support guidelines.
          </p>
        </div>

        {/* Accordion Rows */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-gray-950 border rounded-2xl transition-all duration-300 ${
                  isOpen ? 'border-cyan-500/30 shadow-[0_4px_20px_rgba(6,182,212,0.05)]' : 'border-gray-900 hover:border-gray-800'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="cursor-pointer w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 ${isOpen ? 'text-cyan-400' : 'text-gray-500'}`} />
                    <span className="text-white font-bold text-sm sm:text-base leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg border flex-shrink-0 transition-colors ${
                    isOpen ? 'border-cyan-500/20 bg-cyan-950/20 text-cyan-400' : 'border-gray-900 text-gray-500'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Panel Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-400 text-xs sm:text-sm leading-relaxed border-t border-gray-900/60 pt-4 font-sans text-left">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
