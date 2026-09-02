import { motion } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { ArrowRight, Check, Award, Video, Compass, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivateClass() {
  const { t } = useLanguage();
  const data = t('private') || {};

  return (
    <div className="min-h-screen bg-surf-black text-surf-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-surf-white/50 mb-6">
          <Link to="/" className="hover:text-surf-white">Home</Link>
          <span>/</span>
          <Link to="/classes" className="hover:text-surf-white">Classes</Link>
          <span>/</span>
          <span className="text-surf-accent">1-on-1 VIP Coaching</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24 pb-16 border-b border-surf-white/10">
          <div className="lg:col-span-7">
            <span className="px-3 py-1 bg-surf-accent/20 border border-surf-accent text-surf-accent text-[10px] font-mono uppercase tracking-[0.3em] inline-block mb-6">
              {data.badge || '1-on-1 VIP Instruction'}
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-surf-white mb-6 whitespace-pre-line"
            >
              {data.title || 'Private Surf\nCoaching'}
            </motion.h1>
            <p className="text-base sm:text-xl font-light text-surf-white/80 leading-relaxed max-w-xl mb-10">
              {data.subtitle || 'Personalized attention with Coach Bryan to fast-track technique, ocean awareness, and wave count.'}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-3 bg-surf-white/5 border border-surf-white/10">
                <span className="text-xs font-mono text-surf-accent block">Coach</span>
                <span className="text-sm font-bold uppercase">Coach Bryan</span>
              </div>
              <div className="px-4 py-3 bg-surf-white/5 border border-surf-white/10">
                <span className="text-xs font-mono text-surf-accent block">Ratio</span>
                <span className="text-sm font-bold uppercase">1:1 Exclusive</span>
              </div>
              <div className="px-4 py-3 bg-surf-white/5 border border-surf-white/10">
                <span className="text-xs font-mono text-surf-accent block">Duration</span>
                <span className="text-sm font-bold uppercase">90 Minutes</span>
              </div>
              <div className="px-4 py-3 bg-surf-white/5 border border-surf-white/10">
                <span className="text-xs font-mono text-surf-accent block">Rate</span>
                <span className="text-sm font-bold uppercase">$140 / surfer</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/booking?program=private"
                className="px-8 py-4 bg-surf-accent text-surf-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-white transition-colors text-center"
              >
                {data.ctaBtn || 'Book 1-on-1 Session'}
              </Link>
              <a 
                href="https://wa.me/50688997873?text=Hola%20Bryan!%20I%20would%20like%20to%20book%20a%20private%201-on-1%20lesson%20in%20Nosara"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 border border-surf-white/30 text-surf-white font-bold uppercase text-xs tracking-[0.2em] hover:border-surf-white text-center transition-colors"
              >
                Message Bryan Directly
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden border border-surf-white/20 group shadow-2xl">
            <img 
              src={data.heroImage || 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80'} 
              alt="Coach Bryan surfing in Nosara"
              className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            <div className="absolute top-4 right-4 bg-surf-black/90 px-3 py-1 border border-surf-accent text-[10px] font-mono text-surf-accent uppercase">
              ISA Level 2 Certified
            </div>
          </div>
        </div>

        {/* Intro Banner */}
        <div className="bg-surf-white text-surf-black p-8 sm:p-16 mb-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] opacity-40 block mb-4">
              High Impact Coaching
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase leading-[0.95] mb-6">
              {data.introTitle || '100% Focused on Your Journey'}
            </h2>
            <p className="text-base sm:text-lg font-light leading-relaxed opacity-80 mb-8">
              {data.introText || 'Whether your child needs gentle one-on-one encouragement to conquer water anxiety, or you are an adult looking to transition from foamies to trimming green waves, our private coaching offers the ultimate customized curriculum.'}
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-surf-black/10 text-xs font-mono uppercase tracking-wider">
              <div>🎯 3x Faster Progression</div>
              <div>📱 Beach iPad Slow-Mo Review</div>
              <div>🌊 Exact Tide Wave Selection</div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-[0.5em] text-surf-accent block mb-3">
              The Private Advantage
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none">
              Why Choose Private Coaching?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.benefits || []).map((b: any, idx: number) => (
              <div key={idx} className="border border-surf-white/10 p-8 sm:p-10 bg-surf-black flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-surf-accent block mb-4">0{idx + 1}</span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-surf-white mb-4">
                    {b.title}
                  </h3>
                  <p className="text-sm font-light text-surf-white/70 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="p-10 sm:p-16 border-2 border-surf-white/20 bg-surf-black text-center max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl uppercase leading-none mb-4">
            Accelerate Your Surfing with Coach Bryan
          </h2>
          <p className="text-base font-light text-surf-white/80 max-w-xl mx-auto mb-8">
            Limited slots per day to ensure Bryan only coaches during optimal tide windows.
          </p>
          <Link 
            to="/booking?program=private"
            className="px-10 py-5 bg-surf-accent text-surf-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-white transition-colors inline-block"
          >
            Book 1-on-1 VIP Session ($140)
          </Link>
        </div>
      </div>
    </div>
  );
}
