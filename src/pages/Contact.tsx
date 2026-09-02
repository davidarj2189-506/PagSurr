import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { MessageCircle, MapPin, Mail, Instagram, ArrowRight, Check, ArrowUpRight, Waves, X, ExternalLink, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { generateLocalBusinessSchema } from '../utils/schemaGenerator';

export default function Contact() {
  const { language } = useLanguage();
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [program, setProgram] = useState('Kids Grom Academy (Ages 6-12)');
  const [message, setMessage] = useState('');
  const [showMap, setShowMap] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hola Bryan! I'm reaching out from First Peak Surf:\n` +
      `• Name: ${name || 'Family Guest'}\n` +
      `• Interest: ${program}\n` +
      `• Dates / Details: ${message || 'Checking tides & lesson availability in Playa Guiones'}`
    );
    window.open(`https://wa.me/50688997873?text=${text}`, '_blank');
  };

  return (
    <main className="relative min-h-[100dvh] w-full bg-surf-black text-surf-white flex flex-col justify-between overflow-x-hidden">
      <SEO 
        title="Contact & WhatsApp | First Peak Surf Playa Guiones Nosara"
        description="Direct WhatsApp concierge and contact with Coach Bryan for kids and family surf lessons at Playa Guiones, Nosara, Costa Rica."
        canonical="https://firstpeaksurf.com/contact"
        schemaData={generateLocalBusinessSchema()}
      />

      {/* Atmospheric Ocean Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 brightness-75 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-surf-black via-surf-black/90 to-surf-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-surf-black via-transparent to-surf-black/70" />
      </div>

      {/* Controlled top spacer for fixed header */}
      <div className="w-full h-14 sm:h-16 shrink-0 z-10" />

      {/* Elevated & Balanced Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-12 flex-1 flex flex-col justify-center my-auto py-2 sm:py-3">
        
        {/* Compact Editorial Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-surf-white/15 pb-3 sm:pb-4 mb-4 sm:mb-6 gap-3">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <span className="w-6 h-[2px] bg-surf-accent" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-surf-accent">
                {language === 'en' ? 'Direct Ocean Concierge • Nosara' : 'Conserjería Marina Directa • Nosara'}
              </span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none text-surf-white">
              {language === 'en' ? 'Get In Touch.' : 'Hablemos.'}
            </h1>
          </div>

          <p className="text-xs sm:text-sm font-light text-surf-white/70 max-w-sm leading-relaxed">
            {language === 'en'
              ? 'Message Coach Bryan directly on WhatsApp for tides, or leave a lesson inquiry below.'
              : 'Escríbele directamente a Bryan por WhatsApp para mareas, o déjanos tu consulta.'}
          </p>
        </div>

        {/* 2-Column Balanced Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* Left Column: Direct WhatsApp Connection & Beach Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct WhatsApp Callout */}
            <div className="bg-surf-white/5 border-l-2 border-surf-accent p-4 sm:p-5 backdrop-blur-sm">
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-surf-accent block mb-1">
                {language === 'en' ? 'Fastest Response • Coach Bryan' : 'Respuesta Inmediata • Coach Bryan'}
              </span>
              <a 
                href="https://wa.me/50688997873?text=Hola%20Bryan!%20I%20would%20like%20to%20inquire%20about%20surf%20lessons%20in%20Playa%20Guiones"
                target="_blank"
                rel="noreferrer"
                className="group block font-display text-2xl sm:text-3xl text-surf-white hover:text-surf-accent transition-colors leading-none"
              >
                +506 8899-7873
                <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-surf-accent uppercase mt-2 group-hover:translate-x-1 transition-transform">
                  <MessageCircle size={14} />
                  <span className="border-b border-surf-accent pb-0.5">
                    {language === 'en' ? 'Open WhatsApp Chat' : 'Abrir WhatsApp'}
                  </span>
                  <ArrowUpRight size={13} />
                </div>
              </a>
              <p className="text-xs font-light text-surf-white/65 mt-2.5 leading-relaxed">
                {language === 'en'
                  ? 'Bryan is often coaching groms in the surf, but checks voice notes between tides.'
                  : 'Bryan suele estar en el agua con los niños, pero responde mensajes entre mareas.'}
              </p>
            </div>

            {/* Location & Beach Quick Details (Triggers map on click) */}
            <div className="space-y-3 pt-1">
              <button 
                type="button"
                onClick={() => setShowMap(true)}
                className="w-full text-left flex items-start gap-2.5 group cursor-pointer hover:bg-surf-white/5 p-1.5 -ml-1.5 rounded transition-colors"
                title={language === 'en' ? 'Click to open full-screen map' : 'Clic para ver mapa a pantalla completa'}
              >
                <MapPin size={15} className="text-surf-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-surf-white/50 block">
                      {language === 'en' ? 'Meeting Spot (Click for map)' : 'Punto de Encuentro (Ver mapa)'}
                    </span>
                    <span className="text-[8px] font-mono uppercase tracking-wider text-surf-accent bg-surf-accent/15 px-1 py-0.2 border border-surf-accent/30">
                      GPS
                    </span>
                  </div>
                  <p className="text-xs font-light text-surf-white/90 group-hover:text-surf-accent transition-colors">
                    Playa Guiones, North Section & Baker's Path, Nosara
                  </p>
                </div>
              </button>

              <div className="flex items-start gap-2.5 px-1.5">
                <Waves size={15} className="text-surf-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-surf-white/50 block">
                    {language === 'en' ? 'Tide Windows' : 'Ventana de Mareas'}
                  </span>
                  <p className="text-xs font-light text-surf-white/90">
                    {language === 'en' ? 'Mid to High Tide (Soft sandbar whitewater)' : 'Marea Media a Alta (Espumas suaves de arena)'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 pt-2 border-t border-surf-white/10 text-xs font-mono text-surf-white/70 px-1.5">
                <a href="mailto:info@firstpeaksurf.com" className="hover:text-surf-accent transition-colors flex items-center gap-1.5 text-[11px]">
                  <Mail size={12} className="text-surf-accent" />
                  <span>info@firstpeaksurf.com</span>
                </a>
                <a href="https://instagram.com/firstpeaksurf" target="_blank" rel="noreferrer" className="hover:text-surf-accent transition-colors flex items-center gap-1.5 text-[11px]">
                  <Instagram size={12} className="text-surf-accent" />
                  <span>@firstpeaksurf</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 relative flex flex-col justify-start">
            <div className="w-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-surf-white/50">
                  {language === 'en' ? 'Send a Lesson Inquiry' : 'Envía tu Consulta'}
                </span>
                <span className="text-[10px] font-mono text-surf-accent">
                  {language === 'en' ? 'Replies within 2-4 hrs' : 'Respuesta en 2-4 hrs'}
                </span>
              </div>

              {formSent ? (
                <div className="py-8 text-left space-y-3 bg-surf-white/5 p-6 border-l-2 border-surf-accent">
                  <div className="inline-flex items-center gap-2 text-surf-accent font-mono text-xs uppercase tracking-widest">
                    <Check size={16} />
                    <span>{language === 'en' ? 'Message Sent' : 'Mensaje Enviado'}</span>
                  </div>
                  <h3 className="font-display text-2xl uppercase text-surf-white">
                    {language === 'en' ? 'Pura Vida! We will be in touch.' : '¡Pura Vida! Nos pondremos en contacto.'}
                  </h3>
                  <p className="text-xs font-light text-surf-white/75 max-w-md">
                    {language === 'en'
                      ? 'Coach Bryan will check the tide chart and message you shortly.'
                      : 'Coach Bryan revisará el pronóstico de mareas y te escribirá en breve.'}
                  </p>
                  <div className="pt-2 flex items-center gap-5">
                    <button
                      onClick={() => setFormSent(false)}
                      className="text-xs uppercase font-mono tracking-widest text-surf-white/50 hover:text-surf-white border-b border-surf-white/30 pb-0.5 transition-colors cursor-pointer"
                    >
                      {language === 'en' ? '← Send Another' : '← Enviar Otro'}
                    </button>
                    <button
                      onClick={handleWhatsAppDirect}
                      className="text-xs uppercase font-bold tracking-widest text-surf-accent hover:text-surf-white border-b border-surf-accent pb-0.5 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageCircle size={13} />
                      <span>{language === 'en' ? 'Chat on WhatsApp' : 'Chatear por WhatsApp'}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  {/* Row 1: Name & Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-wider text-surf-white/60 block mb-0.5">
                        {language === 'en' ? 'Your Name' : 'Tu Nombre'} *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder={language === 'en' ? 'Sarah Jenkins' : 'Carlos Morales'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-surf-white/25 focus:border-surf-accent text-surf-white text-sm py-1.5 px-0 outline-none transition-colors rounded-none placeholder:text-surf-white/25"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-wider text-surf-white/60 block mb-0.5">
                        {language === 'en' ? 'WhatsApp or Email' : 'WhatsApp o Correo'} *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder={language === 'en' ? '+1 (555) 019-2834' : '+506 8888-0000'}
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-surf-white/25 focus:border-surf-accent text-surf-white text-sm py-1.5 px-0 outline-none transition-colors rounded-none placeholder:text-surf-white/25"
                      />
                    </div>
                  </div>

                  {/* Row 2: Program Dropdown */}
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-wider text-surf-white/60 block mb-0.5">
                      {language === 'en' ? 'Session of Interest' : 'Sesión de Interés'}
                    </label>
                    <select 
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-surf-white/25 focus:border-surf-accent text-surf-white text-sm py-1.5 px-0 outline-none transition-colors rounded-none cursor-pointer [&>option]:bg-surf-black [&>option]:text-surf-white"
                    >
                      <option value="Kids Grom Academy (Ages 6-12)">Kids Grom Academy (Ages 6–12) • 1:3 Max Ratio</option>
                      <option value="Family Surf Experience">Family Sunset Wave Experience</option>
                      <option value="Private 1:1 VIP Coaching">Private 1:1 VIP Coaching with Bryan</option>
                      <option value="Multi-Day Progression Package">Multi-Day Progression Package</option>
                      <option value="Tides & General Question">Tides & General Inquiries</option>
                    </select>
                  </div>

                  {/* Row 3: Message / Dates */}
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-wider text-surf-white/60 block mb-0.5">
                      {language === 'en' ? 'Dates in Nosara & Kids Ages' : 'Fechas en Nosara y Edades de los Niños'} *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder={language === 'en' 
                        ? 'e.g., Nov 12-19, two kids ages 7 and 10...' 
                        : 'ej. 12 al 19 de Nov, dos niños de 7 y 10 años...'}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-surf-white/25 focus:border-surf-accent text-surf-white text-sm py-1.5 px-0 outline-none transition-colors rounded-none placeholder:text-surf-white/25"
                    />
                  </div>

                  {/* Actions: Clean Elevated Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-6">
                    <button 
                      type="submit"
                      className="text-xs font-bold uppercase tracking-[0.25em] text-surf-accent hover:text-surf-white border-b-2 border-surf-accent hover:border-surf-white pb-1 transition-all inline-flex items-center gap-2 group cursor-pointer"
                    >
                      <span>{language === 'en' ? 'Send Inquiry' : 'Enviar Consulta'}</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button 
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="text-xs font-bold uppercase tracking-[0.2em] text-surf-white/70 hover:text-surf-accent border-b border-surf-white/30 hover:border-surf-accent pb-1 transition-all inline-flex items-center gap-2 cursor-pointer"
                    >
                      <MessageCircle size={13} className="text-surf-accent" />
                      <span>{language === 'en' ? 'Send via WhatsApp' : 'Enviar por WhatsApp'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Docked Minimalist Bottom Line with Centered GPS Button */}
      <footer className="relative z-20 w-full shrink-0 border-t border-surf-white/10 px-6 sm:px-10 lg:px-12 py-2.5 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[9px] uppercase tracking-[0.25em] font-mono text-surf-white/40 relative">
          
          {/* Left Text */}
          <span className="order-2 sm:order-1 text-center sm:text-left">
            First Peak Surf • Playa Guiones, Costa Rica
          </span>

          {/* EXACT CENTER: GPS Location Icon Button with Wave Pulse Effect */}
          <div className="order-1 sm:order-2 flex justify-center items-center">
            <button
              onClick={() => setShowMap(true)}
              aria-label="Abrir mapa interactivo GPS de Nosara a pantalla completa"
              className="group relative flex items-center gap-2 px-3.5 py-1.5 bg-surf-white/10 hover:bg-surf-accent border border-surf-white/20 hover:border-surf-accent text-surf-white hover:text-surf-black transition-all duration-300 cursor-pointer rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-95"
              title={language === 'en' ? 'Click to open full-screen GPS map' : 'Clic para abrir mapa GPS a pantalla completa'}
            >
              {/* Pulsing Radar Ring */}
              <span className="absolute inset-0 rounded-full bg-surf-accent/20 animate-ping pointer-events-none group-hover:opacity-0" />
              
              <div className="relative flex items-center justify-center">
                <LocateFixed size={14} className="text-surf-accent group-hover:text-surf-black group-hover:rotate-45 transition-transform duration-300" />
              </div>
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-surf-white group-hover:text-surf-black transition-colors">
                GPS • Nosara
              </span>
            </button>
          </div>

          {/* Right Link */}
          <Link to="/booking" className="order-3 text-surf-accent hover:text-surf-white transition-colors text-center sm:text-right">
            {language === 'en' ? 'Ready to surf? Book a Lesson →' : '¿Listos para surfear? Reservar Clase →'}
          </Link>
        </div>
      </footer>

      {/* FULL-SCREEN SLIDING GOOGLE MAP OVERLAY WITH WAVE EFFECT */}
      <AnimatePresence>
        {showMap && (
          <motion.div
            key="fullscreen-nosara-google-map"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{
              type: 'spring',
              damping: 26,
              stiffness: 170,
              mass: 0.9,
            }}
            className="fixed inset-0 z-50 w-full h-[100dvh] bg-surf-black text-surf-white flex flex-col overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.9)]"
          >
            {/* Wave Crest Visual Edge (The top crest of the wave) */}
            <div className="relative w-full shrink-0 bg-surf-black overflow-hidden select-none border-b border-surf-white/15">
              {/* Stylized Ocean Wave SVG Crest */}
              <div className="w-full h-6 sm:h-8 overflow-hidden bg-gradient-to-b from-surf-accent/20 to-transparent">
                <svg
                  viewBox="0 0 1440 120"
                  preserveAspectRatio="none"
                  className="w-full h-full text-surf-accent fill-current opacity-70 animate-pulse"
                >
                  <path d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,90.7C1248,85,1344,43,1392,21.3L1440,0L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
                </svg>
              </div>

              {/* Full-Screen Top Control Bar */}
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
                
                {/* Left: Location & Coordinates */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surf-accent/20 border border-surf-accent/40 flex items-center justify-center text-surf-accent">
                    <Compass size={18} className="animate-spin" style={{ animationDuration: '20s' }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-display uppercase tracking-wider text-surf-white">
                        Playa Guiones • Nosara, Costa Rica
                      </span>
                      <span className="hidden sm:inline-block text-[9px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-1.5 py-0.5">
                        ● LIVE GPS
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-surf-white/50 block">
                      Coord: 9.9723° N, 85.6793° W • Meeting Spot: Baker's Beach Path
                    </span>
                  </div>
                </div>

                {/* Right: External Link & Wave Close Button */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://maps.google.com/?q=Playa+Guiones+Nosara+Costa+Rica"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 border border-surf-white/20 hover:border-surf-accent text-surf-white hover:text-surf-accent text-xs font-mono uppercase tracking-wider transition-colors"
                  >
                    <span>{language === 'en' ? 'Google Maps App' : 'Abrir en App'}</span>
                    <ExternalLink size={13} />
                  </a>

                  {/* Close Wave Button */}
                  <button
                    type="button"
                    onClick={() => setShowMap(false)}
                    className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-surf-accent text-surf-black hover:bg-surf-white text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer shadow-lg active:scale-95 group"
                    title={language === 'en' ? 'Close map (Slide down)' : 'Ocultar mapa (Efecto de ola hacia abajo)'}
                  >
                    <span>{language === 'en' ? 'Close Map' : 'Ocultar Mapa'}</span>
                    <X size={16} className="group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* FULL-SCREEN LIVE INTERACTIVE GOOGLE MAP */}
            <div className="flex-1 w-full h-full relative bg-neutral-950">
              <iframe
                title="Google Maps Fullscreen Playa Guiones Nosara"
                src="https://maps.google.com/maps?q=Playa%20Guiones%2C%20Nosara%2C%20Guanacaste%2C%20Costa%20Rica&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />

              {/* Floating Surf Spot Overlay Card on Map */}
              <div className="absolute top-4 left-4 sm:left-8 z-10 max-w-sm bg-surf-black/90 border border-surf-accent/40 p-4 text-surf-white backdrop-blur-md shadow-2xl space-y-2 pointer-events-auto">
                <div className="flex items-center gap-2 text-surf-accent text-[10px] font-mono uppercase tracking-widest">
                  <Waves size={14} />
                  <span>First Peak Surf Point</span>
                </div>
                <h4 className="font-display text-lg uppercase tracking-tight leading-tight">
                  Baker's Beach Path • Playa Guiones
                </h4>
                <p className="text-xs font-light text-surf-white/70 leading-relaxed">
                  {language === 'en'
                    ? 'Our lesson meeting area is directly through Baker’s beach entrance. Gentle sand bottom waves ideal for groms & families.'
                    : 'Punto de encuentro directo por la entrada de Baker’s. Olas suaves con fondo de arena, ideales para niños y familias.'}
                </p>
                <div className="pt-1 flex items-center gap-4 text-[10px] font-mono">
                  <a
                    href="https://wa.me/50688997873?text=Hola%20Bryan!%20I%20am%20at%20Playa%20Guiones%20checking%20the%20meeting%20spot"
                    target="_blank"
                    rel="noreferrer"
                    className="text-surf-accent hover:text-surf-white underline flex items-center gap-1"
                  >
                    <MessageCircle size={11} />
                    <span>WhatsApp Bryan</span>
                  </a>
                  <span className="text-surf-white/40">•</span>
                  <span className="text-emerald-400">Mid to High Tide</span>
                </div>
              </div>

              {/* Bottom Quick Bar over Map */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <button
                  type="button"
                  onClick={() => setShowMap(false)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-surf-black/90 hover:bg-surf-accent text-surf-white hover:text-surf-black border border-surf-accent text-xs font-mono uppercase tracking-widest font-bold backdrop-blur-md shadow-2xl transition-all cursor-pointer active:scale-95"
                >
                  <span>{language === 'en' ? 'Back to Contact Form ↓' : 'Volver al Formulario ↓'}</span>
                </button>
              </div>
            </div>

            {/* Bottom Strip of Full-Screen Map */}
            <div className="px-4 sm:px-8 py-2 bg-surf-black border-t border-surf-white/10 flex items-center justify-between text-[10px] font-mono text-surf-white/50 shrink-0">
              <span>Nosara, Guanacaste Province, Costa Rica</span>
              <span>First Peak Surf School • Playa Guiones</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
