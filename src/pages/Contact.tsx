import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { MessageCircle, MapPin, Mail, Phone, Instagram, Send, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const { t } = useLanguage();
  const data = t('contact') || {};
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Kids / Family Lessons Inquiry');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-surf-black text-surf-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-surf-white/50 mb-6">
          <Link to="/" className="hover:text-surf-white">Home</Link>
          <span>/</span>
          <span className="text-surf-accent">Contact & WhatsApp</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b border-surf-white/10 pb-12">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-surf-accent block mb-3">
              {data.badge || 'Always Happy to Chat Surfing'}
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-surf-white whitespace-pre-line"
            >
              {data.title || 'Get In\nTouch'}
            </motion.h1>
          </div>
          <p className="text-base sm:text-lg font-light text-surf-white/80 max-w-md pb-2">
            {data.subtitle || 'Have questions about tides, nervous kids, or booking your family surf adventure? Reach out directly.'}
          </p>
        </div>

        {/* WhatsApp Highlight Banner */}
        <div className="bg-surf-white text-surf-black p-8 sm:p-12 mb-16 border-l-4 border-surf-accent flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-surf-black text-surf-accent flex items-center justify-center shrink-0">
              <MessageCircle size={32} />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest opacity-60 block">Fastest Response</span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight">Direct WhatsApp Concierge</h3>
              <p className="text-sm font-light opacity-75 mt-1">Bryan is often in the water, but responds to voice notes and texts promptly.</p>
            </div>
          </div>

          <a 
            href="https://wa.me/50688997873?text=Hola%20Bryan!%20I'm%20visiting%20Nosara%20and%20would%20like%20to%20ask%20about%20surf%20lessons"
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto px-8 py-4 bg-surf-accent text-surf-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-black hover:text-surf-white transition-colors flex items-center justify-center gap-3 whitespace-nowrap"
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp (+506)</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Details & Location */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="font-display text-2xl uppercase tracking-tight text-surf-white mb-6">
                Beach Headquarters
              </h3>
              
              <div className="space-y-6 text-sm font-light text-surf-white/80">
                <div className="flex items-start gap-4">
                  <MapPin className="text-surf-accent shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="block text-surf-white uppercase tracking-wider text-xs font-mono">Location & Meeting Spot</strong>
                    <p className="mt-1">{data.address || 'Playa Guiones (Main Beach Entrance & Baker\'s Path)'}</p>
                    <p className="text-xs text-surf-white/50">Nosara, Nicoya Peninsula, Guanacaste 50206, Costa Rica</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-surf-accent shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="block text-surf-white uppercase tracking-wider text-xs font-mono">Direct Call / WhatsApp</strong>
                    <p className="mt-1">+506 8899-7873</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-surf-accent shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="block text-surf-white uppercase tracking-wider text-xs font-mono">Email</strong>
                    <p className="mt-1">info@firstpeaksurf.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="text-surf-accent shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="block text-surf-white uppercase tracking-wider text-xs font-mono">Instagram</strong>
                    <p className="mt-1">@firstpeaksurf</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guiones Map / Meeting Guidance */}
            <div className="p-6 border border-surf-white/10 bg-surf-white/5">
              <span className="text-[10px] font-mono text-surf-accent uppercase tracking-widest block mb-2">
                Where We Meet
              </span>
              <p className="text-xs font-light text-surf-white/70 leading-relaxed mb-4">
                We set up directly on the sand under our shade canopy at Playa Guiones North or South depending on the tide of the day. You will receive an exact Google Pin 24 hours prior to your session!
              </p>
              <div className="h-40 w-full overflow-hidden border border-surf-white/10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80" 
                  alt="Playa Guiones beach meeting location at sunset in Nosara, Costa Rica - First Peak Surf"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-surf-black/40">
                  <span className="text-xs font-mono tracking-widest text-surf-white uppercase px-3 py-1 bg-surf-black/80 border border-surf-accent">
                    Playa Guiones Sand-Bottom
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="border border-surf-white/15 bg-surf-white/5 p-8 sm:p-12">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-surf-accent block mb-3">
                Send a Note
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-surf-white mb-8">
                Inquire or Say Pura Vida
              </h3>

              {formSent ? (
                <div className="p-8 border border-surf-accent text-center bg-surf-accent/10">
                  <div className="w-12 h-12 rounded-full bg-surf-accent text-surf-black flex items-center justify-center mx-auto mb-4">
                    <Check size={24} />
                  </div>
                  <h4 className="font-display text-xl uppercase mb-2">Message Sent!</h4>
                  <p className="text-xs sm:text-sm font-light text-surf-white/80 mb-6">
                    Thank you, {name}. Coach Bryan or our team will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormSent(false)}
                    className="px-6 py-2 border border-surf-white/30 text-xs uppercase tracking-widest font-bold hover:border-surf-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-xs font-mono text-surf-white/70 block mb-2">Your Name</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-surf-black border border-surf-white/20 p-3 text-surf-white text-sm outline-none focus:border-surf-accent"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-mono text-surf-white/70 block mb-2">Email Address</label>
                      <input 
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-surf-black border border-surf-white/20 p-3 text-surf-white text-sm outline-none focus:border-surf-accent"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-surf-white/70 block mb-2">Topic</label>
                      <select 
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-surf-black border border-surf-white/20 p-3 text-surf-white text-sm outline-none focus:border-surf-accent"
                      >
                        <option value="Kids / Family Lessons Inquiry">Kids Grom Academy</option>
                        <option value="Family Surf Experience">Family Surf Experience</option>
                        <option value="Private 1-on-1 Coaching">Private 1-on-1 Coaching</option>
                        <option value="Multi-Day Progression Packages">Multi-Day Progression Packages</option>
                        <option value="Other / General Question">Other / General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-surf-white/70 block mb-2">Your Message</label>
                    <textarea 
                      rows={5}
                      required
                      placeholder="Dates you'll be in Nosara, ages of children, special requests..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-surf-black border border-surf-white/20 p-3 text-surf-white text-sm outline-none focus:border-surf-accent resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-surf-accent text-surf-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-surf-white transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
