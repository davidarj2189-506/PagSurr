import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Waves, MessageCircle, Star, ChevronDown, Check, Play } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getHomePageSchema } from '../utils/schemaGenerator';

export default function Home() {
  const { t } = useLanguage();
  const data = t('home') || {};
  const [activeSection, setActiveSection] = useState(0);

  const { scrollYProgress } = useScroll();

  const sections = [
    { id: 'hero', name: 'Intro' },
    { id: 'philosophy', name: 'Philosophy' },
    { id: 'programs', name: 'Programs' },
    { id: 'differentiators', name: 'Why Us' },
    { id: 'video-analysis', name: 'Video' },
    { id: 'testimonials', name: 'Reviews' },
    { id: 'contact', name: 'Reserve' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* Modern Editorial Dot Navigation */}
      <nav aria-label="Page navigation" className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {sections.map((sec, idx) => (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            className="group flex items-center justify-end gap-2 focus:outline-none cursor-pointer"
            aria-label={`Scroll to ${sec.name}`}
          >
            <span 
              className={`text-[9px] uppercase tracking-widest font-mono transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                activeSection === idx ? 'text-surf-accent opacity-100' : 'text-surf-white/60'
              }`}
            >
              {sec.name}
            </span>
            <div 
              className={`w-1.5 transition-all duration-300 ${
                activeSection === idx 
                  ? 'h-6 bg-surf-accent' 
                  : 'h-1.5 bg-surf-white/30 group-hover:bg-surf-white group-hover:h-3'
              }`} 
            />
          </button>
        ))}
      </nav>

      {/* 1. HERO SECTION (Dark Canvas) - Surf Magazine Editorial Layout */}
      <header 
        id="hero" 
        className="section-full relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between items-start p-6 sm:p-12 lg:px-16 overflow-hidden"
      >
        {/* Ambient Wave Background Image - Optimized to reveal center surfer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 0.25], [0, 140]) }}
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 brightness-95 scale-105"
          />
          {/* Magazine Editorial Shadow: Darker on the left for crisp text readability, clear in the center & right to highlight the surfer */}
          <div className="absolute inset-0 bg-gradient-to-r from-surf-black/95 via-surf-black/60 to-transparent w-full md:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-surf-black via-transparent to-surf-black/40" />
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
            <h1 id="main-heading" className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.92] text-surf-white select-none tracking-tight">
              Where first waves become forever memories.
            </h1>

            {/* EXACT Hero Summary Paragraph as required */}
            <p id="hero-summary" className="text-sm sm:text-base md:text-lg font-light tracking-wide max-w-lg mt-4 sm:mt-5 text-surf-white/90 leading-relaxed">
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

          <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/3] max-h-[42vh] w-full overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover hover:scale-105 transition-all duration-1000 ease-out" 
              alt="Kids surf lesson at sunset in Playa Guiones, Nosara - First Peak Surf"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-surf-black/90 text-surf-white backdrop-blur-sm border-l-2 border-surf-accent">
              <p className="text-[9px] font-mono tracking-widest uppercase opacity-60">Playa Guiones • Blue Zone Costa Rica</p>
              <p className="text-xs font-semibold mt-0.5">"The safest sand-bottom surf classroom on earth."</p>
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

      {/* 5. VIDEO ANALYSIS SECTION (Dark Canvas) */}
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
            <div className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase leading-none mb-4">
              {data.videoBannerTitle || 'See the Joy in Action'}
            </div>
            <p className="text-sm sm:text-base font-light text-surf-white/80 leading-relaxed mb-5 max-w-2xl">
              Video analysis isn’t an extra charge here—it’s fundamental to our teaching and your family memories. Our beach telephoto team captures crisp high-resolution footage at Playa Guiones so your child can review their pop-up and celebrate every breakthrough.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-surf-white/70 mb-6">
              <span>• 4K Telephoto Beach Recording</span>
              <span>• iPad Slow-Motion Breakdown</span>
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
              alt="Surfer video analysis coaching review in Playa Guiones, Nosara - First Peak Surf"
              className="w-full h-full object-cover transition-all duration-700"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-surf-black/40 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-surf-accent/90 text-surf-black flex items-center justify-center pl-0.5 shadow-lg">
                <Play size={20} className="fill-current" />
              </div>
            </div>
            <div className="absolute bottom-2 left-2 right-2 p-2 bg-surf-black/85 backdrop-blur-sm text-surf-white text-[9px] font-mono uppercase tracking-wider flex justify-between">
              <span>Beach Telephoto Angle</span>
              <span className="text-surf-accent">● LIVE RECORD</span>
            </div>
          </div>
        </motion.div>
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
            Spaces are strictly limited to protect our 1:3 student-coach ratio in Playa Guiones, Nosara. Reserve your family session or message Coach Bryan directly on WhatsApp for tide times.
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
