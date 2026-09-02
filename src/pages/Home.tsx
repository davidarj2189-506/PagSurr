import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useLanguage();
  const data = t('home');
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Section: Hero */}
      <section id="hero" className="section-full">
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, 200]) }}
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1502680399488-2a6574c55c57?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 grayscale brightness-50"
          />
        </div>
        <div className="z-10 text-center px-4 w-full">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hero-text"
          >
            {data.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 0.6, letterSpacing: "0.4em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-xs md:text-xl font-light uppercase mt-4"
          >
            {data.heroSubtitle}
          </motion.p>
        </div>
        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-20 bg-surf-white" />
        </motion.div>
      </section>

      {/* Section: About */}
      <section id="about" className="section-full bg-surf-white text-surf-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">{data.aboutConnection}</span>
            <h2 className="font-display text-6xl md:text-[clamp(3rem,10vw,8rem)] uppercase leading-[0.9] mt-6 mb-8">{data.aboutTitle}</h2>
            <p className="text-base md:text-xl font-light leading-relaxed max-w-md opacity-80">
              {data.aboutDesc}
            </p>
            <button className="mt-12 flex items-center gap-6 group">
              <span className="text-xs font-bold uppercase border-b-2 border-surf-black pb-1">{data.aboutBtn}</span>
              <div className="w-10 h-10 rounded-full border border-surf-black flex items-center justify-center group-hover:bg-surf-black group-hover:text-surf-white transition-all duration-500">
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/5] lg:h-[75vh] w-full overflow-hidden group">
            <motion.img 
              src="https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              alt="Surf connection"
            />
          </div>
        </div>
      </section>

      {/* Section: Services */}
      <section id="services" className="section-full border-t border-surf-white/5">
        <div className="max-w-7xl w-full px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <h2 className="font-display text-6xl md:text-[10vw] uppercase leading-none">{data.servicesTitle}</h2>
            <span className="text-[10px] uppercase tracking-[0.6em] opacity-30 md:mb-4">{data.servicesSubtitle}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-surf-white/10">
            {data.servicesItems.map((service: any, i: number) => (
              <Link 
                to={i === 3 ? "/service#packages" : `/service#service-${i}`}
                key={service.title}
                className="group relative h-[300px] border-r border-b border-surf-white/10 p-10 flex flex-col justify-between overflow-hidden cursor-pointer block"
              >
                <div className="absolute inset-0 bg-surf-accent -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
                <span className="relative z-10 font-display text-3xl opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                <div className="relative z-10 transition-colors duration-500 group-hover:text-surf-black">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2">{service.title}</h3>
                  <p className="text-sm opacity-50 font-light group-hover:opacity-100">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Blog */}
      <section id="blog" className="section-full bg-surf-white text-surf-black py-20 px-6">
        <div className="max-w-5xl w-full">
          <h2 className="font-display text-6xl md:text-[10vw] lg:text-[12vw] uppercase leading-none mb-12 text-center overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="block pt-4 pb-4"
            >
              {data.blogTitle}
            </motion.span>
          </h2>
          <div className="border-t border-surf-black/10">
            {data.blogPosts.map((post: any, i: number) => (
              <div 
                key={i} 
                className="group py-8 md:py-14 border-b border-surf-black/10 flex flex-col md:flex-row md:items-center justify-between cursor-pointer md:hover:px-6 transition-all duration-500"
              >
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:text-surf-accent transition-colors pr-4">
                  {post.title}
                </h3>
                <span className="font-mono text-xs tracking-widest opacity-40 md:text-lg mt-4 md:mt-0">{post.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Contact */}
      <section id="contact" className="section-full px-6 bg-surf-black">
        <div className="text-center w-full max-w-6xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.8em] opacity-40 block mb-12">{data.contactPre}</span>
          <a 
            href="mailto:hello@swell.surf"
            className="font-display text-5xl md:text-[10vw] uppercase leading-none hover:text-surf-accent transition-all duration-500 block break-words"
          >
            hello@swell.surf
          </a>
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Instagram', 'Dribbble', 'LinkedIn', 'Vimeo'].map((social) => (
              <a key={social} href="#" className="text-xs uppercase tracking-widest font-bold opacity-30 hover:opacity-100 hover:text-surf-accent transition-all">
                {social}
              </a>
            ))}
          </div>
        </div>
        <footer className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] uppercase tracking-[0.5em] opacity-20 font-bold">
          <span>{data.footer1}</span>
          <span className="hidden md:block">{data.footer2}</span>
          <span>{data.footer3}</span>
        </footer>
      </section>
    </>
  );
}
