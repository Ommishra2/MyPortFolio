"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <p className="text-primary font-semibold">Education</p>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">My Academic Journey</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {portfolioData.education.map((edu, index) => (
              <Card key={index} className="shadow-lg bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <GraduationCap className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <span>{edu.degree}</span>
                      <CardDescription className="text-base">{edu.institution}</CardDescription>
                      <CardDescription>{edu.period}</CardDescription>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-foreground/80">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
