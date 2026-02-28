"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLink } from "react-icons/fa";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section
      id="hero"
      className="section bg-background text-foreground w-full py-16"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {/* Left: Profile card */}
          <motion.aside
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full min-h-0 bg-white dark:bg-gray-800/50 rounded-2xl border border-border p-6 shadow-lg sticky top-24 flex flex-col">
              <div className="flex flex-col items-center text-center">
                <button type="button" onClick={toggleModal} className="rounded-full overflow-hidden border-4 border-emerald-200 dark:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <Image
                    src="/images/profile.jpg"
                    alt="Abdur Rehman Profile"
                    width={160}
                    height={160}
                    className="w-40 h-40 object-cover"
                    priority
                  />
                </button>
                <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                  Abdur Rehman
                </h1>
                <p className="mt-1 text-lg text-emerald-600 dark:text-emerald-400 font-medium">
                  Full Stack Developer (MERN)
                </p>
                <div className="mt-3 flex items-center justify-center gap-2">
                  <Image
                    src="/images/logo.png"
                    alt="VisionGrid Logo"
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain"
                    quality={100}
                  />
                  <span className="text-sm text-muted-foreground">
                    Founder, VisionGrid
                  </span>
                  <Link
                    href="https://vision-grid.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-emerald-500 transition"
                    aria-label="VisionGrid website"
                  >
                    <FaLink className="w-4 h-4" />
                  </Link>
                </div>
                <p className="mt-2 text-sm text-muted-foreground italic">
                  &ldquo;Your Vision, Our Code&rdquo;
                </p>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  Building scalable solutions with AI, automation, and modern web technologies.
                </p>
                <a
                  href="https://drive.google.com/uc?export=download&id=1OMY0pd1TvHg-iPz3i8gBYimSlInjjN6L"
                  download="Abdur_Rehman_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex justify-center items-center bg-emerald-600 text-white py-2.5 px-5 rounded-lg hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition font-medium"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.aside>

          {/* Right: About content — single professional paragraph, same height as profile card */}
          <motion.div
            className="lg:col-span-2 h-full flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="h-full bg-white dark:bg-gray-800/50 rounded-2xl border border-border p-6 sm:p-8 shadow-lg flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                I&apos;m a Full Stack Developer and Solution Engineer with hands-on experience across the MERN stack, AI-driven products, and cloud deployment on GCP. I&apos;ve built and shipped production apps for international clients—including <span className="font-semibold text-emerald-700 dark:text-emerald-400">Mansha Transport</span> in the Gulf region—and product companies such as <span className="font-semibold text-emerald-700 dark:text-emerald-400">Airec</span>, <span className="font-semibold text-emerald-700 dark:text-emerald-400">Talent Sync IQ</span>, and <span className="font-semibold text-emerald-700 dark:text-emerald-400">Unsh</span>. I work with React, Next.js, Node.js, MongoDB, and TypeScript, and I&apos;m comfortable with Flask for ML pipelines and real-time systems. My focus is on scalable back-ends, clean APIs, and accessible front-ends that meet both user and business goals. I have experience integrating AI/ML into assessment and recruitment platforms, and a background in computer vision and data-driven applications from research and internships. I deploy and maintain systems on GCP and value API design, testing, and DevOps practices. I&apos;ve led and mentored developers, run agile delivery, and worked in remote and hybrid setups with cross-functional teams. Beyond work, I build tools like <span className="font-semibold text-emerald-700 dark:text-emerald-400">Easier Flow</span>—a no-code automation platform with AI-driven workflow suggestions—and I&apos;m interested in automation, developer tools, and making complex systems simple for users.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Profile image modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg p-4 relative max-w-sm w-full mx-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end absolute top-2 right-2">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <Image
                src="/images/profile.jpg"
                alt="Abdur Rehman Profile"
                width={300}
                height={300}
                className="rounded-full w-64 h-64 mx-auto border-4 border-emerald-200 dark:border-emerald-600 object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
