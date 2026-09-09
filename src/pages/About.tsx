import { motion } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const { t, language } = useLanguage();
  const data = t('about') || {};

  return (
    <div className="min-h-screen bg-surf-white text-surf-black pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Magazine Masthead Folio - Replaces traditional breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.25em] text-surf-black/50 border-b border-surf-black/15 pb-4 mb-12">
          <span>{language === 'en' ? 'First Peak Nosara • Profile Feature' : 'First Peak Nosara • Perfil Editorial'}</span>
          <span>{language === 'en' ? 'Vol. 04 • Playa Guiones, Costa Rica' : 'Vol. 04 • Playa Guiones, Costa Rica'}</span>
        </div>

        {/* Hero Magazine Spread */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 pb-16 border-b border-surf-black/15">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent block mb-3 font-semibold">
              {data.badge || (language === 'en' ? 'Nosara Waterman & Educator • Over 12 Years Coaching' : 'Waterman de Nosara y Educador • Más de 12 Años')}
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-6xl sm:text-7xl lg:text-9xl uppercase leading-[0.88] tracking-tight mb-6 whitespace-pre-line text-surf-black"
            >
              {data.title || 'Meet Coach\nBryan'}
            </motion.h1>

            <p className="text-xl sm:text-2xl font-light leading-snug text-surf-black/90 mb-4 max-w-2xl font-serif sm:font-sans">
              {data.subtitle || 'Founder, certified ocean lifeguard, and passionate surf mentor shaping the next generation in Nosara.'}
            </p>

            {/* Editorial Byline */}
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-surf-black/50 mb-8 pb-4 border-b border-surf-black/10">
              <span>{language === 'en' ? 'By First Peak Chronicles' : 'Por Crónicas First Peak'}</span>
              <span>•</span>
              <span>Playa Guiones</span>
              <span>•</span>
              <span>{language === 'en' ? '5 Min Read' : 'Lectura 5 Min'}</span>
            </div>

            {/* Editorial Article Prose with Drop Cap */}
            <div className="space-y-6 max-w-2xl mb-10 text-surf-black/85 leading-relaxed text-base sm:text-lg font-light">
              <p className="first-letter:float-left first-letter:text-6xl first-letter:font-display first-letter:leading-none first-letter:mr-3 first-letter:pt-1 first-letter:text-surf-black">
                {language === 'en'
                  ? 'Born and raised with the ocean as his backyard in Guanacaste, Bryan has spent over two decades surfing the Pacific breaks of Costa Rica. For the past 12 years, he has dedicated his life to teaching—specializing in children and nervous beginners who need more than just technique: they need trust.'
                  : 'Nacido y criado con el Pacífico como patio trasero en Guanacaste, Bryan lleva más de dos décadas surfeando las costas de Costa Rica. Durante los últimos 12 años, ha dedicado su vida a la enseñanza, especializándose en niños y personas que necesitan más que técnica: necesitan confianza.'}
              </p>
              <p>
                {language === 'en'
                  ? 'Bryan founded First Peak Surf with a simple belief: every child’s first experience with the ocean should be safe, magical, and empowering. By limiting class sizes to a maximum of 3 students per coach and incorporating video feedback, he ensures no child is ever overlooked.'
                  : 'Bryan fundó First Peak Surf con una convicción clara: la primera experiencia de un niño en el océano debe ser segura, mágica y empoderadora. Al limitar las clases a un ratio máximo de 3 alumnos por instructor y sumar análisis en video, asegura que ningún niño quede desatendido.'}
              </p>
            </div>

            {/* Magazine Dossier / Field Specs (No boxes) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-t border-b border-surf-black/15 mb-10">
              {(data.stats || [
                { label: 'Pacific Ocean', value: '20+ Years' },
                { label: 'Surf Coach', value: '12+ Years' },
                { label: 'Safety Ratio', value: '1:3 Max' },
                { label: 'Certifications', value: 'ISA L2 & Rescue' }
              ]).map((st: any, idx: number) => (
                <div key={idx}>
                  <span className="font-display text-2xl sm:text-3xl uppercase tracking-tight block text-surf-black">
                    {st.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-surf-black/60 block mt-1">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link 
                to="/booking"
                className="px-8 py-4 bg-surf-black text-surf-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-accent hover:text-surf-black transition-colors inline-flex items-center gap-3"
              >
                <span>{data.ctaBtn || (language === 'en' ? 'Book with Bryan' : 'Reservar con Bryan')}</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="text-xs font-bold uppercase tracking-[0.2em] text-surf-black hover:text-surf-accent border-b-2 border-surf-black hover:border-surf-accent pb-1 transition-colors"
              >
                {language === 'en' ? 'Direct Inquiry' : 'Consulta Directa'} →
              </Link>
            </div>
          </div>

          {/* Clean Magazine Plate Image - Pure Photography with Editorial Caption */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={data.heroImage || 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80'} 
                alt="Coach Bryan - Head Surf Instructor in Playa Guiones Nosara"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>
            <div className="pt-3 border-t border-surf-black/15 flex justify-between items-center text-[10px] sm:text-[11px] font-mono text-surf-black/60 uppercase tracking-widest">
              <span>Plate No. 01 — Coach Bryan</span>
              <span>Playa Guiones, Nosara</span>
            </div>
          </div>
        </div>

        {/* Narrative Biography Chapters - Clean Editorial Layout (No card boxes) */}
        <div className="mb-24">
          <div className="max-w-3xl mb-14">
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent block mb-3">
              {language === 'en' ? 'The Instructor’s Journey' : 'La Trayectoria del Instructor'}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-[0.95] text-surf-black">
              {language === 'en' ? 'A Life Dedicated to the Ocean' : 'Una Vida Dedicada al Océano'}
            </h2>
          </div>

          <div className="space-y-16 max-w-4xl">
            {(data.chapters || []).map((ch: any, idx: number) => (
              <div key={idx} className="border-t border-surf-black/20 pt-8 grid md:grid-cols-12 gap-6 md:gap-10 items-baseline">
                <div className="md:col-span-4">
                  <span className="font-mono text-xs text-surf-accent block mb-2">{ch.num}</span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-surf-black leading-snug">
                    {ch.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-surf-black/50 mt-1">
                    {ch.subtitle}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm sm:text-base font-light text-surf-black/80 leading-relaxed">
                    {ch.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Large Editorial Quote Callout */}
        <div className="py-16 border-t border-b border-surf-black/20 mb-24 max-w-5xl mx-auto">
          <Quote size={36} className="text-surf-accent/70 mb-6" />
          <blockquote className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase leading-tight tracking-tight text-surf-black mb-6">
            "{data.quote || 'Surfing isn’t about conquering the ocean. It’s about listening to it, respecting its power, and finding your own flow in the water.'}"
          </blockquote>
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-surf-black/60">
            — {data.quoteAuthor || 'Coach Bryan • Founder & Head Instructor, First Peak Surf'}
          </p>
        </div>

        {/* Safety Credentials & Certifications - Clean Editorial List (No card boxes) */}
        <div className="py-16 border-b border-surf-black/15 mb-24">
          <div className="max-w-4xl">
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent block mb-3">
              {language === 'en' ? 'Professional Standards' : 'Estándares Profesionales'}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase leading-[0.95] mb-10 text-surf-black">
              {data.certificationsTitle || 'Official Credentials & Safety Certifications'}
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {(data.certs || []).map((cert: string, idx: number) => (
                <div key={idx} className="border-t border-surf-black/15 pt-4 flex items-baseline gap-4">
                  <span className="font-mono text-xs text-surf-accent shrink-0">0{idx + 1}</span>
                  <span className="text-sm font-normal text-surf-black/85 leading-relaxed">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bryan's Core Philosophies - Open Columns (No card boxes) */}
        <div className="mb-24">
          <div className="max-w-3xl mb-14">
            <span className="text-[10px] uppercase font-mono tracking-[0.5em] opacity-40 block mb-3">
              {language === 'en' ? 'In the Water' : 'En el Agua'}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none">
              {data.philosophyTitle || 'Bryan’s Core Principles'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {(data.philosophies || []).map((phil: any, idx: number) => (
              <div key={idx} className="border-t border-surf-black/20 pt-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-surf-accent block mb-3">Principle 0{idx + 1}</span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-3 text-surf-black">{phil.title}</h3>
                  <p className="text-sm font-light text-surf-black/75 leading-relaxed">{phil.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Editorial Invitation CTA (No card boxes) */}
        <div className="pt-16 border-t border-surf-black/15 text-center max-w-3xl mx-auto">
          <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent block mb-3">
            {language === 'en' ? 'Personalized Mentorship' : 'Mentoría Personalizada'}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none mb-6 text-surf-black">
            {data.ctaTitle || 'Train with Coach Bryan'}
          </h2>
          <p className="text-base sm:text-lg font-light text-surf-black/70 max-w-xl mx-auto mb-10 leading-relaxed">
            {data.ctaText || 'Whether you want your child to fall in love with the ocean safely or you are looking to elevate your own wave count with 1-on-1 coaching, Bryan is here to guide your journey.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              to="/booking"
              className="px-10 py-4 bg-surf-black text-surf-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-accent hover:text-surf-black transition-colors"
            >
              {language === 'en' ? 'Reserve Session with Bryan' : 'Reservar Sesión con Bryan'}
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 border border-surf-black/30 text-surf-black font-bold uppercase text-xs tracking-[0.2em] hover:border-surf-black transition-colors"
            >
              {language === 'en' ? 'Contact Coach Bryan' : 'Contactar al Coach Bryan'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
