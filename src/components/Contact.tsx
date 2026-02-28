'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submission is disabled in this demo. Contact me directly via email or phone.');
  };

  return (
    <section id="contact" className="section bg-background text-foreground w-full py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Get in Touch card */}
          <motion.div
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-foreground">Get in Touch</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Reach out via phone, email, or connect on socials.
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="tel:+923346828900"
                  className="flex items-center gap-3 rounded-lg p-3 text-gray-700 dark:text-gray-300 hover:bg-muted/50 transition-colors group"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50">
                    <FaPhone className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground block">Phone</span>
                    <span className="font-medium">+92-334-6828900</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:abdulrehman2001y@gmail.com"
                  className="flex items-center gap-3 rounded-lg p-3 text-gray-700 dark:text-gray-300 hover:bg-muted/50 transition-colors group"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50">
                    <FaEnvelope className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="text-xs font-medium text-muted-foreground block">Email</span>
                    <span className="font-medium break-all">abdulrehman2001y@gmail.com</span>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3 rounded-lg p-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
                  <FaMapMarkerAlt className="h-4 w-4" />
                </span>
                <div>
                  <span className="text-xs font-medium text-muted-foreground block">Location</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Islamabad / Lahore</span>
                </div>
              </li>
              <li className="flex gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/abdul-rehman-solution-engineer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0A66C2]/10 dark:bg-[#0A66C2]/20 px-4 py-2.5 text-sm font-medium text-[#0A66C2] dark:text-[#6eb3f7] hover:bg-[#0A66C2]/20 dark:hover:bg-[#0A66C2]/30 transition-colors"
                >
                  <FaLinkedin className="h-5 w-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/abdulrehman4702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted/80 dark:hover:bg-emerald-900/30 transition-colors"
                >
                  <FaGithub className="h-5 w-5" />
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Send a Message card */}
          <motion.div
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-foreground">Send a Message</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Drop a line and I&apos;ll get back to you.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1.5">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-600 px-4 py-3 font-semibold text-white shadow-sm hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
