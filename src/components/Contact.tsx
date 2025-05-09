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
    // Note: Form submission is disabled due to sandbox restrictions.
    // In a production environment, integrate with an API or email service.
    alert('Form submission is disabled in this demo. Contact me directly via email or phone.');
  };

  return (
    <section id="contact" className="section bg-background text-foreground w-full py-16">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-400">Get in Touch</h3>
            <ul className="mt-4 space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-emerald-600 dark:text-emerald-400" />
                <span> <a href="tel:+92-334-6828900" className="hover:text-emerald-600 dark:hover:text-emerald-400">+92-334-6828900</a></span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-emerald-600 dark:text-emerald-400" />
                <span> <a href="mailto:abdulrehman2001y@gmail.com" className="hover:text-emerald-600 dark:hover:text-emerald-400">abdulrehman2001y@gmail.com</a></span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-emerald-600 dark:text-emerald-400" />
                <span>Islamabad / Lahore</span>
              </li>
              <li className="flex items-center space-x-2">
              <FaLinkedin className="text-emerald-600 dark:text-emerald-400" />
                <span> <a href="https://www.linkedin.com/in/abdul-rehman-solution-engineer/" className="hover:text-emerald-600 dark:hover:text-emerald-400" target="_blank">LinkedIn</a></span>
              </li>
              <li className="flex items-center space-x-2">
              <FaGithub className="text-emerald-600 dark:text-emerald-400" />
                <span> <a href="https://github.com/abdulrehman4702" className="hover:text-emerald-600 dark:hover:text-emerald-400" target="_blank">GitHub</a></span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-400">Send a Message</h3>
            <div className="mt-4 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 h-32 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-500 transition"
              >
                Submit
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}