import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../../data/portfolioData';

function ContactSection() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Placeholder for EmailJS, Formspree, or custom API integration.
    setStatus('Message captured. Connect this form to your email service to enable delivery.');
    event.currentTarget.reset();
  };

  return (
    <section className="py-12 sm:py-16" id="contact">
      <div className="container-width">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Let’s discuss opportunities, collaborations, or product ideas.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Send Message
            </button>

            {status && <p className="text-sm text-emerald-300">{status}</p>}
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
          >
            <h3 className="text-lg font-semibold text-slate-900">Connect</h3>
            <p className="mt-2 text-sm text-slate-600">Prefer direct contact? Reach out using email or social platforms.</p>

            <a href={`mailto:${profile.email}`} className="mt-6 block text-sm text-sky-300 hover:text-sky-200">
              {profile.email}
            </a>
            <p className="mt-2 text-sm text-slate-700">{profile.phone}</p>
            <p className="mt-1 text-sm text-slate-600">{profile.location}</p>

            {(profile.social.github || profile.social.linkedin) && (
              <div className="mt-6 flex items-center gap-3">
                {profile.social.github && (
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-300 p-2.5 text-slate-600 transition hover:border-sky-400 hover:text-sky-600"
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
                    className="rounded-full border border-slate-300 p-2.5 text-slate-600 transition hover:border-indigo-400 hover:text-indigo-600"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                )}
              </div>
            )}
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;