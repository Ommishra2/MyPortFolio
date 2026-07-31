"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectDialog } from "./project-dialog";
import type { Project as ProjectType } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      <Card className="h-full overflow-hidden transition-all duration-300 bg-[#08141e]/40 hover:bg-[#0a0e14]/60 backdrop-blur-md border border-white/10 group flex flex-col md:flex-row md:items-center gap-6 p-6 shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#ff6b00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative w-full md:w-1/2 aspect-video overflow-hidden rounded-lg border border-slate-800/50">
          <ProjectDialog project={project}>
            <div className="relative w-full h-full cursor-pointer">
              {project.images.length > 0 ? (
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  data-ai-hint={project.dataAiHint}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                  <span className="text-slate-500 font-mono text-sm">No Image</span>
                </div>
              )}
              <div className="absolute inset-0 bg-[#00f2ff]/20 group-hover:bg-[#ff6b00]/30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                <p className="text-white font-semibold font-mono tracking-widest uppercase">View Details</p>
              </div>
            </div>
          </ProjectDialog>
        </div>
        <CardContent className="p-0 space-y-4 flex-grow w-full md:w-1/2 relative z-10">
          <h3 className="text-2xl font-bold text-white tracking-tight">{project.name}</h3>
          <p className="text-slate-300 line-clamp-3 flex-grow font-light leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {(() => {
              // Map skills to skillicons.dev slugs
              const skillMap: Record<string, string> = {
                'Python': 'python',
                'FastAPI': 'fastapi',
                'React': 'react',
                'PostgreSQL': 'postgresql',
                'TypeScript': 'ts',
                'Node.js': 'nodejs',
                'Express': 'express',
                'Go': 'golang',
                'Docker': 'docker',
                'MongoDB Atlas': 'mongodb',
                'GCP Vertex AI': 'gcp',
                'Transformer Models': 'pytorch'
              };
              
              const icons = project.skills
                .map(s => skillMap[s])
                .filter(Boolean)
                .join(',');
                
              if (icons) {
                return <img src={`https://skillicons.dev/icons?i=${icons}&theme=dark`} alt="Tech Stack" className="h-8" />;
              }
              return project.skills.slice(0, 5).map((skill, index) => (
                <Badge key={index} variant="secondary" className="bg-slate-800/50 text-[#00f2ff] border-slate-700/50">{skill}</Badge>
              ));
            })()}
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
