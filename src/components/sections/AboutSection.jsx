import { motion } from 'framer-motion';
import { certifications, profile, topSkills, tools } from '../../data/portfolioData';

function AboutSection() {
  return (
    <section className="section-wrapper" id="about">
      <div className="container-width space-y-8">
        <div>
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">Professional profile focused on frontend engineering and production-ready UI delivery.</p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900"
        >
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">{profile.bio}</p>
        </motion.article>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Core Stack</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {topSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900"
                >
                  <Icon className="text-xl text-sky-500" aria-hidden="true" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Tools</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {tools.map((tool) => (
                <li key={tool}>• {tool}</li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Certifications</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {certifications.map((certificate) => (
                <li key={certificate}>• {certificate}</li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;