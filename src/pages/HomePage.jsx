import AboutSection from '../components/sections/AboutSection';
import HeroSection from '../components/sections/HeroSection';
import SkillsSection from '../components/sections/SkillsSection';
import TimelineSection from '../components/sections/TimelineSection';

function HomePage() {
  return (
    <>
      {/* Primary hero and profile introduction */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
    </>
  );
}

export default HomePage;