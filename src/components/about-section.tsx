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
              I am an AI-Driven Full-Stack Developer specializing in Next.js, FastAPI, and PostgreSQL, architecting intelligent web applications with a focus on MLOps, scalable data analytics, and the production-ready deployment of applied AI systems
            </p>
            <p>My current work focuses on:</p>
            <ul className="list-disc list-inside inline-block text-left">
              <li>The Interface: Crafting high-performance, responsive frontends using Next.js, React, and Tailwind CSS.</li>
              <li>The Engine: Architecting robust FastAPI backends and optimized PostgreSQL databases to handle complex data structures.</li>
              <li>The Intelligence: Integrating Applied AI and predictive analytics, supported by MLOps principles to ensure models are scalable, observable, and production-ready.</li>
              <li>The Strategy: Bridging the gap between raw data and user-facing insights through custom analytics dashboards and automated data pipelines.</li>
            </ul>
            <p className="font-semibold text-foreground">
              I believe that the best way to master AI and web technologies is by building real-world products. I am focused on delivering clean, maintainable code that transforms sophisticated AI models into intuitive, value-driven user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
