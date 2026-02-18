'use client';

import { HeroSection } from './hero-section';
import { AboutSection } from './about-section';
import { ExperienceSection } from './experience-section';
import { SkillsSection } from './skills-section';
import { Navigation } from './navigation';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
    </div>
  );
}

export default App;
