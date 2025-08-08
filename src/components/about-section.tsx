"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/portfolio-data";
import { handleGenerateSummary } from "@/app/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Wand2, Loader2, Lightbulb } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AboutSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");
  const [tone, setTone] = useState("professional");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setSummary("");
    setError("");

    const formData = new FormData(event.currentTarget);
    const result = await handleGenerateSummary(formData);

    if (result.success) {
      setSummary(result.summary!);
    } else {
      setError(result.error!);
    }
    setIsLoading(false);
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">About Me</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              {portfolioData.about}
            </p>
          </div>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="text-primary" />
                <span>AI-Powered Summary</span>
              </CardTitle>
              <CardDescription>
                Generate a custom portfolio summary tailored to a specific job or tone.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="jobDescription">Job Description (Optional)</Label>
                  <Textarea
                    id="jobDescription"
                    name="jobDescription"
                    placeholder="Paste a job description here to tailor the summary..."
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="tone">Tone</Label>
                   <Select name="tone" value={tone} onValueChange={setTone}>
                    <SelectTrigger id="tone" className="w-full mt-1">
                      <SelectValue placeholder="Select a tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Generate Summary
                </Button>
              </form>
              
              {error && (
                <Alert variant="destructive" className="mt-4">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {summary && (
                <Alert className="mt-4 border-primary/50">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  <AlertTitle className="text-primary">Generated Summary</AlertTitle>
                  <AlertDescription>
                    {summary}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
