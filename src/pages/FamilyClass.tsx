import { motion } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { ArrowRight, Users, Camera, Sun, Umbrella, Waves, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FamilyClass() {
  const { t } = useLanguage();
  const data = t('family') || {};

  return (
    <div className="min-h-screen bg-surf-black text-surf-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-surf-white/50 mb-6">
          <Link to="/" className="hover:text-surf-white">Home</Link>
          <span>/</span>
          <Link to="/classes" className="hover:text-surf-white">Classes</Link>
          <span>/</span>
          <span className="text-surf-accent">Family Wave Adventure</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24 pb-16 border-b border-surf-white/10">
          <div className="lg:col-span-7">
            <span className="px-3 py-1 bg-surf-accent/20 border border-surf-accent text-surf-accent text-[10px] font-mono uppercase tracking-[0.3em] inline-block mb-6">
              {data.badge || 'All Ages • Parents & Kids Together'}
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-surf-white mb-6 whitespace-pre-line"
            >
              {data.title || 'Family Surf\nAdventures'}
            </motion.h1>
            <p className="text-base sm:text-xl font-light text-surf-white/80 leading-relaxed max-w-xl mb-10">
              {data.subtitle || 'Unplug from screens. Connect with nature and each other on the warm waves of Nosara.'}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-3 bg-surf-white/5 border border-surf-white/10">
                <span className="text-xs font-mono text-surf-accent block">Structure</span>
                <span className="text-sm font-bold uppercase">2 Coaches / Family</span>
              </div>
              <div className="px-4 py-3 bg-surf-white/5 border border-surf-white/10">
                <span className="text-xs font-mono text-surf-accent block">Duration</span>
                <span className="text-sm font-bold uppercase">2 Hours</span>
              </div>
              <div className="px-4 py-3 bg-surf-white/5 border border-surf-white/10">
                <span className="text-xs font-mono text-surf-accent block">Package</span>
                <span className="text-sm font-bold uppercase">$320 (Up to 4)</span>
              </div>
              <div className="px-4 py-3 bg-surf-white/5 border border-surf-white/10">
                <span className="text-xs font-mono text-surf-accent block">Photos & Video</span>
                <span className="text-sm font-bold uppercase">Included</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/booking?program=family"
                className="px-8 py-4 bg-surf-accent text-surf-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-white transition-colors text-center"
              >
                {data.ctaBtn || 'Reserve Family Experience'}
              </Link>
              <a 
                href="https://wa.me/50688997873?text=Hola%20Bryan!%20We%20are%20a%20family%20interested%20in%20surfing%20together"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 border border-surf-white/30 text-surf-white font-bold uppercase text-xs tracking-[0.2em] hover:border-surf-white text-center transition-colors"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden border border-surf-white/20 group shadow-2xl">
            <img 
              src={data.heroImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80'} 
              alt="Family surf experience Nosara"
              className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-surf-black/90 p-4 border border-surf-white/20 text-xs">
              <p className="font-bold uppercase text-surf-accent">All Generations Welcome</p>
              <p className="text-surf-white/70 font-light mt-1">Parents, groms, teens, and grandparents spectating under our shaded canopy.</p>
            </div>
          </div>
        </div>

        {/* Story / Intro Section */}
        <div className="bg-surf-white text-surf-black p-8 sm:p-16 mb-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] opacity-40 block mb-4">
              Pure Pura Vida
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase leading-[0.95] mb-6">
              {data.introTitle || 'Shared Triumphs in Warm Costa Rican Water'}
            </h2>
            <p className="text-base sm:text-lg font-light leading-relaxed opacity-80 mb-8">
              {data.introText || 'There is nothing quite like hearing your kids cheer for you as you catch a wave, or watching them ride their first roller with pure joy. Our family sessions are designed so everyone progresses at their own pace without feeling rushed or left behind.'}
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-surf-black/10 text-xs font-mono uppercase tracking-wider">
              <div>👨‍👩‍👧‍👦 2 Coaches Dedicated</div>
              <div>📸 High-Res Family Photo Pack</div>
              <div>🥥 Beach Canopy & Pipas Frías</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-[0.5em] text-surf-accent block mb-3">
              Thoughtful Design
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none">
              How the Family Experience Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.features || []).map((feat: any, idx: number) => (
              <div key={idx} className="border border-surf-white/10 p-8 sm:p-10 bg-surf-black flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-surf-accent block mb-4">0{idx + 1}</span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-surf-white mb-4">
                    {feat.title}
                  </h3>
                  <p className="text-sm font-light text-surf-white/70 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Is Included Checklist */}
        <div className="border border-surf-white/10 p-8 sm:p-12 mb-20">
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight mb-8 text-center">
            Everything Taken Care Of For Your Family
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm font-light text-surf-white/80">
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

        {/* CTA Banner */}
        <div className="p-10 sm:p-16 bg-surf-accent text-surf-black text-center max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl uppercase leading-none mb-4">
            Create Forever Memories in Nosara
          </h2>
          <p className="text-sm sm:text-base font-medium mb-8 max-w-xl mx-auto opacity-90">
            Family sessions book out quickly during school holiday breaks. Lock in your dates early.
          </p>
          <Link 
            to="/booking?program=family"
            className="px-10 py-5 bg-surf-black text-surf-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-white hover:text-surf-black transition-colors inline-block"
          >
            Reserve Family Adventure ($320)
          </Link>
        </div>
      </div>
    </div>
  );
}
