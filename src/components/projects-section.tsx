import { portfolioData } from "@/lib/portfolio-data";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">My Work</h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
            Here are some of the projects I'm proud of.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
