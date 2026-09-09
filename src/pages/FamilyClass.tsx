import { motion } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { ArrowRight, Users, Camera, Sun, Umbrella, Waves, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FamilyClass() {
  const { t } = useLanguage();
  const data = t('family') || {};

  return (
    <div className="min-h-screen bg-surf-white text-surf-black pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-surf-black/50 mb-6">
          <Link to="/" className="hover:text-surf-black">Home</Link>
          <span>/</span>
          <Link to="/classes" className="hover:text-surf-black">Classes</Link>
          <span>/</span>
          <span className="text-surf-accent font-semibold">Family Wave Adventure</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24 pb-16 border-b border-surf-black/15">
          <div className="lg:col-span-7">
            <span className="px-3 py-1 bg-surf-accent/15 border border-surf-accent text-surf-accent text-[10px] font-mono uppercase tracking-[0.3em] inline-block mb-6 font-semibold">
              {data.badge || 'All Ages • Parents & Kids Together'}
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-surf-black mb-6 whitespace-pre-line"
            >
              {data.title || 'Family Surf\nAdventures'}
            </motion.h1>
            <p className="text-base sm:text-xl font-light text-surf-black/80 leading-relaxed max-w-xl mb-10">
              {data.subtitle || 'Unplug from screens. Connect with nature and each other on the warm waves of Nosara.'}
            </p>

            {/* Editorial Stats Row (No cards/boxes) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-t border-b border-surf-black/15 mb-10">
              <div>
                <span className="text-[10px] font-mono text-surf-black/50 uppercase tracking-widest block mb-1">Structure</span>
                <span className="text-base font-display uppercase tracking-tight text-surf-black">2 Coaches / Family</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-surf-black/50 uppercase tracking-widest block mb-1">Duration</span>
                <span className="text-base font-display uppercase tracking-tight text-surf-black">2 Hours</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-surf-black/50 uppercase tracking-widest block mb-1">Package</span>
                <span className="text-base font-display uppercase tracking-tight text-surf-accent font-semibold">$320 (Up to 4)</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-surf-black/50 uppercase tracking-widest block mb-1">Photos & Video</span>
                <span className="text-base font-display uppercase tracking-tight text-surf-black">Included</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/booking?program=family"
                className="px-8 py-4 bg-surf-black text-surf-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-accent hover:text-surf-black transition-colors text-center"
              >
                {data.ctaBtn || 'Reserve Family Experience'}
              </Link>
              <Link 
                to="/contact"
                className="px-6 py-4 border border-surf-black/30 text-surf-black font-bold uppercase text-xs tracking-[0.2em] hover:border-surf-black text-center transition-colors"
              >
                Questions? Contact Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden group shadow-xl">
            <img 
              src={data.heroImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80'} 
              alt="Family surf lesson at sunset in Playa Guiones, Nosara - First Peak Surf"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>
        </div>

        {/* Story / Intro Section - Open Editorial Layout (No card box) */}
        <div className="py-16 border-t border-b border-surf-black/15 mb-24">
          <div className="max-w-4xl">
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent block mb-4 font-semibold">
              Pure Pura Vida
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase leading-[0.95] mb-6 text-surf-black">
              {data.introTitle || 'Shared Triumphs in Warm Costa Rican Water'}
            </h2>
            <p className="text-base sm:text-lg font-light leading-relaxed text-surf-black/80 mb-8">
              {data.introText || 'There is nothing quite like hearing your kids cheer for you as you catch a wave, or watching them ride their first roller with pure joy. Our family sessions are designed so everyone progresses at their own pace without feeling rushed or left behind.'}
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-surf-black/15 text-xs font-mono uppercase tracking-wider text-surf-black/70">
              <div>👨‍👩‍👧‍👦 2 Coaches Dedicated</div>
              <div>📸 High-Res Family Photo Pack</div>
              <div>🥥 Beach Canopy & Pipas Frías</div>
            </div>
          </div>
        </div>

        {/* Features Grid - Open Editorial Columns (No boxes/cards) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-[0.5em] text-surf-accent block mb-3 font-semibold">
              Thoughtful Design
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none text-surf-black">
              How the Family Experience Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {(data.features || []).map((feat: any, idx: number) => (
              <div key={idx} className="border-t border-surf-black/15 pt-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-surf-accent block mb-3 font-bold">0{idx + 1}</span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-surf-black mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-sm font-light text-surf-black/75 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Is Included Checklist - Open Editorial List (No card box) */}
        <div className="py-12 border-b border-surf-black/15 mb-20">
          <h3 className="font-display text-2xl sm:text-4xl uppercase tracking-tight mb-8 text-center text-surf-black">
            Everything Taken Care Of For Your Family
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm font-light text-surf-black/80">
            <div className="flex items-center gap-3">
              <Check className="text-surf-accent shrink-0" size={18} />
              <span>Custom boards for adults and kids</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-surf-accent shrink-0" size={18} />
              <span>UPF 50+ rash guards for all sizes</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-surf-accent shrink-0" size={18} />
              <span>Beach tent setup for shade and relaxation</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-surf-accent shrink-0" size={18} />
              <span>Cold drinking water & fresh coconut water</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-surf-accent shrink-0" size={18} />
              <span>Digital gallery with videos & photos</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-surf-accent shrink-0" size={18} />
              <span>Pediatric CPR & lifeguard coaches</span>
            </div>
          </div>
        </div>

        {/* Final CTA Section - Clean Editorial Layout (No box) */}
        <div className="pt-20 border-t border-surf-black/15 text-center max-w-3xl mx-auto">
          <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent block mb-3 font-semibold">
            Pure Pura Vida
          </span>
          <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none mb-6 text-surf-black">
            Create Forever Memories in Nosara
          </h2>
          <p className="text-base sm:text-lg font-light text-surf-black/75 max-w-xl mx-auto mb-10">
            Family sessions book out quickly during school holiday breaks. Lock in your dates early.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/booking?program=family"
              className="px-10 py-4 bg-surf-black text-surf-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-accent hover:text-surf-black transition-colors"
            >
              Reserve Family Adventure ($320)
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 border border-surf-black/30 text-surf-black font-bold uppercase text-xs tracking-[0.2em] hover:border-surf-black transition-colors"
            >
              Questions? Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
