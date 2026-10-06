import React from 'react';
import { 
  GitBranch, 
  Cloud, 
  Cpu
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function TechStack() {
  const stack = [
    {
      name: 'JavaScript',
      role: 'Core Language',
      category: 'Language / Runtime',
      icon: 'JS',
      color: 'from-amber-500/20 to-yellow-600/10 border-yellow-500/30 text-yellow-300',
      description: 'Modern ES6+ syntax, asynchronous operations, event-driven scripting, and DOM manipulation.',
    },
    {
      name: 'React',
      role: 'Frontend Framework',
      category: 'User Interface',
      icon: '⚛️',
      color: 'from-cyan-500/20 to-blue-600/10 border-cyan-500/30 text-cyan-300',
      description: 'Declarative component design, hooks, state handling, and single-page application architecture.',
    },
    {
      name: 'Node.js',
      role: 'Backend Runtime',
      category: 'Server / APIs',
      icon: 'Node',
      color: 'from-emerald-500/20 to-green-600/10 border-emerald-500/30 text-emerald-300',
      description: 'Server-side execution, RESTful API endpoints, request handling, and backend logic pipelines.',
    },
    {
      name: 'C++',
      role: 'System / CS Core',
      category: 'Programming Language',
      icon: 'C++',
      color: 'from-blue-600/20 to-indigo-600/10 border-blue-500/30 text-blue-300',
      description: 'Object-oriented programming, data structures, algorithms, and computational logic foundations.',
    },
    {
      name: 'C',
      role: 'CS Fundamentals',
      category: 'Foundational Language',
      icon: 'C',
      color: 'from-sky-600/20 to-slate-600/10 border-sky-500/30 text-sky-300',
      description: 'Low-level concepts, memory addressing, pointers, and procedural computing logic.',
    },
    {
      name: 'HTML5',
      role: 'Markup & Semantics',
      category: 'Web Standard',
      icon: 'HTML',
      color: 'from-orange-500/20 to-red-600/10 border-orange-500/30 text-orange-300',
      description: 'Semantic markup, accessibility landmarks, modern interactive tags, and SEO structure.',
    },
    {
      name: 'CSS3',
      role: 'Styling & Layout',
      category: 'Design & Visuals',
      icon: 'CSS',
      color: 'from-blue-500/20 to-cyan-600/10 border-blue-500/30 text-blue-300',
      description: 'Flexbox, CSS Grid, media queries, animations, modern custom properties, and responsive design.',
    },
    {
      name: 'Git',
      role: 'Version Control',
      category: 'Developer Workflow',
      icon: <GitBranch size={22} className="text-orange-400" />,
      color: 'from-orange-500/20 to-amber-600/10 border-orange-500/30 text-orange-300',
      description: 'Branch management, commits, staging, conflict resolution, and version tracking.',
    },
    {
      name: 'GitHub',
      role: 'Code Collaboration',
      category: 'Repositories & CI',
      icon: <GithubIcon size={22} className="text-white" />,
      color: 'from-slate-700/30 to-slate-800/10 border-slate-600/40 text-white',
      description: 'Remote repository hosting, issue tracking, project documentation, and open source integration.',
    },
    {
      name: 'Cloud',
      role: 'Web Hosting & Infra',
      category: 'Deployment',
      icon: <Cloud size={22} className="text-sky-400" />,
      color: 'from-cyan-500/20 to-sky-600/10 border-sky-500/30 text-sky-300',
      description: 'Production hosting, DNS configuration, cloud environment setups, and continuous deployment.',
    },
    {
      name: 'AI Tools',
      role: 'ChatGPT & Gemini',
      category: 'Productivity Multiplier',
      icon: <Cpu size={22} className="text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-600/10 border-teal-500/30 text-emerald-300',
      description: 'AI-assisted code generation, rapid debugging, technical documentation, and concept exploration.',
    },
  ];

  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// Core Technologies</span>
          <h2 className="section-title">
            Tech <span className="gradient-text-cyan">Stack</span>
          </h2>
          <p className="section-subtitle">
            The programming languages, frameworks, and modern developer tools I use to build scalable web applications.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {stack.map((item, index) => (
            <div
              key={index}
              className="glass-card p-5 rounded-2xl flex flex-col justify-between group hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  {/* Tech Logo Emblem */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} border flex items-center justify-center font-mono font-bold text-sm shadow-md group-hover:scale-105 transition-transform`}>
                    {typeof item.icon === 'string' ? item.icon : item.icon}
                  </div>

                  <span className="text-[10px] font-mono text-cyan-400/90 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                    {item.role}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h3>
                
                <p className="text-[11px] font-mono text-slate-400 mb-2">
                  {item.category}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Verified in Projects</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Stack Disclaimer Banner */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-300">
            <span className="text-cyan-400 font-semibold font-mono">[Honest Stack Guarantee]</span> Every technology listed above is actively utilized in my actual projects. I focus on clean architectural fundamentals and continuous hands-on learning rather than claiming inflated skill levels.
          </p>
        </div>

      </div>
    </section>
  );
}
