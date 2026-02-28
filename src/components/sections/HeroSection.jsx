import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { profile } from '../../data/portfolioData';

function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-28">
      <div className="absolute inset-0 -z-10 bg-accent" />
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-soft backdrop-blur sm:p-10"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">{profile.title}</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">{profile.name}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">{profile.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-700 sm:text-sm">
              {profile.phone}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-700 transition hover:border-sky-500 hover:text-sky-600 sm:text-sm"
            >
              {profile.email}
            </a>
            <span className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-700 sm:text-sm">
              {profile.location}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-sky-400"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            >
              Contact Me
            </Link>
          </div>

          {(profile.social.github || profile.social.linkedin) && (
            <div className="mt-7 flex items-center gap-3">
              {profile.social.github && (
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 p-2.5 text-slate-600 transition hover:border-sky-400 hover:text-sky-600"
                  aria-label="GitHub profile"
                >
                  <FaGithub />
                </a>
              )}
              {profile.social.linkedin && (
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 p-2.5 text-slate-600 transition hover:border-indigo-400 hover:text-indigo-600"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin />
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;