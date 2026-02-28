import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { profile } from '../../data/portfolioData';

function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-accent dark:opacity-40" />
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl border border-slate-200 bg-white/85 p-7 shadow-soft backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/75 sm:p-10"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-sky-500">{profile.tagline}</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">{profile.name}</h1>
          <h2 className="mt-2 text-lg font-semibold text-slate-700 dark:text-slate-200">{profile.title}</h2>

          <div className="mt-5 max-w-2xl space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            {profile.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 sm:text-sm">
              {profile.phone}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 sm:text-sm"
            >
              {profile.email}
            </a>
            <span className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 sm:text-sm">
              {profile.location}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-400"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600"
            >
              Contact Me
            </Link>
            <a
              href={profile.resumeUrl}
              download
              className="rounded-full border border-sky-300 bg-sky-50 px-5 py-2.5 text-sm font-medium text-sky-700 transition hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-100 dark:border-sky-700/60 dark:bg-sky-900/30 dark:text-sky-300"
            >
              Resume Download
            </a>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <a
              href={profile.social.github || '#'}
              target={profile.social.github ? '_blank' : undefined}
              rel="noreferrer"
              className={`rounded-full border border-slate-300 p-2.5 text-slate-600 transition dark:border-slate-700 dark:text-slate-300 ${
                profile.social.github
                  ? 'hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600'
                  : 'cursor-not-allowed opacity-50'
              }`}
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
            <a
              href={profile.social.linkedin || '#'}
              target={profile.social.linkedin ? '_blank' : undefined}
              rel="noreferrer"
              className={`rounded-full border border-slate-300 p-2.5 text-slate-600 transition dark:border-slate-700 dark:text-slate-300 ${
                profile.social.linkedin
                  ? 'hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600'
                  : 'cursor-not-allowed opacity-50'
              }`}
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;