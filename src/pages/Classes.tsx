import { motion } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { ArrowRight, Check, Clock, Users, Video, ShieldAlert, Sparkles } from 'lucide-react';
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

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-28">
          {programs.map((program: any, idx: number) => (
            <motion.div 
              key={program.id || idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="border border-surf-white/10 bg-surf-black flex flex-col justify-between group hover:border-surf-accent transition-colors duration-500 overflow-hidden relative"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-surf-black/80 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-surf-accent border border-surf-accent/30">
                  {program.ratio}
                </div>
              </div>

              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-3xl font-display text-surf-white">{program.price}</span>
                    <span className="text-xs font-mono text-surf-white/50">{program.duration}</span>
                  </div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-surf-accent mb-6">
                    {program.priceNote}
                  </p>

                  <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight mb-3 text-surf-white">
                    {program.title}
                  </h2>
                  <p className="text-sm font-light text-surf-white/70 leading-relaxed mb-8">
                    {program.tagline}
                  </p>

                  <ul className="space-y-3 mb-10 text-xs sm:text-sm font-light text-surf-white/80">
                    {(program.bullets || []).map((b: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={14} className="text-surf-accent mt-1 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-surf-white/10 flex flex-col gap-3">
                  <Link 
                    to={program.path}
                    className="w-full py-3.5 bg-surf-white text-surf-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-accent hover:text-surf-black transition-colors text-center"
                  >
                    {program.cta}
                  </Link>
                  <Link 
                    to={`/booking?program=${program.id}`}
                    className="w-full py-2.5 border border-surf-white/20 text-surf-white font-bold uppercase text-[10px] tracking-[0.2em] hover:border-surf-white text-center transition-colors"
                  >
                    Quick Book Slot →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Multi-Day Progression Packages Banner */}
        <div className="bg-surf-white text-surf-black p-8 sm:p-16 border-l-4 border-surf-accent mb-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-[10px] uppercase font-mono tracking-[0.5em] opacity-50 block mb-3">
                {data.packagesSubtitle || 'True transformation happens over several tides.'}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase leading-none mb-6">
                {data.packagesTitle || '3 & 5 Day Progression Packages'}
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-surf-black/5 border-l-2 border-surf-black">
                  <h4 className="font-bold uppercase text-sm tracking-tight">{data.packages3Day}</h4>
                  <p className="text-xs sm:text-sm font-light opacity-75 mt-1">{data.packages3DayDesc}</p>
                </div>
                <div className="p-4 bg-surf-black/5 border-l-2 border-surf-accent">
                  <h4 className="font-bold uppercase text-sm tracking-tight text-surf-accent">{data.packages5Day}</h4>
                  <p className="text-xs sm:text-sm font-light opacity-75 mt-1">{data.packages5DayDesc}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:items-end justify-center">
              <Link 
                to="/booking?program=camp5"
                className="px-8 py-5 bg-surf-black text-surf-white uppercase text-xs font-bold tracking-[0.2em] hover:bg-surf-accent hover:text-surf-black transition-colors w-full sm:w-auto text-center"
              >
                {data.packagesCta || 'Book Multi-Day Package'}
              </Link>
              <span className="text-[10px] font-mono opacity-50 mt-3">
                Includes full video analysis archive & rash guard
              </span>
            </div>
          </div>
        </div>

        {/* Standard Inclusions Checklist */}
        <div className="border border-surf-white/10 p-8 sm:p-12 mb-20">
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight mb-6 text-center">
            Standard with Every First Peak Session
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border border-surf-white/5">
              <ShieldAlert className="w-6 h-6 text-surf-accent mx-auto mb-2" />
              <h5 className="text-xs font-bold uppercase tracking-wider mb-1">Pediatric Safety</h5>
              <p className="text-[11px] font-light text-surf-white/60">Red Cross certified CPR & lifeguards</p>
            </div>
            <div className="p-4 border border-surf-white/5">
              <Video className="w-6 h-6 text-surf-accent mx-auto mb-2" />
              <h5 className="text-xs font-bold uppercase tracking-wider mb-1">Video Clips</h5>
              <p className="text-[11px] font-light text-surf-white/60">HD footage sent to your device</p>
            </div>
            <div className="p-4 border border-surf-white/5">
              <Sparkles className="w-6 h-6 text-surf-accent mx-auto mb-2" />
              <h5 className="text-xs font-bold uppercase tracking-wider mb-1">Premium Gear</h5>
              <p className="text-[11px] font-light text-surf-white/60">Soft-top boards & UPF 50+ rashguards</p>
            </div>
            <div className="p-4 border border-surf-white/5">
              <Clock className="w-6 h-6 text-surf-accent mx-auto mb-2" />
              <h5 className="text-xs font-bold uppercase tracking-wider mb-1">Tide Optimized</h5>
              <p className="text-[11px] font-light text-surf-white/60">Timed for the calmest, safest waves</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
