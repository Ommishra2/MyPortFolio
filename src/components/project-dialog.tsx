import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

interface ProjectDialogProps {
  project: Project;
  children: React.ReactNode;
}

export function ProjectDialog({ project, children }: ProjectDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.name}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-8 py-4">
          <div className="space-y-4">
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video relative overflow-hidden rounded-lg border">
                       <Image src={src} alt={`${project.name} screenshot ${index + 1}`} data-ai-hint={project.dataAiHint} fill={true} style={{ objectFit: 'cover' }} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-12" />
              <CarouselNext className="mr-12" />
            </Carousel>
          </div>
          <div className="space-y-4">
            <DialogDescription className="text-base text-foreground/80">
              {project.description}
            </DialogDescription>
            <div>
              <h4 className="font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              {project.demoUrl && project.demoUrl !== '#' && (
                <Button asChild>
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
              {project.sourceUrl && project.sourceUrl !== '#' && (
                <Button asChild variant="outline">
                  <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Source Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
