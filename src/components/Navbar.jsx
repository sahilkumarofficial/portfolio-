import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'tech', 'projects', 'journey', 'education', 'services', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Tech Stack', href: '#tech', id: 'tech' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050B14]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group text-decoration-none focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
          aria-label="Sahil Kumar Portfolio Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-sky-400 flex items-center justify-center font-mono font-bold text-white shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
            &lt;SK/&gt;
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Sahil Kumar
            </span>
            <span className="text-[11px] font-mono text-cyan-400/80 -mt-1 tracking-wider uppercase">
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-950/40 shadow-inner border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-full border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all cursor-pointer"
            title="Preview Sahil Kumar's Resume"
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="btn-primary text-xs sm:text-sm !py-2 !px-4"
          >
            <Send size={14} />
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07111F]/95 backdrop-blur-xl border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm rounded-lg font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-cyan-950/50 border border-cyan-500/40 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-cyan-500/40 text-cyan-300 bg-cyan-950/30 text-sm font-semibold"
            >
              <FileText size={16} />
              <span>View & Download Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-primary text-center justify-center py-2.5 text-sm"
            >
              <Send size={15} />
              <span>Let's Talk → Contact Sahil</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
