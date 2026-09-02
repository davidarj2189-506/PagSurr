import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, HelpCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { generateFAQSchema } from '../utils/schemaGenerator';

interface FaqItem {
  q: string;
  a: string;
  cat: 'safety' | 'logistics' | 'gear' | 'booking';
  featured?: boolean;
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'safety', label: 'Safety & Kids' },
    { id: 'logistics', label: 'Tides & Timing' },
    { id: 'gear', label: 'Gear & Equipment' },
    { id: 'booking', label: 'Policies' },
  ];

  // AEO (40-60 words answers, direct Yes/No) & GEO (Playa Guiones, Nosara, Blue Zone, Costa Rica, sunset)
  const faqItems: FaqItem[] = [
    {
      q: 'Do kids need to know how to swim?',
      a: 'No, children do not need to be advanced swimmers to learn to surf at Playa Guiones in Nosara, Costa Rica. Lessons take place in gentle waist-deep whitewater over a soft sand bottom with ISA-certified instructors right beside them. We maintain a strict 1:3 ratio and provide Coast Guard-approved flotation vests for complete peace of mind.',
      cat: 'safety',
      featured: true,
    },
    {
      q: 'What should my child bring to surf lessons?',
      a: 'Your child only needs swimwear, a towel, and dry clothes. First Peak Surf provides everything else at Playa Guiones in Nosara, Costa Rica, including custom high-buoyancy soft-top boards, UPF 50+ rashguards, and reef-safe mineral zinc sunblock. We also provide cold drinking water and fresh organic Costa Rican coconuts after every lesson.',
      cat: 'gear',
      featured: true,
    },
    {
      q: "What's the best time of day for kids surf lessons in Nosara?",
      a: 'The best time of day is two hours before low tide, with late afternoon sunset surf lessons being the most magical in Nosara, Costa Rica. Afternoon sessions at Playa Guiones offer calm offshore breezes, gentle peeling waves, and breathtaking Pacific sunsets across the Nicoya Peninsula Blue Zone, creating an inspiring and safe ocean experience.',
      cat: 'logistics',
      featured: true,
    },
    {
      q: 'What makes Playa Guiones in Nosara the safest surf beach for children?',
      a: 'Yes, Playa Guiones is celebrated worldwide for its sandy, obstacle-free ocean floor with no dangerous rocks, coral, or sea urchins. In this protected part of Costa Rica’s Blue Zone, the long gradual shelf creates calm rollers where kids easily practice pop-ups under the continuous supervision of our lifeguard coaches.',
      cat: 'safety',
    },
    {
      q: 'Are your surf coaches certified in pediatric ocean first aid?',
      a: 'Yes, all instructors at First Peak Surf hold dual certifications from the International Surfing Association (ISA Level 1/2) and the Costa Rican Red Cross in Pediatric Ocean CPR and Water Lifeguarding. We maintain dedicated first-aid equipment directly on the beach during every single session.',
      cat: 'safety',
    },
    {
      q: 'How does the included beach telephoto video analysis work?',
      a: 'A dedicated team member records your child’s waves from the beach with high-zoom telephoto lenses at Playa Guiones. Immediately after the water session, we break down mechanics and stance on an iPad, and transmit the edited 4K video clips directly to your smartphone.',
      cat: 'gear',
    },
    {
      q: 'What is your weather and ocean cancellation policy?',
      a: 'Surfing in warm tropical sunshine or light drizzle in Nosara, Costa Rica is safe and joyful. However, if weather conditions or heavy swells make the ocean unsafe for young surfers, we promptly reschedule to the next safe tide or issue a 100% full refund.',
      cat: 'booking',
    },
  ];

  const filteredQuestions = activeCategory === 'all'
    ? faqItems
    : faqItems.filter((item) => item.cat === activeCategory);

  const toggleQuestion = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-surf-black text-surf-white pt-32 pb-24 px-6">
      <SEO 
        title="FAQ & Ocean Safety Guide | First Peak Surf Playa Guiones Nosara"
        description="Comprehensive parent and kids surf FAQ for Playa Guiones, Nosara, Costa Rica. Learn about swimming requirements, gear, sunset session timing, and Blue Zone safety."
        canonical="https://firstpeaksurf.com/faq"
        schemaData={generateFAQSchema()}
      />

      <div className="max-w-5xl mx-auto w-full">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-surf-white/50 mb-6">
          <Link to="/" className="hover:text-surf-white">Home</Link>
          <span>/</span>
          <span className="text-surf-accent">FAQ</span>
        </nav>

        {/* Semantic Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 bg-surf-accent/20 border border-surf-accent text-surf-accent text-[10px] font-mono uppercase tracking-[0.3em] inline-block mb-4">
            Parent Guide & Ocean Safety in Nosara
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl sm:text-7xl uppercase leading-[0.9] text-surf-white mb-6 whitespace-pre-line"
          >
            Frequently Asked Questions
          </motion.h1>
          <p className="text-base sm:text-lg font-light text-surf-white/75 leading-relaxed">
            Direct, factual answers regarding kids surf lessons, swimming requirements, ocean safety, gear, and sunset tide windows at Playa Guiones in Nosara, Costa Rica.
          </p>
        </header>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIdx(null);
              }}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-surf-accent text-surf-black border-surf-accent font-bold'
                  : 'border-surf-white/20 text-surf-white/70 hover:border-surf-white/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Questions rendered as semantic <article> cards */}
        <section aria-label="Frequently Asked Questions" className="space-y-4 mb-20">
          {filteredQuestions.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <article 
                key={item.q}
                className={`border transition-colors duration-300 ${
                  isOpen ? 'border-surf-accent bg-surf-white/5' : 'border-surf-white/15 bg-surf-black hover:border-surf-white/30'
                }`}
              >
                <button
                  onClick={() => toggleQuestion(idx)}
                  className="w-full p-6 sm:p-8 text-left flex justify-between items-center gap-6 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-2xl uppercase tracking-tight text-surf-white flex items-center gap-3">
                    {item.featured && (
                      <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 bg-surf-accent text-surf-black font-bold uppercase shrink-0">
                        AEO Key
                      </span>
                    )}
                    <span>{item.q}</span>
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
                      <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0 border-t border-surf-white/10 text-sm sm:text-base font-light text-surf-white/85 leading-relaxed">
                        <p>{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </section>

        {/* Have More Questions Box */}
        <section aria-label="Direct Coach Connection" className="p-8 sm:p-12 border border-surf-white/15 bg-surf-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-surf-white mb-2">
              Still Have a Specific Question?
            </h2>
            <p className="text-xs sm:text-sm font-light text-surf-white/70">
              Coach Bryan is available on WhatsApp to discuss current tides in Playa Guiones or answer any custom family questions.
            </p>
          </div>
          <a 
            href="https://wa.me/50688997873?text=Hola%20Bryan!%20I%20have%20a%20question%20before%20booking%20at%20Playa%20Guiones"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 bg-surf-accent text-surf-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-white transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle size={16} />
            <span>Ask Coach Bryan Directly</span>
          </a>
        </section>
      </div>
    </main>
  );
}
