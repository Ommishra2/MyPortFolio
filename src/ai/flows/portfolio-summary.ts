'use server';
/**
 * @fileOverview AI-powered portfolio summary generator.
 *
 * - generatePortfolioSummary - A function that generates a concise portfolio summary.
 * - PortfolioSummaryInput - The input type for the generatePortfolioSummary function.
 * - PortfolioSummaryOutput - The return type for the generatePortfolioSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioSummaryInputSchema = z.object({
  name: z.string().describe('The name of the portfolio owner.'),
  about: z.string().describe('A detailed description of the portfolio owner.'),
  projects: z.array(
    z.object({
      name: z.string().describe('The name of the project.'),
      description: z.string().describe('A detailed description of the project.'),
      skills: z.array(z.string()).describe('A list of skills used in the project.'),
    })
  ).describe('A list of projects to include in the portfolio summary.'),
  skills: z.array(z.string()).describe('A list of skills to include in the portfolio summary.'),
  tone: z.string().optional().describe('The tone of the portfolio summary. e.g. professional, casual, etc.'),
  jobDescription: z.string().optional().describe('The job description to tailor the portfolio summary to.'),
});
export type PortfolioSummaryInput = z.infer<typeof PortfolioSummaryInputSchema>;

const PortfolioSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the portfolio.'),
});
export type PortfolioSummaryOutput = z.infer<typeof PortfolioSummaryOutputSchema>;

export async function generatePortfolioSummary(input: PortfolioSummaryInput): Promise<PortfolioSummaryOutput> {
  return portfolioSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioSummaryPrompt',
  input: {schema: PortfolioSummaryInputSchema},
  output: {schema: PortfolioSummaryOutputSchema},
  prompt: `You are a professional resume writer. Your job is to write a concise and compelling summary of a portfolio, highlighting key projects and skills.

Here are the details of the portfolio owner:
Name: {{{name}}}
About: {{{about}}}

Here are the projects to include in the portfolio summary:
{{#each projects}}
Project Name: {{{name}}}
Project Description: {{{description}}}
Skills Used: {{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
{{/each}}

Here are the skills to include in the portfolio summary:
{{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

{{#if tone}}
The tone of the summary should be: {{{tone}}}
{{/if}}

{{#if jobDescription}}
Tailor the portfolio summary to the following job description: {{{jobDescription}}}
{{/if}}

Write a concise summary of the portfolio, highlighting key projects and skills.`,
});

const portfolioSummaryFlow = ai.defineFlow(
  {
    name: 'portfolioSummaryFlow',
    inputSchema: PortfolioSummaryInputSchema,
    outputSchema: PortfolioSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
