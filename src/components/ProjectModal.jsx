import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles, BookOpen } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="modal-content text-left p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
          aria-label="Close project details modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="pr-12 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/40">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              // Project Case Study
            </span>
          </div>

          <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            {project.title}
          </h2>
          <p className="text-sm text-cyan-300 font-mono mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Main Screenshot Preview */}
        <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 mb-6 shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-[360px] object-cover object-top"
          />
        </div>

        {/* Action Link Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-slate-800">
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs sm:text-sm !py-2.5 !px-5"
          >
            <ExternalLink size={16} />
            <span>Launch Live Demo</span>
          </a>

          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-xs sm:text-sm !py-2.5 !px-5"
          >
            <GithubIcon size={16} />
            <span>View Source Code</span>
          </a>
        </div>

        {/* Modal Sections: Overview, Problem, Solution, Features */}
        <div className="space-y-6 text-sm text-slate-300">
          
          {/* Overview */}
          <div>
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-cyan-400">01.</span> Overview
            </h3>
            <p className="leading-relaxed text-slate-300">
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30">
              <h4 className="text-xs font-mono font-bold text-red-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertCircle size={15} />
                <span>The Problem</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40">
              <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 size={15} />
                <span>The Solution</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-cyan-400">02.</span> Core Architectural Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div>
            <h3 className="text-base font-bold text-white mb-2.5 flex items-center gap-2">
              <span className="text-cyan-400">03.</span> Technology Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-900 text-cyan-300 border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & What I Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h4 className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles size={15} />
                <span>Key Challenges Solved</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h4 className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen size={15} />
                <span>What I Learned</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.learnings}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
