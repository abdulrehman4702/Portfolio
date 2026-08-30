'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaCheck,
  FaArrowRight,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaCode,
  FaTerminal,
  FaLaptopCode,
  FaRocket,
  FaEnvelope,
  FaServer,
} from 'react-icons/fa';

export default function Hero() {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'profile' | 'skills' | 'cloud'>('profile');

  return (
    <section id="hero" className="relative overflow-x-clip pt-24 sm:pt-28 md:pt-32 pb-16 lg:pb-24">
      {/* Subtle Floating Color Accents */}
      <div className="pointer-events-none absolute left-[8%] top-32 hidden h-3 w-3 rotate-12 rounded-sm bg-orange-400/80 sm:block" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[10%] top-40 hidden h-2.5 w-2.5 -rotate-6 rounded-sm bg-teal-400/70 lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-20 left-[15%] hidden h-2 w-2 rotate-45 rounded-sm bg-amber-400/80 sm:block" aria-hidden="true" />

      {/* Atmospheric Mesh Glows */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-orange-200/20 via-transparent to-teal-200/20 dark:from-orange-500/10 dark:to-teal-500/10 blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          
          {/* Left: Abdur Rehman Personal Intro */}
          <div className="flex flex-col justify-start lg:col-span-6 lg:pt-2">
            {/* Top Pill Tag */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-teal-50 dark:bg-teal-950/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 ring-1 ring-teal-200/80 dark:ring-teal-800">
                Full-Stack Developer (MERN) &amp; Solution Engineer
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 dark:bg-orange-950/40 px-2.5 py-1 text-[11px] font-semibold text-orange-700 dark:text-orange-300 ring-1 ring-orange-200 dark:ring-orange-800/60">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                VisionGrid Founder
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] tracking-tight text-slate-900 dark:text-white">
              Hi, I&apos;m Abdur Rehman. <br />
              <span className="text-orange-500">I Build Scalable Web Apps</span> &amp; <span className="text-teal-600 dark:text-teal-400">AI Solutions.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              A passionate Full Stack Engineer with extensive experience developing production web applications across the <strong className="font-semibold text-slate-900 dark:text-white">MERN stack, Next.js, and GCP Cloud Architecture</strong>. I build clean, high-performance backends, modern interactive frontends, and intelligent AI workflows.
            </p>

            {/* Capabilities Checklist Grid */}
            <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
              {[
                'Full Stack MERN & Next.js 14',
                'AI/ML Model & Agent Integration',
                'Clean REST & WebSocket APIs',
                'Cloud Architecture & GCP Deployment',
                'Enterprise Client Solutions',
                'Microservices & Database Design',
              ].map((cap) => (
                <li key={cap} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300">
                    <FaCheck className="h-2.5 w-2.5" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                    {cap}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-orange-500 dark:hover:bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 dark:shadow-orange-500/20 transition-colors"
              >
                <span>View My Work</span>
                <FaArrowRight className="h-3.5 w-3.5" />
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80 px-5 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-colors"
              >
                <FaFileDownload className="h-3.5 w-3.5 text-orange-500" />
                <span>View CV</span>
              </a>
            </div>

            {/* Quick Profile Snippet & Socials */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPhotoModalOpen(true)}
                  className="relative rounded-full overflow-hidden border-2 border-orange-400 focus:outline-none"
                  title="View Profile Photo"
                >
                  <Image
                    src="/images/profile.jpg"
                    alt="Abdur Rehman"
                    width={44}
                    height={44}
                    className="w-11 h-11 object-cover"
                  />
                </button>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Abdur Rehman</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Islamabad, Pakistan · Open to Remote</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/abdul-rehman-solution-engineer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-[#0A66C2] text-slate-600 dark:text-slate-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/abdulrehman4702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-slate-950 dark:hover:text-white text-slate-600 dark:text-slate-300 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="mailto:abdulrehman2001y@gmail.com"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-orange-600 text-slate-600 dark:text-slate-300 transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Developer IDE / Profile Console */}
          <div className="relative w-full min-w-0 lg:col-span-6">
            <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-orange-200/30 via-transparent to-teal-200/30 blur-2xl dark:from-orange-500/10 dark:to-teal-500/10" aria-hidden="true" />
            
            <div className="relative rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl shadow-slate-400/20 dark:shadow-black/50 ring-1 ring-orange-500/10 overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-slate-50 via-white to-orange-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 px-3.5 py-2.5 sm:px-4">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>

                <div className="flex items-center gap-2">
                  <FaTerminal className="w-3 h-3 text-orange-500" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    abdur-rehman.config.ts
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online
                </span>
              </div>

              {/* Window Main Shell */}
              <div className="flex h-[380px] sm:h-[420px] overflow-hidden">
                {/* Left Mini Sidebar */}
                <nav className="flex h-full w-12 sm:w-14 shrink-0 flex-col items-center gap-2 border-r border-slate-100 dark:border-slate-800 bg-slate-900 py-3.5">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-md shadow-orange-500/40 text-white font-bold text-xs">
                    AR
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => setActiveCodeTab('profile')}
                    className={`p-2 rounded-xl transition-colors ${
                      activeCodeTab === 'profile'
                        ? 'bg-white/15 text-orange-300'
                        : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                    }`}
                    title="Developer Profile"
                  >
                    <FaLaptopCode className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveCodeTab('skills')}
                    className={`p-2 rounded-xl transition-colors ${
                      activeCodeTab === 'skills'
                        ? 'bg-white/15 text-orange-300'
                        : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                    }`}
                    title="Core Tech Stack"
                  >
                    <FaCode className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveCodeTab('cloud')}
                    className={`p-2 rounded-xl transition-colors ${
                      activeCodeTab === 'cloud'
                        ? 'bg-white/15 text-orange-300'
                        : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                    }`}
                    title="Production Highlights"
                  >
                    <FaServer className="w-4 h-4" />
                  </button>
                </nav>

                {/* Right Interactive Code / Profile Area */}
                <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden bg-slate-950 text-slate-200 font-mono p-3.5 sm:p-4 text-xs">
                  
                  {activeCodeTab === 'profile' && (
                    <div className="space-y-2 overflow-y-auto leading-relaxed">
                      <div className="text-slate-500">{'// Personal developer profile'}</div>
                      <div>
                        <span className="text-purple-400">const</span> <span className="text-amber-300">developer</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-teal-400">name</span>: <span className="text-orange-300">&apos;Abdur Rehman&apos;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-teal-400">role</span>: <span className="text-orange-300">&apos;Full Stack &amp; Solution Engineer&apos;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-teal-400">experience</span>: <span className="text-orange-300">&apos;2+ Years Production Delivery&apos;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-teal-400">education</span>: <span className="text-orange-300">&apos;BS Software Engineering (CASE)&apos;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-teal-400">venture</span>: <span className="text-orange-300">&apos;Founder @ VisionGrid&apos;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-teal-400">passions</span>: [<span className="text-orange-300">&apos;AI Agents&apos;</span>, <span className="text-orange-300">&apos;SaaS Architecture&apos;</span>, <span className="text-orange-300">&apos;Web Performance&apos;</span>],
                      </div>
                      <div>&#125;;</div>

                      <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 font-sans">
                        <p className="text-[11px] font-bold text-orange-400">✨ Highlights:</p>
                        <p className="text-[11px] text-slate-300 mt-1">
                          Shipped multi-tenant enterprise platforms, Gulf logistics solutions, and AI recruitment systems with GCP deployments.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeCodeTab === 'skills' && (
                    <div className="space-y-2 overflow-y-auto leading-relaxed">
                      <div className="text-slate-500">{'// Core technical capabilities'}</div>
                      <div>
                        <span className="text-purple-400">export const</span> <span className="text-amber-300">techStack</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-teal-400">frontend</span>: [<span className="text-orange-300">&apos;React.js&apos;</span>, <span className="text-orange-300">&apos;Next.js 14&apos;</span>, <span className="text-orange-300">&apos;TypeScript&apos;</span>, <span className="text-orange-300">&apos;Tailwind&apos;</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-teal-400">backend</span>: [<span className="text-orange-300">&apos;Node.js&apos;</span>, <span className="text-orange-300">&apos;Express&apos;</span>, <span className="text-orange-300">&apos;Python / Flask&apos;</span>, <span className="text-orange-300">&apos;REST APIs&apos;</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-teal-400">database</span>: [<span className="text-orange-300">&apos;MongoDB&apos;</span>, <span className="text-orange-300">&apos;PostgreSQL&apos;</span>, <span className="text-orange-300">&apos;MySQL&apos;</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-teal-400">ai_ml</span>: [<span className="text-orange-300">&apos;LLM Integration&apos;</span>, <span className="text-orange-300">&apos;Computer Vision (YOLO)&apos;</span>, <span className="text-orange-300">&apos;Automation&apos;</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-teal-400">cloud</span>: [<span className="text-orange-300">&apos;Google Cloud (GCP)&apos;</span>, <span className="text-orange-300">&apos;Docker&apos;</span>, <span className="text-orange-300">&apos;CI/CD&apos;</span>],
                      </div>
                      <div>&#125;;</div>
                    </div>
                  )}

                  {activeCodeTab === 'cloud' && (
                    <div className="space-y-3 overflow-y-auto font-sans">
                      <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                        <span className="font-bold text-white">Production Deliverables</span>
                        <span className="text-teal-400 font-mono text-[10px]">Verified</span>
                      </div>

                      <div className="space-y-2">
                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                          <p className="text-xs font-bold text-white">Enterprise &amp; Client Platforms</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">Mansha Transport (Gulf Region), Unsh Handmade, Freeway X Uber (UK)</p>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                          <p className="text-xs font-bold text-white">AI &amp; Automation Platforms</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">TalentSync IQ (Workforce OS), Airec (AI Recruitment), Easier Flow (No-Code)</p>
                        </div>
                      </div>

                      <div className="p-2 rounded-lg bg-orange-950/40 border border-orange-800/40 text-[10px] text-orange-300">
                        ⚡ Focus on clean architecture, resilient APIs, and seamless user experiences.
                      </div>
                    </div>
                  )}

                  {/* Bottom Console Status */}
                  <div className="mt-auto pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500 font-sans">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      Status: Ready for New Challenges
                    </span>
                    <span className="text-slate-400">TypeScript · UTF-8</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Photo Modal */}
      <AnimatePresence>
        {isPhotoModalOpen && (
          <motion.div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPhotoModalOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 relative max-w-xs w-full shadow-2xl border border-slate-200 dark:border-slate-800 text-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/images/profile.jpg"
                alt="Abdur Rehman"
                width={260}
                height={260}
                className="rounded-2xl w-56 h-56 mx-auto object-cover border-4 border-orange-500/40 shadow-lg"
              />
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">Abdur Rehman</h3>
              <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold">
                Full Stack Developer &amp; Solution Engineer
              </p>
              <button
                type="button"
                onClick={() => setIsPhotoModalOpen(false)}
                className="mt-4 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
