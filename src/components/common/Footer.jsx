import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../../data/portfolioData';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-slate-950/90">
      <div className="container-width flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          © {currentYear} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 p-2 text-slate-600 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:text-slate-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          )}
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 p-2 text-slate-600 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          )}
          <button
            type="button"
            onClick={scrollToTop}
            className="rounded-full border border-slate-300 p-2 text-slate-600 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;