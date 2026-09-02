import { motion } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Classes() {
  const { t } = useLanguage();
  const data = t('classes') || {};
  const programs = data.programs || [];

  return (
    <div className="min-h-screen bg-surf-black text-surf-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 border-b border-surf-white/10 pb-12">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent block mb-4">
              {data.overviewBadge || 'Boutique Coaching • Max 1:3 Ratio • Video Included'}
            </span>
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-surf-white whitespace-pre-line"
            >
              {data.title || 'Surf Programs &\nExperiences'}
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg font-light text-surf-white/80 max-w-md pb-2"
          >
            {data.subtitle || 'Tailored for young minds, growing confidence, and family bonding in Playa Guiones.'}
          </motion.p>
        </div>

        {/* Programs Grid - Open Editorial Layout (No boxes/cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-14 mb-28">
          {programs.map((program: any, idx: number) => (
            <motion.div 
              key={program.id || idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden mb-6">
                  <img 
                    src={program.image} 
                    alt={`${program.title} at sunset in Playa Guiones, Nosara - First Peak Surf`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-widest text-surf-accent bg-surf-black/80 px-2.5 py-1">
                    {program.ratio}
                  </div>
                </div>

                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-3xl font-display text-surf-white">{program.price}</span>
                  <span className="text-xs font-mono text-surf-white/50">{program.duration}</span>
                </div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-surf-accent mb-4">
                  {program.priceNote}
                </p>

                <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight mb-3 text-surf-white group-hover:text-surf-accent transition-colors">
                  {program.title}
                </h2>
                <p className="text-sm font-light text-surf-white/70 leading-relaxed mb-6">
                  {program.tagline}
                </p>

                <ul className="space-y-2.5 mb-8 text-xs sm:text-sm font-light text-surf-white/80">
                  {(program.bullets || []).map((b: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check size={14} className="text-surf-accent mt-1 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-surf-white/10 flex flex-col gap-3">
                <Link 
                  to={program.path}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-surf-accent hover:text-surf-white transition-colors"
                >
                  <span className="underline underline-offset-4">{program.cta}</span>
                  <ArrowRight size={14} />
                </Link>
                <Link 
                  to={`/booking?program=${program.id}`}
                  className="text-[11px] font-mono uppercase tracking-wider text-surf-white/50 hover:text-surf-white transition-colors"
                >
                  Book Slot Directly →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Multi-Day Progression Packages - Open Editorial Section */}
        <div className="py-16 border-t border-b border-surf-white/10 mb-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent block mb-3">
                {data.packagesSubtitle || 'True transformation happens over several tides.'}
              </span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none mb-6 text-surf-white">
                {data.packagesTitle || '3 & 5 Day Progression Packages'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-display text-xl uppercase tracking-tight text-surf-white">{data.packages3Day}</h4>
                  <p className="text-xs sm:text-sm font-light text-surf-white/70 mt-1">{data.packages3DayDesc}</p>
                </div>
                <div>
                  <h4 className="font-display text-xl uppercase tracking-tight text-surf-white">{data.packages5Day}</h4>
                  <p className="text-xs sm:text-sm font-light text-surf-white/70 mt-1">{data.packages5DayDesc}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:items-end justify-center">
              <Link 
                to="/booking?program=camp5"
                className="py-4 px-8 bg-surf-accent hover:bg-surf-white text-surf-black font-display text-lg uppercase tracking-wider transition-colors inline-flex items-center gap-2 text-center"
              >
                <span>{data.packagesCta || 'Book Multi-Day Package'}</span>
                <ArrowRight size={18} />
              </Link>
              <span className="text-[10px] font-mono text-surf-white/50 mt-3">
                Includes full video analysis archive & rash guard
              </span>
            </div>
          </div>
        </div>

        {/* Standard Inclusions - Editorial Layout (No AI icons) */}
        <div className="py-14 border-b border-surf-white/10 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent block mb-2">
              Every Session Standard
            </span>
            <h3 className="font-display text-2xl sm:text-4xl uppercase tracking-tight text-surf-white">
              Standard with Every First Peak Session
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t border-surf-white/15 pt-5">
              <span className="font-mono text-xs uppercase tracking-widest text-surf-accent block mb-2">01 / Safety</span>
              <h5 className="font-display text-xl uppercase tracking-tight mb-2 text-surf-white">Pediatric Ocean CPR</h5>
              <p className="text-xs sm:text-sm font-light text-surf-white/60 leading-relaxed">
                Red Cross CPR certified coaches & trained ocean lifeguards vigilant in every session.
              </p>
            </div>
            <div className="border-t border-surf-white/15 pt-5">
              <span className="font-mono text-xs uppercase tracking-widest text-surf-accent block mb-2">02 / Footage</span>
              <h5 className="font-display text-xl uppercase tracking-tight mb-2 text-surf-white">Beach Telephoto Video</h5>
              <p className="text-xs sm:text-sm font-light text-surf-white/60 leading-relaxed">
                HD wave-riding video footage captured from shore, delivered directly to your phone.
              </p>
            </div>
            <div className="border-t border-surf-white/15 pt-5">
              <span className="font-mono text-xs uppercase tracking-widest text-surf-accent block mb-2">03 / Equipment</span>
              <h5 className="font-display text-xl uppercase tracking-tight mb-2 text-surf-white">Custom Boards & Gear</h5>
              <p className="text-xs sm:text-sm font-light text-surf-white/60 leading-relaxed">
                Safe soft-top boards, reef-safe mineral zinc, and UPF 50+ rashguards included at no extra fee.
              </p>
            </div>
            <div className="border-t border-surf-white/15 pt-5">
              <span className="font-mono text-xs uppercase tracking-widest text-surf-accent block mb-2">04 / Tide Policy</span>
              <h5 className="font-display text-xl uppercase tracking-tight mb-2 text-surf-white">Tide-Synchronized</h5>
              <p className="text-xs sm:text-sm font-light text-surf-white/60 leading-relaxed">
                Coordinated specifically around low tide for the calmest, safest waves in Nosara.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
