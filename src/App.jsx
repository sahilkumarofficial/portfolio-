import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import CareerJourney from './components/CareerJourney';
import Education from './components/Education';
import AISection from './components/AISection';
import Services from './components/Services';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import PhotoModal from './components/PhotoModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050B14] text-white flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Sticky Blurred Glass Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenPhoto={() => setIsPhotoOpen(true)}
        />

        {/* Developer Status & Stats */}
        <Stats />

        {/* About Me */}
        <About
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenPhoto={() => setIsPhotoOpen(true)}
        />

        {/* Skills Section */}
        <Skills />

        {/* Tech Stack Visual Grid */}
        <TechStack />

        {/* Projects Section */}
        <Projects />

        {/* Project & Learning Journey (Career) */}
        <CareerJourney />

        {/* Education Timeline */}
        <Education />

        {/* AI-Powered Development */}
        <AISection />

        {/* Services / What I Can Build */}
        <Services />

        {/* Why Work With Me */}
        <WhyWorkWithMe />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}

      {isPhotoOpen && (
        <PhotoModal onClose={() => setIsPhotoOpen(false)} />
      )}
    </div>
  );
}
