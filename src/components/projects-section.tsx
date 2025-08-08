import { portfolioData } from "@/lib/portfolio-data";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <p className="text-primary font-semibold">My Work</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Featured Projects</h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
            A selection of projects that showcase my passion for development and data.
          </p>
        </div>
        <div className="grid gap-8 md:gap-12">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
