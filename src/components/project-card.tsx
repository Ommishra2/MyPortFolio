"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectDialog } from "./project-dialog";
import type { Project as ProjectType } from "@/lib/portfolio-data";

export interface Project extends ProjectType {}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <ProjectDialog project={project}>
      <Card className="overflow-hidden h-full group transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer flex flex-col">
        <CardHeader className="p-0">
          <div className="relative w-full aspect-video">
            <Image
              src={project.images[0]}
              alt={project.name}
              data-ai-hint={project.dataAiHint}
              fill={true}
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-4 flex-grow flex flex-col">
          <CardTitle className="text-xl font-semibold">{project.name}</CardTitle>
          <p className="text-foreground/80 line-clamp-3 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.skills.slice(0, 4).map((skill, index) => (
              <Badge key={index} variant="secondary">{skill}</Badge>
            ))}
            {project.skills.length > 4 && <Badge variant="secondary">...</Badge>}
          </div>
        </CardContent>
      </Card>
    </ProjectDialog>
  );
}
