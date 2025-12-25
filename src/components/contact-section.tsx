"use client"

import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { Mail } from "lucide-react";
import Link from "next/link";
import type { Social } from "@/lib/portfolio-data";

export function ContactSection() {
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
            {portfolioData.socials.map((social: Social) => (
              <Button asChild key={social.name} variant="outline" size="icon">
                <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <social.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
