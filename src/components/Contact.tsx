'use client';

import { motion } from 'framer-motion';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheck,
  FaCopy,
} from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Portfolio Inquiry', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abdulrehman2001y@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Portfolio Inquiry', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please reach out via email directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section bg-white dark:bg-slate-900/40 text-foreground w-full py-20 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full bg-teal-50 dark:bg-teal-950/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 ring-1 ring-teal-200/80 dark:ring-teal-800 mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Build Something Impactful
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Have a project in mind, need custom AI integration, or looking for a skilled full-stack developer? Reach out today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Info */}
          <motion.div
            className="lg:col-span-5 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Contact Channels</h3>
              <p className="mt-1 text-xs text-slate-500">
                Available for full-time roles, contract consulting, and solution development.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="tel:+923346828900"
                  className="flex items-center gap-3.5 rounded-2xl p-3.5 bg-slate-50 dark:bg-slate-800/60 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 border border-slate-200/80 dark:border-slate-700/60 transition-all group"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 group-hover:scale-105 transition-transform">
                    <FaPhone className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 block">Direct Line</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">+92-334-6828900</span>
                  </div>
                </a>

                <div className="flex items-center justify-between rounded-2xl p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400">
                      <FaEnvelope className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold text-slate-500 block">Email Address</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate block">
                        abdulrehman2001y@gmail.com
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl text-slate-500 hover:text-orange-600 hover:bg-white dark:hover:bg-slate-700 transition"
                    title="Copy email"
                  >
                    {copied ? <FaCheck className="w-3.5 h-3.5 text-teal-600" /> : <FaCopy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-3.5 rounded-2xl p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300">
                    <FaMapMarkerAlt className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 block">Base Location</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">Islamabad / Lahore, Pakistan (Available Remote)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Badges */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
                Professional Networks
              </span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/abdul-rehman-solution-engineer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 px-4 py-2.5 text-xs font-bold text-[#0A66C2] dark:text-[#6eb3f7] transition-all"
                >
                  <FaLinkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/abdulrehman4702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 px-4 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            className="lg:col-span-7 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Send a Message</h3>
            <p className="mt-1 text-xs text-slate-500">
              Fill out the form below to send an inquiry directly to my database inbox.
            </p>

            {error && (
              <div className="mt-4 p-3 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs font-semibold">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject / Inquiry Type
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="e.g. Hire for Full Stack Project / AI Integration"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Project Details / Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Describe your project, timeline, or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              {submitted && (
                <div className="p-3.5 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold flex items-center gap-2">
                  <FaCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Thank you! Your message has been stored in the database inbox and I will get back to you shortly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-orange-500 dark:hover:bg-orange-600 px-6 py-3.5 font-bold text-white text-xs sm:text-sm shadow-md shadow-slate-900/10 transition-all duration-150 disabled:opacity-50"
              >
                <FaPaperPlane className="w-3.5 h-3.5" />
                <span>{loading ? 'Sending to Database...' : 'Send Message'}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
