import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { ChevronDown, Plus, Minus, ShieldCheck, MessageCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Faq() {
  const { t } = useLanguage();
  const data = t('faq') || {};
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'safety', label: 'Safety & Kids' },
    { id: 'logistics', label: 'Tides & Logistics' },
    { id: 'gear', label: 'Gear & Video' },
    { id: 'booking', label: 'Policies' }
  ];

  const questions = data.items || [];

  const filteredQuestions = activeCategory === 'all' 
    ? questions 
    : questions.filter((item: any) => item.cat === activeCategory);

  const toggleQuestion = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-surf-black text-surf-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-surf-white/50 mb-6">
          <Link to="/" className="hover:text-surf-white">Home</Link>
          <span>/</span>
          <span className="text-surf-accent">FAQ</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 bg-surf-accent/20 border border-surf-accent text-surf-accent text-[10px] font-mono uppercase tracking-[0.3em] inline-block mb-4">
            {data.badge || 'Parent Guide & Ocean Safety'}
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl sm:text-7xl uppercase leading-[0.9] text-surf-white mb-6 whitespace-pre-line"
          >
            {data.title || 'Frequently Asked\nQuestions'}
          </motion.h1>
          <p className="text-base sm:text-lg font-light text-surf-white/75 leading-relaxed">
            {data.subtitle || 'Everything parents and first-timers need to know about safety, tides, equipment, and our teaching philosophy in Nosara.'}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIdx(null);
              }}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-surf-accent text-surf-black border-surf-accent font-bold'
                  : 'border-surf-white/20 text-surf-white/70 hover:border-surf-white/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Questions */}
        <div className="space-y-4 mb-20">
          {filteredQuestions.map((item: any, idx: number) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`border transition-colors duration-300 ${
                  isOpen ? 'border-surf-accent bg-surf-white/5' : 'border-surf-white/15 bg-surf-black hover:border-surf-white/30'
                }`}
              >
                <button
                  onClick={() => toggleQuestion(idx)}
                  className="w-full p-6 sm:p-8 text-left flex justify-between items-center gap-6"
                >
                  <span className="font-display text-lg sm:text-2xl uppercase tracking-tight text-surf-white">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-surf-white/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-surf-accent text-surf-black rotate-180 border-surf-accent' : 'text-surf-white'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0 border-t border-surf-white/10 text-sm sm:text-base font-light text-surf-white/80 leading-relaxed">
                        <p>{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Have More Questions Box */}
        <div className="p-8 sm:p-12 border border-surf-white/15 bg-surf-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl uppercase tracking-tight text-surf-white mb-2">
              Still Have a Specific Question?
            </h3>
            <p className="text-xs sm:text-sm font-light text-surf-white/70">
              No problem. Send Coach Bryan a quick WhatsApp text or audio note.
            </p>
          </div>
          <a 
            href="https://wa.me/50688997873?text=Hola%20Bryan!%20I%20have%20a%20question%20before%20booking"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 bg-surf-accent text-surf-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-white transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle size={16} />
            <span>Ask Bryan Directly</span>
          </a>
        </div>
      </div>
    </div>
  );
}
