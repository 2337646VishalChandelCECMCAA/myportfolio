import { FiMoon, FiSun } from 'react-icons/fi';

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
      aria-label="Toggle color theme"
    >
      {isDark ? <FiSun /> : <FiMoon />}
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}

export default ThemeToggle;