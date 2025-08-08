import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
       <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-10" />
       <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background"
          data-ai-hint="abstract background"
          fill={true}
          style={{ objectFit: 'cover' }}
          className="z-0"
          priority
        />
      <div className="container px-4 md:px-6 z-20 relative">
        <div className="grid gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline">
              {portfolioData.name}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              {portfolioData.title}
            </p>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              Welcome to my digital space. I build elegant and efficient web solutions.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-center items-center">
            <Button asChild size="lg">
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
