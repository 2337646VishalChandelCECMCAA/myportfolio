import AboutSection from '../components/sections/AboutSection';
import HeroSection from '../components/sections/HeroSection';
import TimelineSection from '../components/sections/TimelineSection';

function HomePage() {
  return (
    <>
      {/* Primary hero and profile introduction */}
      <HeroSection />
      <AboutSection />
      <TimelineSection />
    </>
  );
}

export default HomePage;