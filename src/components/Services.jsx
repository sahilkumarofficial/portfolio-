import React from 'react';
import { 
  Globe, 
  ShoppingCart, 
  Building2, 
  LayoutDashboard, 
  Layers, 
  Smartphone, 
  GraduationCap, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Web Applications',
      desc: 'Interactive, fast single-page applications built with React and modern JavaScript for smooth user experiences.',
      icon: <Globe size={24} className="text-cyan-400" />,
      tag: 'Dynamic UI'
    },
    {
      title: 'E-Commerce Websites',
      desc: 'Online shopping portals featuring product filtering, cart management, checkout workflows, and seller tools.',
      icon: <ShoppingCart size={24} className="text-emerald-400" />,
      tag: 'Online Stores'
    },
    {
      title: 'Business Websites',
      desc: 'Professional digital presence for enterprises, companies, and consultants designed for maximum lead conversion.',
      icon: <Building2 size={24} className="text-blue-400" />,
      tag: 'Brand Presence'
    },
    {
      title: 'Admin Dashboards',
      desc: 'Intuitive management consoles with analytics, user permissions, order management, and real-time data views.',
      icon: <LayoutDashboard size={24} className="text-sky-400" />,
      tag: 'Internal Tools'
    },
    {
      title: 'Full Stack Applications',
      desc: 'Integrated frontend and backend systems with RESTful APIs, database connectivity, and structured state flow.',
      icon: <Layers size={24} className="text-indigo-400" />,
      tag: 'End-to-End'
    },
    {
      title: 'Mobile Applications',
      desc: 'Mobile-first progressive and responsive applications delivering native-feeling performance on iOS and Android.',
      icon: <Smartphone size={24} className="text-teal-400" />,
      tag: 'Responsive Mobile'
    },
    {
      title: 'Test / Exam Platforms',
      desc: 'Computer-based testing engines with countdown timers, bilingual Hindi/English switching, and deterministic scoring.',
      icon: <GraduationCap size={24} className="text-amber-400" />,
      tag: 'EdTech Systems'
    },
    {
      title: 'AI-Assisted Digital Solutions',
      desc: 'Intelligent web solutions integrated with modern LLMs and automated workflows to increase business efficiency.',
      icon: <Sparkles size={24} className="text-purple-400" />,
      tag: 'Smart Workflows'
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">// Engineering Offerings</span>
          <h2 className="section-title">
            What I Can <span className="gradient-text-cyan">Build</span>
          </h2>
          <p className="section-subtitle">
            Reliable, production-ready software solutions crafted to solve tangible problems for companies, startups, and clients.
          </p>
        </div>

        {/* 8 Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-500/20">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 font-heading">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href="#contact"
                  className="text-xs font-mono text-cyan-400 hover:text-white flex items-center gap-1 group/link"
                >
                  <span>Inquire Solution</span>
                  <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
                <span className="text-[10px] font-mono text-slate-500">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
