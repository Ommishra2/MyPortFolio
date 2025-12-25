import { SkillsChart } from "./skills-chart";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <p className="text-primary font-semibold">Expertise</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Skills & Technologies</h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
            My proficiency in key technologies, from frontend to backend and beyond.
          </p>
        </div>
        <SkillsChart />
      </div>
    </section>
  );
}