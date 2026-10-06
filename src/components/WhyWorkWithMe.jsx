import React from 'react';
import { 
  CheckCircle2, 
  Target, 
  Layers, 
  BookOpen, 
  Cpu, 
  BrainCircuit, 
  Sparkles, 
  Rocket, 
  GraduationCap 
} from 'lucide-react';

export default function WhyWorkWithMe() {
  const points = [
    {
      title: 'Practical Project-Focused Approach',
      desc: 'I prioritize building functional, resilient software that directly addresses end-user requirements rather than theoretical code.',
      icon: <Target className="text-cyan-400" size={22} />,
    },
    {
      title: 'Full-Stack Development Knowledge',
      desc: 'Seamlessly connecting user-facing React interfaces with Node.js backend logic, REST APIs, and structured database operations.',
      icon: <Layers className="text-blue-400" size={22} />,
    },
    {
      title: 'Strong Interest in Learning',
      desc: 'Curious, proactive, and adaptable. I rapidly absorb new libraries, architectural paradigms, and development guidelines.',
      icon: <BookOpen className="text-sky-400" size={22} />,
    },
    {
      title: 'AI-Assisted Development Workflow',
      desc: 'Leveraging frontier AI tools (ChatGPT, Gemini) to augment engineering velocity, catch edge-case bugs, and write cleaner code.',
      icon: <Cpu className="text-emerald-400" size={22} />,
    },
    {
      title: 'Problem-Solving Mindset',
      desc: 'Rooted in foundational computer science, C++, and algorithms to decompose complex logic into simple, maintainable functions.',
      icon: <BrainCircuit className="text-amber-400" size={22} />,
    },
    {
      title: 'Clean & User-Focused Interfaces',
      desc: 'Crafting responsive, intuitive UIs with high accessibility standards, fluid transitions, and clear typographic hierarchy.',
      icon: <Sparkles className="text-purple-400" size={22} />,
    },
    {
      title: 'Interest in Building Real-World Products',
      desc: 'Driven by high-utility systems (like live exam simulators and e-commerce platforms) that deliver tangible value to communities.',
      icon: <Rocket className="text-teal-400" size={22} />,
    },
    {
      title: 'Continuous Technology Learning',
      desc: 'Committed to steady daily growth, disciplined experimentation, and keeping up with the evolving modern web ecosystem.',
      icon: <GraduationCap className="text-rose-400" size={22} />,
    },
  ];

  return (
    <section className="py-24 relative bg-[#07111F]/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">// Value Proposition</span>
          <h2 className="section-title">
            Why Work <span className="gradient-text-cyan">With Me?</span>
          </h2>
          <p className="section-subtitle">
            What I bring to software teams, fast-moving startups, and clients seeking dependable engineering execution.
          </p>
        </div>

        {/* 8 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all hover:-translate-y-1"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:border-cyan-500/30 transition-all">
                  {pt.icon}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 font-heading">
                  {pt.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {pt.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                <CheckCircle2 size={13} />
                <span>Verified Trait</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
