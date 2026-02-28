import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../../data/portfolioData';

function ContactSection() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('Opening your email client. If it does not open, use the direct email link below.');
    event.currentTarget.reset();
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="container-width">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Let’s discuss roles, collaborations, or frontend development opportunities.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Send Message
            </button>

            {status && <p className="text-sm text-emerald-600 dark:text-emerald-300">{status}</p>}
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Connect</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Prefer direct contact? Reach out using email or social platforms.</p>

            <a href={`mailto:${profile.email}`} className="mt-6 block text-sm text-sky-600 hover:text-sky-500 dark:text-sky-300">
              {profile.email}
            </a>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{profile.phone}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{profile.location}</p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={profile.social.github || '#'}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 p-2.5 text-slate-600 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:text-slate-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={profile.social.linkedin || '#'}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 p-2.5 text-slate-600 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>

            <a href={`mailto:${profile.email}`} className="mt-6 inline-block text-sm text-slate-500 underline dark:text-slate-400">
              Mailto fallback
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;