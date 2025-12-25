"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      <Card className="h-full overflow-hidden transition-all duration-300 bg-card/50 hover:bg-card/70 backdrop-blur-sm group flex flex-col p-6">
        <CardHeader className="p-0">
          <CardTitle className="text-xl font-bold text-primary">{project.name}</CardTitle>
          <CardDescription>
            <span className="font-semibold">Role:</span> {project.role}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0 mt-4 space-y-4 flex-grow">
          <div>
            <h4 className="font-semibold">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold">What it solves:</h4>
            <p className="text-foreground/80">{project.problem}</p>
          </div>
          
          <div>
            <h4 className="font-semibold">What I built:</h4>
            <ul className="list-disc list-inside text-foreground/80">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div>
             <h4 className="font-semibold">Status:</h4>
             <Badge variant={project.status === "Completed" ? "default" : "outline"}>{project.status}</Badge>
          </div>

        </CardContent>
        <div className="flex gap-4 pt-6">
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
                <Github className="mr-2 h-4 w-4" /> GitHub Repo
              </Link>
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
