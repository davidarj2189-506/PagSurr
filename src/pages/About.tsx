import { motion } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { ArrowRight, Award, ShieldCheck, Heart, Leaf, Waves, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const { t } = useLanguage();
  const data = t('about') || {};

  return (
    <div className="min-h-screen bg-surf-white text-surf-black pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-50 mb-6">
          <Link to="/" className="hover:opacity-100">Home</Link>
          <span>/</span>
          <span className="font-bold text-surf-accent">About Coach Bryan</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24 pb-16 border-b border-surf-black/10">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent block mb-4">
              {data.badge || 'Nosara Waterman & Educator'}
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] mb-8 whitespace-pre-line"
            >
              {data.title || 'Meet Coach\nBryan'}
            </motion.h1>
            <p className="text-base sm:text-xl font-light leading-relaxed max-w-xl opacity-85 mb-8">
              {data.subtitle || 'Founder, certified lifeguard, and passionate surf mentor for the next generation.'}
            </p>
            <p className="text-base font-light leading-relaxed max-w-xl opacity-75 mb-6">
              {data.bio1 || 'Born and raised with the ocean as his backyard in Guanacaste, Bryan has spent over two decades surfing the Pacific breaks of Costa Rica. For the past 12 years, he has dedicated his life to teaching—specializing in children and nervous beginners who need more than just technique: they need trust.'}
            </p>
            <p className="text-base font-light leading-relaxed max-w-xl opacity-75 mb-10">
              {data.bio2 || 'Bryan founded First Peak Surf with a simple belief: every child’s first experience with the ocean should be safe, magical, and empowering. By limiting class sizes to a maximum of 3 students per coach and incorporating video feedback, he ensures no child is ever overlooked.'}
            </p>

            <Link 
              to="/booking"
              className="px-8 py-4 bg-surf-black text-surf-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-accent hover:text-surf-black transition-colors inline-flex items-center gap-3"
            >
              <span>{data.ctaBtn || 'Book with Bryan'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden group shadow-2xl">
            <img 
              src={data.heroImage || 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80'} 
              alt="Coach Bryan teaching surfing at sunset in Playa Guiones, Nosara - First Peak Surf"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-surf-black text-surf-white border-l-2 border-surf-accent">
              <span className="text-[10px] font-mono uppercase text-surf-accent block">Head Instructor</span>
              <span className="text-sm font-bold uppercase tracking-tight">Coach Bryan • Nosara, Costa Rica</span>
            </div>
          </div>
        </div>

        {/* Certifications Box */}
        <div className="bg-surf-black text-surf-white p-8 sm:p-16 mb-24">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] uppercase font-mono tracking-[0.5em] text-surf-accent block mb-3">
              Rigorous Safety Standards
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase leading-none mb-8">
              {data.certificationsTitle || 'Safety Credentials & Certifications'}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {(data.certs || []).map((cert: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3 p-4 border border-surf-white/10 bg-surf-white/5">
                  <ShieldCheck className="text-surf-accent mt-0.5 shrink-0" size={20} />
                  <span className="text-sm font-light leading-relaxed">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophies */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-[0.5em] opacity-40 block mb-3">
              Our Core Values
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none">
              {data.philosophyTitle || 'The First Peak Philosophy'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.philosophies || []).map((phil: any, idx: number) => (
              <div key={idx} className="border border-surf-black/10 p-8 sm:p-10 flex flex-col justify-between hover:border-surf-black transition-colors">
                <div>
                  <span className="font-mono text-xs font-bold text-surf-accent block mb-4">Value 0{idx + 1}</span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{phil.title}</h3>
                  <p className="text-sm font-light opacity-75 leading-relaxed">{phil.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-surf-black text-surf-white p-12 sm:p-20 text-center max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl uppercase leading-none mb-6">
            {data.ctaTitle || 'Come Surf with Bryan'}
          </h2>
          <p className="text-base font-light opacity-80 max-w-xl mx-auto mb-10">
            {data.ctaText || 'Experience the magic of Playa Guiones through the eyes of someone who truly loves sharing the waves.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/booking"
              className="px-10 py-4 bg-surf-accent text-surf-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-white transition-colors"
            >
              Book Your Lesson
            </Link>
            <a 
              href="https://wa.me/50688997873" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 border border-surf-white/30 text-surf-white font-bold uppercase text-xs tracking-[0.2em] hover:border-surf-white transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
