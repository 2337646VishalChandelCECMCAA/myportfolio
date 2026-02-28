import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' }
];

function Navbar({ theme, onThemeToggle }) {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80"
    >
      <nav className="container-width flex h-20 items-center justify-between" aria-label="Primary">
        <NavLink to="/" className="text-lg font-semibold tracking-wide text-slate-900 dark:text-white">
          Vishal Chandel
        </NavLink>

        <ul className="flex items-center gap-2 sm:gap-3">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm transition ${
                    isActive
                      ? 'bg-sky-100 text-sky-700 shadow-soft dark:bg-slate-800 dark:text-sky-300'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Navbar;