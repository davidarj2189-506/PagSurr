import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Waves, ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClassesOpen, setIsClassesOpen] = useState(false);
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
      setIsClassesOpen(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsClassesOpen(false);
  };

  const classSubLinks = [
    { 
      label: language === 'en' ? 'All Classes & Overview' : 'Ver Todos los Programas', 
      path: '/classes' 
    },
    { 
      label: menuData.kids || (language === 'en' ? 'Kids Grom Academy (6-12)' : 'Academia Niños Grom (6-12)'), 
      path: '/classes/kids' 
    },
    { 
      label: menuData.family || (language === 'en' ? 'Family Surf Experience' : 'Experiencia Familiar'), 
      path: '/classes/family' 
    },
    { 
      label: menuData.private || (language === 'en' ? '1:1 VIP Private Coaching' : 'Coaching Privado 1:1'), 
      path: '/classes/private' 
    },
  ];

  const primaryNav = [
    { num: '01', label: menuData.home || 'Home', path: '/' },
    { 
      num: '02', 
      label: menuData.classes || (language === 'en' ? 'Classes' : 'Clases'), 
      isDropdown: true 
    },
    { num: '03', label: menuData.about || 'About Bryan', path: '/about' },
    { num: '04', label: menuData.booking || 'Book a Lesson', path: '/booking' },
    { num: '05', label: menuData.gallery || 'Gallery', path: '/gallery' },
    { num: '06', label: menuData.faq || 'FAQ', path: '/faq' },
    { num: '07', label: menuData.contact || 'Contact & WhatsApp', path: '/contact' },
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
            <div className="w-full max-w-xl mx-auto my-auto pt-24 pb-12 px-6 sm:px-8">
              <div className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent/80 mb-6 pb-2 border-b border-surf-white/10">
                {language === 'en' ? 'Navigation Directory' : 'Directorio de Navegación'}
              </div>

              <div className="flex flex-col space-y-3 sm:space-y-4">
                {primaryNav.map((item, idx) => (
                  <motion.div
                    key={item.num + item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + idx * 0.03, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="group"
                  >
                    {item.isDropdown ? (
                      <div>
                        {/* Interactive Click to Deploy Classes Dropdown */}
                        <button
                          type="button"
                          onClick={() => setIsClassesOpen(!isClassesOpen)}
                          className="w-full flex items-baseline justify-between text-left group cursor-pointer focus:outline-none"
                        >
                          <div className="flex items-baseline gap-4 sm:gap-5">
                            <span className={`font-mono text-xs sm:text-sm transition-colors ${
                              isClassesOpen ? 'text-surf-accent' : 'text-surf-white/40 group-hover:text-surf-accent'
                            }`}>
                              {item.num}
                            </span>
                            <span className={`font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight transition-all duration-200 ${
                              isClassesOpen 
                                ? 'text-surf-accent' 
                                : 'text-surf-white group-hover:text-surf-accent'
                            }`}>
                              {item.label}
                            </span>
                          </div>

                          <ChevronDown 
                            size={24} 
                            className={`transition-transform duration-300 ${
                              isClassesOpen ? 'rotate-180 text-surf-accent' : 'text-surf-white/40 group-hover:text-surf-accent'
                            }`}
                          />
                        </button>

                        {/* Unfolded Sub-Options */}
                        <AnimatePresence>
                          {isClassesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden ml-8 sm:ml-12 pl-4 sm:pl-5 border-l-2 border-surf-accent/40 my-3 space-y-2.5"
                            >
                              {classSubLinks.map((sub) => (
                                <Link
                                  key={sub.path}
                                  to={sub.path}
                                  onClick={handleLinkClick}
                                  className={`block font-display text-lg sm:text-2xl uppercase tracking-tight transition-all duration-200 ${
                                    location.pathname === sub.path 
                                      ? 'text-surf-accent' 
                                      : 'text-surf-white/75 hover:text-surf-accent hover:translate-x-1.5'
                                  }`}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-4 sm:gap-5">
                        <span className={`font-mono text-xs sm:text-sm ${
                          location.pathname === item.path ? 'text-surf-accent' : 'text-surf-white/40'
                        } group-hover:text-surf-accent transition-colors`}>
                          {item.num}
                        </span>
                        <Link
                          to={item.path!}
                          onClick={handleLinkClick}
                          className={`font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight transition-all duration-200 flex items-center gap-3 ${
                            location.pathname === item.path
                              ? 'text-surf-accent'
                              : 'text-surf-white hover:text-surf-accent hover:translate-x-1.5'
                          }`}
                        >
                          <span>{item.label}</span>
                          {location.pathname === item.path && (
                            <span className="w-2 h-2 rounded-full bg-surf-accent shrink-0" />
                          )}
                        </Link>
                      </div>
                    )}
                  </motion.div>
                ))}
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
