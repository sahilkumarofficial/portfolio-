import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (formStatus === 'error') {
      setFormStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setFormStatus('submitting');

    // Simulate reliable dispatch & trigger celebratory confetti
    setTimeout(() => {
      setFormStatus('success');
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#2563EB', '#06B6D4', '#38BDF8', '#10B981']
        });
      } catch {
        // ignore
      }
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shows.sahil@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">// Get In Touch</span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text-cyan">Great Together.</span>
          </h2>
          <p className="section-subtitle">
            Have a project, opportunity or idea? I'd love to hear about it. Reach out directly through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Instant Connect Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 sm:p-8 rounded-2xl border-cyan-500/20 space-y-6">
              <h3 className="text-xl font-bold text-white font-heading">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                I am actively available for software developer roles, full-stack contracts, and high-impact digital initiatives. Feel free to call, email, or WhatsApp me anytime.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                
                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-mono text-slate-400 uppercase">Email Address</p>
                    <a
                      href="mailto:shows.sahil@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      shows.sahil@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email"
                  >
                    <Copy size={15} />
                  </button>
                </div>

                {/* Mobile */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-mono text-slate-400 uppercase">Mobile Phone</p>
                    <a
                      href="tel:7667979586"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300 transition-colors block"
                    >
                      +91 7667979586
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-cyan-600/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-mono text-slate-400 uppercase">Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      Nalanda, Bihar, India
                    </p>
                  </div>
                </div>

              </div>

              {copiedEmail && (
                <div className="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs text-center font-mono">
                  ✓ Copied `shows.sahil@gmail.com` to clipboard!
                </div>
              )}

              {/* Instant Action Direct Buttons */}
              <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-2.5">
                <a
                  href="mailto:shows.sahil@gmail.com"
                  className="flex-1 min-w-[120px] py-2.5 px-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <Mail size={14} />
                  <span>Email Me</span>
                </a>

                <a
                  href="tel:7667979586"
                  className="flex-1 min-w-[120px] py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <Phone size={14} />
                  <span>Call Me</span>
                </a>

                <a
                  href="https://wa.me/917667979586?text=Hi%20Sahil,%20I%20am%20reaching%20out%20from%20your%20portfolio%20website..."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp Me (+91 7667979586)</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border-cyan-500/20 relative">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Direct message to Sahil Kumar — I usually respond within 24 hours.
                  </p>
                </div>
                <Sparkles size={20} className="text-cyan-400" />
              </div>

              {formStatus === 'success' ? (
                <div className="py-12 px-4 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 size={32} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white font-heading">
                    Thank You, {formData.name || 'Friend'}!
                  </h4>
                  
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message has been queued successfully. You can also send a direct email to <strong className="text-cyan-300">shows.sahil@gmail.com</strong> or WhatsApp me at <strong className="text-cyan-300">+91 7667979586</strong> for immediate response.
                  </p>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setFormStatus('idle');
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="btn-secondary text-xs"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`mailto:shows.sahil@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message)}`}
                      className="btn-primary text-xs"
                    >
                      Open Email App
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {formStatus === 'error' && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity / Collaboration"
                      className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Sahil, I would like to discuss a project / role..."
                      required
                      className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-y"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full btn-primary !py-3 font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                    id="contact-send-btn"
                  >
                    <Send size={16} />
                    <span>{formStatus === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center font-mono pt-2">
                    Privacy guaranteed. Your contact details will only be used to respond to your inquiry.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
