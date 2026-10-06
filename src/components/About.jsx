import React from 'react';
import { 
  Download, 
  Code2, 
  BrainCircuit, 
  Terminal, 
  BookOpen, 
  MapPin, 
  GraduationCap,
  ExternalLink,
  Laptop
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function About({ onOpenResume, onOpenPhoto }) {
  const handleDownload = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    const link = document.createElement('a');
    link.href = '/resume/Sahil_Kumar_Resume.pdf';
    link.download = 'Sahil_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const pillars = [
    {
      title: 'Build',
      desc: 'Developing practical, responsive, and robust web & app products with clean code architecture.',
      icon: <Code2 className="text-cyan-400" size={20} />
    },
    {
      title: 'Learn',
      desc: 'Constantly mastering modern frameworks, computer science fundamentals, and new engineering patterns.',
      icon: <BookOpen className="text-blue-400" size={20} />
    },
    {
      title: 'Solve',
      desc: 'Tackling real-world challenges through logical debugging, optimized algorithms, and structured solutions.',
      icon: <BrainCircuit className="text-sky-400" size={20} />
    },
    {
      title: 'Grow',
      desc: 'Collaborating with teams, embracing feedback, and advancing continuously as a software professional.',
      icon: <GraduationCap className="text-emerald-400" size={20} />
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// Background & Vision</span>
          <h2 className="section-title">
            About <span className="gradient-text-cyan">Me</span>
          </h2>
          <p className="section-subtitle">
            A developer passionate about building high-utility digital products and modern software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Workstation Snapshot & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card overflow-hidden rounded-2xl border-cyan-500/20 group relative">
              <div className="aspect-[4/3] overflow-hidden relative bg-slate-900">
                <img
                  src="/images/sahil-workspace.jpg"
                  alt="Sahil Kumar at work setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-80" />
                
                <button
                  onClick={onOpenPhoto}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#050B14]/80 hover:bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono backdrop-blur-md flex items-center gap-1.5 transition-all shadow-lg"
                  title="Expand Full Workspace Photo"
                >
                  <Laptop size={14} />
                  <span>Enlarge Workstation</span>
                </button>
              </div>

              <div className="p-5 border-t border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                    Developer Setup & Desk
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Active Workspace
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Dual monitor workstation equipped for full-stack engineering, testing, and AI-accelerated workflows.
                </p>
              </div>
            </div>

            {/* Quick Personal Attributes */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <MapPin className="text-cyan-400 shrink-0" size={18} />
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase">Location</p>
                  <p className="text-xs font-semibold text-white">Nalanda, Bihar</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <GraduationCap className="text-blue-400 shrink-0" size={18} />
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase">Degree</p>
                  <p className="text-xs font-semibold text-white">B.Sc. (IT) 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Story & Bio */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="glass-card p-6 sm:p-8 rounded-2xl border-cyan-500/20 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                <Terminal size={14} />
                <span>bio.md — Sahil Kumar</span>
              </div>

              {/* Exact User Provided Paragraph 1 */}
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                I'm a <strong className="text-white font-semibold">B.Sc. (Information Technology)</strong> graduate from <span className="text-cyan-300 font-medium">Patliputra University, Patna</span>, with a strong interest in full-stack web and application development. I enjoy building practical digital products and solving real-world problems through technology.
              </p>

              {/* Exact User Provided Paragraph 2 */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                My technical interests include <span className="text-white font-medium">JavaScript, React, Node.js, C, C++</span>, modern web development, application development and AI-assisted development. I also have knowledge of <span className="text-white font-medium">MS Office, Tally + GST, Windows</span> and digital marketing/online advertising.
              </p>

              {/* Exact User Provided Paragraph 3 */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I'm continuously learning new technologies and looking for opportunities where I can build useful products, contribute to a development team and grow as a professional developer.
              </p>

              {/* Call to Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleDownload}
                  className="btn-primary"
                  id="about-download-resume-btn"
                >
                  <Download size={16} />
                  <span>Download Resume (PDF)</span>
                </button>

                <button
                  onClick={onOpenResume}
                  className="btn-secondary"
                  title="Preview Sahil's Resume on this screen"
                >
                  <span>Preview Resume</span>
                  <ExternalLink size={15} className="text-cyan-400" />
                </button>
              </div>
            </div>

            {/* Core 4 Pillars: Build, Learn, Solve, Grow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-1.5 rounded-lg bg-slate-800/80">
                      {pillar.icon}
                    </div>
                    <h4 className="text-base font-bold text-white font-heading">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
