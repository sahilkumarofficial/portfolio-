import React, { useEffect } from 'react';
import { X, Laptop } from 'lucide-react';

export default function PhotoModal({ onClose }) {
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

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-photo-title"
    >
      <div
        className="modal-content text-left p-6 sm:p-7 max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-slate-800 transition-all cursor-pointer z-10"
          aria-label="Close photo preview"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="pr-12 mb-4">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase mb-1">
            <Laptop size={14} />
            <span>Developer Workstation Environment</span>
          </div>
          <h2 id="modal-photo-title" className="text-xl sm:text-2xl font-bold text-white font-heading">
            Sahil Kumar — Developer Workspace
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Full-stack development desk setup with dual displays, VS Code environment, and AI workflow tools.
          </p>
        </div>

        {/* Full Image */}
        <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl relative">
          <img
            src="/images/sahil-workspace.jpg"
            alt="Sahil Kumar at work setup"
            className="w-full h-auto max-h-[70vh] object-contain mx-auto"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Real Developer Workspace • Nalanda, Bihar</span>
          </div>
          <span className="text-cyan-400">"Build. Learn. Solve. Grow."</span>
        </div>

      </div>
    </div>
  );
}
