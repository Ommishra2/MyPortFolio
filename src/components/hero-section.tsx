"use client"
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GridPattern } from "./grid-pattern";

export function HeroSection() {
  const githubSocial = portfolioData.socials.find(s => s.name === 'GitHub');

  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          className="[mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      <div className="container px-4 md:px-6 z-20 relative">
        <div className="grid gap-6">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline">
              {portfolioData.name}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 font-semibold">
             AI-Driven Full Stack Developer | Building Production-Grade ML Systems & Analytics Dashboards | Next.js • FastAPI • MLOps
            </p>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-lg">
              Currently building <span className="font-bold text-primary">FinDash</span>, a financial analytics dashboard with real-world data workflows.
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-col gap-4 sm:flex-row justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button asChild size="lg">
              <Link href="#projects">View Projects</Link>
            </Button>
            {githubSocial && (
              <Button asChild variant="outline" size="lg">
                <Link href={githubSocial.url} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
