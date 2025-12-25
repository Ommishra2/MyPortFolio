import { portfolioData } from "@/lib/portfolio-data";
import { Code } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-2 text-sm text-foreground/80">
          <Code className="h-5 w-5 text-primary" />
          <span>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
