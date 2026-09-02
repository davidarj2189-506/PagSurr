import { useState, ReactNode, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const menuData = t('menu');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative bg-surf-black">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-surf-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Navigation Toggles */}
      <nav className="fixed top-8 right-8 z-[70] flex items-center justify-center gap-6 mix-blend-difference">
        <button 
          onClick={toggleLanguage}
          className="text-surf-white font-bold text-sm tracking-widest uppercase hover:text-surf-accent transition-colors"
        >
          {language === 'en' ? 'ES' : 'EN'}
        </button>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`group flex flex-col gap-1.5 items-end justify-center p-2 transition-all duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
          id="menu-toggle"
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
            transition={{ duration: 0.4 }}
            className="menu-overlay"
          >
            <div className="flex flex-col gap-4 text-center pb-8 mt-12 w-full max-w-lg">
              {[
                { label: menuData.home, path: '/' },
                { label: menuData.us, path: '/us' },
                { label: menuData.service, path: '/service' },
                { label: menuData.gallery, path: '/gallery' },
                { label: menuData.blog, path: '/blog' },
                { label: menuData.contact, path: '/contact' },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={item.path}
                    onClick={handleLinkClick}
                    className="menu-link block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.6 }}
              className="flex gap-10 mt-8 mb-4"
            >
              <Instagram className="cursor-pointer hover:text-surf-accent hover:opacity-100 transition-all" size={20} />
              <Twitter className="cursor-pointer hover:text-surf-accent hover:opacity-100 transition-all" size={20} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden scroll-smooth no-scrollbar relative w-full">
        {children}
      </main>
    </div>
  );
}
