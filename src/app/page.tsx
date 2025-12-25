import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { CurrentFocusSection } from '@/components/current-focus-section';
import { LearningSection } from '@/components/learning-section';
import { EducationSection } from '@/components/education-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className='z-10 relative'>
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ProjectsSection />
          <CurrentFocusSection />
          <LearningSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
