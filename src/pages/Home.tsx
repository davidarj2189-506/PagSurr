import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ShieldCheck, Video, HeartHandshake, Waves, MessageCircle, Star, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useLanguage();
  const data = t('home') || {};
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState('hero');

  const diffIcons = [
    <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-surf-accent" />,
    <HeartHandshake className="w-6 h-6 sm:w-8 sm:h-8 text-surf-accent" />,
    <Video className="w-6 h-6 sm:w-8 sm:h-8 text-surf-accent" />,
    <Waves className="w-6 h-6 sm:w-8 sm:h-8 text-surf-accent" />
  ];

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'differentiators', label: 'The Difference' },
    { id: 'programs', label: 'Programs' },
    { id: 'video-analysis', label: 'Video Analysis' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Book & Contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Section Navigation Dots (Desktop / Tablet) */}
      <nav 
        aria-label="Section navigation"
        className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3.5 pointer-events-auto"
      >
        {sections.map((sec, idx) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="group relative flex items-center justify-center p-1.5 focus:outline-none"
              aria-label={`Scroll to ${sec.label}`}
            >
              {/* Tooltip Label */}
              <span className="absolute right-7 px-2.5 py-1 bg-surf-black/90 text-surf-white text-[10px] font-mono uppercase tracking-widest border border-surf-white/10 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
                {sec.label}
              </span>

              {/* Dot Indicator */}
              <span 
                className={`block rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'w-3 h-3 bg-surf-accent shadow-[0_0_10px_rgba(255,78,0,0.9)] scale-110' 
                    : 'w-1.5 h-1.5 bg-surf-white/40 group-hover:bg-surf-white group-hover:scale-125'
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* 1. Hero Section */}
      <section 
        id="hero" 
        className="section-full bg-surf-black text-surf-white px-6 py-10 sm:py-12 flex flex-col justify-between items-center"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 0.25], [0, 140]) }}
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 grayscale brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surf-black via-surf-black/40 to-transparent" />
        </div>

        {/* Top spacer for header */}
        <div className="w-full h-10" />

        {/* Center Content */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 text-center max-w-5xl mx-auto w-full flex flex-col items-center justify-center my-auto"
        >
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.4em] text-surf-accent mb-3 sm:mb-4">
            Nosara, Costa Rica • Boutique Kids & Family Surf School
          </p>

          <h1 className="hero-text text-surf-white select-none">
            {data.heroTitle || 'FIRST PEAK'}
          </h1>

          <p className="text-sm sm:text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mt-3 sm:mt-5 text-surf-white/85 leading-relaxed">
            "{data.heroSubtitle || 'Where first waves become forever memories.'}"
          </p>

          {/* Clean Editorial Links (No Boxed Buttons) */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-6 sm:mt-8">
            <Link 
              to="/booking"
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-surf-accent hover:text-surf-white border-b-2 border-surf-accent hover:border-surf-white pb-1 transition-all inline-flex items-center gap-2 group"
            >
              <span>{data.ctaBookBtn || 'Book Session'}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a 
              href="https://wa.me/50688997873?text=Hola%20Bryan!%20I%20would%20like%20to%20inquire%20about%20surf%20lessons%20in%20Nosara"
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-surf-white/80 hover:text-surf-accent border-b border-surf-white/30 hover:border-surf-accent pb-1 transition-all inline-flex items-center gap-2 group"
            >
              <MessageCircle size={14} className="text-surf-accent" />
              <span>{data.ctaWhatsappBtn || 'WhatsApp Us'}</span>
            </a>
          </div>
        </motion.div>

        {/* Clickable Scroll Prompt at Bottom */}
        <button 
          onClick={() => scrollTo('philosophy')}
          className="z-20 flex flex-col items-center gap-1.5 text-surf-white/50 hover:text-surf-accent transition-colors focus:outline-none cursor-pointer pb-2"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] font-mono">Scroll</span>
          <ChevronDown size={16} className="animate-bounce text-surf-accent" />
        </button>
      </section>

      {/* 2. Philosophy & Safety Section (Light Canvas) */}
      <section 
        id="philosophy" 
        className="section-full bg-surf-white text-surf-black px-6 sm:px-12 py-8 sm:py-10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center my-auto"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 block mb-2">
              {data.aboutConnection || '01 / Safety & Philosophy'}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl uppercase leading-[0.92] mb-5">
              {data.aboutTitle || 'Gentle Waves. Big Smiles.'}
            </h2>
            <p className="text-sm sm:text-base font-light leading-relaxed max-w-xl opacity-85 mb-3">
              {data.aboutDesc || 'Located on the warm, sand-bottom shores of Playa Guiones, First Peak Surf is designed specifically for children (ages 6–12) and families. We combine calm, positive pedagogy with unmatched ocean safety standards to ensure every session is pure joy.'}
            </p>
            <p className="text-xs sm:text-sm font-light leading-relaxed max-w-xl opacity-70 mb-6">
              Under the guidance of Coach Bryan, every session is timed with the gentlest low-tide conditions, utilizing high-buoyancy soft-top boards and real-time video feedback to turn timid first-timers into beaming, confident wave riders.
            </p>

            <Link 
              to="/about" 
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-surf-black pb-1 hover:text-surf-accent hover:border-surf-accent transition-colors inline-flex items-center gap-2 group"
            >
              <span>{data.aboutBtn || 'Meet Coach Bryan'}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/3] max-h-[42vh] w-full overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-out"
              alt="Kids surfing in Nosara"
            />
            <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-surf-black/90 text-surf-white backdrop-blur-sm border-l-2 border-surf-accent">
              <p className="text-[9px] font-mono tracking-widest uppercase opacity-60">Playa Guiones • Blue Zone Costa Rica</p>
              <p className="text-xs font-semibold mt-0.5">"The safest sand-bottom surf classroom on earth."</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Differentiators Section (Dark Canvas) - No Boxed Cards */}
      <section 
        id="differentiators" 
        className="section-full bg-surf-black text-surf-white px-6 sm:px-12 py-8 sm:py-10 border-t border-surf-white/10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto w-full flex flex-col justify-center my-auto"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 sm:mb-8 gap-4">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-[0.5em] text-surf-accent block mb-1.5">
                {data.differentiatorsSubtitle || 'Why Parents Trust Us'}
              </span>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase leading-none">
                {data.differentiatorsTitle || 'The First Peak Difference'}
              </h2>
            </div>
            <Link 
              to="/faq" 
              className="text-xs font-bold uppercase tracking-widest text-surf-white/60 hover:text-surf-accent transition-colors flex items-center gap-2 shrink-0 border-b border-surf-white/20 pb-0.5 hover:border-surf-accent"
            >
              <span>Explore Safety FAQs</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Clean Columns without Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {(data.differentiators || []).map((diff: any, idx: number) => (
              <div 
                key={diff.title}
                className="flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-surf-white/10">
                    <span className="font-display text-2xl text-surf-accent">{diff.num}</span>
                    <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                      {diffIcons[idx % diffIcons.length]}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight mb-2 text-surf-white group-hover:text-surf-accent transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-surf-white/70 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Minimalist Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 sm:mt-8 pt-6 border-t border-surf-white/10 text-center">
            <div>
              <div className="font-display text-3xl sm:text-5xl text-surf-accent">1:3</div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-surf-white/50 font-mono mt-0.5">
                {data.statsRatioLabel || 'Max Ratio'}
              </p>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-5xl text-surf-white">100%</div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-surf-white/50 font-mono mt-0.5">
                {data.statsSafetyLabel || 'Safety Record'}
              </p>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-5xl text-surf-accent">6–12</div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-surf-white/50 font-mono mt-0.5">
                {data.statsAgeLabel || 'Grom Age Focus'}
              </p>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-5xl text-surf-white">300+</div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-surf-white/50 font-mono mt-0.5">
                {data.statsBeachLabel || 'Days Waves/Year'}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Programs Overview Section (Light Canvas) - No Boxed Cards */}
      <section 
        id="programs" 
        className="section-full bg-surf-white text-surf-black px-6 sm:px-12 py-8 sm:py-10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto w-full flex flex-col justify-center my-auto"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 sm:mb-8 gap-4">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-[0.5em] opacity-40 block mb-1.5">
                {data.servicesSubtitle || 'Crafted for Every Family Need'}
              </span>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase leading-none">
                {data.servicesTitle || 'Our Programs'}
              </h2>
            </div>
            <Link 
              to="/classes" 
              className="text-xs font-bold uppercase tracking-widest border-b-2 border-surf-black pb-1 hover:text-surf-accent hover:border-surf-accent transition-colors shrink-0"
            >
              Compare All Programs & Rates →
            </Link>
          </div>

          {/* Clean Editorial Columns without Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {(data.servicesItems || []).map((service: any, i: number) => (
              <Link 
                to={service.path || '/classes'}
                key={service.title}
                className="group flex flex-col justify-between pb-4 border-b border-surf-black/10 hover:border-surf-accent transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-surf-accent">0{i + 1}</span>
                    <span className="text-[9px] uppercase tracking-widest font-mono text-surf-black/60">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-surf-accent transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-light opacity-75 leading-relaxed line-clamp-3">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-3 mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider group-hover:text-surf-accent transition-colors">
                  <span>View Details</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. Video Analysis Section (Dark Canvas) */}
      <section 
        id="video-analysis" 
        className="section-full bg-surf-black text-surf-white px-6 sm:px-12 py-8 sm:py-10 border-t border-surf-white/10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto"
        >
          <div className="lg:col-span-7">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.4em] text-surf-accent block mb-2">
              Included in Every Session
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase leading-none mb-4">
              {data.videoBannerTitle || 'See the Joy in Action'}
            </h2>
            <p className="text-sm sm:text-base font-light text-surf-white/80 leading-relaxed mb-5 max-w-2xl">
              {data.videoBannerSubtitle || 'Video analysis isn’t an extra charge here—it’s fundamental to our teaching and your family memories. Our beach team captures crisp telephoto footage so your child can review their pop-up and celebrate every breakthrough.'}
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-surf-white/70 mb-6">
              <span>• 4K/HD Beachside Recording</span>
              <span>• iPad Slow-Motion Review</span>
              <span>• Digital Transfer to Your Phone</span>
            </div>

            <Link 
              to="/booking"
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-surf-accent hover:text-surf-white border-b-2 border-surf-accent hover:border-surf-white pb-1 transition-colors inline-flex items-center gap-2 group"
            >
              <span>Book with Free Video</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-5 relative aspect-video max-h-[40vh] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80" 
              alt="Video analysis of surfer"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-surf-black/40 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-surf-accent/90 text-surf-black flex items-center justify-center pl-0.5 shadow-lg">
                <Video size={20} />
              </div>
            </div>
            <div className="absolute bottom-2 left-2 right-2 p-2 bg-surf-black/85 backdrop-blur-sm text-surf-white text-[9px] font-mono uppercase tracking-wider flex justify-between">
              <span>Beach Telephoto Angle</span>
              <span className="text-surf-accent">● LIVE RECORD</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. Testimonials Section (Light Canvas) - No Boxed Cards */}
      <section 
        id="testimonials" 
        className="section-full bg-surf-white text-surf-black px-6 sm:px-12 py-8 sm:py-10 border-t border-surf-black/10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto w-full flex flex-col justify-center my-auto"
        >
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40 block mb-1.5">
              Guest Experiences
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase leading-none">
              {data.testimonialsTitle || 'What Families Say'}
            </h2>
          </div>

          {/* Clean Open Editorial Quotes */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {(data.testimonials || []).map((item: any, idx: number) => (
              <div 
                key={idx} 
                className="flex flex-col justify-between border-l-2 border-surf-black/20 pl-5"
              >
                <div>
                  <div className="flex gap-1 text-surf-accent mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base font-light leading-relaxed italic opacity-85 mb-4">
                    "{item.quote}"
                  </p>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tight text-xs sm:text-sm">{item.parent}</h4>
                  <span className="text-[10px] font-mono opacity-50">{item.from}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.3em] opacity-50">
              ★ 5.0 Rating on Google & TripAdvisor • 100% Certified Coaches
            </span>
          </div>
        </motion.div>
      </section>

      {/* 7. Bottom CTA & Footer Section (Dark Canvas) */}
      <section 
        id="contact" 
        className="section-full bg-surf-black text-surf-white px-6 sm:px-12 pt-12 pb-6 flex flex-col justify-between items-center"
      >
        <div className="w-full h-4" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center relative z-10 my-auto"
        >
          <span className="text-[10px] uppercase font-mono tracking-[0.6em] text-surf-accent block mb-3">
            {data.contactPre || 'Direct Connection'}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-none mb-4">
            {data.ctaBannerTitle || 'Ready for Your Family’s First Wave?'}
          </h2>
          <p className="text-sm sm:text-base font-light text-surf-white/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            {data.ctaBannerText || 'Spaces are limited to ensure strict 1:3 ratios. Reserve your session in Playa Guiones or message us directly on WhatsApp.'}
          </p>

          {/* Clean Editorial Links without Boxed Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <Link 
              to="/booking"
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-surf-accent hover:text-surf-white border-b-2 border-surf-accent hover:border-surf-white pb-1 transition-colors inline-flex items-center gap-2 group"
            >
              <span>{data.ctaBookBtn || 'Book Session'}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="https://wa.me/50688997873?text=Hola%20Bryan!%20I%20would%20like%20to%20inquire%20about%20surf%20lessons%20in%20Playa%20Guiones"
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-surf-white/80 hover:text-surf-accent border-b border-surf-white/30 hover:border-surf-accent pb-1 transition-colors inline-flex items-center gap-2 group"
            >
              <MessageCircle size={14} className="text-surf-accent" />
              <span>{data.ctaWhatsappBtn || 'WhatsApp Concierge'}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Docked Footer */}
        <footer className="w-full pt-4 border-t border-surf-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-[9px] uppercase tracking-[0.25em] font-mono text-surf-white/40 max-w-7xl mx-auto">
          <span>{data.footer1 || '© 2026 First Peak Surf Nosara'}</span>
          <span>{data.footer2 || 'Playa Guiones, Guanacaste, Costa Rica'}</span>
          <span>{data.footer3 || 'Where First Waves Become Forever Memories'}</span>
        </footer>
      </section>
    </>
  );
}
