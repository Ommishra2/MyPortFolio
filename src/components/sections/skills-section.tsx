import React from 'react';

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-slate-950 px-4 md:px-8 relative z-10 border-t border-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16 pb-4 border-b border-slate-800">
          {/* Laptop emoji icon to match screenshot exactly */}
          <span className="text-3xl">💻</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Tech Stack</h2>
        </div>

        <div className="space-y-12">
          {/* Backend & Data */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-white font-mono text-lg font-semibold tracking-wider">
              [ Backend & Data ]
            </h3>
            <img 
              src="https://skillicons.dev/icons?i=python,golang,postgresql,pytorch,nodejs,mysql,graphql,terraform&theme=dark" 
              alt="Backend Stack" 
              className="max-w-full hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Frontend */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-white font-mono text-lg font-semibold tracking-wider">
              [ Frontend ]
            </h3>
            <img 
              src="https://skillicons.dev/icons?i=html,css,js,ts,react,tailwind,vue,bootstrap&theme=dark" 
              alt="Frontend Stack" 
              className="max-w-full hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Cloud & DevOps */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-white font-mono text-lg font-semibold tracking-wider">
              [ Cloud & DevOps ]
            </h3>
            <img 
              src="https://skillicons.dev/icons?i=gcp,docker,kubernetes,gitlab,githubactions,prometheus,grafana,postman,ansible,linux&theme=dark" 
              alt="Cloud Stack" 
              className="max-w-full hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Tools & Others */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-white font-mono text-lg font-semibold tracking-wider">
              [ Tools & Others ]
            </h3>
            <img 
              src="https://skillicons.dev/icons?i=gherkin,obsidian,figma,discord,notion,git&theme=dark" 
              alt="Tool Stack" 
              className="max-w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
