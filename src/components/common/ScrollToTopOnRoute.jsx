import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure each route opens at the top for predictable UX.
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default ScrollToTopOnRoute;