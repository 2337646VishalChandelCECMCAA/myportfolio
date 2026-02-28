import { motion } from 'framer-motion';
import { certifications, profile, skills, technicalSkills, tools } from '../../data/portfolioData';

function AboutSection() {
  return (
    <section className="py-12 sm:py-16" id="about">
      <div className="container-width space-y-8">
        <div>
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">A concise overview of background and core development strengths.</p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
        >
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{profile.bio}</p>
        </motion.article>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">Skills</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3"
                >
                  <Icon className="text-xl text-sky-300" aria-hidden="true" />
                  <span className="text-sm text-slate-700">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">Technical Skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {technicalSkills.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-700 sm:text-sm"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <h3 className="text-lg font-semibold text-slate-900">Tools</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
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
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <h3 className="text-lg font-semibold text-slate-900">Certifications</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
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