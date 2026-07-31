import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Lightbulb, Award } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function AdditionalSections() {
  const exploring = [
    "Designing robust MLOps pipelines on Vertex AI",
    "Orchestrating microservices with FastAPI",
    "LLM fine-tuning for domain-specific NLP (Finance)",
    "Implementing real-time streaming anomaly detection"
  ];

  const certifications = [
    { name: "Claude with GCP Vertex AI", issuer: "Anthropic × Google", status: "Completed" },
    { name: "React Bootcamp", issuer: "-", status: "Completed" },
    { name: "GCP Fundamentals", issuer: "Google Cloud", status: "In Progress" },
  ];

  return (
    <section className="py-24 bg-slate-950 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Education & Interests remain below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Education & Certifications */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <BookOpen className="w-8 h-8 text-[#00f2ff]" />
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Education</h2>
            </div>
            <div className="space-y-4">
              {portfolioData.education.map((edu, i) => (
                <Card key={i} className="bg-[#08141e]/40 backdrop-blur-md border border-white/10 shadow-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-[#00f2ff] font-mono text-sm mb-4">{edu.institution}</p>
                  <Badge variant="outline" className="text-slate-300 border-slate-700">{edu.period}</Badge>
                </Card>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Award className="w-8 h-8 text-[#00f2ff]" />
              <h2 className="text-2xl font-bold text-white tracking-tight">Certifications</h2>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                  <div>
                    <h4 className="text-white font-semibold">{cert.name}</h4>
                    <p className="text-sm text-slate-400">{cert.issuer}</p>
                  </div>
                  <Badge className={cert.status === 'Completed' ? 'bg-[#ff6b00]/20 text-[#ffb693]' : 'bg-slate-800 text-slate-300'}>
                    {cert.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Area of Interest */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Lightbulb className="w-8 h-8 text-[#00f2ff]" />
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Currently Exploring</h2>
            </div>
            <Card className="bg-[#08141e]/40 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ff6b00] to-[#00f2ff]" />
              <CardContent className="p-8 space-y-6">
                {exploring.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-[#ff6b00] font-mono font-bold mt-1">0{index + 1}.</span>
                    <p className="text-slate-300 text-lg leading-relaxed">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
}
