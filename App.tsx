import { MotionConfig } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import BackgroundSection from './sections/BackgroundSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0C0C0C] font-kanit" style={{ overflowX: 'clip' }}>
        <HeroSection />
        <main>
          <MarqueeSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <BackgroundSection />
          <ContactSection />
        </main>
      </div>
    </MotionConfig>
  );
}
