import { motion } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Us() {
  const { t } = useLanguage();
  const data = t('us');

  return (
    <section className="min-h-screen relative overflow-hidden bg-surf-white text-surf-black pt-32 pb-20 px-6">
      
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto z-10 text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.4, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] font-bold uppercase tracking-[0.8em] opacity-80 block mb-6 px-4"
        >
          {data.subtitle}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-none mb-12"
        >
          {data.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-3xl font-light leading-relaxed max-w-3xl mx-auto"
        >
          {data.intro}
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="w-full h-px bg-surf-black/10 mb-12" />
      </div>

      {/* Sections Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20">
        {data.sections.map((section: any, idx: number) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="flex flex-col"
          >
            <h3 className="font-display text-2xl lg:text-4xl uppercase mb-6 leading-[0.9]">
              {section.subtitle}
            </h3>
            <p className="text-base font-light opacity-80 mt-auto leading-relaxed">
              {section.paragraph}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Image Ribbon */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full h-[40vh] min-h-[300px] mb-20 relative overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80" 
          alt="Surfing in Playa Guiones at sunset in Nosara, Costa Rica - First Peak Surf"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-[2s]"
        />
      </motion.div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 mb-24">
        <div className="md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl lg:text-6xl uppercase leading-none"
          >
            {data.whyTitle}
          </motion.h2>
        </div>
        <div className="md:w-2/3 border-l-2 border-surf-black pl-8 lg:pl-16 flex flex-col gap-12 text-surf-black">
          {data.whyBullets.map((bullet: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h4 className="text-xl lg:text-2xl font-bold uppercase mb-4 tracking-tighter text-surf-accent">
                {bullet.title}
              </h4>
              <p className="font-light text-lg opacity-80 leading-relaxed">
                {bullet.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer / CTA - Open Editorial Layout */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t border-surf-black/15 pt-16 pb-8 max-w-4xl mx-auto text-center"
      >
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase mb-6 leading-none text-surf-black">
          {data.ctaTitle}
        </h2>
        <p className="text-base sm:text-lg font-light text-surf-black/80 mb-8 max-w-xl mx-auto leading-relaxed">
          {data.ctaText}
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-surf-black hover:text-surf-accent border-b-2 border-surf-black hover:border-surf-accent pb-1 transition-colors group"
        >
          <span>{data.ctaTitle}</span>
          <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </motion.div>

    </section>
  );
}
