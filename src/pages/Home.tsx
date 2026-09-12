import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Waves, MessageCircle, Star, ChevronDown, Check, Play, Camera, MapPin, ChevronLeft, ChevronRight, X, Sparkles, ZoomIn } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getHomePageSchema } from '../utils/schemaGenerator';
import { POLAROID_GALLERY, PolaroidPhoto } from '../data/polaroids';
import { useHeaderImage, useGalleryImages } from '../lib/useMedia';

export default function Home() {
  const { t, language } = useLanguage();
  const data = t('home') || {};
  const { headerImage } = useHeaderImage();
  const { images: galleryImages } = useGalleryImages();
  const [activePolaroidIndex, setActivePolaroidIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 'hero', name: 'Intro', isDark: true },
    { id: 'philosophy', name: 'Philosophy', isDark: false },
    { id: 'programs', name: 'Programs', isDark: false },
    { id: 'differentiators', name: 'Why Us', isDark: true },
    { id: 'gallery', name: language === 'en' ? 'Polaroids' : 'Polaroids', isDark: true },
    { id: 'testimonials', name: 'Reviews', isDark: false },
    { id: 'contact', name: 'Reserve', isDark: true }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection(sections.length - 1);
        return;
      }
      const scrollPos = window.scrollY + window.innerHeight / 2;
      sections.forEach((sec, idx) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(idx);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const programsData = [
    {
      title: 'Kids Surf Lessons',
      path: '/classes/kids',
      tag: 'Ages 6-12',
      desc: 'Dedicated kids surf lessons in gentle whitewater at Playa Guiones, Nosara. Safe, supportive coaching with custom soft-top boards, strict 1:3 ratio, and video capture.'
    },
    {
      title: 'Family Surf',
      path: '/classes/family',
      tag: 'All Generations',
      desc: 'Catch waves together during stunning Pacific sunsets in Nosara, Costa Rica. Two coaches accompany your family to balance parent and child paces with shared video analysis.'
    },
    {
      title: 'Private Coaching',
      path: '/classes/private',
      tag: '1-on-1 Focus',
      desc: '1-on-1 private VIP coaching with ISA Level 2 Coach Bryan at Playa Guiones. Tailored for rapid skill progression, wave selection, and in-depth video review in the Blue Zone.'
    }
  ];

  const differentiatorsData = [
    {
      num: '01',
      title: 'Max 1:3 Instructor Ratio',
      desc: 'Every lesson in Playa Guiones caps at 3 children per instructor. Uncompromising personal ocean attention and hands-on wave catching in Costa Rica’s Blue Zone.'
    },
    {
      num: '02',
      title: 'Video Analysis Included',
      desc: 'Beach telephoto 4K footage included with every session. Review pop-up mechanics on iPad and take home lifelong family memories of sunset waves in Nosara.'
    },
    {
      num: '03',
      title: 'Pediatric First-Aid Certified',
      desc: 'All coaches maintain dual certifications in International Surfing Association (ISA) surf coaching and Red Cross Pediatric Ocean CPR & Water Lifeguarding.'
    }
  ];

  return (
    <main className="relative bg-surf-black">
      <SEO 
        title="First Peak Surf | Kids & Family Surf School Nosara, Costa Rica"
        description="Where first waves become forever memories. Family surf coaching at sunset in Playa Guiones, Nosara. Safe, personalized lessons for kids in Costa Rica's Blue Zone."
        canonical="https://firstpeaksurf.com"
        ogImage="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80"
        schemaData={getHomePageSchema()}
      />

      {/* Modern Editorial Dot Navigation on Right Edge */}
      {(() => {
        const isCurrentDark = sections[activeSection]?.isDark ?? true;
        return (
          <nav aria-label="Page navigation" className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
            {sections.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className="group flex items-center justify-end gap-2 focus:outline-none cursor-pointer py-0.5"
                aria-label={`Scroll to ${sec.name}`}
              >
                <span 
                  className={`text-[9px] uppercase tracking-widest font-mono transition-all duration-300 ${
                    activeSection === idx 
                      ? 'text-surf-accent opacity-100 font-bold' 
                      : isCurrentDark 
                        ? 'text-surf-white/70 opacity-0 group-hover:opacity-100' 
                        : 'text-surf-black/80 opacity-0 group-hover:opacity-100 font-medium'
                  }`}
                >
                  {sec.name}
                </span>
                <div 
                  className={`w-1.5 transition-all duration-300 ${
                    activeSection === idx 
                      ? 'h-6 bg-surf-accent rounded-none' 
                      : isCurrentDark
                        ? 'h-1.5 bg-surf-white/35 group-hover:bg-surf-white group-hover:h-3 rounded-none'
                        : 'h-1.5 bg-surf-black/40 group-hover:bg-surf-black group-hover:h-3 rounded-none'
                  }`} 
                />
              </button>
            ))}
          </nav>
        );
      })()}

      {/* 1. HERO SECTION (Dark Canvas) - Surf Magazine Editorial Layout */}
      <header 
        id="hero" 
        className="section-full relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between items-start p-6 sm:p-12 lg:px-16 overflow-hidden"
      >
        {/* Ambient Wave Background Image - Automatically uses image from public/header */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            style={{ 
              y: useTransform(scrollYProgress, [0, 0.25], [0, 140]),
              backgroundImage: `url('${headerImage}')`
            }}
            className="w-full h-full bg-cover bg-center opacity-95 brightness-105 contrast-[1.02] scale-105"
          />
          {/* Subtle soft gradient scrim on left only for high-contrast text readability without darkening the photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-surf-black/80 via-surf-black/35 to-transparent w-full sm:w-2/3 lg:w-1/2" />
          <div className="absolute inset-0 bg-gradient-to-t from-surf-black/75 via-transparent to-surf-black/20" />
        </div>

        {/* Top spacer for header */}
        <div className="w-full h-12" />

        {/* Left-Aligned Magazine Cover Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto flex flex-col items-start justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-left max-w-xl lg:max-w-2xl"
          >
            {/* Magazine Category Accent Eyebrow */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-6 sm:w-10 h-[2px] bg-surf-accent shrink-0" />
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.35em] text-surf-accent">
                Nosara, Costa Rica • Boutique Kids & Family Surf School
              </p>
            </div>

            {/* EXACT H1 as required */}
            <h1 id="main-heading" className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.92] text-surf-white select-none tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              Where first waves become forever memories.
            </h1>

            {/* EXACT Hero Summary Paragraph as required */}
            <p id="hero-summary" className="text-sm sm:text-base md:text-lg font-light tracking-wide max-w-lg mt-4 sm:mt-5 text-surf-white/95 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              Family surf coaching at sunset in Playa Guiones, Nosara. Safe, personalized lessons for kids in Costa Rica's Blue Zone.
            </p>

            {/* Editorial Action Links */}
            <div className="flex flex-wrap items-center justify-start gap-6 sm:gap-8 mt-6 sm:mt-8">
              <Link 
                to="/booking"
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-surf-accent hover:text-surf-white border-b-2 border-surf-accent hover:border-surf-white pb-1 transition-all inline-flex items-center gap-2 group"
              >
                <span>{data.ctaBookBtn || 'Book Session'}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                to="/contact"
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-surf-white/80 hover:text-surf-accent border-b border-surf-white/30 hover:border-surf-accent pb-1 transition-all inline-flex items-center gap-2 group"
              >
                <span>Contact Coach Bryan</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Clickable Scroll Prompt at Bottom */}
        <div className="relative z-20 w-full flex justify-center pb-2">
          <button 
            onClick={() => scrollTo('philosophy')}
            className="flex flex-col items-center gap-1.5 text-surf-white/50 hover:text-surf-accent transition-colors focus:outline-none cursor-pointer"
            aria-label="Scroll to philosophy section"
          >
            <span className="text-[9px] uppercase tracking-[0.4em] font-mono">Scroll</span>
            <ChevronDown size={16} className="animate-bounce text-surf-accent" />
          </button>
        </div>
      </header>

      {/* 2. Philosophy & Safety Section (Light Canvas) - GEO & AEO Content */}
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
              01 / Safety & Philosophy
            </span>
            <div className="font-display text-4xl sm:text-5xl lg:text-7xl uppercase leading-[0.92] mb-5">
              Gentle Waves. Big Smiles.
            </div>
            <p className="text-sm sm:text-base font-light leading-relaxed max-w-xl opacity-85 mb-3">
              Yes, children can learn to surf from age 6 at Playa Guiones in Nosara. Our ISA-certified instructors use soft-top boards in the whitewater zone, with the warm Pacific waters and stunning sunsets of Costa Rica's Blue Zone creating the perfect learning environment.
            </p>
            <p className="text-xs sm:text-sm font-light leading-relaxed max-w-xl opacity-70 mb-6">
              Located on the sunny shores of the Península de Nicoya, our surf lessons in Nosara, Costa Rica are strictly synchronized with low-tide windows so children stand comfortably on soft sand while catching rolling Pacific waves.
            </p>

            <Link 
              to="/about" 
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-surf-black pb-1 hover:text-surf-accent hover:border-surf-accent transition-colors inline-flex items-center gap-2 group"
            >
              <span>{data.aboutBtn || 'Meet Coach Bryan'}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/3] max-h-[42vh] w-full overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-1000 ease-out" 
                alt="Kids surf lesson at sunset in Playa Guiones, Nosara - First Peak Surf"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="pt-2.5 flex justify-between items-center text-[10px] font-mono text-surf-black/60 uppercase tracking-widest border-t border-surf-black/10 mt-2">
              <span>Playa Guiones • Blue Zone</span>
              <span>Safe Sand-Bottom Waves</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. PROGRAMS OVERVIEW SECTION (Light Canvas) - EXACT H2 & H3s */}
      <section 
        id="programs" 
        className="section-full bg-surf-white text-surf-black px-6 sm:px-12 py-8 sm:py-10 border-t border-surf-black/10"
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
                Playa Guiones Surf Experiences
              </span>
              {/* EXACT H2 as required */}
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase leading-none">
                Surf lessons designed for kids and families in Nosara
              </h2>
            </div>
            <Link 
              to="/classes" 
              className="text-xs font-bold uppercase tracking-widest border-b-2 border-surf-black pb-1 hover:text-surf-accent hover:border-surf-accent transition-colors shrink-0"
            >
              Compare All Programs & Rates →
            </Link>
          </div>

          {/* Clean Editorial Columns with EXACT H3 tags */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {programsData.map((service, i) => (
              <article 
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
                  {/* EXACT H3 as required */}
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-surf-accent transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-light opacity-75 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <Link 
                  to={service.path}
                  className="pt-3 mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider group-hover:text-surf-accent transition-colors"
                >
                  <span>Explore Program</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. DIFFERENTIATORS SECTION (Dark Canvas) - EXACT H2 & H3s */}
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
                Safety & Excellence
              </span>
              {/* EXACT H2 as required */}
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase leading-none">
                Why families choose First Peak Surf
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

          {/* Clean Editorial Columns with EXACT H3 tags */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {differentiatorsData.map((diff) => (
              <article 
                key={diff.title}
                className="flex flex-col justify-between group border-t border-surf-white/15 pt-4"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-surf-accent block mb-2">
                    {diff.num}
                  </span>
                  {/* EXACT H3 as required */}
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight mb-2 text-surf-white group-hover:text-surf-accent transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-surf-white/70 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Minimalist Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 sm:mt-8 pt-6 border-t border-surf-white/10 text-center">
            <div>
              <div className="font-display text-3xl sm:text-5xl text-surf-accent">1:3</div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-surf-white/50 font-mono mt-0.5">
                Max Student Ratio
              </p>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-5xl text-surf-white">100%</div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-surf-white/50 font-mono mt-0.5">
                Safety Record
              </p>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-5xl text-surf-accent">6–12</div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-surf-white/50 font-mono mt-0.5">
                Kids Age Focus
              </p>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-5xl text-surf-white">300+</div>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-surf-white/50 font-mono mt-0.5">
                Days Waves/Year
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. POLAROID RETRO GALLERY SECTION (Dark Canvas) */}
      <section 
        id="gallery" 
        className="section-full bg-surf-black text-surf-white px-4 sm:px-8 lg:px-12 py-3 sm:py-6 border-t border-surf-white/10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-6 lg:gap-10 items-center my-auto"
        >
          {/* Left Column: Reduced, Clean & Minimal Editorial Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-surf-accent text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] mb-2">
              <Camera size={14} className="text-surf-accent" />
              <span>{language === 'en' ? 'Polaroid Archive • Nosara' : 'Archivo Polaroid • Nosara'}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.95] mb-3 text-surf-white">
              {language === 'en' ? 'Real Smiles. Pure Polaroid Memories.' : 'Sonrisas Reales. Recuerdos Polaroid.'}
            </h2>

            <p className="text-xs sm:text-sm font-light text-surf-white/75 leading-relaxed mb-5 max-w-md">
              {language === 'en'
                ? 'Every session at First Peak is captured on instant film. Timeless memories of your kids and family catching their first waves in Playa Guiones.'
                : 'Cada sesión en First Peak queda grabada en papel instantáneo. Recuerdos inolvidables de tus hijos y familia surfeando sus primeras olas en Playa Guiones.'}
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <Link 
                to="/gallery"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-surf-accent text-surf-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-surf-white transition-all shadow-lg cursor-pointer"
              >
                <Camera size={14} />
                <span>{language === 'en' ? 'Explore Gallery' : 'Ver Galería'}</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-surf-white/80 hover:text-surf-accent border-b border-surf-white/30 hover:border-surf-accent pb-1 transition-colors"
              >
                <span>{language === 'en' ? 'Book a Session' : 'Reservar Clase'}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Natural Editorial Polaroid Stack with Flanking External Arrows */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            {(() => {
              const list = galleryImages && galleryImages.length > 0 ? galleryImages : POLAROID_GALLERY;
              const total = list.length;
              const cardTop = list[activePolaroidIndex % total];
              const cardLeft = list[(activePolaroidIndex + 1) % total];
              const cardRight = list[(activePolaroidIndex + 2) % total];

              return (
                <div className="relative w-full max-w-[540px] flex items-center justify-center">
                  {/* Left Arrow Button (Clean editorial arrow without circular enclosure) */}
                  <button
                    type="button"
                    onClick={() => setActivePolaroidIndex((prev) => (prev > 0 ? prev - 1 : total - 1))}
                    className="group absolute -left-4 sm:-left-8 md:-left-12 lg:-left-14 top-1/2 -translate-y-1/2 z-30 p-2 text-surf-white/50 hover:text-surf-accent transition-all duration-200 cursor-pointer focus:outline-none"
                    title={language === 'en' ? 'Previous photo' : 'Foto anterior'}
                    aria-label="Previous Polaroid"
                  >
                    <ChevronLeft size={34} strokeWidth={1.5} className="group-hover:-translate-x-1 group-hover:scale-110 transition-all duration-200" />
                  </button>

                  {/* Stack Container with overlapping layers */}
                  <div className="relative w-full max-w-[440px] h-[330px] sm:h-[370px] md:h-[390px] flex items-center justify-center select-none">
                    
                    {/* Left Background Polaroid */}
                    <div 
                      onClick={() => setActivePolaroidIndex((activePolaroidIndex + 1) % total)}
                      className="group/left absolute top-3 sm:top-5 -left-2 sm:left-4 md:left-6 w-[200px] sm:w-[230px] md:w-[250px] bg-[#FAF8F5] text-neutral-900 p-2.5 sm:p-3 pb-5 sm:pb-6 shadow-[0_12px_30px_rgba(0,0,0,0.85)] -rotate-6 sm:-rotate-8 scale-[0.88] hover:scale-[0.93] hover:-rotate-10 hover:z-30 cursor-pointer transition-all duration-300 border border-[#E5E0D8] rounded-[2px] z-10 opacity-75 hover:opacity-100"
                      title={language === 'en' ? 'Click to bring to front' : 'Haz clic para traer al frente'}
                    >
                      {/* Washi Tape */}
                      <div className="absolute -top-2 left-1/3 -translate-x-1/2 w-11 sm:w-13 h-3 sm:h-3.5 bg-[#e8deca]/90 border border-[#d3c5ab] -rotate-3 pointer-events-none shadow-xs" />
                      
                      <div className="relative aspect-square w-full bg-neutral-950 overflow-hidden shadow-inner border border-black/10">
                        <img
                          src={cardLeft.url}
                          alt=""
                          className="w-full h-full object-cover sepia-[0.16] brightness-[0.95]"
                          loading="lazy"
                        />
                      </div>
                      <div className="pt-2 px-1">
                        <p className="text-[10px] sm:text-xs font-serif italic text-neutral-800 truncate" style={{ fontFamily: 'Georgia, serif' }}>
                          "{language === 'en' ? cardLeft.captionEn : cardLeft.captionEs}"
                        </p>
                      </div>
                    </div>

                    {/* Right Background Polaroid */}
                    <div 
                      onClick={() => setActivePolaroidIndex((activePolaroidIndex + 2) % total)}
                      className="group/right absolute top-5 sm:top-7 -right-2 sm:right-4 md:right-6 w-[200px] sm:w-[230px] md:w-[250px] bg-[#FAF8F5] text-neutral-900 p-2.5 sm:p-3 pb-5 sm:pb-6 shadow-[0_12px_30px_rgba(0,0,0,0.85)] rotate-6 sm:rotate-8 scale-[0.88] hover:scale-[0.93] hover:rotate-10 hover:z-30 cursor-pointer transition-all duration-300 border border-[#E5E0D8] rounded-[2px] z-10 opacity-75 hover:opacity-100"
                      title={language === 'en' ? 'Click to bring to front' : 'Haz clic para traer al frente'}
                    >
                      {/* Washi Tape */}
                      <div className="absolute -top-2 right-1/4 w-11 sm:w-13 h-3 sm:h-3.5 bg-[#e8deca]/90 border border-[#d3c5ab] rotate-2 pointer-events-none shadow-xs" />

                      <div className="relative aspect-square w-full bg-neutral-950 overflow-hidden shadow-inner border border-black/10">
                        <img
                          src={cardRight.url}
                          alt=""
                          className="w-full h-full object-cover sepia-[0.16] brightness-[0.95]"
                          loading="lazy"
                        />
                      </div>
                      <div className="pt-2 px-1">
                        <p className="text-[10px] sm:text-xs font-serif italic text-neutral-800 truncate" style={{ fontFamily: 'Georgia, serif' }}>
                          "{language === 'en' ? cardRight.captionEn : cardRight.captionEs}"
                        </p>
                      </div>
                    </div>

                    {/* Foreground Featured Polaroid */}
                    <div 
                      className="group relative w-[230px] sm:w-[260px] md:w-[285px] bg-[#FAF8F5] text-neutral-900 p-3 sm:p-3.5 pb-5 sm:pb-6 shadow-[0_20px_45px_rgba(0,0,0,0.92)] hover:shadow-[0_25px_55px_rgba(0,0,0,0.98)] rotate-[-1deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300 ease-out border border-[#E5E0D8] rounded-[2px] z-20"
                    >
                      {/* Vintage Washi Tape */}
                      <div className={`absolute z-30 w-13 sm:w-15 h-3.5 sm:h-4 bg-[#e8deca]/95 border border-[#d3c5ab] backdrop-blur-[1px] shadow-xs pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity ${cardTop.tapeStyle}`} />

                      {/* 1:1 Square Photo with Vintage Grading */}
                      <div 
                        onClick={() => setIsLightboxOpen(true)}
                        className="relative aspect-square w-full bg-neutral-950 overflow-hidden shadow-inner border border-black/10 cursor-pointer"
                      >
                        <img
                          src={cardTop.url}
                          alt={language === 'en' ? cardTop.captionEn : cardTop.captionEs}
                          className="w-full h-full object-cover sepia-[0.12] contrast-[1.05] brightness-[0.98] group-hover:sepia-0 group-hover:scale-105 transition-all duration-500 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-orange-400/10 pointer-events-none" />

                        {/* Hover hint */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <span className="px-2 py-1 bg-surf-black/85 backdrop-blur-sm text-white text-[9px] font-mono uppercase tracking-wider flex items-center gap-1 shadow-lg">
                            <ZoomIn size={11} className="text-surf-accent" />
                            <span>{language === 'en' ? 'Enlarge' : 'Ampliar'}</span>
                          </span>
                        </div>
                      </div>

                      {/* Handwritten Bottom Caption */}
                      <div className="pt-2.5 sm:pt-3 px-1">
                        <p 
                          className="text-xs sm:text-[13px] font-serif italic text-neutral-800 leading-snug line-clamp-2"
                          style={{ fontFamily: 'Georgia, serif' }}
                        >
                          "{language === 'en' ? cardTop.captionEn : cardTop.captionEs}"
                        </p>

                        <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-neutral-300/60 text-[8px] sm:text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
                          <span className="flex items-center gap-1">
                            <MapPin size={9} className="text-surf-accent" />
                            <span className="truncate max-w-[130px]">{language === 'en' ? cardTop.locationEn : cardTop.locationEs}</span>
                          </span>
                          <span className="font-bold text-neutral-700">{cardTop.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Arrow Button (Clean editorial arrow without circular enclosure) */}
                  <button
                    type="button"
                    onClick={() => setActivePolaroidIndex((prev) => (prev + 1) % total)}
                    className="group absolute -right-4 sm:-right-8 md:-right-12 lg:-right-14 top-1/2 -translate-y-1/2 z-30 p-2 text-surf-white/50 hover:text-surf-accent transition-all duration-200 cursor-pointer focus:outline-none"
                    title={language === 'en' ? 'Next photo' : 'Siguiente foto'}
                    aria-label="Next Polaroid"
                  >
                    <ChevronRight size={34} strokeWidth={1.5} className="group-hover:translate-x-1 group-hover:scale-110 transition-all duration-200" />
                  </button>
                </div>
              );
            })()}
          </div>
        </motion.div>

        {/* FULLSCREEN LIGHTBOX MODAL */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="fixed inset-0 z-[120] bg-surf-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            >
              <div className="absolute top-5 right-5 flex items-center gap-3 z-[130]">
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-2.5 bg-surf-white/10 hover:bg-surf-accent text-surf-white hover:text-surf-black transition-colors cursor-pointer"
                  title={language === 'en' ? 'Close' : 'Cerrar'}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {(() => {
                const list = galleryImages && galleryImages.length > 0 ? galleryImages : POLAROID_GALLERY;
                const total = list.length;
                const activeSnap = list[activePolaroidIndex % total] || list[0];

                return (
                  <>
                    {/* Navigation inside Lightbox */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePolaroidIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
                      }}
                      className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-[130] p-3 bg-surf-white/10 hover:bg-surf-accent text-surf-white hover:text-surf-black transition-colors"
                      aria-label="Previous"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePolaroidIndex((prev) => (prev + 1) % total);
                      }}
                      className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-[130] p-3 bg-surf-white/10 hover:bg-surf-accent text-surf-white hover:text-surf-black transition-colors"
                      aria-label="Next"
                    >
                      <ChevronRight size={24} />
                    </button>

                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="relative max-w-md w-full bg-[#FAF8F5] text-neutral-900 p-4 sm:p-5 pb-9 sm:pb-12 shadow-[0_25px_70px_rgba(0,0,0,0.95)] border border-[#E5E0D8] rounded-[2px]"
                    >
                    <div className="relative aspect-square w-full bg-neutral-950 overflow-hidden shadow-inner border border-black/10">
                      <img
                        src={activeSnap.url}
                        alt={language === 'en' ? activeSnap.captionEn : activeSnap.captionEs}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="pt-5 px-1 text-center">
                      <p 
                        className="text-base sm:text-lg font-serif italic text-neutral-900 leading-snug"
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        "{language === 'en' ? activeSnap.captionEn : activeSnap.captionEs}"
                      </p>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-300/80 text-xs font-mono text-neutral-500 uppercase tracking-wider">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-surf-accent" />
                          <span>{language === 'en' ? activeSnap.locationEn : activeSnap.locationEs}</span>
                        </span>
                        <span className="font-bold text-neutral-800">{activeSnap.date}</span>
                      </div>
                    </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 6. TESTIMONIALS SECTION (Light Canvas) - EXACT H2 as required */}
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
            {/* EXACT H2 as required */}
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase leading-none">
              What parents are saying
            </h2>
          </div>

          {/* Clean Open Editorial Quotes in semantic articles */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <article className="flex flex-col justify-between border-l-2 border-surf-black/20 pl-5">
              <div>
                <div className="flex gap-1 text-surf-accent mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-base font-light leading-relaxed italic opacity-85 mb-4">
                  "Our 7-year-old daughter was terrified of ocean waves when we arrived in Nosara. By the second morning session at Playa Guiones with Coach Bryan, she stood up on six consecutive waves smiling ear to ear. The patience and warmth here are unmatched in Costa Rica."
                </blockquote>
              </div>
              <div>
                <p className="font-bold uppercase tracking-tight text-xs sm:text-sm">Sarah & Mark T.</p>
                <span className="text-[10px] font-mono opacity-50">Austin, Texas</span>
              </div>
            </article>

            <article className="flex flex-col justify-between border-l-2 border-surf-black/20 pl-5">
              <div>
                <div className="flex gap-1 text-surf-accent mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-base font-light leading-relaxed italic opacity-85 mb-4">
                  "The 1:3 ratio and the video analysis made all the difference. We got to watch the clips back at our hotel and see exactly how our boys improved every day. Truly unforgettable sunset sessions in the Blue Zone."
                </blockquote>
              </div>
              <div>
                <p className="font-bold uppercase tracking-tight text-xs sm:text-sm">David & Tom K.</p>
                <span className="text-[10px] font-mono opacity-50">Toronto, Canada</span>
              </div>
            </article>
          </div>

          <div className="mt-8 text-center">
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.3em] opacity-50">
              ★ 5.0 Rating on Google & TripAdvisor • 100% Certified Ocean Coaches
            </span>
          </div>
        </motion.div>
      </section>

      {/* 7. BOTTOM CTA & FOOTER SECTION (Dark Canvas) - EXACT H2 as required */}
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
            Direct Connection
          </span>
          {/* EXACT H2 as required */}
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase leading-none mb-4">
            Ready for their first wave at sunset?
          </h2>
          <p className="text-sm sm:text-base font-light text-surf-white/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            Spaces are strictly limited to protect our 1:3 student-coach ratio in Playa Guiones, Nosara. Reserve your family session or contact Coach Bryan directly for custom availability.
          </p>

          {/* Clean Editorial Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <Link 
              to="/booking"
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-surf-accent hover:text-surf-white border-b-2 border-surf-accent hover:border-surf-white pb-1 transition-colors inline-flex items-center gap-2 group"
            >
              <span>{data.ctaBookBtn || 'Book Session'}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact"
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-surf-white/80 hover:text-surf-accent border-b border-surf-white/30 hover:border-surf-accent pb-1 transition-colors inline-flex items-center gap-2 group"
            >
              <span>Contact Us</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Semantic Docked Footer */}
        <footer className="w-full pt-4 border-t border-surf-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-[9px] uppercase tracking-[0.25em] font-mono text-surf-white/40 max-w-7xl mx-auto">
          <span>© 2026 First Peak Surf Nosara</span>
          <span>Playa Guiones, Guanacaste, Costa Rica</span>
          <span>Where First Waves Become Forever Memories</span>
        </footer>
      </section>
    </main>
  );
}
