import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' }
];

function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur"
    >
      <nav className="container-width flex h-20 items-center justify-between" aria-label="Primary">
        <NavLink to="/" className="text-lg font-semibold tracking-wide text-slate-900">
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
                      ? 'bg-sky-100 text-sky-700 shadow-soft'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

export default Navbar;