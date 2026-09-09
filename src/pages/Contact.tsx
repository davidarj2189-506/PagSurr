import React, { useState } from 'react';
import { useLanguage } from '../lib/i18n';
import SEO from '../components/SEO';
import { generateLocalBusinessSchema } from '../utils/schemaGenerator';

export default function Contact() {
  const { language } = useLanguage();
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const whatsappMessage = encodeURIComponent(
    language === 'en'
      ? 'Hola Bryan! I would like to inquire about surf lessons for my family in Playa Guiones.'
      : '¡Hola Bryan! Me gustaría consultar sobre clases de surf para mi familia en Playa Guiones.'
  );

  return (
    <main className="h-screen max-h-screen w-full bg-surf-white text-surf-black overflow-hidden flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-24 sm:pt-28 pb-6 select-text">
      <SEO 
        title="Contact | First Peak Surf Nosara"
        description="Contact Coach Bryan for kids and family surf lessons in Playa Guiones, Nosara, Costa Rica."
        canonical="https://firstpeaksurf.com/contact"
        schemaData={generateLocalBusinessSchema()}
      />

      {/* Contenedor adaptado a la pantalla completa */}
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center my-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
          
          {/* Lado Izquierdo: Título y Datos Directos */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-surf-black/50 mb-2">
                {language === 'en' ? 'Playa Guiones • Nosara, Costa Rica' : 'Playa Guiones • Nosara, Costa Rica'}
              </p>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-surf-black leading-none">
                {language === 'en' ? 'Get In Touch.' : 'Hablemos.'}
              </h1>
              <p className="text-sm sm:text-base text-surf-black/70 mt-4 max-w-md font-light leading-relaxed">
                {language === 'en'
                  ? 'Book a session for your kids and family, check daily tide windows, or write directly to Coach Bryan.'
                  : 'Reserva clases para tus niños y familia, consulta las mareas del día o escribe directamente a Coach Bryan.'}
              </p>
            </div>

            {/* Datos de contacto limpios en texto */}
            <div className="space-y-4 pt-2">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-surf-black/40 block mb-0.5">
                  {language === 'en' ? 'Direct Line & WhatsApp' : 'WhatsApp & Teléfono'}
                </span>
                <a 
                  href="tel:+50688997873" 
                  className="font-display text-2xl sm:text-3xl text-surf-black hover:text-surf-accent transition-colors block"
                >
                  +506 8899-7873
                </a>
                <a
                  href={`https://wa.me/50688997873?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 text-xs font-mono uppercase tracking-wider text-emerald-700 hover:text-emerald-800 font-semibold underline underline-offset-4"
                >
                  {language === 'en' ? 'Chat on WhatsApp →' : 'Escribir por WhatsApp →'}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-surf-black/70 pt-2">
                <a 
                  href="mailto:info@firstpeaksurf.com" 
                  className="hover:text-surf-accent transition-colors underline underline-offset-4"
                >
                  info@firstpeaksurf.com
                </a>
                <span className="text-surf-black/30">•</span>
                <span className="text-surf-black/60 font-light">
                  Playa Guiones (Baker’s Path)
                </span>
                <span className="text-surf-black/30">•</span>
                <a 
                  href="https://instagram.com/firstpeaksurf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-surf-accent transition-colors underline underline-offset-4"
                >
                  @firstpeaksurf
                </a>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Formulario ajustado hacia la derecha de la pantalla, sin tarjetas ni cuadros */}
          <div className="lg:col-span-7 flex justify-end w-full">
            <div className="w-full max-w-xl lg:pl-8">
              {formSent ? (
                <div className="space-y-4 py-8">
                  <p className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold">
                    ✓ {language === 'en' ? 'Message Sent' : 'Mensaje Enviado'}
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl uppercase text-surf-black">
                    {language === 'en' ? 'Pura Vida! Thank you.' : '¡Pura Vida! Gracias.'}
                  </h2>
                  <p className="text-sm text-surf-black/70 font-light max-w-md leading-relaxed">
                    {language === 'en' 
                      ? 'Bryan will get back to you shortly with wave conditions and session options.'
                      : 'Bryan te responderá a la brevedad con las condiciones del mar y opciones de horarios.'}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setFormSent(false)}
                      className="text-xs font-mono uppercase tracking-wider text-surf-black/60 hover:text-surf-black underline underline-offset-4 cursor-pointer"
                    >
                      {language === 'en' ? '← Send another note' : '← Enviar otro mensaje'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                  <div>
                    <label 
                      htmlFor="user-name"
                      className="text-xs font-mono uppercase tracking-wider text-surf-black/60 block mb-1.5"
                    >
                      {language === 'en' ? 'Your Name' : 'Tu Nombre'} *
                    </label>
                    <input 
                      id="user-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={language === 'en' ? 'e.g. Sarah Jenkins' : 'ej. Carlos Morales'}
                      className="w-full bg-transparent border-0 border-b border-surf-black/30 focus:border-surf-black text-surf-black text-base py-2 px-0 outline-none transition-colors rounded-none placeholder:text-surf-black/25 font-light"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="user-contact"
                      className="text-xs font-mono uppercase tracking-wider text-surf-black/60 block mb-1.5"
                    >
                      {language === 'en' ? 'Email or WhatsApp' : 'Correo o WhatsApp'} *
                    </label>
                    <input 
                      id="user-contact"
                      type="text"
                      required
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder={language === 'en' ? 'email@example.com or +1 ...' : 'correo@ejemplo.com o +506 ...'}
                      className="w-full bg-transparent border-0 border-b border-surf-black/30 focus:border-surf-black text-surf-black text-base py-2 px-0 outline-none transition-colors rounded-none placeholder:text-surf-black/25 font-light"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="user-message"
                      className="text-xs font-mono uppercase tracking-wider text-surf-black/60 block mb-1.5"
                    >
                      {language === 'en' ? 'Dates, kids ages or questions' : 'Fechas en Nosara, edades de los niños o dudas'} *
                    </label>
                    <input 
                      id="user-message"
                      type="text"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={language === 'en' ? 'e.g. Next week, two kids ages 7 and 9...' : 'ej. Próxima semana, dos niños de 7 y 9 años...'}
                      className="w-full bg-transparent border-0 border-b border-surf-black/30 focus:border-surf-black text-surf-black text-base py-2 px-0 outline-none transition-colors rounded-none placeholder:text-surf-black/25 font-light"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button 
                      type="submit"
                      className="text-xs font-mono uppercase tracking-[0.2em] font-semibold text-surf-black hover:text-surf-accent transition-colors underline underline-offset-8 cursor-pointer"
                    >
                      {language === 'en' ? 'Send Inquiry →' : 'Enviar Mensaje →'}
                    </button>

                    <span className="text-[11px] font-mono text-surf-black/40">
                      {language === 'en' ? 'Replies within 2-4 hrs' : 'Respuesta en 2-4 hrs'}
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Pie de página sutil a lo ancho de la pantalla */}
      <footer className="shrink-0 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-surf-black/40 pt-2 gap-2">
        <span>First Peak Surf • Nosara, Guanacaste, Costa Rica</span>
        <span>Coach Bryan • ISA Certified</span>
      </footer>
    </main>
  );
}
