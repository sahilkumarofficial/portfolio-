import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Tech Stack', href: '#tech' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Education', href: '#education' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#03070d] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-mono font-bold text-white text-sm">
                &lt;SK/&gt;
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Sahil Kumar
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Building digital experiences with code, creativity and AI. Specializing in high-performance web applications, responsive architectures, and full-stack solutions.
            </p>

            <div className="pt-1">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-500/30">
                Philosophy: "Build. Learn. Solve. Grow."
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <p className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4">
              Quick Navigation
            </p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-xs text-slate-300 hover:text-cyan-400 transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-cyan-500 font-mono text-[10px]">&gt;</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
              Direct Contact
            </p>

            <p className="text-xs text-slate-300">
              <strong className="text-white">Email:</strong>{' '}
              <a href="mailto:shows.sahil@gmail.com" className="text-cyan-400 hover:underline">
                shows.sahil@gmail.com
              </a>
            </p>

            <p className="text-xs text-slate-300">
              <strong className="text-white">Mobile:</strong>{' '}
              <a href="tel:7667979586" className="text-slate-300 hover:text-white">
                +91 7667979586
              </a>
            </p>

            <p className="text-xs text-slate-300">
              <strong className="text-white">Location:</strong> Nalanda, Bihar, India
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={15} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={15} />
              </a>

              <a
                href="mailto:shows.sahil@gmail.com"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>

              <a
                href="https://wa.me/917667979586"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-green-400 hover:border-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsappIcon size={15} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back-to-Top Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            <p>© 2026 Sahil Kumar. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Built with passion &amp; code.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-cyan-950 border border-slate-700 hover:border-cyan-500/50 text-cyan-300 transition-all cursor-pointer group"
            title="Scroll to Top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
