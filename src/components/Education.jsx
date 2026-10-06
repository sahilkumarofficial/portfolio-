import React from 'react';
import { GraduationCap, Award, School, BookCheck, MapPin } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      year: '2025',
      degree: 'B.Sc. (Information Technology)',
      institution: 'Patliputra University, Patna',
      location: 'Patna, Bihar',
      badge: 'Bachelor Degree',
      status: 'Completed',
      description:
        'Comprehensive 3-year IT degree covering Core Computer Science, Software Engineering, Database Management Systems, Data Structures & Algorithms, Web Technologies, and Computer Networking.',
      highlights: [
        'Advanced computer science foundations & software principles',
        'Practical labs in C, C++, and Web Development',
        'Database architecture and schema design',
      ],
      icon: <GraduationCap size={22} className="text-cyan-400" />
    },
    {
      year: '2020',
      degree: 'Class XII (Senior Secondary)',
      institution: 'Jawahar Navodaya Vidyalaya, Jethian, Gaya',
      location: 'Gaya, Bihar',
      badge: 'CBSE Senior Secondary',
      status: 'Completed',
      description:
        'Studied science and mathematics stream at Jawahar Navodaya Vidyalaya (JNV), a prestigious central government residential school for academically talented rural students.',
      highlights: [
        'Rigorous mathematics and science curriculum',
        'Co-curricular leadership and collaborative residential school environment',
        'Analytical problem-solving and disciplined focus',
      ],
      icon: <Award size={22} className="text-blue-400" />
    },
    {
      year: '2018',
      degree: 'Class X (Secondary)',
      institution: 'Jawahar Navodaya Vidyalaya, Jethian, Gaya',
      location: 'Gaya, Bihar',
      badge: 'CBSE Secondary',
      status: 'Completed',
      description:
        'Selected into Jawahar Navodaya Vidyalaya through the highly competitive national JNVST entrance examination. Built strong fundamentals in science, mathematics, and logical reasoning.',
      highlights: [
        'Selected via competitive All-India JNVST examination',
        'Strong foundational academic record',
        'Bilingual communication proficiency (Hindi & English)',
      ],
      icon: <School size={22} className="text-emerald-400" />
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">// Academic Background</span>
          <h2 className="section-title">
            Education & <span className="gradient-text-cyan">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal educational background from premier residential institutions and recognized university degree.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-10 my-4 ml-2 sm:ml-4">
          {educationList.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Pin Node */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-8 h-8 rounded-xl bg-[#050B14] border-2 border-cyan-400 flex items-center justify-center shadow-md shadow-cyan-500/30 group-hover:scale-110 group-hover:border-white transition-all">
                {item.icon}
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-7 rounded-2xl border-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
                
                {/* Year & Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                      Completed: {item.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <MapPin size={13} className="text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-heading mb-1">
                  {item.degree}
                </h3>

                {/* Institution */}
                <p className="text-sm font-semibold text-cyan-400/90 mb-3 flex items-center gap-1.5">
                  <span>{item.institution}</span>
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="pt-3 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <BookCheck size={14} className="text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* JNV Merit Note */}
        <div className="mt-12 p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 to-cyan-950/30 border border-cyan-500/20 flex items-start gap-3">
          <Award size={22} className="text-cyan-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white font-semibold">Navodaya Vidyalaya Heritage:</strong> Jawahar Navodaya Vidyalayas are prestigious autonomous residential schools established by the Ministry of Education, Government of India. Admissions are highly selective through nationwide entrance exams, fostering intense academic discipline, ethical leadership, and holistic problem solving.
          </p>
        </div>

      </div>
    </section>
  );
}
