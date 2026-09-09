import { motion } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { ArrowRight, ShieldCheck, Heart, Sparkles, Video, Clock, CheckCircle2, Waves, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function KidsClass() {
  const { t } = useLanguage();
  const data = t('kids') || {};

  return (
    <div className="min-h-screen bg-surf-white text-surf-black pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Breadcrumb / Badge */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-surf-black/50 mb-6">
          <Link to="/" className="hover:text-surf-black">Home</Link>
          <span>/</span>
          <Link to="/classes" className="hover:text-surf-black">Classes</Link>
          <span>/</span>
          <span className="text-surf-accent font-semibold">Kids Grom Academy</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24 pb-16 border-b border-surf-black/15">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent block mb-4 font-semibold">
              {data.badge || 'Ages 6 to 12 • Safety First'}
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-surf-black mb-6 whitespace-pre-line"
            >
              {data.title || 'Kids Grom\nAcademy'}
            </motion.h1>
            <p className="text-base sm:text-xl font-light text-surf-black/80 leading-relaxed max-w-xl mb-8">
              {data.subtitle || 'Where patience, ocean science, and playtime meet to create lifelong confident surfers.'}
            </p>

            {/* Editorial Stats Row (No cards/boxes) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-t border-b border-surf-black/15 mb-10">
              <div>
                <span className="text-[10px] font-mono text-surf-black/50 uppercase tracking-widest block mb-1">Ratio</span>
                <span className="text-base font-display uppercase tracking-tight text-surf-black">Max 1:3</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-surf-black/50 uppercase tracking-widest block mb-1">Duration</span>
                <span className="text-base font-display uppercase tracking-tight text-surf-black">90 Minutes</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-surf-black/50 uppercase tracking-widest block mb-1">Water</span>
                <span className="text-base font-display uppercase tracking-tight text-surf-black">Waist Deep Sand</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-surf-black/50 uppercase tracking-widest block mb-1">Rate</span>
                <span className="text-base font-display uppercase tracking-tight text-surf-accent font-semibold">$95 / child</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/booking?program=kids"
                className="px-8 py-4 bg-surf-black text-surf-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-accent hover:text-surf-black transition-colors text-center"
              >
                {data.ctaBtn || 'Book Kids Academy'}
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
              src={data.heroImage || 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80'} 
              alt="Kids surf lesson at sunset in Playa Guiones, Nosara - First Peak Surf"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>
        </div>

        {/* Intro Section: Why Guiones - Open Editorial Section (No white card box) */}
        <div className="py-16 border-t border-b border-surf-black/15 mb-24">
          <div className="max-w-4xl">
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent block mb-4 font-semibold">
              The Ocean Playground
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase leading-[0.95] mb-6 text-surf-black">
              {data.introTitle || 'Why Nosara is the Best Place on Earth for Kids to Learn'}
            </h2>
            <p className="text-base sm:text-lg font-light leading-relaxed text-surf-black/80 mb-8">
              {data.introText || 'Playa Guiones features a wide, gentle sandy shelf with no sharp rocks, no reef hazards, and hundreds of meters of soft waist-deep whitewater. It is nature’s safest classroom. We pair this world-class arena with gentle instruction designed specifically for developing motor skills and tender ocean confidence.'}
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-surf-black/15 text-xs font-mono uppercase tracking-wider text-surf-black/70">
              <div>🌊 No Sharp Coral Reefs</div>
              <div>☀️ 80°F Warm Water Year-Round</div>
              <div>🏖️ Soft Sand Bottom Everywhere</div>
            </div>
          </div>
        </div>

        {/* Pillars of Kids Coaching - Open Columns (No boxes/cards) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-[0.5em] text-surf-accent block mb-3 font-semibold">
              Safety & Pedagogy
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none text-surf-black">
              How We Teach Young Surfers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {(data.pillars || []).map((pillar: any, i: number) => (
              <div key={i} className="border-t border-surf-black/15 pt-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-surf-accent block mb-3 font-bold">Pillar 0{i + 1}</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-surf-black mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-light text-surf-black/75 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Blueprint (90 Minutes) */}
        <div className="border-t border-surf-black/15 pt-20 mb-24">
          <div className="max-w-3xl mb-16">
            <span className="text-[10px] uppercase font-mono tracking-[0.5em] text-surf-accent block mb-3 font-semibold">
              Session Structure
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none text-surf-black mb-4">
              {data.stepTitle || 'The Kids Lesson Blueprint (90 Minutes)'}
            </h2>
            <p className="text-sm font-light text-surf-black/75">
              Every child moves at their own pace. We never force progression until the child feels completely secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(data.steps || []).map((step: any, idx: number) => (
              <div key={idx} className="border-t border-surf-black/15 pt-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-surf-accent block mb-3 font-bold">
                    {step.time}
                  </span>
                  <h4 className="text-xl font-bold uppercase tracking-tight mb-3 text-surf-black">
                    {step.name}
                  </h4>
                  <p className="text-xs sm:text-sm font-light text-surf-black/75 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section - Clean Editorial Layout (No orange border box) */}
        <div className="pt-20 border-t border-surf-black/15 text-center max-w-3xl mx-auto">
          <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent block mb-3 font-semibold">
            Pure Pura Vida
          </span>
          <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none mb-6 text-surf-black">
            {data.ctaTitle || 'Give Your Child the Gift of the Ocean'}
          </h2>
          <p className="text-base sm:text-lg font-light text-surf-black/75 max-w-xl mx-auto mb-10">
            {data.ctaText || 'Sessions run daily timed with the best morning or sunset low tides. Spaces strictly capped.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/booking?program=kids"
              className="px-10 py-4 bg-surf-black text-surf-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-accent hover:text-surf-black transition-colors"
            >
              Book Kids Academy ($95)
            </Link>
            <Link 
              to="/faq"
              className="px-8 py-4 border border-surf-black/30 text-surf-black font-bold uppercase text-xs tracking-[0.2em] hover:border-surf-black transition-colors"
            >
              Read Parent FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
