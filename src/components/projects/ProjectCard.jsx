import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition dark:border-slate-800 dark:bg-slate-900"
    >
      <img src={project.image} alt={`${project.title} project preview`} className="h-44 w-full object-cover" loading="lazy" />

      <div className="space-y-4 p-5">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-400"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;