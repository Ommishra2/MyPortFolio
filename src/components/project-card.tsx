"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectDialog } from "./project-dialog";
import type { Project as ProjectType } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export interface Project extends ProjectType {}

interface ProjectCardProps {
  project: Project;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full overflow-hidden transition-all duration-300 bg-card/50 hover:bg-card/70 backdrop-blur-sm group flex flex-col md:flex-row md:items-center gap-6 p-6">
        <div className="relative w-full md:w-1/2 aspect-video overflow-hidden rounded-lg">
          <ProjectDialog project={project}>
            <div className="relative w-full h-full cursor-pointer">
              <Image
                src={project.images[0]}
                alt={project.name}
                data-ai-hint={project.dataAiHint}
                fill={true}
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-white font-semibold">View Details</p>
              </div>
            </div>
          </ProjectDialog>
        </div>
        <CardContent className="p-0 space-y-4 flex-grow w-full md:w-1/2">
          <h3 className="text-xl font-bold text-primary">{project.name}</h3>
          <p className="text-foreground/80 line-clamp-3 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.skills.slice(0, 5).map((skill, index) => (
              <Badge key={index} variant="secondary">{skill}</Badge>
            ))}
            {project.skills.length > 5 && <Badge variant="secondary">...</Badge>}
          </div>
           <div className="flex gap-4 pt-2">
              {project.demoUrl && project.demoUrl !== '#' && (
                <Button asChild size="sm">
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
              {project.sourceUrl && project.sourceUrl !== '#' && (
                <Button asChild variant="outline" size="sm">
                  <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Source
                  </Link>
                </Button>
              )}
            </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
