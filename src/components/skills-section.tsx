"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { SkillsChart } from "./skills-chart";
import { Card } from "./ui/card";

export function SkillsSection() {
  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    const { category } = skill;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof portfolioData.skills>);

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <Card key={category} className="p-6 shadow-lg bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
              <SkillsChart data={skills} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
