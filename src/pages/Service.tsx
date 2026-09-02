import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Service() {
  const { t } = useLanguage();
  const data = t('service');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  return (
    <section className="min-h-screen bg-surf-black w-full flex flex-col pt-32 pb-20 px-6">
      <div className="max-w-[1400px] w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-5xl md:text-[8vw] lg:text-[7vw] uppercase leading-[0.9] text-surf-white break-words whitespace-pre-line"
          >
            {data.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg font-light text-surf-white max-w-md pb-2 md:pb-4"
          >
            {data.subtitle}
          </motion.p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-10">
          {data.items.map((item: any, i: number) => (
            <motion.div 
              key={item.name}
              id={`service-${i}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="flex flex-col group pt-20 -mt-20"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-8">
                <img 
                  src={item.image} 
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out" 
                  alt={`${item.name} surf lesson in Playa Guiones, Nosara - First Peak Surf`}
                />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-display uppercase tracking-tighter mb-4 text-surf-white whitespace-pre-line leading-[0.9]">
                {item.name}
              </h3>
              
              <p className="text-surf-accent opacity-90 text-sm md:text-base font-medium mb-6 min-h-[3rem]">
                {item.tagline}
              </p>
              
              <ul className="text-surf-white/60 text-sm font-light space-y-3 mb-10 flex-1">
                {item.bullets.map((bullet: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-surf-accent mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <a href="/contact" className="flex items-center gap-4 group/btn w-max mt-auto">
                <span className="text-xs font-bold uppercase border-b-2 border-surf-white/30 group-hover/btn:border-surf-white pb-1 text-surf-white transition-colors">
                  {item.cta}
                </span>
                <div className="w-8 h-8 rounded-full border border-surf-white/30 group-hover/btn:border-surf-white flex items-center justify-center group-hover/btn:bg-surf-white group-hover/btn:text-surf-black transition-all duration-300">
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Packages Banner */}
        <motion.div 
          id="packages"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-32 pt-28 md:pt-36 -mt-12 border-t border-surf-white/10 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase text-surf-white leading-[0.9] whitespace-pre-line">
              {data.packagesTitle}
            </h2>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-surf-white/70 font-light text-base md:text-lg mb-10">
              {data.packagesDesc}
            </p>
            <a href="/contact" className="inline-flex items-center group">
              <span className="text-xs font-bold uppercase px-8 py-5 border border-surf-accent bg-surf-accent text-surf-black hover:bg-transparent hover:text-surf-accent transition-all duration-300 tracking-[0.2em]">
                {data.packagesCta}
              </span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
