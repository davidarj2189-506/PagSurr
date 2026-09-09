import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { X, ChevronLeft, ChevronRight, Camera, Sparkles, MapPin, Calendar, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { POLAROID_GALLERY, PolaroidPhoto } from '../data/polaroids';

export default function Gallery() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'kids' | 'family' | 'moments'>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredPhotos = filter === 'all' 
    ? POLAROID_GALLERY 
    : POLAROID_GALLERY.filter(p => p.category === filter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev! + 1) % filteredPhotos.length);
      }
      if (e.key === 'ArrowLeft' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredPhotos.length]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <main className="min-h-screen bg-surf-white text-surf-black pt-28 pb-24 px-4 sm:px-8 relative overflow-x-hidden">
      <SEO 
        title="Retro Polaroid Gallery | First Peak Surf Playa Guiones Nosara"
        description="Authentic retro Polaroid photo memories from kids grom sessions, family sunset surf lessons, and coach Bryan at Playa Guiones, Nosara, Costa Rica."
        canonical="https://firstpeaksurf.com/gallery"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Retro Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Camera size={14} className="text-surf-accent" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-surf-accent font-semibold">
              {language === 'en' ? 'Instant Film 600 • Nosara Archives' : 'Película Instantánea 600 • Archivo Nosara'}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-surf-black leading-none">
            {language === 'en' ? 'Polaroid Moments.' : 'Momentos Polaroid.'}
          </h1>

          <p className="text-sm sm:text-base font-light text-surf-black/70 mt-4 leading-relaxed max-w-xl mx-auto">
            {language === 'en'
              ? 'Every pop-up, proud high-five, and sunset laugh captured with the warm, nostalgic soul of instant film.'
              : 'Cada primera ola, choque de manos y sonrisa en el agua capturados con la cálida nostalgia de una cámara Polaroid.'}
          </p>

          {/* Clean Editorial Filter Links (No boxes or card borders) */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8 border-b border-surf-black/15 pb-4">
            {[
              { id: 'all', labelEn: 'All Instant Snaps', labelEs: 'Todas las Fotos' },
              { id: 'kids', labelEn: 'Kids Groms (6-12)', labelEs: 'Niños Groms' },
              { id: 'family', labelEn: 'Family Adventures', labelEs: 'Familias' },
              { id: 'moments', labelEn: 'Golden Hour & Life', labelEs: 'Atardeceres y Vida' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`text-xs sm:text-sm font-mono uppercase tracking-[0.2em] transition-all duration-200 cursor-pointer pb-2 relative ${
                  filter === tab.id
                    ? 'text-surf-accent font-bold after:content-[""] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-surf-accent'
                    : 'text-surf-black/50 hover:text-surf-black'
                }`}
              >
                {language === 'en' ? tab.labelEn : tab.labelEs}
              </button>
            ))}
          </div>
        </div>

        {/* RETRO POLAROID GRID - Organic Scattered Film Table Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto pt-4">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex justify-center"
            >
              {/* THE AUTHENTIC POLAROID CARD */}
              <div
                onClick={() => setSelectedIndex(index)}
                className={`group relative w-full max-w-[340px] bg-[#FAF8F5] text-[#1E1E1E] p-3 sm:p-3.5 pb-8 sm:pb-9 shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)] ${photo.rotation} hover:rotate-0 hover:scale-[1.04] transition-all duration-300 ease-out cursor-pointer select-none border border-[#E5E0D8] rounded-[2px]`}
              >
                {/* Vintage Washi / Masking Tape Top Strip */}
                {photo.tapeStyle && (
                  <div 
                    className={`absolute z-20 w-16 h-5 bg-[#e8deca]/85 border border-[#d3c5ab] backdrop-blur-[1px] shadow-sm pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity ${photo.tapeStyle}`}
                  />
                )}

                {/* Photo Container with Retro Film Grading & Vignette */}
                <div className="relative aspect-square w-full bg-[#181818] overflow-hidden shadow-inner border border-black/10">
                  <img
                    src={photo.url}
                    alt={language === 'en' ? photo.captionEn : photo.captionEs}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover sepia-[0.18] contrast-[1.08] brightness-[0.98] group-hover:sepia-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Subtle Film Grain / Light Leak Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-orange-400/15 opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />
                  
                  {/* Viewfinder corner brackets on hover */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm text-white text-[9px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity rounded-[2px]">
                    Polaroid 600
                  </div>
                </div>

                {/* Polaroid Wide Bottom Chin (Handwritten Marker Style Caption) */}
                <div className="pt-3.5 px-1 flex flex-col justify-between">
                  <p 
                    className="text-sm sm:text-base font-serif italic text-neutral-800 leading-snug tracking-tight line-clamp-2"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    "{language === 'en' ? photo.captionEn : photo.captionEs}"
                  </p>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-300/60 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <MapPin size={10} className="text-surf-accent" />
                      <span className="truncate max-w-[140px]">{language === 'en' ? photo.locationEn : photo.locationEs}</span>
                    </span>
                    <span className="font-bold text-neutral-700">{photo.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Note */}
        <div className="mt-20 text-center border-t border-surf-black/15 pt-10 max-w-xl mx-auto">
          <p className="text-xs sm:text-sm font-light text-surf-black/70 leading-relaxed mb-5">
            {language === 'en'
              ? 'Every lesson with First Peak includes our dedicated beach video and photo package at no extra charge.'
              : 'Cada clase con First Peak incluye nuestro paquete dedicado de foto y video de playa sin cargo adicional.'}
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-surf-black hover:bg-surf-accent text-surf-white hover:text-surf-black font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-md active:scale-95"
          >
            <span>{language === 'en' ? 'Book Your Family Surf Memories' : 'Crea tus Recuerdos de Surf'}</span>
          </Link>
        </div>

      </div>

      {/* FULLSCREEN POLAROID LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[120] bg-surf-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Top Bar Controls */}
            <div className="absolute top-6 right-6 flex items-center gap-4 z-[130]">
              <span className="text-xs font-mono text-surf-white/50 tracking-widest">
                {selectedIndex + 1} / {filteredPhotos.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(null);
                }}
                className="p-2.5 bg-surf-white/10 hover:bg-surf-accent text-surf-white hover:text-surf-black transition-colors cursor-pointer"
                title={language === 'en' ? 'Close Polaroid' : 'Cerrar Polaroid'}
              >
                <X size={20} />
              </button>
            </div>

            {/* Prev / Next Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-surf-white/10 hover:bg-surf-accent text-surf-white hover:text-surf-black transition-colors z-[130] cursor-pointer"
              title={language === 'en' ? 'Previous Photo' : 'Foto Anterior'}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-surf-white/10 hover:bg-surf-accent text-surf-white hover:text-surf-black transition-colors z-[130] cursor-pointer"
              title={language === 'en' ? 'Next Photo' : 'Foto Siguiente'}
            >
              <ChevronRight size={24} />
            </button>

            {/* ENLARGED AUTHENTIC POLAROID */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#FAF8F5] text-neutral-900 p-4 sm:p-5 pb-9 sm:pb-12 shadow-[0_25px_70px_rgba(0,0,0,0.9)] border border-[#E5E0D8] rounded-[2px]"
            >
              {/* Photo Area */}
              <div className="relative aspect-square w-full bg-neutral-950 overflow-hidden shadow-inner border border-black/10">
                <img
                  src={filteredPhotos[selectedIndex].url}
                  alt={language === 'en' ? filteredPhotos[selectedIndex].captionEn : filteredPhotos[selectedIndex].captionEs}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Chin */}
              <div className="pt-5 px-1">
                <p 
                  className="text-lg sm:text-xl font-serif italic text-neutral-900 leading-snug tracking-tight text-center"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  "{language === 'en' ? filteredPhotos[selectedIndex].captionEn : filteredPhotos[selectedIndex].captionEs}"
                </p>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-300/80 text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-surf-accent" />
                    <span>{language === 'en' ? filteredPhotos[selectedIndex].locationEn : filteredPhotos[selectedIndex].locationEs}</span>
                  </span>
                  <span className="font-bold text-neutral-800">{filteredPhotos[selectedIndex].date}</span>
                </div>

                <div className="mt-2 text-center text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
                  First Peak Surf • Playa Guiones, Costa Rica
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
