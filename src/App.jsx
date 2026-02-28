import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AnimatedBackground from './components/common/AnimatedBackground';
import Footer from './components/common/Footer';
import Loader from './components/common/Loader';
import Navbar from './components/common/Navbar';
import ScrollProgress from './components/common/ScrollProgress';
import ScrollToTopOnRoute from './components/common/ScrollToTopOnRoute';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Simulated startup loading state for a polished first impression.
    const timer = setTimeout(() => setIsLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <AnimatedBackground />
      <ScrollProgress />
      <ScrollToTopOnRoute />
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <main className="pt-20 md:pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;