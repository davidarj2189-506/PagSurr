import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { useSearchParams, Link } from 'react-router-dom';
import { Check, Calendar as CalendarIcon, Clock, Users, MessageCircle, ArrowRight, X } from 'lucide-react';

export default function Booking() {
  const { language, t } = useLanguage();
  const data = t('booking') || {};
  const formData = data.form || {};
  const [searchParams] = useSearchParams();

  const programParam = searchParams.get('program') || 'kids';

  const [selectedProgram, setSelectedProgram] = useState(programParam);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning Low Tide (Calmest, Recommended)');
  const [numSurfers, setNumSurfers] = useState('1');
  const [kidsAges, setKidsAges] = useState('');
  const [experience, setExperience] = useState('Absolute First Time');
  const [swimming, setSwimming] = useState('Basic Water Comfort (can tread / float)');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);

  useEffect(() => {
    if (searchParams.get('program')) {
      setSelectedProgram(searchParams.get('program')!);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const currentProgramObj = (data.programs || []).find((p: any) => p.id === selectedProgram) || (data.programs || [])[0];

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hola Bryan! I'm requesting a surf booking at First Peak Surf Nosara:\n\n` +
      `• Program: ${currentProgramObj?.name || selectedProgram}\n` +
      `• Date: ${preferredDate || 'Flexible / Soon'}\n` +
      `• Time: ${preferredTime}\n` +
      `• Surfers: ${numSurfers} (${kidsAges ? `Ages: ${kidsAges}` : ''})\n` +
      `• Experience: ${experience}\n` +
      `• Name: ${parentName}\n` +
      `• Notes: ${notes || 'None'}`
    );
    return `https://wa.me/50688997873?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-surf-black text-surf-white pt-32 pb-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header - Completely Open, No Badges in boxes */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-surf-accent block mb-3">
            {data.badge || 'Easy Online Scheduling'}
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl sm:text-7xl uppercase leading-[0.9] text-surf-white mb-5 whitespace-pre-line"
          >
            {data.title || 'Book Your\nSession'}
          </motion.h1>
          <p className="text-base sm:text-lg font-light text-surf-white/75 leading-relaxed">
            {data.subtitle || 'Select your preferred class, date, and group size. We time every lesson around the optimal tide for safety.'}
          </p>
        </div>

        {/* Live Calendly Option - Open Editorial Line (No card/box) */}
        <div className="py-4 border-b border-surf-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mb-14 text-sm font-light text-surf-white/80">
          <div className="flex items-center gap-3">
            <CalendarIcon className="text-surf-accent shrink-0" size={18} />
            <span>{formData.calendlyAlt || 'Prefer to pick a live calendar slot directly in Calendly?'}</span>
          </div>
          <button 
            type="button"
            onClick={() => setShowCalendlyModal(true)}
            className="text-xs font-mono uppercase tracking-wider text-surf-accent hover:text-surf-white flex items-center gap-2 group transition-colors cursor-pointer"
          >
            <span className="underline underline-offset-4 decoration-surf-accent/60 group-hover:decoration-surf-white">
              {formData.calendlyBtn || 'Open Calendly Schedule'}
            </span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-12 text-center max-w-2xl mx-auto border-t border-b border-surf-white/10"
          >
            <div className="w-14 h-14 rounded-full bg-surf-accent text-surf-black flex items-center justify-center mx-auto mb-6">
              <Check size={28} strokeWidth={3} />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase mb-4 text-surf-white">
              {data.successTitle || 'Reservation Request Received!'}
            </h2>
            <p className="text-sm sm:text-base font-light text-surf-white/80 leading-relaxed mb-8">
              {data.successDesc || 'Bryan or our concierge will message you on WhatsApp and email within 2 hours with your exact tide-optimized meeting time at Playa Guiones.'}
            </p>

            <div className="py-6 border-t border-b border-surf-white/10 text-left text-xs font-mono mb-8 space-y-2">
              <p><strong className="text-surf-accent">Program:</strong> {currentProgramObj?.name}</p>
              <p><strong className="text-surf-accent">Date:</strong> {preferredDate || 'Coordinating with tide'}</p>
              <p><strong className="text-surf-accent">Window:</strong> {preferredTime}</p>
              <p><strong className="text-surf-accent">Surfers:</strong> {numSurfers} {kidsAges ? `(Ages: ${kidsAges})` : ''}</p>
              <p><strong className="text-surf-accent">Lead Name:</strong> {parentName}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 text-surf-accent hover:text-surf-white font-mono uppercase text-xs tracking-widest transition-colors"
              >
                <MessageCircle size={16} />
                <span className="underline underline-offset-4">Confirm on WhatsApp Now →</span>
              </a>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-surf-white/60 hover:text-surf-white text-xs font-mono uppercase tracking-wider underline underline-offset-4 transition-colors"
              >
                Make Another Booking
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Selections - Pure Open Design */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Step 1: Select Program - Open Editorial List (NO BOXES) */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-surf-accent mb-4 pb-2 border-b border-surf-white/10">
                  {data.step1 || '1. Select Your Program'}
                </h3>
                <div className="divide-y divide-surf-white/10">
                  {(data.programs || []).map((prog: any) => {
                    const isSelected = selectedProgram === prog.id;
                    return (
                      <div 
                        key={prog.id}
                        onClick={() => setSelectedProgram(prog.id)}
                        className={`py-4 px-2 transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 group ${
                          isSelected ? 'text-surf-white' : 'text-surf-white/70 hover:text-surf-white'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors ${
                            isSelected ? 'bg-surf-accent ring-4 ring-surf-accent/20' : 'bg-surf-white/20 group-hover:bg-surf-white/40'
                          }`} />
                          <div>
                            <h4 className={`font-display text-xl sm:text-2xl uppercase tracking-tight transition-colors ${
                              isSelected ? 'text-surf-accent' : 'text-surf-white group-hover:text-surf-accent'
                            }`}>
                              {prog.name}
                            </h4>
                            <span className="text-[11px] font-mono text-surf-white/50 block">
                              {prog.ratio}
                            </span>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className={`font-display text-xl sm:text-2xl transition-colors ${
                            isSelected ? 'text-surf-accent' : 'text-surf-white/85'
                          }`}>
                            {prog.price}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Date & Tide Window - Underline Inputs (NO BOXES) */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-surf-accent mb-4 pb-2 border-b border-surf-white/10">
                  {data.step2 || '2. Date & Time Preferences'}
                </h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-surf-white/60 block mb-1.5">
                      {formData.dateLabel || 'Preferred Date'}
                    </label>
                    <input 
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-surf-white/25 py-2.5 px-0 text-surf-white text-base outline-none focus:border-surf-accent transition-colors rounded-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-surf-white/60 block mb-1.5">
                      {formData.timeLabel || 'Preferred Time Window'}
                    </label>
                    <select 
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-surf-white/25 py-2.5 px-0 text-surf-white text-base outline-none focus:border-surf-accent transition-colors rounded-none cursor-pointer"
                    >
                      {(formData.timeOptions || [
                        'Morning Low Tide (Calmest, Recommended)',
                        'Mid-Day Mellow Session',
                        'Sunset Golden Hour Session'
                      ]).map((opt: string) => (
                        <option key={opt} value={opt} className="bg-surf-black text-surf-white">{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Surfer Profile - Underline Inputs (NO BOXES) */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-surf-accent mb-4 pb-2 border-b border-surf-white/10">
                  {data.step3 || '3. Surfer Details & Experience'}
                </h3>
                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-surf-white/60 block mb-1.5">
                      {formData.surfersLabel || 'Number of Surfers'}
                    </label>
                    <select 
                      value={numSurfers}
                      onChange={(e) => setNumSurfers(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-surf-white/25 py-2.5 px-0 text-surf-white text-base outline-none focus:border-surf-accent rounded-none cursor-pointer"
                    >
                      <option value="1" className="bg-surf-black">1 Surfer</option>
                      <option value="2" className="bg-surf-black">2 Surfers</option>
                      <option value="3" className="bg-surf-black">3 Surfers (Max for 1 Coach)</option>
                      <option value="4" className="bg-surf-black">4 Surfers (Family - 2 Coaches)</option>
                      <option value="5+" className="bg-surf-black">5+ Surfers (Custom Family Group)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-surf-white/60 block mb-1.5">
                      {formData.kidsAgesLabel || 'Kids Ages (e.g. 7, 10)'}
                    </label>
                    <input 
                      type="text"
                      placeholder="e.g. 7 and 10 years old"
                      value={kidsAges}
                      onChange={(e) => setKidsAges(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-surf-white/25 py-2.5 px-0 text-surf-white text-base outline-none focus:border-surf-accent placeholder:text-surf-white/30 rounded-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-surf-white/60 block mb-1.5">
                      {formData.experienceLabel || 'Experience Level'}
                    </label>
                    <select 
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-surf-white/25 py-2.5 px-0 text-surf-white text-base outline-none focus:border-surf-accent rounded-none cursor-pointer"
                    >
                      {(formData.expOptions || ['Absolute First Time', 'Has Tried Once', 'Comfortable in Whitewater']).map((opt: string) => (
                        <option key={opt} value={opt} className="bg-surf-black">{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-surf-white/60 block mb-1.5">
                      {formData.swimmingLabel || 'Swimming Comfort'}
                    </label>
                    <select 
                      value={swimming}
                      onChange={(e) => setSwimming(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-surf-white/25 py-2.5 px-0 text-surf-white text-base outline-none focus:border-surf-accent rounded-none cursor-pointer"
                    >
                      {(formData.swimOptions || ['Basic Water Comfort', 'Confident Swimmer']).map((opt: string) => (
                        <option key={opt} value={opt} className="bg-surf-black">{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Contact Details - Underline Inputs (NO BOXES) */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-surf-accent mb-4 pb-2 border-b border-surf-white/10">
                  {data.step4 || '4. Contact Details'}
                </h3>
                <div className="space-y-8">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-surf-white/60 block mb-1.5">
                      {formData.parentNameLabel || 'Lead Parent Name'}
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="Your full name"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-surf-white/25 py-2.5 px-0 text-surf-white text-base outline-none focus:border-surf-accent placeholder:text-surf-white/30 rounded-none"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-surf-white/60 block mb-1.5">
                        {formData.emailLabel || 'Email'}
                      </label>
                      <input 
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-surf-white/25 py-2.5 px-0 text-surf-white text-base outline-none focus:border-surf-accent placeholder:text-surf-white/30 rounded-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-surf-white/60 block mb-1.5">
                        {formData.phoneLabel || 'WhatsApp / Phone'}
                      </label>
                      <input 
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-surf-white/25 py-2.5 px-0 text-surf-white text-base outline-none focus:border-surf-accent placeholder:text-surf-white/30 rounded-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-surf-white/60 block mb-1.5">
                      {formData.notesLabel || 'Special Requests / Notes'}
                    </label>
                    <textarea 
                      rows={2}
                      placeholder={formData.notesPlaceholder || 'Tell us about your kids, if they are nervous with water...'}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-surf-white/25 py-2.5 px-0 text-surf-white text-base outline-none focus:border-surf-accent placeholder:text-surf-white/30 resize-none rounded-none"
                    />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button 
                type="submit"
                className="w-full py-4 mt-6 bg-surf-accent hover:bg-surf-white text-surf-black font-display text-xl uppercase tracking-wider transition-colors flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>{formData.submitBtn || 'Confirm Reservation Request'}</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Right Column: Session Summary - Open Editorial Column (NO BOXES) */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 lg:pl-10 lg:border-l lg:border-surf-white/10 pt-2">
                <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-surf-accent block mb-2">
                  {language === 'en' ? 'Session Summary' : 'Resumen de Sesión'}
                </span>
                <h4 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-surf-white mb-6">
                  {currentProgramObj?.name || 'Selected Program'}
                </h4>

                <div className="space-y-4 text-xs font-mono pb-6 border-b border-surf-white/10 text-surf-white/80">
                  <div className="flex justify-between">
                    <span className="opacity-50">{language === 'en' ? 'Rate:' : 'Tarifa:'}</span>
                    <span className="text-surf-accent font-bold text-sm">{currentProgramObj?.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-50">{language === 'en' ? 'Ratio:' : 'Ratio:'}</span>
                    <span>{currentProgramObj?.ratio}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-50">{language === 'en' ? 'Tide Policy:' : 'Política de Mareas:'}</span>
                    <span className="text-right">{language === 'en' ? 'Optimized at low-tide' : 'Alineado a marea baja'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-50">{language === 'en' ? 'Video Footage:' : 'Tomas de Video:'}</span>
                    <span className="text-emerald-400 font-semibold">{language === 'en' ? 'Included free' : 'Incluido sin costo'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-50">{language === 'en' ? 'Location:' : 'Ubicación:'}</span>
                    <span>Playa Guiones, Nosara</span>
                  </div>
                </div>

                <div className="pt-6 space-y-3 text-xs font-mono text-surf-white/75">
                  <div className="flex items-center gap-3">
                    <span className="text-surf-accent font-bold">✓</span>
                    <span>Pediatric CPR & Lifeguard Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-surf-accent font-bold">✓</span>
                    <span>Beach telephoto video footage included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-surf-accent font-bold">✓</span>
                    <span>Zinc, rash guard & custom foamie included</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-surf-white/10">
                  <p className="text-[11px] font-mono text-surf-white/50 leading-relaxed">
                    {formData.guarantee || 'No cancellation fee for weather/tide adjustments. We always coordinate the safest window.'}
                  </p>
                </div>
              </div>
            </div>
          </form>
        )}

        {/* Calendly Interactive Modal */}
        <AnimatePresence>
          {showCalendlyModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-surf-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              onClick={() => setShowCalendlyModal(false)}
            >
              <div 
                className="bg-surf-black border border-surf-white/20 w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-surf-white/10">
                  <div>
                    <h3 className="font-display text-2xl uppercase tracking-tight text-surf-white">
                      Coach Bryan’s Live Calendar
                    </h3>
                    <p className="text-xs font-mono text-surf-accent">
                      Playa Guiones • Real-Time Tide Schedules
                    </p>
                  </div>
                  <button 
                    onClick={() => setShowCalendlyModal(false)}
                    className="text-surf-white/60 hover:text-surf-white p-2 cursor-pointer"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="py-4 space-y-6">
                  <p className="text-xs text-surf-white/70 font-light leading-relaxed">
                    {language === 'en'
                      ? 'Select a daily low-tide window below to auto-fill into your reservation, or coordinate directly with Bryan via WhatsApp:'
                      : 'Elige un horario de marea baja a continuación para autocompletar tu reserva, o coordina directamente con Bryan por WhatsApp:'}
                  </p>

                  <div className="divide-y divide-surf-white/10">
                    {[
                      { time: 'Tomorrow 7:30 AM', note: 'Low Tide Glass (Optimal for Groms & First Timers)' },
                      { time: 'Tomorrow 9:30 AM', note: 'Pushing Tide (Soft Whitewater Rollers)' },
                      { time: 'Tomorrow 3:30 PM', note: 'Sunset Low Tide Session' },
                      { time: 'Tomorrow 4:45 PM', note: 'Golden Hour Photo Session' }
                    ].map((slot) => (
                      <div 
                        key={slot.time}
                        onClick={() => {
                          setPreferredTime(`${slot.time} (${slot.note})`);
                          setShowCalendlyModal(false);
                        }}
                        className="py-3 px-2 flex items-center justify-between group cursor-pointer hover:text-surf-accent transition-colors"
                      >
                        <div>
                          <span className="font-display text-lg uppercase text-surf-white group-hover:text-surf-accent transition-colors block">
                            {slot.time}
                          </span>
                          <span className="text-[11px] font-mono text-surf-white/50">
                            {slot.note}
                          </span>
                        </div>
                        <ArrowRight size={16} className="text-surf-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-surf-white/10 flex justify-end">
                    <a 
                      href="https://wa.me/50688997873?text=Hola%20Bryan!%20I%20want%20to%20reserve%20a%20specific%20time%20slot"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-surf-accent hover:text-surf-white transition-colors"
                    >
                      <MessageCircle size={15} />
                      <span className="underline underline-offset-4">Sync with Bryan Directly on WhatsApp →</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
