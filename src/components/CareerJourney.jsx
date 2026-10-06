import React from 'react';
import { 
  GraduationCap, 
  FolderGit2, 
  BrainCircuit, 
  Code, 
  CheckCircle2
} from 'lucide-react';

export default function CareerJourney() {
  const journeyItems = [
    {
      year: '2025',
      badge: 'Academic & Dev Milestone',
      title: 'B.Sc. (IT) Graduate & Full-Stack Deployment',
      subtitle: 'Patliputra University, Patna',
      icon: <GraduationCap className="text-cyan-400" size={20} />,
      points: [
        'Completed Bachelor of Science in Information Technology with strong foundational computing coursework.',
        'Deepened understanding of operating systems, database schemas, object-oriented programming in C++, and network protocols.',
        'Synthesized academic principles with practical modern web development (React, Node.js, and modern CSS).',
      ],
      tags: ['B.Sc. IT', 'Software Engineering', 'Patliputra University']
    },
    {
      year: '2024 – 2025',
      badge: 'Major EdTech Engineering',
      title: 'ExamMoment — Competitive Test Series Simulator',
      subtitle: 'Full-Stack EdTech Architecture',
      icon: <FolderGit2 className="text-blue-400" size={20} />,
      points: [
        'Designed an online exam simulator tailored for state & central exams (UPSC, BPSC, SSC, Railway, Bihar Police).',
        'Implemented instant bilingual translation switch between Hindi and English with zero UI layout shift.',
        'Engineered countdown timer synchronization that prevents time loss across browser reloads, coupled with deterministic rank calculation.',
      ],
      tags: ['React', 'Node.js', 'Bilingual UI', 'Timer Engine']
    },
    {
      year: '2024',
      badge: 'Commercial Web Product',
      title: 'Shopingram — Full-Stack E-Commerce & Merchant Suite',
      subtitle: 'Commercial Storefront & Seller Application',
      icon: <Code className="text-emerald-400" size={20} />,
      points: [
        'Built full-stack e-commerce application facilitating product discovery, dynamic filtering, persistent carts, and checkout flows.',
        'Constructed seller portal with catalog management, stock status, delivery dispatch tracking, and financial insights.',
        'Optimized for mobile-first user experience with responsive design patterns tested across all screen resolutions.',
      ],
      tags: ['E-Commerce', 'Node.js APIs', 'State Management', 'Mobile First']
    },
    {
      year: 'Continuous',
      badge: 'Engineering Workflow',
      title: 'AI-Assisted Development & Modern Stack Mastery',
      subtitle: 'Adopting Next-Gen Developer Productivity',
      icon: <BrainCircuit className="text-sky-400" size={20} />,
      points: [
        'Integrated state-of-the-art AI tooling (ChatGPT, Gemini) into daily engineering for rapid prototyping, debugging, and code refactoring.',
        'Continuously expanding knowledge into cloud hosting, API security, and scalable component architectures.',
        'Prepared to contribute immediately to engineering teams, startups, and client projects with clean, maintainable code.',
      ],
      tags: ['ChatGPT', 'Gemini', 'Cloud', 'Rapid Prototyping']
    },
  ];

  return (
    <section id="journey" className="py-24 relative bg-[#07111F]/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">// Career Progression</span>
          <h2 className="section-title">
            Project & <span className="gradient-text-cyan">Learning Journey</span>
          </h2>
          <p className="section-subtitle">
            An honest, transparent timeline of my technical milestones, production applications built, and continuous learning trajectory.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Stem */}
          <div className="hidden md:block absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-sky-500 opacity-30" />

          <div className="space-y-12">
            {journeyItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050B14] border-2 border-cyan-400 items-center justify-center z-10 shadow-lg shadow-cyan-500/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  </div>

                  {/* Timeline Card */}
                  <div className={`w-full md:w-[46%] ${isEven ? 'md:text-left' : 'md:text-left'}`}>
                    <div className="glass-card p-6 sm:p-7 rounded-2xl border-cyan-500/20 hover:border-cyan-500/40 group transition-all">
                      
                      {/* Top Bar with Year and Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                          {item.year}
                        </span>

                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1 font-heading">
                        {item.title}
                      </h3>

                      <p className="text-xs font-mono text-cyan-400/90 mb-4">
                        {item.subtitle}
                      </p>

                      {/* Points */}
                      <ul className="space-y-2 mb-5">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                        {item.tags.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block w-full md:w-[46%]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
