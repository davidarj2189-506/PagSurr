import { motion } from 'motion/react';
import { useLanguage } from '../lib/i18n';

export default function Blog() {
  const { t } = useLanguage();
  const data = t('blog');
  const content = data.content;

  return (
    <section className="min-h-screen bg-surf-white text-surf-black py-32 px-6">
      <div className="max-w-4xl w-full mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[10px] uppercase tracking-[0.6em] block mb-6 md:mb-10 text-center font-bold"
        >
          {data.subtitle}
        </motion.span>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-none mb-16 md:mb-24 text-center overflow-hidden">
          <motion.span 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="block pt-4 pb-4"
          >
            {data.title}
          </motion.span>
        </h1>
        
        <article className="prose prose-lg md:prose-xl max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter prose-h2:text-4xl md:prose-h2:text-5xl prose-h3:text-2xl md:prose-h3:text-3xl prose-p:font-light prose-p:leading-relaxed prose-p:opacity-80">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 font-bold leading-[1.1] text-surf-accent"
          >
            {content.h2}
          </motion.h2>

          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="mb-6 border-l-4 border-surf-accent pl-4 text-surf-black">{content.h3_1}</h3>
            <p className="mb-10">{content.p_1}</p>

            {/* Data Table */}
            <div className="overflow-x-auto mb-10 pb-4">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-surf-black">
                    {content.tableHead.map((th: string, idx: number) => (
                      <th key={idx} className="pb-4 font-mono text-xs uppercase tracking-widest text-surf-black font-bold px-4">
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base font-light">
                  {content.tableBody.map((row: string[], idx: number) => (
                    <tr key={idx} className="border-b border-surf-black/10 hover:bg-surf-black/5 transition-colors">
                      {row.map((td: string, colIdx: number) => (
                        <td key={colIdx} className={`py-6 px-4 ${colIdx === 0 ? 'font-bold text-surf-black uppercase tracking-tight' : 'opacity-80'}`}>
                          {td}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="mb-6 border-l-4 border-surf-accent pl-4 text-surf-black">{content.h3_2}</h3>
            <ul className="space-y-6">
              {content.bullets_2.map((bullet: any, idx: number) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-surf-accent font-bold mt-1.5">•</span>
                  <div>
                    <strong className="block text-surf-black mb-1 uppercase tracking-tighter text-lg">{bullet.title}</strong>
                    <span className="opacity-80 font-light">{bullet.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="mb-6 border-l-4 border-surf-accent pl-4 text-surf-black">{content.h3_3}</h3>
            <ul className="space-y-6">
              {content.bullets_3.map((bullet: any, idx: number) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-surf-accent font-bold mt-1.5">•</span>
                  <div>
                    <strong className="block text-surf-black mb-1 uppercase tracking-tighter text-lg">{bullet.title}</strong>
                    <span className="opacity-80 font-light">{bullet.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 bg-surf-black text-surf-white"
          >
            <h3 className="mb-4 text-surf-accent">{content.h3_4}</h3>
            <p className="opacity-80 m-0">{content.p_4}</p>
          </motion.div>

        </article>
      </div>
    </section>
  );
}
