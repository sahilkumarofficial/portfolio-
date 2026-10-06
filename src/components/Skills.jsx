import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Cpu, 
  Briefcase, 
  Megaphone, 
  Keyboard, 
  Search,
  Layers
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Skills', icon: <Layers size={16} /> },
    { id: 'dev', label: 'Development', icon: <Code size={16} /> },
    { id: 'prog', label: 'Programming & Frameworks', icon: <Terminal size={16} /> },
    { id: 'ai', label: 'AI & Cloud', icon: <Cpu size={16} /> },
    { id: 'business', label: 'Business & Productivity', icon: <Briefcase size={16} /> },
    { id: 'marketing', label: 'Marketing', icon: <Megaphone size={16} /> },
    { id: 'typing', label: 'Typing', icon: <Keyboard size={16} /> },
  ];

  const skillData = [
    // Category 1: Development
    {
      category: 'dev',
      categoryName: 'Development',
      name: 'Full Stack Web Development',
      badge: 'Core Focus',
      description: 'End-to-end client and server application development with modern architectures.',
      tags: ['Frontend', 'Backend', 'Full Stack']
    },
    {
      category: 'dev',
      categoryName: 'Development',
      name: 'Full Stack App Development',
      badge: 'Core Focus',
      description: 'Cross-platform mobile and web application engineering for practical digital products.',
      tags: ['Mobile UI', 'Web App', 'Architecture']
    },
    {
      category: 'dev',
      categoryName: 'Development',
      name: 'Frontend Development',
      badge: 'Specialty',
      description: 'High-performance interactive interfaces, component state, and dynamic rendering.',
      tags: ['React', 'SPA', 'JavaScript']
    },
    {
      category: 'dev',
      categoryName: 'Development',
      name: 'Backend Development',
      badge: 'Specialty',
      description: 'Server logic, secure routing, database integration, and request handling.',
      tags: ['Node.js', 'Express', 'Server']
    },
    {
      category: 'dev',
      categoryName: 'Development',
      name: 'API Development',
      badge: 'Architecture',
      description: 'RESTful API endpoint design, JSON payloads, data formatting, and client integration.',
      tags: ['REST API', 'JSON', 'Endpoints']
    },
    {
      category: 'dev',
      categoryName: 'Development',
      name: 'Responsive Web Design',
      badge: 'Design',
      description: 'Fluid grid layouts, adaptive breakpoints, mobile-first design, and accessibility.',
      tags: ['CSS3', 'Mobile-First', 'Flex/Grid']
    },

    // Category 2: Programming & Frameworks
    {
      category: 'prog',
      categoryName: 'Programming & Frameworks',
      name: 'JavaScript',
      badge: 'Language',
      description: 'ES6+, asynchronous programming, closures, DOM manipulation, and modern web APIs.',
      tags: ['ES6+', 'Async/Await', 'Full Stack']
    },
    {
      category: 'prog',
      categoryName: 'Programming & Frameworks',
      name: 'React',
      badge: 'Framework',
      description: 'Component architecture, Hooks, custom lifecycle patterns, state management, and SPAs.',
      tags: ['Components', 'Hooks', 'Vite']
    },
    {
      category: 'prog',
      categoryName: 'Programming & Frameworks',
      name: 'Node.js',
      badge: 'Runtime',
      description: 'Server-side runtime for robust backend servers, microservices, and file I/O operations.',
      tags: ['V8 Engine', 'Event Loop', 'Backend']
    },
    {
      category: 'prog',
      categoryName: 'Programming & Frameworks',
      name: 'C++',
      badge: 'Language',
      description: 'Object-oriented programming, data structures, algorithm problem solving, and memory concepts.',
      tags: ['OOP', 'Algorithms', 'Logic']
    },
    {
      category: 'prog',
      categoryName: 'Programming & Frameworks',
      name: 'C',
      badge: 'Language',
      description: 'Fundamental computer science programming, pointer semantics, and procedural logic.',
      tags: ['Pointers', 'Fundamentals', 'System']
    },

    // Category 3: AI & Cloud
    {
      category: 'ai',
      categoryName: 'AI & Cloud',
      name: 'ChatGPT',
      badge: 'AI Tool',
      description: 'Prompt engineering, code generation, logic debugging, and architectural brainstorming.',
      tags: ['LLM', 'Productivity', 'Code Assist']
    },
    {
      category: 'ai',
      categoryName: 'AI & Cloud',
      name: 'Gemini',
      badge: 'AI Tool',
      description: 'Deep multimodal research, documentation comprehension, and algorithm refactoring.',
      tags: ['Google AI', 'Research', 'Assistance']
    },
    {
      category: 'ai',
      categoryName: 'AI & Cloud',
      name: 'AI-assisted Development',
      badge: 'Workflow',
      description: 'Integrating modern AI tooling into daily coding workflows to boost delivery speed & quality.',
      tags: ['Speed', 'Debugging', 'Workflow']
    },
    {
      category: 'ai',
      categoryName: 'AI & Cloud',
      name: 'Cloud Technologies',
      badge: 'Infrastructure',
      description: 'Hosting web applications, cloud deployment basics, server environments, and domain setup.',
      tags: ['Hosting', 'Deployment', 'Web']
    },
    {
      category: 'ai',
      categoryName: 'AI & Cloud',
      name: 'AI Tools and Workflows',
      badge: 'Efficiency',
      description: 'Automating repetitive development tasks, prototyping interfaces, and testing hypotheses.',
      tags: ['Automation', 'Dev Tools', 'Efficiency']
    },

    // Category 4: Business & Productivity
    {
      category: 'business',
      categoryName: 'Business & Productivity',
      name: 'MS Office',
      badge: 'Productivity',
      description: 'Advanced Word documentation, Excel data sheets, spreadsheets, and PowerPoint presentations.',
      tags: ['Word', 'Excel', 'Data']
    },
    {
      category: 'business',
      categoryName: 'Business & Productivity',
      name: 'Tally',
      badge: 'Accounting',
      description: 'Commercial accounting software operations, ledger management, balance sheets, and vouchers.',
      tags: ['Ledgers', 'Vouchers', 'Accounting']
    },
    {
      category: 'business',
      categoryName: 'Business & Productivity',
      name: 'GST',
      badge: 'Compliance',
      description: 'Goods and Services Tax taxation compliance, invoicing frameworks, and tax calculation principles.',
      tags: ['Invoicing', 'Taxation', 'Compliance']
    },
    {
      category: 'business',
      categoryName: 'Business & Productivity',
      name: 'Windows',
      badge: 'OS & Admin',
      description: 'Environment variables, PowerShell scripting, system configuration, and software deployment.',
      tags: ['PowerShell', 'Config', 'System Admin']
    },

    // Category 5: Marketing
    {
      category: 'marketing',
      categoryName: 'Marketing',
      name: 'Digital Marketing',
      badge: 'Growth',
      description: 'Customer reach strategies, organic digital visibility, funnels, and conversion basics.',
      tags: ['Campaigns', 'Reach', 'Conversion']
    },
    {
      category: 'marketing',
      categoryName: 'Marketing',
      name: 'Online Advertising',
      badge: 'Paid Ads',
      description: 'Performance advertising concepts, budget optimization, audience targeting, and ad creatives.',
      tags: ['Ad Sets', 'Targeting', 'ROI']
    },
    {
      category: 'marketing',
      categoryName: 'Marketing',
      name: 'Social Media Ads',
      badge: 'Engagement',
      description: 'Brand campaign setup across platforms to drive user engagement and web product adoption.',
      tags: ['Social', 'Content', 'Traffic']
    },
    {
      category: 'marketing',
      categoryName: 'Marketing',
      name: 'Digital Network Marketing',
      badge: 'Network',
      description: 'Online networking frameworks, client communication channels, and community outreach.',
      tags: ['Network', 'Outreach', 'Channels']
    },

    // Category 6: Typing
    {
      category: 'typing',
      categoryName: 'Typing',
      name: 'Hindi Typing',
      badge: 'Bilingual',
      description: 'Fast and accurate Hindi script typing (essential for bilingual test series and localized portals).',
      tags: ['Devanagari', 'Speed', 'Localization']
    },
    {
      category: 'typing',
      categoryName: 'Typing',
      name: 'English Typing',
      badge: 'Productivity',
      description: 'High-speed touch typing for efficient code generation, markdown documentation, and correspondence.',
      tags: ['Touch Typing', 'Documentation', 'Speed']
    },
  ];

  // Filtering
  const filteredSkills = skillData.filter((skill) => {
    const matchesCat = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative bg-[#07111F]/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">// Technical & Professional Capabilities</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text-cyan">Competencies</span>
          </h2>
          <p className="section-subtitle">
            Categorized technical capabilities honed through academic rigor, hands-on project engineering, and continuous learning.
          </p>
        </div>

        {/* Controls: Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/20 font-semibold'
                    : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search skills (e.g., React, Node, C++)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-5 rounded-2xl flex flex-col justify-between group hover:border-cyan-500/40"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 whitespace-nowrap">
                    {skill.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  {skill.categoryName}
                </span>

                <div className="flex flex-wrap gap-1.5 justify-end">
                  {skill.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2 py-0.5 rounded-full text-[10px] bg-slate-800/90 text-slate-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <p className="text-base">No skills matched "{searchQuery}" in this category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs text-cyan-400 underline font-mono"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
