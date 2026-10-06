import React, { useState } from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Eye 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Web', 'App', 'AI', 'Education', 'E-Commerce'];

  const projectsData = [
    {
      id: 'shopingram',
      title: 'Shopingram — E-Commerce Platform & Seller Suite',
      tagline: 'Modern Full-Stack Commercial Shopping & Seller Order System',
      category: 'Full Stack Web Application',
      filterTags: ['Web', 'App', 'E-Commerce'],
      image: '/images/project-shopingram-hero.png',
      previewImage: '/images/project-shopingram-1.png',
      description:
        'A full-stack e-commerce platform designed to provide users with a complete online shopping experience, including product browsing, shopping workflow and order management.',
      tags: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'REST API'],
      keyFeatures: [
        'Dynamic product catalog with category & price filtering',
        'Persistent cart state and checkout order management',
        'Seller dashboard with catalog management & delivery tracking',
        'Responsive mobile-first shopping interface with fast load times',
      ],
      overview:
        'Shopingram is an end-to-end e-commerce application created to bridge modern consumers with sellers. It encompasses both a customer-facing storefront and a streamlined merchant management console for handling catalog items, tracking incoming orders, and managing delivery status.',
      problem:
        'Many online retail systems are either too heavyweight for local vendors or have fragmented mobile layouts that degrade user checkout conversion rates.',
      solution:
        'Engineered a unified full-stack architecture using React for reactive UI rendering and Node.js for backend APIs, ensuring sub-second route navigation and persistent cart states across device sessions.',
      features: [
        'Instant multi-parameter search and category taxonomy',
        'Real-time order calculation with tax & delivery logic',
        'Dedicated seller catalog control panel & stock status',
        'Optimized responsive layouts verified across 320px to 1920px viewports',
      ],
      challenges:
        'Maintaining synchronized cart states while allowing guest users to browse without unnecessary database roundtrips, resolved using local client persistence and token-based state updates.',
      learnings:
        'Gained deep experience in end-to-end e-commerce workflows, state management best practices, component modularity, and designing clean transactional user interfaces.',
      liveDemoUrl: '#',
      codeUrl: 'https://github.com',
    },
    {
      id: 'exammoment',
      title: 'ExamMoment — Online Test-Series & Exam Simulator',
      tagline: 'High-Stakes Competitive Exam Simulation with Deterministic Rank Engine',
      category: 'Education Technology',
      filterTags: ['Web', 'AI', 'Education'],
      image: '/images/project-exammoment.png',
      previewImage: '/images/project-exammoment.png',
      description:
        'An online test-series and exam simulation platform designed for competitive-exam preparation. The platform can provide multiple exams, bilingual questions, timed tests, answer evaluation, scores and performance tracking.',
      tags: ['React', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'Timer Sync'],
      examExamples: ['UPSC', 'BPSC', 'SSC', 'Railway', 'Bihar Police'],
      keyFeatures: [
        'Instant Bilingual Switch: Toggle between Hindi & English seamlessly anytime',
        'Server-Anchored Timer Sync: Preserves exact remaining seconds across refreshes',
        'Deterministic Rank Engine: Fast score & negative-marking evaluation',
        'Exams supported: SSC CGL, BPSC, UPSC, Railway & Bihar Police tests',
      ],
      overview:
        'ExamMoment is an authentic, production-grade examination portal tailored for aspirants of competitive state and national examinations (including UPSC, BPSC, SSC, Railway, and Bihar Police). It replicates real CBT (Computer-Based Test) conditions with strict timing and bilingual translation.',
      problem:
        'Students preparing for competitive examinations in regions like Bihar often struggle with rigid platforms that lack fluid bilingual (Hindi & English) toggling, lose timer progress on network blips, or give inaccurate scoring.',
      solution:
        'Architected a resilient test engine featuring instant bilingual question toggle, client-server timer synchronization, deterministic negative-mark computation, and granular subject-wise score analytics.',
      features: [
        'Instant Bilingual Switch for all questions and answer options',
        'Auto-Submit trigger upon countdown expiration with fail-safe local cache',
        'Comprehensive mock test catalog for SSC, BPSC, Railway & Police exams',
        'Scorecard breakdown with accuracy rate, percentile calculation, and solutions review',
      ],
      challenges:
        'Handling bilingual question rendering without UI layout shift when switching between Devanagari Hindi font metrics and English typography during an active timed exam.',
      learnings:
        'Mastered state synchronization under strict countdown timers, complex multi-question navigation palettes, and building high-reliability educational web systems.',
      liveDemoUrl: '#',
      codeUrl: 'https://github.com',
    },
  ];

  // Filter logic
  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.filterTags.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">// Portfolio Showcase</span>
          <h2 className="section-title">
            Featured <span className="gradient-text-cyan">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of the products and applications I've built with real architectural purpose, responsive user interfaces, and clean code.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => {
            const count =
              filter === 'All'
                ? projectsData.length
                : projectsData.filter((p) => p.filterTags.includes(filter)).length;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/25 font-semibold scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                <span>{filter}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-slate-800/80 text-cyan-300">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden rounded-2xl flex flex-col justify-between group hover:border-cyan-500/50"
            >
              <div>
                {/* Project Image Preview with Zoom on Hover */}
                <div
                  className="aspect-[16/9] overflow-hidden relative bg-slate-950 cursor-pointer border-b border-slate-800"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent opacity-60" />

                  {/* Category Chip */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-950/80 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* View Details Hover Badge */}
                  <div className="absolute bottom-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="px-3 py-1.5 rounded-lg bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 text-xs font-mono flex items-center gap-1.5 backdrop-blur-md">
                      <Eye size={13} />
                      <span>Case Study</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer mb-2 font-heading"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Exam Target Badges (if ExamMoment) */}
                  {project.examExamples && (
                    <div className="mb-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <p className="text-[11px] font-mono text-cyan-400 font-semibold mb-1.5">
                        Targeted Exam Simulators:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.examExamples.map((ex, exIdx) => (
                          <span
                            key={exIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-200 border border-cyan-800"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.keyFeatures.map((feat, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="px-6 py-4 sm:px-7 bg-slate-950/60 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn-outline text-xs sm:text-sm text-cyan-300 hover:text-white"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight size={14} />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
                    title="View GitHub Repository"
                    aria-label="View Project Code"
                  >
                    <GithubIcon size={16} />
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-primary text-xs !py-1.5 !px-3"
                  >
                    <ExternalLink size={13} />
                    <span>Demo Details</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal View for detailed specs */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
