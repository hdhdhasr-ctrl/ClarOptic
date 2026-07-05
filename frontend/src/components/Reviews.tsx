import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, Flame, MessageSquare, Heart } from 'lucide-react';
import { Review } from '../types';

export const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 'rev-1',
      name: 'Marcus Thorne',
      rating: 5,
      tagline: 'Absolute game changer for travel shoots!',
      comment: 'The glass fidelity is incredible. I took this on a trip to the Swiss Alps and the reflection removal on glacial lakes is stunning. The universal clip holds perfectly and doesn\'t slide even when hiking.',
      date: '2 Days ago',
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 'rev-2',
      name: 'Sarah Lindqvist',
      rating: 5,
      tagline: 'Windshield reflection is completely gone',
      comment: 'I create travel vlogs from behind the wheel. The dashboard glare reflection on the windshield was always ruining my shots. This polarizer completely deleted the glare. Unedited raw clips look amazing.',
      date: '1 Week ago',
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 'rev-3',
      name: 'David Kim',
      rating: 5,
      tagline: 'Perfect portrait assistant',
      comment: 'I shoot outdoor street portraits. High sun usually leaves strong shininess on cheeks and foreheads which requires heavy retouching. This filter cuts skin reflection natively, retaining beautiful skin texture.',
      date: '2 Weeks ago',
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    },
  ];

  const socialHandles = [
    { platform: 'Instagram', tag: '@claroptic.co', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80', count: '14.2k likes' },
    { platform: 'TikTok', tag: '#phonephotography', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80', count: '1.2M views' },
    { platform: 'Instagram', tag: '@shutter_phone', image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&q=80', count: '8.4k views' },
    { platform: 'TikTok', tag: '#cplfilter', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80', count: '450k views' },
  ];

  return (
    <section className="py-20 px-4 bg-[#07080a] border-b border-gray-900 relative">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold font-mono">
            TRUST & REVIEWS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Loved by Mobile Photographers
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            See how amateur and professional content creators alike are upgrading their smartphone cameras with ClarOptic glass.
          </p>
        </div>

        {/* Big Dashboard Rating */}
        <div className="max-w-4xl mx-auto bg-gray-950 border border-gray-900 rounded-3xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Big Number (Cols 5/12) */}
          <div className="md:col-span-5 text-center md:border-r md:border-gray-900 md:pr-8 flex flex-col items-center justify-center space-y-2">
            <h3 className="text-6xl sm:text-7xl font-black text-white font-mono tracking-tighter">
              4.8
            </h3>
            <div className="flex text-yellow-400 text-xl gap-0.5">
              {'★'.repeat(5)}
            </div>
            <p className="text-gray-400 text-xs font-semibold font-sans">
              Based on 284 Verified Purchases
            </p>
          </div>

          {/* Rating Bars (Cols 7/12) */}
          <div className="md:col-span-7 space-y-2.5 text-left font-mono">
            <div className="flex items-center gap-3 text-xs text-gray-300">
              <span className="w-12 text-right">5 Stars</span>
              <div className="flex-grow h-2 rounded bg-gray-900 overflow-hidden">
                <div className="h-full bg-cyan-400 rounded" style={{ width: '88%' }} />
              </div>
              <span className="w-8 text-right text-gray-400">88%</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-300">
              <span className="w-12 text-right">4 Stars</span>
              <div className="flex-grow h-2 rounded bg-gray-900 overflow-hidden">
                <div className="h-full bg-cyan-400 rounded" style={{ width: '9%' }} />
              </div>
              <span className="w-8 text-right text-gray-400">9%</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-300">
              <span className="w-12 text-right">3 Stars</span>
              <div className="flex-grow h-2 rounded bg-gray-900 overflow-hidden">
                <div className="h-full bg-cyan-400 rounded" style={{ width: '2%' }} />
              </div>
              <span className="w-8 text-right text-gray-400">2%</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-300">
              <span className="w-12 text-right">2 Stars</span>
              <div className="flex-grow h-2 rounded bg-gray-900 overflow-hidden">
                <div className="h-full bg-cyan-400 rounded" style={{ width: '1%' }} />
              </div>
              <span className="w-8 text-right text-gray-400">1%</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-300">
              <span className="w-12 text-right">1 Star</span>
              <div className="flex-grow h-2 rounded bg-gray-900 overflow-hidden">
                <div className="h-full bg-cyan-400 rounded" style={{ width: '0%' }} />
              </div>
              <span className="w-8 text-right text-gray-400">0%</span>
            </div>
          </div>

        </div>

        {/* Customer Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 text-left">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-gray-950 border border-gray-900 p-6 rounded-2xl flex flex-col justify-between hover:border-gray-800 transition-colors"
            >
              <div className="space-y-4">
                {/* Header Star row & Date */}
                <div className="flex justify-between items-center">
                  <div className="flex text-yellow-400 text-sm">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono">{rev.date}</span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-white text-sm font-bold tracking-tight">"{rev.tagline}"</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{rev.comment}</p>
                </div>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-gray-900">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-9 h-9 rounded-full object-cover border border-gray-800"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="text-white text-xs font-bold flex items-center gap-1.5">
                    {rev.name}
                    {rev.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    )}
                  </h5>
                  <p className="text-[10px] text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* As Seen On Social Media Gallery */}
        <div className="max-w-6xl mx-auto pt-8 border-t border-gray-900">
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <h4 className="text-white font-bold text-sm uppercase font-mono tracking-wider flex items-center gap-2">
                <Flame className="w-4 h-4 text-cyan-400" />
                AS SEEN ON SOCIALS
              </h4>
              <p className="text-gray-400 text-xs">Photographers worldwide tag us with #ClarOptic</p>
            </div>
            <span className="text-xs text-cyan-400 font-semibold cursor-pointer hover:underline">
              Join the gallery
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {socialHandles.map((post, idx) => (
              <div key={idx} className="relative group rounded-xl overflow-hidden aspect-square border border-gray-900 bg-gray-950">
                <img
                  src={post.image}
                  alt={`Instagram feature tag ${post.tag}`}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Translucent Backdrop hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 opacity-80 lg:opacity-0 lg:group-hover:opacity-100 transition duration-200 flex flex-col justify-between p-3.5 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/20">
                      {post.platform}
                    </span>
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white font-mono">{post.tag}</p>
                    <p className="text-[10px] text-gray-300 font-mono flex items-center gap-1 mt-0.5">
                      <MessageSquare className="w-3 h-3 text-cyan-400" />
                      {post.count}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
