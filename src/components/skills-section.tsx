import { SkillsChart } from "./skills-chart";
import { portfolioData } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Skills & Expertise</h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
            A look at the technologies I work with, visualizing my proficiency.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <SkillsChart />
        </div>
      </div>
    </section>
  );
}
