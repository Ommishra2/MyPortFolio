import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <p className="text-primary font-semibold">Expertise</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Skills & Technologies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <Card key={category} className="shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li key={skill} className="text-foreground/80 text-lg">{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
