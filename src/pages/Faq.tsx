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
    <main className="min-h-screen bg-surf-white text-surf-black pt-32 pb-24 px-6">
      <SEO 
        title="FAQ & Ocean Safety Guide | First Peak Surf Playa Guiones Nosara"
        description="Comprehensive parent and kids surf FAQ for Playa Guiones, Nosara, Costa Rica. Learn about swimming requirements, gear, sunset session timing, and Blue Zone safety."
        canonical="https://firstpeaksurf.com/faq"
        schemaData={generateFAQSchema()}
      />

      <div className="max-w-5xl mx-auto w-full">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-surf-black/50 mb-6">
          <Link to="/" className="hover:text-surf-black">Home</Link>
          <span>/</span>
          <span className="text-surf-accent font-semibold">FAQ</span>
        </nav>

        {/* Semantic Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 bg-surf-accent/20 border border-surf-accent text-surf-black text-[10px] font-mono uppercase tracking-[0.3em] inline-block mb-4 font-semibold">
            Parent Guide & Ocean Safety in Nosara
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl sm:text-7xl uppercase leading-[0.9] text-surf-black mb-6 whitespace-pre-line"
          >
            Frequently Asked Questions
          </motion.h1>
          <p className="text-base sm:text-lg font-light text-surf-black/75 leading-relaxed">
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
                  ? 'bg-surf-black text-surf-white border-surf-black font-bold'
                  : 'border-surf-black/20 text-surf-black/70 hover:border-surf-black/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Questions - Open Editorial Border Dividers (NO BOXES) */}
        <section aria-label="Frequently Asked Questions" className="border-t border-surf-black/15 mb-24 divide-y divide-surf-black/15">
          {filteredQuestions.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <article key={item.q} className="py-2">
                <button
                  onClick={() => toggleQuestion(idx)}
                  className="w-full py-6 text-left flex justify-between items-center gap-6 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display text-xl sm:text-2xl uppercase tracking-tight transition-colors ${
                    isOpen ? 'text-surf-accent' : 'text-surf-black group-hover:text-surf-accent'
                  }`}>
                    {item.q}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? 'text-surf-accent rotate-180' : 'text-surf-black/60 group-hover:text-surf-black'
                    }`} 
                  />
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
                      <div className="pb-8 text-sm sm:text-base font-light text-surf-black/80 leading-relaxed max-w-3xl">
                        <p>{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </section>

        {/* Have More Questions - Open Editorial Section (No box) */}
        <section aria-label="Direct Coach Connection" className="pt-16 border-t border-surf-black/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent font-semibold block mb-2">
              Personal Attention
            </span>
            <h2 className="font-display text-2xl sm:text-4xl uppercase tracking-tight text-surf-black mb-2">
              Still Have a Specific Question?
            </h2>
            <p className="text-sm font-light text-surf-black/70 max-w-xl">
              We are happy to answer any questions about tides, water safety for younger kids, or custom family lesson configurations.
            </p>
          </div>
          <Link 
            to="/contact"
            className="px-8 py-4 bg-surf-black text-surf-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-accent hover:text-surf-black transition-colors shrink-0"
          >
            Contact Coach Bryan
          </Link>
        </section>
      </div>
    </main>
  );
}
