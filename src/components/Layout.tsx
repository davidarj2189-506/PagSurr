import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Instagram, MessageCircle, Waves, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const menuData = t('menu') || {};
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    restDelta: 0.001
  });

  // Scroll to top when changing route
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  // Lock body scroll only when full-screen menu overlay is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const primaryNav = [
    { num: '01', label: menuData.home || 'Home', path: '/' },
    { 
      num: '02', 
      label: menuData.classes || 'Surf Academy & Classes', 
      path: '/classes',
      subLinks: [
        { label: menuData.kids || 'Kids (6-12)', path: '/classes/kids' },
        { label: menuData.family || 'Family Surf', path: '/classes/family' },
        { label: menuData.private || 'Private Coaching', path: '/classes/private' },
      ]
    },
    { num: '03', label: menuData.about || 'About Bryan', path: '/about' },
    { num: '04', label: menuData.booking || 'Book a Lesson', path: '/booking', highlight: true },
    { num: '05', label: menuData.gallery || 'Photo & Video Gallery', path: '/gallery' },
    { num: '06', label: menuData.faq || 'Safety & FAQ', path: '/faq' },
    { num: '07', label: menuData.contact || 'Contact & Concierge', path: '/contact' },
  ];

  return (
    <div className="relative bg-surf-black min-h-screen text-surf-white selection:bg-surf-accent selection:text-surf-black">
      {/* Scroll Progress Bar ("La línea") */}
      <div className="fixed top-0 left-0 right-0 h-[3px] sm:h-1 z-[90] pointer-events-none bg-surf-white/5">
        <motion.div
          className="h-full bg-surf-accent origin-left shadow-[0_0_8px_rgba(255,78,0,0.8)]"
          style={{ scaleX }}
        />
      </div>

      {/* Brand Logo - Top Left */}
      <Link 
        to="/" 
        className="fixed top-8 left-6 sm:left-8 z-[75] mix-blend-difference flex items-center gap-2 group"
        onClick={handleLinkClick}
      >
        <Waves className="w-5 h-5 text-surf-accent group-hover:rotate-12 transition-transform" />
        <span className="font-display text-xl sm:text-2xl uppercase tracking-tighter text-surf-white group-hover:text-surf-accent transition-colors">
          FIRST PEAK
        </span>
        <span className="hidden md:inline-block text-[9px] uppercase tracking-[0.3em] font-mono opacity-50 ml-2">
          NOSARA
        </span>
      </Link>

      {/* Navigation Toggles - Top Right */}
      <nav className="fixed top-8 right-6 sm:right-8 z-[75] flex items-center justify-center gap-5 sm:gap-7 mix-blend-difference">
        <button 
          onClick={toggleLanguage}
          className="text-surf-white font-bold text-xs sm:text-sm tracking-widest uppercase hover:text-surf-accent transition-colors px-1"
          aria-label="Toggle language"
        >
          {language === 'en' ? 'ES' : 'EN'}
        </button>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`group flex flex-col gap-1.5 items-end justify-center p-2 transition-all duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
          id="menu-toggle"
          aria-label="Toggle menu"
        >
          <div className={`h-0.5 bg-surf-white transition-all duration-300 ${isMenuOpen ? 'w-8 translate-y-2 rotate-45' : 'w-8 group-hover:w-10'}`} />
          <div className={`h-0.5 bg-surf-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-6 group-hover:w-8'}`} />
          <div className={`h-0.5 bg-surf-white transition-all duration-300 ${isMenuOpen ? 'w-8 -translate-y-2 -rotate-45' : 'w-4 group-hover:w-6'}`} />
        </button>
      </nav>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="menu-overlay"
          >
            <div className="w-full max-w-5xl mx-auto my-auto pt-20 pb-10 sm:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                
                {/* Left: Main Navigation List */}
                <div className="lg:col-span-7 flex flex-col">
                  <div className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent/80 mb-4 pb-2 border-b border-surf-white/10">
                    {language === 'en' ? 'Navigation Directory' : 'Directorio de Navegación'}
                  </div>

                  <div className="flex flex-col space-y-2 sm:space-y-3">
                    {primaryNav.map((item, idx) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + idx * 0.03, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="group"
                      >
                        <div className="flex items-baseline gap-3 sm:gap-4">
                          <span className={`font-mono text-xs sm:text-sm ${item.highlight ? 'text-surf-accent' : 'text-surf-white/40'} group-hover:text-surf-accent transition-colors`}>
                            {item.num}
                          </span>
                          <Link
                            to={item.path}
                            onClick={handleLinkClick}
                            className={`font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight transition-all duration-200 flex items-center gap-3 ${
                              item.highlight 
                                ? 'text-surf-accent hover:text-surf-white' 
                                : location.pathname === item.path
                                ? 'text-surf-accent'
                                : 'text-surf-white hover:text-surf-accent hover:translate-x-1.5'
                            }`}
                          >
                            <span>{item.label}</span>
                            {location.pathname === item.path && (
                              <span className="w-1.5 h-1.5 rounded-full bg-surf-accent shrink-0" />
                            )}
                          </Link>
                        </div>

                        {/* Sub-links for Classes (organized neatly underneath) */}
                        {item.subLinks && (
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono uppercase tracking-widest text-surf-white/55 mt-1.5 mb-2 ml-7 sm:ml-9">
                            {item.subLinks.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                onClick={handleLinkClick}
                                className={`hover:text-surf-accent transition-colors ${location.pathname === sub.path ? 'text-surf-accent' : ''}`}
                              >
                                ↳ {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right: Clean Editorial Details & Direct Concierge */}
                <div className="lg:col-span-5 flex flex-col justify-between pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-surf-white/10 lg:pl-10">
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent/80 mb-4 pb-2 border-b border-surf-white/10">
                      {language === 'en' ? 'Nosara Base & Contact' : 'Base en Nosara y Contacto'}
                    </div>

                    <div className="space-y-5 text-surf-white/80">
                      <div>
                        <p className="text-[9px] font-mono uppercase tracking-[0.3em] opacity-50 mb-1">
                          {language === 'en' ? 'Location' : 'Ubicación'}
                        </p>
                        <h4 className="font-display text-lg uppercase text-surf-white">Playa Guiones, Nosara</h4>
                        <p className="text-xs font-light text-surf-white/60">Guanacaste, Costa Rica • Blue Zone</p>
                      </div>

                      <div>
                        <p className="text-[9px] font-mono uppercase tracking-[0.3em] opacity-50 mb-1">
                          {language === 'en' ? 'Safe Low-Tide Timing' : 'Horarios en Marea Baja'}
                        </p>
                        <h4 className="font-display text-base uppercase text-surf-white">
                          {language === 'en' ? 'Daily Low-Tide Sessions' : 'Sesiones Guiadas en Marea Baja'}
                        </h4>
                        <p className="text-xs font-light text-surf-white/60 mt-0.5 leading-relaxed">
                          {language === 'en' 
                            ? 'Timed to daily tide charts for calm shallow waters and gentle sand-bottom rollers.' 
                            : 'Alineadas con la tabla de mareas para aguas tranquilas y olas suaves con fondo de arena.'}
                        </p>
                      </div>

                      <div>
                        <p className="text-[9px] font-mono uppercase tracking-[0.3em] opacity-50 mb-1.5">
                          {language === 'en' ? 'Direct Concierge' : 'Atención Directa'}
                        </p>
                        <a 
                          href="https://wa.me/50688997873" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center gap-2.5 text-surf-white hover:text-surf-accent text-xs font-mono uppercase tracking-wider group transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="font-bold">Coach Bryan (+506 8899 7873)</span>
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-surf-white/10 text-[11px] font-mono uppercase tracking-widest text-surf-white/50">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-1.5 hover:text-surf-accent transition-colors"
                    >
                      <Instagram size={14} />
                      <span>@firstpeaksurf</span>
                    </a>
                    <span>•</span>
                    <span>1:3 Ratio • Red Cross CPR</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="w-full relative">
        {children}
      </main>
    </div>
  );
}
