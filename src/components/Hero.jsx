import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  FileText,
  Mail, 
  Maximize2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import confetti from 'canvas-confetti';

const titles = [
  'Full Stack Web Developer',
  'Full Stack App Developer',
  'AI-Assisted Developer',
  'Web Application Developer',
];

export default function Hero({ onOpenResume, onOpenPhoto }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(90);

        if (displayedText.length + 1 === fullText.length) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, typingSpeed]);

  const handleResumeDownload = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#2563EB', '#06B6D4', '#38BDF8', '#10B981']
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

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="badge-status">
                <span className="status-dot"></span>
                <span>Available for Opportunities</span>
              </span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2">
              Hi, I'm <span className="gradient-text-cyan">Sahil Kumar</span>
            </h1>

            {/* Animated Title */}
            <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start mb-6">
              <span className="font-mono text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-300">
                {displayedText}
                <span className="animate-pulse text-sky-400">|</span>
              </span>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              I build modern, scalable web and mobile applications with clean code, great user experiences and AI-powered development workflows.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                className="btn-primary"
                id="hero-view-projects-btn"
              >
                <span>View My Projects</span>
                <ArrowRight size={17} />
              </a>

              <button
                onClick={onOpenResume}
                className="btn-secondary group"
                id="hero-preview-resume-btn"
                title="Preview Sahil Kumar's Resume"
              >
                <FileText size={17} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>View Resume</span>
              </button>

              <button
                onClick={handleResumeDownload}
                className="btn-secondary group"
                id="hero-download-resume-btn"
                title="Download Sahil Kumar's Official Resume"
              >
                <Download size={17} className="text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download</span>
              </button>
            </div>

            {/* Secondary Direct Contact CTA */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
              <a
                href="#contact"
                className="btn-outline group text-sm text-cyan-300 hover:text-white"
              >
                <span>Let's Work Together</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <span className="text-slate-500">•</span>
              <span className="text-xs text-slate-400 font-mono">Based in Nalanda, Bihar</span>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider mr-2 hidden sm:inline">
                Connect:
              </span>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-sm"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={19} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-sm"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={19} />
              </a>

              {/* Email */}
              <a
                href="mailto:shows.sahil@gmail.com"
                className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-sm"
                aria-label="Send Email to Sahil Kumar"
                title="Email: shows.sahil@gmail.com"
              >
                <Mail size={19} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917667979586?text=Hi%20Sahil,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-green-400 hover:border-green-400/60 hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-sm"
                aria-label="Chat on WhatsApp"
                title="WhatsApp: +91 7667979586"
              >
                <WhatsappIcon size={19} />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portrait & Floating Tech Elements */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              
              {/* Outer Glowing Radial Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-400/25 rounded-full blur-2xl -z-10 scale-110" />

              {/* Hero Portrait Frame */}
              <div className="hero-avatar-frame">
                <div className="avatar-glow-ring"></div>
                
                <div className="avatar-inner">
                  <img
                    src="/images/sahil-portrait.jpg"
                    alt="Sahil Kumar - Full Stack Developer"
                    loading="eager"
                    className="w-full h-full object-cover"
                  />

                  {/* Quick Expand Workspace Badge */}
                  <button
                    onClick={onOpenPhoto}
                    className="absolute bottom-3 right-1/2 translate-x-1/2 px-3 py-1 bg-slate-950/80 hover:bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono rounded-full backdrop-blur-md flex items-center gap-1.5 transition-all shadow-md group cursor-pointer"
                    title="View Full Developer Workspace Photo"
                  >
                    <Maximize2 size={11} className="group-hover:scale-110 transition-transform" />
                    <span>View Desk Photo</span>
                  </button>
                </div>
              </div>

              {/* Floating Tech Element 1: </> */}
              <div className="absolute -top-3 -left-3 sm:-left-6 p-2.5 sm:p-3 rounded-2xl bg-[#07111F]/90 border border-cyan-500/40 shadow-xl backdrop-blur-md animate-float-1 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">
                  &lt;/&gt;
                </div>
                <div className="pr-1">
                  <p className="text-[11px] font-mono text-cyan-300 font-semibold leading-tight">Clean Code</p>
                  <p className="text-[9px] text-slate-400">Architecture</p>
                </div>
              </div>

              {/* Floating Tech Element 2: React */}
              <div className="absolute top-1/4 -right-4 sm:-right-8 p-2.5 sm:p-3 rounded-2xl bg-[#07111F]/90 border border-cyan-400/40 shadow-xl backdrop-blur-md animate-float-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-xs">
                  ⚛️
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">React</p>
                  <p className="text-[9px] text-cyan-400 font-mono">Modern UI</p>
                </div>
              </div>

              {/* Floating Tech Element 3: Node.js */}
              <div className="absolute -bottom-3 -left-2 sm:-left-6 p-2.5 sm:p-3 rounded-2xl bg-[#07111F]/90 border border-emerald-500/40 shadow-xl backdrop-blur-md animate-float-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  JS
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Node.js</p>
                  <p className="text-[9px] text-emerald-400 font-mono">RESTful APIs</p>
                </div>
              </div>

              {/* Floating Tech Element 4: C++ & AI */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 p-2.5 sm:p-3 rounded-2xl bg-[#07111F]/90 border border-blue-500/40 shadow-xl backdrop-blur-md animate-float-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono font-bold text-xs">
                  C++
                </div>
                <div className="flex items-center gap-1.5 pl-1">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                    AI
                  </span>
                  <span className="text-[10px] text-slate-300">Workflows</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
