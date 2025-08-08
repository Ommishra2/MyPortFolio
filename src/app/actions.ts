"use server";

import { generatePortfolioSummary, type PortfolioSummaryInput } from "@/ai/flows/portfolio-summary";
import { portfolioData } from "@/lib/portfolio-data";

export async function handleGenerateSummary(formData: FormData) {
  try {
    const tone = formData.get("tone") as string;
    const jobDescription = formData.get("jobDescription") as string;

    const input: PortfolioSummaryInput = {
      name: portfolioData.name,
      about: portfolioData.about,
      projects: portfolioData.projects.map(p => ({
        name: p.name,
        description: p.description,
        skills: p.skills,
      })),
      skills: portfolioData.skills.map(s => s.name),
      tone,
      jobDescription,
    };

    const result = await generatePortfolioSummary(input);
    return { success: true, summary: result.summary };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: `Failed to generate summary: ${errorMessage}` };
  }
}
