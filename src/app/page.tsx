import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { GridPattern } from '@/components/grid-pattern';
import { cn } from '@/lib/utils';
import { CurrentFocusSection } from '@/components/current-focus-section';
import { LearningSection } from '@/components/learning-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]',
          'fixed inset-0 z-0'
        )}
      />
      <div className='z-10'>
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
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
