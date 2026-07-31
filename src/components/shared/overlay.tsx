'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.2, 0.35], [-100, 0]);

  const opacity3 = useTransform(scrollYProgress, [0.6, 0.75, 1], [0, 1, 1]);
  const x3 = useTransform(scrollYProgress, [0.6, 0.75], [100, 0]);

  // Scroll down prompt indicator fades out smoothly as user scrolls down
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0]);
  const scrollIndicatorY = useTransform(scrollYProgress, [0, 0.12], [0, 15]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none h-full z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute flex flex-col items-center text-center p-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 drop-shadow-lg">
            Om Prakash Mishra
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light">
            Backend Engineer &bull; MLOps &bull; Data Science
          </p>
        </motion.div>

        <motion.div 
          style={{ opacity: opacity2, x: x2 }}
          className="absolute left-8 md:left-24 max-w-lg p-8 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Building Digital Experiences
          </h2>
          <p className="text-lg text-slate-300">
            Architecting full-stack solutions and deploying production-ready AI applications on cloud-native infrastructure.
          </p>
        </motion.div>

        <motion.div 
          style={{ opacity: opacity3, x: x3 }}
          className="absolute right-8 md:right-24 max-w-lg p-8 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/10 text-right"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discovering Patterns
          </h2>
          <p className="text-lg text-slate-300">
            Applying machine learning models for anomaly detection, advanced classification, and high-performance NLP pipelines.
          </p>
        </motion.div>

        {/* Creative Scroll Down Prompt */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity, y: scrollIndicatorY }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto cursor-pointer group"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight * 0.8,
              behavior: 'smooth'
            });
          }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 text-xs md:text-sm font-medium text-slate-300 shadow-[0_0_20px_rgba(56,189,248,0.15)] group-hover:border-cyan-400/60 group-hover:text-cyan-300 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all duration-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="tracking-wide bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent font-semibold">
              Scroll down to dive in
            </span>
          </div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="p-1.5 rounded-full bg-slate-900/40 border border-white/10 text-cyan-400 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}

