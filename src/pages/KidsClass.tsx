import { motion } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { ArrowRight, ShieldCheck, Heart, Sparkles, Video, Clock, CheckCircle2, Waves, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function KidsClass() {
  const { t } = useLanguage();
  const data = t('kids') || {};

  return (
    <div className="min-h-screen bg-surf-black text-surf-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Breadcrumb / Badge */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-surf-white/50 mb-6">
          <Link to="/" className="hover:text-surf-white">Home</Link>
          <span>/</span>
          <Link to="/classes" className="hover:text-surf-white">Classes</Link>
          <span>/</span>
          <span className="text-surf-accent">Kids Grom Academy</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24 pb-16 border-b border-surf-white/10">
          <div className="lg:col-span-7">
            <span className="px-3 py-1 bg-surf-accent/20 border border-surf-accent text-surf-accent text-[10px] font-mono uppercase tracking-[0.3em] inline-block mb-6">
              {data.badge || 'Ages 6 to 12 • Safety First'}
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-surf-white mb-6 whitespace-pre-line"
            >
              {data.title || 'Kids Grom\nAcademy'}
            </motion.h1>
            <p className="text-base sm:text-xl font-light text-surf-white/80 leading-relaxed max-w-xl mb-10">
              {data.subtitle || 'Where patience, ocean science, and playtime meet to create lifelong confident surfers.'}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-3 bg-surf-white/5 border border-surf-white/10">
                <span className="text-xs font-mono text-surf-accent block">Ratio</span>
                <span className="text-sm font-bold uppercase">Max 1:3</span>
              </div>
              <div className="px-4 py-3 bg-surf-white/5 border border-surf-white/10">
                <span className="text-xs font-mono text-surf-accent block">Duration</span>
                <span className="text-sm font-bold uppercase">90 Minutes</span>
              </div>
              <div className="px-4 py-3 bg-surf-white/5 border border-surf-white/10">
                <span className="text-xs font-mono text-surf-accent block">Water</span>
                <span className="text-sm font-bold uppercase">Waist Deep Sand</span>
              </div>
              <div className="px-4 py-3 bg-surf-white/5 border border-surf-white/10">
                <span className="text-xs font-mono text-surf-accent block">Rate</span>
                <span className="text-sm font-bold uppercase">$95 / child</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/booking?program=kids"
                className="px-8 py-4 bg-surf-accent text-surf-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-white transition-colors text-center"
              >
                {data.ctaBtn || 'Book Kids Academy'}
              </Link>
              <a 
                href="https://wa.me/50688997873?text=Hola%20Bryan!%20I%20have%20questions%20about%20Kids%20Surf%20Lessons"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 border border-surf-white/30 text-surf-white font-bold uppercase text-xs tracking-[0.2em] hover:border-surf-white text-center transition-colors"
              >
                Ask Bryan on WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden border border-surf-white/20 group shadow-2xl">
            <img 
              src={data.heroImage || 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80'} 
              alt="Kids surf lesson at sunset in Playa Guiones, Nosara - First Peak Surf"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute top-4 left-4 bg-surf-black/90 px-3 py-1 border border-surf-accent text-[10px] font-mono text-surf-white uppercase">
              100% Gentle Sand Bottom
            </div>
          </div>
        </div>

        {/* Intro Section: Why Guiones - Open Editorial Section (No white card box) */}
        <div className="py-16 border-t border-b border-surf-white/10 mb-24">
          <div className="max-w-4xl">
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent block mb-4">
              The Ocean Playground
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase leading-[0.95] mb-6 text-surf-white">
              {data.introTitle || 'Why Nosara is the Best Place on Earth for Kids to Learn'}
            </h2>
            <p className="text-base sm:text-lg font-light leading-relaxed text-surf-white/80 mb-8">
              {data.introText || 'Playa Guiones features a wide, gentle sandy shelf with no sharp rocks, no reef hazards, and hundreds of meters of soft waist-deep whitewater. It is nature’s safest classroom. We pair this world-class arena with gentle instruction designed specifically for developing motor skills and tender ocean confidence.'}
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-surf-white/10 text-xs font-mono uppercase tracking-wider text-surf-white/70">
              <div>🌊 No Sharp Coral Reefs</div>
              <div>☀️ 80°F Warm Water Year-Round</div>
              <div>🏖️ Soft Sand Bottom Everywhere</div>
            </div>
          </div>
        </div>

        {/* Pillars of Kids Coaching - Open Columns (No boxes/cards) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-[0.5em] text-surf-accent block mb-3">
              Safety & Pedagogy
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none">
              How We Teach Young Surfers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {(data.pillars || []).map((pillar: any, i: number) => (
              <div key={i} className="border-t border-surf-white/10 pt-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-surf-accent block mb-3">Pillar 0{i + 1}</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-surf-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-light text-surf-white/70 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Blueprint (90 Minutes) */}
        <div className="border-t border-surf-white/10 pt-20 mb-24">
          <div className="max-w-3xl mb-16">
            <span className="text-[10px] uppercase font-mono tracking-[0.5em] text-surf-accent block mb-3">
              Session Structure
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none text-surf-white mb-4">
              {data.stepTitle || 'The Kids Lesson Blueprint (90 Minutes)'}
            </h2>
            <p className="text-sm font-light text-surf-white/70">
              Every child moves at their own pace. We never force progression until the child feels completely secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.steps || []).map((step: any, idx: number) => (
              <div key={idx} className="p-8 border border-surf-white/10 bg-surf-white/5 relative">
                <span className="text-xs font-mono px-2 py-1 bg-surf-accent text-surf-black font-bold uppercase tracking-wider inline-block mb-6">
                  {step.time}
                </span>
                <h4 className="text-lg font-bold uppercase tracking-tight mb-3 text-surf-white">
                  {step.name}
                </h4>
                <p className="text-xs sm:text-sm font-light text-surf-white/70 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Box */}
        <div className="p-10 sm:p-16 border-2 border-surf-accent bg-surf-black text-center max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl uppercase leading-none mb-6">
            {data.ctaTitle || 'Give Your Child the Gift of the Ocean'}
          </h2>
          <p className="text-base font-light text-surf-white/80 max-w-xl mx-auto mb-8">
            {data.ctaText || 'Sessions run daily timed with the best morning or sunset low tides. Spaces strictly capped.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/booking?program=kids"
              className="px-10 py-4 bg-surf-accent text-surf-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-white transition-colors"
            >
              Book Kids Academy ($95)
            </Link>
            <Link 
              to="/faq"
              className="px-8 py-4 border border-surf-white/40 text-surf-white font-bold uppercase text-xs tracking-[0.2em] hover:border-surf-white transition-colors"
            >
              Read Parent FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
