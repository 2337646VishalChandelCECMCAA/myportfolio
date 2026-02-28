import { motion } from 'framer-motion';
import { skillCategories } from '../../data/portfolioData';

function SkillsSection() {
  return (
    <section className="section-wrapper" id="skills">
      <div className="container-width">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Core technologies grouped by domain for a clear view of my development stack.</p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: categoryIndex * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
              <div className="mt-4 grid grid-cols-1 gap-3">
                {category.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-sky-300 dark:border-slate-700 dark:bg-slate-950"
                    >
                      <Icon className="text-sky-500" aria-hidden="true" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;