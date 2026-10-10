'use client';

import { FaPaperPlane, FaCheck, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Portfolio Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = [
      formData.message,
      '',
      `— ${formData.name}`,
      formData.email,
    ].join('\n');

    const mailto = `mailto:hamayalansari10@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const whatsappHref = (() => {
    const text = [
      `Hi Hamayal, I'm ${formData.name || '...'}`,
      formData.subject ? `Subject: ${formData.subject}` : '',
      formData.message || '',
    ]
      .filter(Boolean)
      .join('\n');
    return `https://wa.me/923284024706?text=${encodeURIComponent(text)}`;
  })();

  return (
    <div className="lg:col-span-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm shadow-slate-900/[0.04]">
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Send a Message</h3>
      <p className="mt-1 text-xs text-slate-500">
        Fill the form — it opens your email app. Or message me on WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5"
          >
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
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5"
          >
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
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Subject / Inquiry Type
          </label>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            placeholder="e.g. Hire for Full Stack Project"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5"
          >
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
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        {submitted && (
          <div className="p-3.5 rounded-2xl bg-pink-50 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800 text-pink-800 dark:text-pink-300 text-xs font-semibold flex items-center gap-2">
            <FaCheck className="w-4 h-4 text-pink-600 flex-shrink-0" />
            <span>Opening your email app — send when ready, or use WhatsApp below.</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 px-6 py-3.5 font-bold text-white text-xs sm:text-sm shadow-md shadow-rose-600/20 transition-all duration-150"
          >
            <FaPaperPlane className="w-3.5 h-3.5" />
            <span>Open Email</span>
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 hover:border-green-500/50 px-6 py-3.5 font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm transition-all"
          >
            <FaWhatsapp className="w-3.5 h-3.5 text-green-600" />
            <span>WhatsApp</span>
          </a>
        </div>
      </form>
    </div>
  );
}
