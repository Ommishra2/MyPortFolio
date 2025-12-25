"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, FunctionSquare, LineChart } from "lucide-react";

const learningTopics = [
  {
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    title: "Machine Learning",
    description: "scikit-learn, XGBoost",
  },
  {
    icon: <LineChart className="h-6 w-6 text-primary" />,
    title: "Financial Analytics",
    description: "Applying data science techniques to financial data.",
  },
  {
    icon: <FunctionSquare className="h-6 w-6 text-primary" />,
    title: "RAG-based AI Systems",
    description: "Building intelligent systems with Retrieval-Augmented Generation.",
  },
];

export function LearningSection() {
  return (
    <section id="learning" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <p className="text-primary font-semibold">Roadmap</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Currently Learning</h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
            My journey into more advanced, data-driven applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learningTopics.map((topic, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm text-center p-6">
              <CardHeader className="flex flex-col items-center gap-4">
                {topic.icon}
                <CardTitle>{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
