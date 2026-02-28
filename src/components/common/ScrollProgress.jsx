import { useEffect, useState } from 'react';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ScrollProgress;