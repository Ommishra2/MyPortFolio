"use client"

import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  const github = portfolioData.socials.find(s => s.name === 'GitHub');
  const linkedin = portfolioData.socials.find(s => s.name === 'LinkedIn');

  return (
    <section id="contact" className="py-16 md:py-24 bg-background/50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Get In Touch</h2>
          <p className="text-foreground/80 md:text-xl max-w-3xl mx-auto leading-relaxed">
            I'm currently seeking new opportunities and am open to internships, entry-level full-stack roles, and project collaborations.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <div className="flex items-center gap-4">
            <Mail className="h-6 w-6 text-primary" />
            <a href={`mailto:${portfolioData.contact.email}`} className="text-lg hover:underline">
              {portfolioData.contact.email}
            </a>
          </div>
          <div className="flex gap-4">
            {github && (
              <Button asChild variant="outline" size="icon">
                <Link href={github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            )}
            {linkedin && (
              <Button asChild variant="outline" size="icon">
                <Link href={linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
