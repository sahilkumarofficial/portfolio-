import React from 'react';
import { GraduationCap, FolderGit2, Layers, Cpu, MapPin } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: <GraduationCap className="text-cyan-400" size={26} />,
      value: 'B.Sc. IT',
      label: '2025 Graduate',
      detail: 'Patliputra University, Patna',
    },
    {
      icon: <FolderGit2 className="text-blue-400" size={26} />,
      value: '2+ Major',
      label: 'Production-Grade Projects',
      detail: 'E-Commerce & Test Series Systems',
    },
    {
      icon: <Layers className="text-sky-400" size={26} />,
      value: 'Full Stack',
      label: 'Web & App Architecture',
      detail: 'React, Node.js, REST APIs',
    },
    {
      icon: <Cpu className="text-emerald-400" size={26} />,
      value: 'AI-Assisted',
      label: 'Modern Engineering Workflow',
      detail: 'ChatGPT, Gemini, Accelerated Dev',
    },
  ];

  return (
    <section className="relative py-10 border-y border-slate-800/80 bg-[#07111F]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl flex items-start gap-4 group hover:border-cyan-500/40"
            >
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 group-hover:scale-105 transition-all shadow-inner">
                {item.icon}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading group-hover:text-cyan-300 transition-colors">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-mono">
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Motto Banner */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold">&gt;&gt;</span>
            <span className="text-slate-300">Core Developer Philosophy:</span>
            <span className="px-2.5 py-1 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 font-semibold tracking-wider">
              "Build. Learn. Solve. Grow."
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-cyan-400" />
            <span>Nalanda, Bihar, India • Open for Full-time Roles & Remote Freelance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
