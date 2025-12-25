"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <p className="text-primary font-semibold">About Me</p>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Who I Am</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 text-center text-foreground/80 text-lg">
            <p>
              I am a Full-Stack Developer in training with a strong focus on building clean, scalable web applications using modern technologies.
            </p>
            <p>My current work focuses on:</p>
            <ul className="list-disc list-inside inline-block text-left">
              <li>Frontend development with Next.js, React, Tailwind CSS</li>
              <li>Backend APIs using FastAPI and PostgreSQL</li>
              <li>Data-driven dashboards and analytics</li>
              <li>Preparing for applied Machine Learning and AI systems</li>
            </ul>
            <p className="font-semibold text-foreground">
              I believe in learning by building real products, not just completing courses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
