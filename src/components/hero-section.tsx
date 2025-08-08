import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />
      <div className="container px-4 md:px-6 z-20 relative">
        <div className="grid gap-6">
          <div className="space-y-4">
             <div className="inline-block rounded-full bg-secondary text-secondary-foreground px-4 py-1 text-sm">
                Full Stack Developer & Data Analyst
              </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
              {portfolioData.name}
            </h1>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              Welcome to my digital portfolio. I craft intelligent and efficient web solutions.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-center items-center">
            <Button asChild size="lg" className="bg-primary/90 hover:bg-primary text-primary-foreground">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <Link href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-8 w-8 text-foreground/60 animate-bounce"/>
        </Link>
      </div>
    </section>
  );
}
