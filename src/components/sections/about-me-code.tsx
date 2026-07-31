import { portfolioData } from '@/lib/portfolio-data';

export function AboutMeCode() {
  return (
    <section className="py-24 bg-slate-950 flex justify-center items-center px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-slate-950" />
      
      <div className="w-full max-w-4xl bg-[#08141e]/80 backdrop-blur-xl rounded-xl border border-slate-800 shadow-2xl relative z-10 overflow-hidden">
        {/* Editor Header */}
        <div className="flex items-center px-4 py-3 bg-[#0a0e14] border-b border-slate-800/80">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="mx-auto text-xs font-mono text-slate-500">Developer.ts</div>
        </div>
        
        {/* Editor Body */}
        <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
          <div className="flex">
            <div className="text-slate-600 select-none text-right pr-4 border-r border-slate-800 mr-4 flex flex-col hidden md:flex">
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <div className="text-slate-300 whitespace-pre">
              <span className="text-[#ff6b00]">class</span> <span className="text-[#00f2ff]">Developer</span> {'{\n'}
              {'  '}<span className="text-[#ffb693]">name</span>: <span className="text-[#00dbe7]">string</span> = <span className="text-green-400">"{portfolioData.name}"</span>;{'\n'}
              {'  '}<span className="text-[#ffb693]">education</span>: <span className="text-[#00dbe7]">string</span> = <span className="text-green-400">"MSc Information Technology @ BBAU (2025–2027)"</span>;{'\n'}
              {'\n'}
              {'  '}<span className="text-[#ffb693]">focusAreas</span>: <span className="text-[#00dbe7]">string</span>[] = [{'\n'}
              {'    '}<span className="text-green-400">"Backend Engineering (FastAPI, Node.js, PostgreSQL)"</span>,{'\n'}
              {'    '}<span className="text-green-400">"MLOps & AI (GCP, Vertex AI, PyTorch)"</span>,{'\n'}
              {'    '}<span className="text-green-400">"Data Science (Pandas, Risk Modelling)"</span>{'\n'}
              {'  '}];{'\n'}
              {'\n'}
              {'  '}<span className="text-[#ffb693]">currentFocus</span>() {'{\n'}
              {'    '}<span className="text-[#ff6b00]">return</span> {'{\n'}
              {'      '}role: <span className="text-green-400">"{portfolioData.title}"</span>,{'\n'}
              {'      '}stack: <span className="text-green-400">"Python, Go, React, GCP"</span>{'\n'}
              {'    '};{'\n'}
              {'  '}}{'\n'}
              {'}'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
