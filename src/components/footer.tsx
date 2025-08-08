import { portfolioData } from "@/lib/portfolio-data";
import { Code } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-foreground/80">
          <Code className="h-5 w-5 text-primary" />
          <span>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</span>
        </div>
        <div className="text-sm text-foreground/80">
          Built with <Link href="https://nextjs.org/" className="font-medium text-primary hover:underline" target="_blank" rel="noopener noreferrer">Next.js</Link> and <Link href="https://tailwindcss.com/" className="font-medium text-primary hover:underline" target="_blank" rel="noopener noreferrer">Tailwind CSS</Link>.
        </div>
      </div>
    </footer>
  );
}
