import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { useSearchParams, Link } from 'react-router-dom';
import { Check, Calendar as CalendarIcon, Clock, Users, MessageCircle, ShieldCheck, Video, Sparkles, ExternalLink, X } from 'lucide-react';

export default function Booking() {
  const { t } = useLanguage();
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
    <div className="min-h-screen bg-surf-black text-surf-white pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 bg-surf-accent/20 border border-surf-accent text-surf-accent text-[10px] font-mono uppercase tracking-[0.3em] inline-block mb-4">
            {data.badge || 'Easy Online Scheduling'}
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl sm:text-7xl uppercase leading-[0.9] text-surf-white mb-6 whitespace-pre-line"
          >
            {data.title || 'Book Your\nSession'}
          </motion.h1>
          <p className="text-base sm:text-lg font-light text-surf-white/75 leading-relaxed">
            {data.subtitle || 'Select your preferred class, date, and group size. We time every lesson around the optimal tide for safety.'}
          </p>
        </div>

        {/* Quick Calendly Bar */}
        <div className="p-6 border border-surf-white/15 bg-surf-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-14">
          <div className="flex items-center gap-3 text-sm font-light text-surf-white/80">
            <CalendarIcon className="text-surf-accent shrink-0" size={20} />
            <span>{formData.calendlyAlt || 'Prefer to pick a live calendar slot directly in Calendly?'}</span>
          </div>
          <button 
            type="button"
            onClick={() => setShowCalendlyModal(true)}
            className="px-6 py-2.5 bg-surf-white/10 hover:bg-surf-white hover:text-surf-black text-surf-white border border-surf-white/30 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <span>{formData.calendlyBtn || 'Open Calendly Schedule'}</span>
            <ExternalLink size={14} />
          </button>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 sm:p-16 border-2 border-surf-accent bg-surf-white/5 text-center max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-surf-accent text-surf-black flex items-center justify-center mx-auto mb-6">
              <Check size={32} strokeWidth={3} />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase mb-4 text-surf-white">
              {data.successTitle || 'Reservation Request Received!'}
            </h2>
            <p className="text-sm sm:text-base font-light text-surf-white/80 leading-relaxed mb-8">
              {data.successDesc || 'Bryan or our concierge will message you on WhatsApp and email within 2 hours with your exact tide-optimized meeting time at Playa Guiones.'}
            </p>

            <div className="p-6 bg-surf-black border border-surf-white/10 text-left text-xs font-mono mb-8 space-y-2">
              <p><strong className="text-surf-accent">Program:</strong> {currentProgramObj?.name}</p>
              <p><strong className="text-surf-accent">Date:</strong> {preferredDate || 'Coordinating with tide'}</p>
              <p><strong className="text-surf-accent">Window:</strong> {preferredTime}</p>
              <p><strong className="text-surf-accent">Surfers:</strong> {numSurfers} {kidsAges ? `(Ages: ${kidsAges})` : ''}</p>
              <p><strong className="text-surf-accent">Lead Name:</strong> {parentName}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-surf-accent text-surf-black font-bold uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Confirm on WhatsApp Now</span>
              </a>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-6 py-4 border border-surf-white/30 text-surf-white text-xs uppercase tracking-wider font-bold hover:border-surf-white"
              >
                Make Another Booking
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Selections */}
            <div className="lg:col-span-7 space-y-10">
              {/* Step 1: Select Program */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-surf-accent mb-4">
                  {data.step1 || '1. Select Your Program'}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {(data.programs || []).map((prog: any) => (
                    <div 
                      key={prog.id}
                      onClick={() => setSelectedProgram(prog.id)}
                      className={`p-5 border cursor-pointer transition-all duration-300 ${
                        selectedProgram === prog.id 
                          ? 'border-surf-accent bg-surf-accent/10 shadow-lg' 
                          : 'border-surf-white/15 bg-surf-white/5 hover:border-surf-white/40'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-sm uppercase">{prog.name}</span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedProgram === prog.id ? 'border-surf-accent bg-surf-accent' : 'border-surf-white/40'}`}>
                          {selectedProgram === prog.id && <div className="w-1.5 h-1.5 rounded-full bg-surf-black" />}
                        </div>
                      </div>
                      <span className="text-base font-display text-surf-accent block">{prog.price}</span>
                      <span className="text-[10px] font-mono text-surf-white/50">{prog.ratio}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Date & Tide Window */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-surf-accent mb-4">
                  {data.step2 || '2. Date & Time Preferences'}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-surf-white/70 block mb-2">{formData.dateLabel || 'Preferred Date'}</label>
                    <input 
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-surf-white/5 border border-surf-white/20 p-3 text-surf-white text-sm outline-none focus:border-surf-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-surf-white/70 block mb-2">{formData.timeLabel || 'Preferred Time Window'}</label>
                    <select 
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-surf-black border border-surf-white/20 p-3 text-surf-white text-sm outline-none focus:border-surf-accent transition-colors"
                    >
                      {(formData.timeOptions || [
                        'Morning Low Tide (Calmest, Recommended)',
                        'Mid-Day Mellow Session',
                        'Sunset Golden Hour Session'
                      ]).map((opt: string) => (
                        <option key={opt} value={opt} className="bg-surf-black">{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Surfer Profile */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-surf-accent mb-4">
                  {data.step3 || '3. Surfer Details & Experience'}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-xs font-mono text-surf-white/70 block mb-2">{formData.surfersLabel || 'Number of Surfers'}</label>
                    <select 
                      value={numSurfers}
                      onChange={(e) => setNumSurfers(e.target.value)}
                      className="w-full bg-surf-black border border-surf-white/20 p-3 text-surf-white text-sm outline-none focus:border-surf-accent"
                    >
                      <option value="1">1 Surfer</option>
                      <option value="2">2 Surfers</option>
                      <option value="3">3 Surfers (Max for 1 Coach)</option>
                      <option value="4">4 Surfers (Family - 2 Coaches)</option>
                      <option value="5+">5+ Surfers (Custom Family Group)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-surf-white/70 block mb-2">{formData.kidsAgesLabel || 'Kids Ages (e.g. 7, 10)'}</label>
                    <input 
                      type="text"
                      placeholder="e.g. 7 and 10 years old"
                      value={kidsAges}
                      onChange={(e) => setKidsAges(e.target.value)}
                      className="w-full bg-surf-white/5 border border-surf-white/20 p-3 text-surf-white text-sm outline-none focus:border-surf-accent"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-surf-white/70 block mb-2">{formData.experienceLabel || 'Experience Level'}</label>
                    <select 
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full bg-surf-black border border-surf-white/20 p-3 text-surf-white text-sm outline-none focus:border-surf-accent"
                    >
                      {(formData.expOptions || ['Absolute First Time', 'Has Tried Once', 'Comfortable in Whitewater']).map((opt: string) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-surf-white/70 block mb-2">{formData.swimmingLabel || 'Swimming Comfort'}</label>
                    <select 
                      value={swimming}
                      onChange={(e) => setSwimming(e.target.value)}
                      className="w-full bg-surf-black border border-surf-white/20 p-3 text-surf-white text-sm outline-none focus:border-surf-accent"
                    >
                      {(formData.swimOptions || ['Basic Water Comfort', 'Confident Swimmer']).map((opt: string) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Contact Details */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-surf-accent mb-4">
                  {data.step4 || '4. Contact Details'}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-surf-white/70 block mb-2">{formData.parentNameLabel || 'Lead Parent Name'}</label>
                    <input 
                      type="text"
                      required
                      placeholder="Your full name"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full bg-surf-white/5 border border-surf-white/20 p-3 text-surf-white text-sm outline-none focus:border-surf-accent"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-surf-white/70 block mb-2">{formData.emailLabel || 'Email'}</label>
                      <input 
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-surf-white/5 border border-surf-white/20 p-3 text-surf-white text-sm outline-none focus:border-surf-accent"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-surf-white/70 block mb-2">{formData.phoneLabel || 'WhatsApp / Phone'}</label>
                      <input 
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-surf-white/5 border border-surf-white/20 p-3 text-surf-white text-sm outline-none focus:border-surf-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-surf-white/70 block mb-2">{formData.notesLabel || 'Special Requests / Notes'}</label>
                    <textarea 
                      rows={3}
                      placeholder={formData.notesPlaceholder || 'Tell us about your kids, if they are nervous with water...'}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-surf-white/5 border border-surf-white/20 p-3 text-surf-white text-sm outline-none focus:border-surf-accent resize-none"
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-surf-accent text-surf-black font-bold uppercase text-xs tracking-[0.25em] hover:bg-surf-white transition-colors"
              >
                {formData.submitBtn || 'Confirm Reservation Request'}
              </button>
            </div>

            {/* Right Column: Summary Card */}
            <div className="lg:col-span-5">
              <div className="border border-surf-white/15 bg-surf-white/5 p-8 sticky top-32">
                <span className="text-[10px] uppercase font-mono tracking-widest text-surf-accent block mb-2">
                  Session Summary
                </span>
                <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-surf-white mb-6">
                  {currentProgramObj?.name || 'Selected Program'}
                </h4>

                <div className="space-y-4 text-xs font-mono pb-6 border-b border-surf-white/10 text-surf-white/80">
                  <div className="flex justify-between">
                    <span className="opacity-50">Rate:</span>
                    <span className="text-surf-accent font-bold">{currentProgramObj?.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-50">Ratio:</span>
                    <span>{currentProgramObj?.ratio}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-50">Tide Policy:</span>
                    <span className="text-right">Optimized at low-tide</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-50">Video:</span>
                    <span className="text-green-400">Included free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-50">Location:</span>
                    <span>Playa Guiones, Nosara</span>
                  </div>
                </div>

                <div className="pt-6 space-y-3 text-xs font-light text-surf-white/70">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-surf-accent shrink-0" />
                    <span>Pediatric CPR & Lifeguard Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video size={16} className="text-surf-accent shrink-0" />
                    <span>Beach telephoto video footage included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-surf-accent shrink-0" />
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

        {/* Calendly Interactive Modal / Embed Container */}
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
                className="bg-surf-black border border-surf-white/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative flex flex-col"
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
                    className="text-surf-white/60 hover:text-surf-white p-2"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Simulated Calendly Live Scheduler Interface */}
                <div className="bg-surf-white text-surf-black p-6 sm:p-8 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-surf-black text-surf-white flex items-center justify-center font-display text-xl mb-4">
                    FP
                  </div>
                  <h4 className="font-bold text-xl uppercase tracking-tight">Coach Bryan - First Peak Surf</h4>
                  <p className="text-xs text-gray-500 font-mono mb-6">1.5h • Playa Guiones, Nosara, Guanacaste</p>
                  
                  <div className="w-full max-w-lg border border-gray-200 p-4 mb-6 text-left">
                    <p className="text-xs font-semibold uppercase text-gray-400 mb-3 font-mono">Select a Tide Window:</p>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <button 
                        type="button"
                        onClick={() => {
                          setPreferredTime('Tomorrow 7:30 AM (Low Tide Glass)');
                          setShowCalendlyModal(false);
                        }}
                        className="p-3 border border-gray-300 hover:border-surf-accent hover:bg-surf-accent/10 transition-colors font-mono text-left"
                      >
                        <span className="font-bold block">7:30 AM</span>
                        <span className="text-[10px] text-gray-500">Low Tide (Optimal for Groms)</span>
                      </button>

                      <button 
                        type="button"
                        onClick={() => {
                          setPreferredTime('Tomorrow 9:30 AM (Mellow Whitewater)');
                          setShowCalendlyModal(false);
                        }}
                        className="p-3 border border-gray-300 hover:border-surf-accent hover:bg-surf-accent/10 transition-colors font-mono text-left"
                      >
                        <span className="font-bold block">9:30 AM</span>
                        <span className="text-[10px] text-gray-500">Pushing Tide (Soft Rollers)</span>
                      </button>

                      <button 
                        type="button"
                        onClick={() => {
                          setPreferredTime('Tomorrow 3:30 PM (Sunset Low Tide)');
                          setShowCalendlyModal(false);
                        }}
                        className="p-3 border border-gray-300 hover:border-surf-accent hover:bg-surf-accent/10 transition-colors font-mono text-left"
                      >
                        <span className="font-bold block">3:30 PM</span>
                        <span className="text-[10px] text-gray-500">Sunset Glass Session</span>
                      </button>

                      <button 
                        type="button"
                        onClick={() => {
                          setPreferredTime('Tomorrow 4:45 PM (Golden Hour)');
                          setShowCalendlyModal(false);
                        }}
                        className="p-3 border border-gray-300 hover:border-surf-accent hover:bg-surf-accent/10 transition-colors font-mono text-left"
                      >
                        <span className="font-bold block">4:45 PM</span>
                        <span className="text-[10px] text-gray-500">Golden Hour Photo Session</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 max-w-md mb-6">
                    Click any time above to auto-select into your reservation form, or sync directly with Bryan via WhatsApp.
                  </p>

                  <a 
                    href="https://wa.me/50688997873?text=Hola%20Bryan!%20I%20want%20to%20reserve%20a%20specific%20time%20slot"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-surf-black text-surf-white text-xs uppercase font-bold tracking-widest hover:bg-surf-accent hover:text-surf-black transition-colors flex items-center gap-2"
                  >
                    <MessageCircle size={16} />
                    <span>Sync with Bryan Directly</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
