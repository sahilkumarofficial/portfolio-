import React from 'react';
import { 
  Bot, 
  Zap, 
  Search, 
  Bug, 
  Lightbulb, 
  GraduationCap, 
  Code2, 
  ShieldCheck,
  Cpu
} from 'lucide-react';

export default function AISection() {
  const aiUseCases = [
    {
      title: 'Development Productivity',
      description: 'Accelerating routine coding tasks, boilerplate generation, and component scaffolding by 3x.',
      icon: <Zap size={20} className="text-yellow-400" />,
    },
    {
      title: 'Logic & Problem Solving',
      description: 'Evaluating edge cases, boundary testing, algorithmic trade-offs, and architecture validation.',
      icon: <Cpu size={20} className="text-cyan-400" />,
    },
    {
      title: 'Technical Research',
      description: 'Deep diving into latest web specs, library documentations, and browser compatibility notes.',
      icon: <Search size={20} className="text-blue-400" />,
    },
    {
      title: 'Intelligent Code Assistance',
      description: 'Pair-programming with LLMs to write cleaner, more maintainable, and type-conscious JavaScript.',
      icon: <Code2 size={20} className="text-emerald-400" />,
    },
    {
      title: 'Product Ideation',
      description: 'Brainstorming intuitive user flows, UI micro-interactions, and feature specifications.',
      icon: <Lightbulb size={20} className="text-amber-400" />,
    },
    {
      title: 'Accelerated Debugging',
      description: 'Root-causing elusive runtime exceptions, state race conditions, and CSS layout inconsistencies.',
      icon: <Bug size={20} className="text-red-400" />,
    },
    {
      title: 'Learning New Technologies',
      description: 'Fast-tracking mastery of emerging web APIs, modern state management patterns, and system design.',
      icon: <GraduationCap size={20} className="text-purple-400" />,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#07111F]/70 border-y border-slate-800/80">
      {/* Glow aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">// Engineering Multiplier</span>
          <h2 className="section-title">
            AI-Powered <span className="gradient-text-cyan">Development</span>
          </h2>
          <p className="section-subtitle">
            How I integrate modern generative AI workflows into full-stack development to build faster, cleaner, and smarter software.
          </p>
        </div>

        {/* AI Philosophy & Clarification Card */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border-cyan-500/30 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                  <Bot size={22} />
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  AI as a Developer Force-Multiplier
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Modern software engineering is evolving rapidly. Rather than relying solely on traditional workflows, I actively utilize foundational AI models including <strong className="text-cyan-300">ChatGPT</strong> and <strong className="text-cyan-300">Google Gemini</strong> to elevate daily development velocity, troubleshoot bugs, and design scalable architectures.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 border border-slate-700 text-slate-300">
                  ChatGPT (OpenAI)
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 border border-slate-700 text-slate-300">
                  Gemini (Google)
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 border border-slate-700 text-slate-300">
                  Modern Cloud AI Workflows
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
                <ShieldCheck size={16} />
                <span>Honest Transparency</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                I do not claim to have trained these proprietary frontier models. Instead, I master them as powerful engineering instruments to write verified, human-reviewed, production-ready code with higher efficiency.
              </p>
            </div>

          </div>
        </div>

        {/* 7 Specific Productivity Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {aiUseCases.map((useCase, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-3">
                {useCase.icon}
              </div>

              <h4 className="text-base font-bold text-white mb-2 font-heading">
                {useCase.title}
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
