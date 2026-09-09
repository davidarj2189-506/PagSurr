import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Waves, ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';
import SurfboardMenuIcon from './SurfboardMenuIcon';

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
    { num: '07', label: menuData.contact || (language === 'en' ? 'Contact' : 'Contacto'), path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const [isDarkSection, setIsDarkSection] = useState(true);

  useEffect(() => {
    if (!isHomePage) {
      setIsDarkSection(false);
      return;
    }

    const sectionConfigs = [
      { id: 'hero', isDark: true },
      { id: 'philosophy', isDark: false },
      { id: 'programs', isDark: false },
      { id: 'differentiators', isDark: true },
      { id: 'gallery', isDark: true },
      { id: 'testimonials', isDark: false },
      { id: 'contact', isDark: true }
    ];

    const updateHeaderTheme = () => {
      // The header is positioned at top-8 (32px from top, extending to ~70px)
      const headerY = 55;
      for (const sec of sectionConfigs) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerY && rect.bottom > headerY) {
            setIsDarkSection(sec.isDark);
            return;
          }
        }
      }
      // Fallback: if near the top, hero is dark
      setIsDarkSection(window.scrollY < window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', updateHeaderTheme, { passive: true });
    window.addEventListener('resize', updateHeaderTheme, { passive: true });

    // Poll periodically to catch CSS scroll-snapping momentum finishes
    const interval = setInterval(updateHeaderTheme, 150);
    updateHeaderTheme();

    return () => {
      window.removeEventListener('scroll', updateHeaderTheme);
      window.removeEventListener('resize', updateHeaderTheme);
      clearInterval(interval);
    };
  }, [isHomePage, location.pathname]);

  const isDark = isMenuOpen || isDarkSection;

  return (
    <div className={`relative ${isHomePage ? 'bg-surf-black text-surf-white' : 'bg-surf-white text-surf-black'} min-h-screen selection:bg-surf-accent selection:text-surf-black`}>
      {/* Brand Logo - Top Left (Free-floating, no boxes or enclosures) */}
      <Link 
        to="/" 
        className={`fixed top-8 left-6 sm:left-8 z-[75] flex items-center gap-2 group transition-colors duration-200 ${
          isDark ? 'text-surf-white' : 'text-surf-black'
        }`}
        onClick={handleLinkClick}
      >
        <Waves className="w-5 h-5 text-surf-accent group-hover:rotate-12 transition-transform" />
        <span className="font-display text-xl sm:text-2xl uppercase tracking-tighter group-hover:text-surf-accent transition-colors">
          FIRST PEAK
        </span>
        <span className="hidden md:inline-block text-[9px] uppercase tracking-[0.3em] font-mono opacity-50 ml-2">
          NOSARA
        </span>
      </Link>

      {/* Navigation Toggles - Top Right (Free-floating, no boxes or enclosures) */}
      <nav className={`fixed top-8 right-6 sm:right-8 z-[75] flex items-center justify-center gap-5 sm:gap-7 transition-colors duration-200 ${
        isDark ? 'text-surf-white' : 'text-surf-black'
      }`}>
        <button 
          onClick={toggleLanguage}
          className="font-bold text-xs sm:text-sm tracking-widest uppercase hover:text-surf-accent transition-colors px-1 cursor-pointer"
          aria-label="Toggle language"
        >
          {language === 'en' ? 'ES' : 'EN'}
        </button>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="group flex items-center justify-center p-1 hover:text-surf-accent transition-colors duration-200 cursor-pointer focus:outline-none"
          id="menu-toggle"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <SurfboardMenuIcon 
            isOpen={isMenuOpen} 
            className="w-10 h-6 sm:w-12 sm:h-7 group-hover:scale-105 transition-transform" 
          />
        </button>
      </nav>

      {/* Menu Overlay (Full-Screen Canvas, Right-Aligned Menu) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-surf-black z-[70] flex items-center justify-end p-6 sm:p-10 lg:p-16 overflow-y-auto"
          >
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 pt-20 pb-10">
              
              {/* Left Column: Reserved open area for user's logo / branding */}
              <div className="hidden lg:flex flex-1 items-center justify-center p-8 pointer-events-none">
                {/* Space reserved for future logo */}
              </div>

              {/* Right Column: Menu Directory aligned to the right & proportionally reduced */}
              <div className="w-full max-w-xl lg:max-w-md ml-auto">
                <div className="flex flex-col space-y-3 sm:space-y-4">
                  {primaryNav.map((item, idx) => (
                    <motion.div
                      key={item.num + item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 + idx * 0.03, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                            <div className="flex items-baseline gap-3.5 sm:gap-4">
                              <span className={`font-mono text-xs transition-colors ${
                                isClassesOpen ? 'text-surf-accent font-bold' : 'text-surf-white/40 group-hover:text-surf-accent'
                              }`}>
                                {item.num}
                              </span>
                              <span className={`font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight transition-all duration-200 ${
                                isClassesOpen 
                                  ? 'text-surf-accent' 
                                  : 'text-surf-white group-hover:text-surf-accent'
                              }`}>
                                {item.label}
                              </span>
                            </div>

                            <ChevronDown 
                              size={20} 
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
                                transition={{ duration: 0.22, ease: 'easeInOut' }}
                                className="overflow-hidden ml-7 sm:ml-8 pl-4 border-l-2 border-surf-accent/40 my-2.5 space-y-2"
                              >
                                {classSubLinks.map((sub) => (
                                  <Link
                                    key={sub.path}
                                    to={sub.path}
                                    onClick={handleLinkClick}
                                    className={`block font-display text-base sm:text-lg uppercase tracking-tight transition-all duration-200 ${
                                      location.pathname === sub.path 
                                        ? 'text-surf-accent' 
                                        : 'text-surf-white/70 hover:text-surf-accent hover:translate-x-1'
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
                        <div className="flex items-baseline gap-3.5 sm:gap-4">
                          <span className={`font-mono text-xs ${
                            location.pathname === item.path ? 'text-surf-accent font-bold' : 'text-surf-white/40'
                          } group-hover:text-surf-accent transition-colors`}>
                            {item.num}
                          </span>
                          <Link
                            to={item.path!}
                            onClick={handleLinkClick}
                            className={`font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight transition-all duration-200 flex items-center gap-3 ${
                              location.pathname === item.path
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
                      )}
                    </motion.div>
                  ))}
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
