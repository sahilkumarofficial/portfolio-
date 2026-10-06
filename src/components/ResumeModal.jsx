import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeModal({ onClose }) {
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

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
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

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
    >
      <div
        className="modal-content text-left p-6 sm:p-8 max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-slate-800 transition-all cursor-pointer"
          aria-label="Close resume preview"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pr-12 mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
              <FileText size={20} />
            </div>
            <div>
              <h2 id="modal-resume-title" className="text-xl sm:text-2xl font-bold text-white font-heading">
                Sahil Kumar — Resume
              </h2>
              <p className="text-xs font-mono text-cyan-400">
                Full Stack Developer • B.Sc. IT (2025)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="btn-primary text-xs !py-2 !px-4"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </button>

            <a
              href="/resume/Sahil_Kumar_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-xs !py-2 !px-3"
              title="Open PDF in new browser tab"
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer / Fallback */}
        <div className="w-full h-[65vh] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col items-center justify-center relative">
          <object
            data="/resume/Sahil_Kumar_Resume.pdf#toolbar=1"
            type="application/pdf"
            className="w-full h-full"
          >
            <div className="p-8 text-center space-y-4 max-w-md">
              <FileText size={48} className="mx-auto text-cyan-400" />
              <p className="text-sm text-slate-300">
                Your browser is unable to display the PDF inline. You can download or view it directly:
              </p>
              <button
                onClick={handleDownload}
                className="btn-primary text-xs"
              >
                <Download size={16} />
                <span>Download Sahil_Kumar_Resume.pdf</span>
              </button>
            </div>
          </object>
        </div>

        {/* Modal Bottom Note */}
        <div className="mt-4 pt-3 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-slate-800">
          <span>Target roles: Full Stack Web &amp; App Developer</span>
          <span>Contact: shows.sahil@gmail.com</span>
        </div>

      </div>
    </div>
  );
}
