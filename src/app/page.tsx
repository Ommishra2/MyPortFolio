import { Header } from '@/components/layout/header';
import { ScrollyHero } from '@/components/sections/scrolly-hero';
import { AboutMeCode } from '@/components/sections/about-me-code';
import { ProjectsSection } from '@/components/sections/projects-section';
import { AdditionalSections } from '@/components/sections/additional-sections';
import { SkillsSection } from '@/components/sections/skills-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/layout/footer';
import { GridPattern } from '@/components/shared/grid-pattern';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]',
          'fixed inset-0 z-0 opacity-20'
        )}
      />
      <div className='z-10 w-full'>
        <Header />
        <main className="flex-grow w-full">
          <ScrollyHero />
          <AboutMeCode />
          <ProjectsSection />
          <AdditionalSections />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
