import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Eye, Sparkles } from 'lucide-react';
import comparisonImg from '../assets/images/polarizer_comparison_split_1783271484453.jpg';

export const ComparisonSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle both mouse and touch sliding
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return; // If not dragging and mouse isn't down
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  // Start drag state
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  // Stop dragging on document level to ensure it releases smoothly
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-[#0a0a0c] border-b border-gray-900 relative">
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          Interactive Demo
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          See the Difference Instantly
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Drag the center slider left and right to compare a standard camera shot with the vibrant, glare-free quality of our multi-coated CPL filter.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative select-none">
        
        {/* Helper Instructions Overlay */}
        <div className="absolute -top-6 left-0 right-0 flex justify-between px-2 text-xs text-gray-500 font-mono">
          <span>← SLIDE TO VIEW BEFORE / AFTER →</span>
          <span className="hidden sm:inline">DRAG HANDLE IN CENTER</span>
        </div>

        {/* Slider Box */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          className="relative aspect-video w-full rounded-2xl overflow-hidden border border-gray-800 shadow-2xl cursor-ew-resize bg-gray-950"
        >
          {/* UNDERLAY: Before image (standard sunny day scene with glare on lake/washed sky) */}
          {/* Since we have one single composite generated comparison image with before and after labels, we can display it side-by-side or build a beautiful split effect. 
              Wait, since the generated image itself is a static split-screen comparison (labeled "BEFORE" and "AFTER" on left and right),
              having a sliding panel overlay is extremely cool!
              Let's render the image once, but with high precision:
              Wait, the generated comparison image 'polarizer_comparison_split' is a side-by-side image.
              If it is a side-by-side image, can we do a cool magnification view or overlay?
              Let's think: if we just display the comparison split image directly, it already has the 'BEFORE' and 'AFTER' sides.
              Wait! We can make the slider reveal a colored visual lens or an adjustment effect overlay, or we can use the slider to reveal standard image vs the filtered image.
              Wait, even with the side-by-side image, we can crop/position it so the left half of the container shows the left half of the image, and the right half shows the right half of the image!
              Or, we can simply showcase the side-by-side image with a beautiful custom label overlays and magnification tool, or keep the slider!
              Let's keep the slider and make it incredibly smart:
              If we show the single comparison image, it's already divided into a Before side (left) and an After side (right).
              Wait, what if the Before image is actually the main image with a low-saturation + high-brightness overlay, and the After is the full vibrant image?
              Yes! We can create a simulated slider where:
              - The underlay is a beautifully treated version of the image (or a customized layout).
              - The overlay is the fully vibrant, high-contrast polarized representation.
              Wait, actually, since the generated image already has the Left side (Before) and the Right side (After) in one file, let's look at the generated image:
              It has BEFORE on the left side, and AFTER on the right side!
              So if a user drags the slider, they can see the full transition of the image.
              Let's also add interactive tabs for use cases so users can see different photography scenarios (Travel, Portraits, Driving, Glass/Water) and toggle between them to see before/after text & images!
              Let's make sure the Slider displays the comparison split image beautifully.
          */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src={comparisonImg}
              alt="CPL Polarizer Filter Before and After split comparison"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Interactive slider dividing bar */}
          <div
            style={{ left: `${sliderPosition}%` }}
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 cursor-ew-resize z-20 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
          >
            {/* Slider Center Knob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-950 border-2 border-cyan-400 flex items-center justify-center shadow-xl z-30 group">
              <div className="flex gap-1 items-center justify-center">
                <span className="block w-1 h-3 bg-cyan-400 rounded-full group-hover:scale-y-125 transition-transform" />
                <span className="block w-1 h-3 bg-cyan-400 rounded-full group-hover:scale-y-125 transition-transform" />
              </div>
            </div>
          </div>

          {/* Side Overlay indicators */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded text-[11px] font-mono font-bold text-gray-300 border border-white/10 pointer-events-none uppercase">
            Glared & Washed Out (Before CPL)
          </div>
          <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-950/60 backdrop-blur-md rounded text-[11px] font-mono font-bold text-cyan-400 border border-cyan-500/20 pointer-events-none uppercase">
            Vibrant & Glare-Free (After CPL)
          </div>

          {/* Instruction bubble */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gray-900/90 backdrop-blur-md text-xs text-gray-300 rounded-full border border-gray-800 flex items-center gap-1.5 shadow-lg animate-bounce pointer-events-none">
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span>Slide or tap to inspect</span>
          </div>

        </div>

        {/* Captions explaining */}
        <div className="mt-6 p-5 bg-gray-950 border border-gray-900 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-white font-semibold text-sm">See the difference instantly</h4>
            <p className="text-gray-400 text-xs">
              Notice how the blinding reflection on the water's surface is completely erased, and the pale sky is turned into a rich, deep blue without altering natural colors.
            </p>
          </div>
          <div className="flex-shrink-0 px-4 py-2 rounded-lg bg-cyan-950/25 border border-cyan-500/20 text-cyan-400 text-xs font-semibold font-mono">
            True HD Optical Fidelity
          </div>
        </div>

      </div>
    </section>
  );
};
