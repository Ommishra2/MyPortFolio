"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function AboutSection() {
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
                <span>Education</span>
              </CardTitle>
              <CardDescription>
                My academic background in technology.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                 <div className="flex items-start gap-4 text-foreground/80">
                    <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Master of Science in Information Technology</h3>
                      <p className="text-sm">Babasaheb Bhimrao Ambedkar University, Lucknow</p>
                      <p className="text-sm text-muted-foreground">Currently Pursuing</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 text-foreground/80">
                    <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Bachelor of Science in Computer Science</h3>
                      <p className="text-sm">Gangadhar Meher University, Sambalpur</p>
                      <p className="text-sm text-muted-foreground">Completed</p>
                    </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
