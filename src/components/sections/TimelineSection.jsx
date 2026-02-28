import { motion } from 'framer-motion';
import { timeline } from '../../data/portfolioData';

function TimelineSection() {
  return (
    <section className="py-12 sm:py-16" id="experience">
      <div className="container-width">
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">A concise timeline of professional and academic journey.</p>

        <div className="relative mt-8 space-y-4 border-l border-slate-300 pl-6">
          {timeline.map((item, index) => (
            <motion.article
              key={`${item.period}-${item.title}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <span className="absolute -left-[31px] top-6 h-3.5 w-3.5 rounded-full border-2 border-white bg-sky-500" />
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">{item.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.subtitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;