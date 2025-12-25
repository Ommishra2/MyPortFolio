"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";

export function CurrentFocusSection() {
  return (
    <section id="focus" className="py-16 md:py-24 bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block rounded-full bg-secondary text-secondary-foreground px-4 py-1 text-sm mb-4">
            Current Focus
          </div>
          <Card className="shadow-lg bg-card/50 backdrop-blur-sm text-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="text-primary" />
                <span>Building FinDash</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-foreground/80 space-y-4">
              <p>
                Currently focused on building FinDash — a full-stack financial dashboard — 
                while strengthening fundamentals in React, TypeScript, backend APIs, and 
                data-driven application design.
              </p>
              <p>
                Next phases will include backend integration, authentication, and analytics.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
