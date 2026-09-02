import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const { t } = useLanguage();
  const data = t('gallery');
  const homeData = t('home'); // for 'Moment' text
  
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev! + 1) % data.images.length);
      }
      if (e.key === 'ArrowLeft' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev! - 1 + data.images.length) % data.images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, data.images?.length]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev! + 1) % data.images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev! - 1 + data.images.length) % data.images.length);
  };

  return (
    <section className="min-h-screen bg-surf-black pt-32 pb-20 px-6 relative">
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-[10px] font-bold uppercase tracking-[0.8em] text-surf-white block mb-6"
        >
          {data.subtitle}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-6xl md:text-[8vw] uppercase leading-none text-surf-white"
        >
          {data.title}
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-t border-l border-surf-white/10 mx-auto max-w-screen-2xl">
        {data.images.map((img: string, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            onClick={() => setSelectedIndex(i)}
            className="relative aspect-square w-full overflow-hidden group cursor-pointer border-r border-b border-surf-white/10"
          >
            <img 
              src={img} 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out" 
              alt={`Kids and family surf lesson moment at sunset in Playa Guiones, Nosara - Photo ${i + 1}`} 
            />
            <div className="absolute inset-0 bg-surf-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-display text-2xl uppercase tracking-[0.3em] text-surf-white border border-surf-white/50 px-6 py-3 backdrop-blur-sm">
                {homeData.galleryMoment}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-surf-black/98 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-surf-white opacity-50 hover:opacity-100 transition-opacity z-[101]"
            >
              <X size={40} strokeWidth={1} />
            </button>

            <button 
              onClick={handlePrev}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-surf-white opacity-50 hover:opacity-100 transition-opacity z-[101] p-4 group"
            >
              <ChevronLeft size={48} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={handleNext}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-surf-white opacity-50 hover:opacity-100 transition-opacity z-[101] p-4 group"
            >
              <ChevronRight size={48} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-6xl max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh] flex items-center justify-center">
                <img 
                  src={data.images[selectedIndex]} 
                  alt={`Surf session in Playa Guiones Nosara - Full photograph ${selectedIndex + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-full object-contain shadow-2xl"
                />
              </div>
              <div className="mt-8 text-surf-white/50 text-sm tracking-[0.3em] font-mono uppercase">
                {selectedIndex + 1} / {data.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
