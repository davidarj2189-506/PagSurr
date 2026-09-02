import { motion } from 'motion/react';
import { useLanguage } from '../lib/i18n';
import { Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const data = t('contact');

  return (
    <section className="min-h-screen bg-surf-black text-surf-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        
        {/* Left Side: Info */}
        <div className="flex flex-col justify-between">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] font-bold uppercase tracking-[0.8em] block mb-6"
            >
              {data.subtitle}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-6xl md:text-[8vw] lg:text-[10vw] uppercase leading-none mb-12 break-words"
            >
              {data.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-10 md:space-y-12 mt-12 md:mt-20"
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-3">{data.addressLabel}</span>
                <span className="text-lg md:text-3xl font-light uppercase tracking-tight break-words">{data.address}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-3">{data.emailLabel}</span>
                <a href={`mailto:${data.email}`} className="text-lg md:text-3xl font-light uppercase tracking-tight hover:text-surf-accent transition-colors break-all md:break-words">
                  {data.email}
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-8 mt-24"
          >
            {data.socials.map((social: string) => (
              <a key={social} href="#" className="text-xs uppercase tracking-widest font-bold opacity-30 hover:opacity-100 hover:text-surf-accent transition-all">
                {social}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Simple Form Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="bg-surf-white text-surf-black p-10 md:p-16 flex flex-col justify-center border-l-4 border-surf-accent"
        >
          <h2 className="font-display text-4xl md:text-5xl uppercase leading-none mb-10">{data.messageTitle}</h2>
          
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col">
              <input type="text" placeholder={data.namePlaceholder} className="bg-transparent border-b border-surf-black/20 pb-4 outline-none font-light placeholder:text-surf-black/40 focus:border-surf-black transition-colors" />
            </div>
            
            <div className="flex flex-col">
              <input type="email" placeholder={data.emailPlaceholder} className="bg-transparent border-b border-surf-black/20 pb-4 outline-none font-light placeholder:text-surf-black/40 focus:border-surf-black transition-colors" />
            </div>
            
            <div className="flex flex-col mt-4">
              <textarea placeholder={data.messagePlaceholder} rows={4} className="bg-transparent border-b border-surf-black/20 pb-4 outline-none font-light placeholder:text-surf-black/40 focus:border-surf-black transition-colors resize-none"></textarea>
            </div>
            
            <button className="mt-8 self-start bg-surf-black text-surf-white px-10 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-surf-accent transition-colors">
              {data.sendBtn}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
