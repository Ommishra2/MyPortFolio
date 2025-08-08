"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

// SVGs for logos
const JSIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
    <path d="M0 0H24V24H0V0Z" fill="#F7DF1E"/>
    <path d="M11.396 18.256C11.588 18.532 11.972 18.668 12.308 18.56C12.944 18.356 13.508 17.948 13.508 17.228C13.508 16.328 12.8 15.824 11.9 15.548L11.228 15.344C10.268 15.068 9.86 14.66 9.86 14.06C9.86 13.52 10.268 13.148 10.868 13.148C11.432 13.148 11.84 13.46 12.032 13.928L13.772 13.184C13.364 12.188 12.344 11.528 10.904 11.528C9.536 11.528 8.444 12.32 8.444 13.556C8.444 14.684 9.272 15.26 10.556 15.656L11.228 15.86C12.128 16.136 12.572 16.544 12.572 17.18C12.572 17.756 12.128 18.128 11.532 18.128C10.736 18.128 10.364 17.72 10.136 17.348L8.432 18.056C8.876 19.124 9.932 19.748 11.36 19.748C12.728 19.748 13.892 18.992 13.892 17.72C13.892 16.556 13.064 15.98 11.828 15.584L11.396 18.256Z" fill="#000"/>
    <path d="M15.42 11.564H17.196V11.96L15.9 12.128V13.112H17.124V14.42H15.9V15.5H17.268V16.8H15.9V17.9H17.844V11.564H15.42Z" fill="#000"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary">
    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#68a063]">
    <path d="M11.74,21.82,2,16.43V5.57L11.74.18l9.74,5.39V16.43ZM3.58,15.55l8.16,4.71,8.16-4.71V6.45L11.74,1.74,3.58,6.45Zm5.53-1.42,1.3,2.26,3.61-2.09-.33-4.59-1.3-2.26-3.61,2.09.33,4.59Z" fill="currentColor"/>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
    <path fill="#3776AB" d="M12,2A10,10,0,0,0,2,12a10,10,0,0,0,10,10,10,10,0,0,0,10-10A10,10,0,0,0,12,2Zm5,13.5a2,2,0,0,1-2,2H9.5a2.5,2.5,0,0,1-2.5-2.5v-5A2.5,2.5,0,0,1,9.5,8H12a2,2,0,0,1,2,2v1.5H11.5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h3a2,2,0,0,1,2,2Z"/>
    <path fill="#FFD43B" d="M12,22A10,10,0,0,1,2,12,10,10,0,0,1,12,2,10,10,0,0,1,22,12,10,10,0,0,1,12,22ZM7,8.5A2,2,0,0,0,9,6.5h2.5a2.5,2.5,0,0,1,2.5,2.5v5a2.5,2.5,0,0,1-2.5,2.5H12a2,2,0,0,1-2-2V13h2.5a1,1,0,0,0,1-1V11a1,1,0,0,0-1-1H9a2,2,0,0,1-2-2Z"/>
  </svg>
);

export function AboutSection() {
  const technologies = [
    { name: 'JavaScript', icon: JSIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'Node.js', icon: NodeIcon },
    { name: 'Python', icon: PythonIcon },
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold">About Me</p>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Who I Am</h2>
            </div>
            <p className="text-foreground/80 leading-relaxed text-lg">
              {portfolioData.about}
            </p>
          </div>
          
          <Card className="shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="text-primary" />
                <span>Education & Skills</span>
              </CardTitle>
              <CardDescription>
                I am currently pursuing my Master's degree and have experience with the following technologies.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                 <div className="flex items-start gap-4 text-foreground/80">
                    <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Master of Science in Information Technology</h3>
                      <p className="text-sm">Babasaheb Bhimrao Ambedkar University, Lucknow</p>
                      <p className="text-sm text-muted-foreground">Currently Pursuing</p>
                    </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Core Technologies</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  {technologies.map(tech => (
                    <div key={tech.name} className="flex flex-col items-center gap-2 p-2 rounded-lg bg-background/50 transition-all hover:bg-accent/10">
                       <tech.icon />
                       <span className="text-sm font-medium text-foreground/80">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
