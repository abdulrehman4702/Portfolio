'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  FaArrowRight,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaExpand,
  FaTimes,
  FaCode,
  FaPalette,
  FaGamepad,
  FaLaptopCode,
} from 'react-icons/fa';

const techBadges = [
  { label: 'MERN Stack', icon: FaLaptopCode, color: 'text-rose-500' },
  { label: 'C++ · C# · SQL', icon: FaCode, color: 'text-pink-500' },
  { label: 'Graphic Design', icon: FaPalette, color: 'text-rose-400' },
  { label: 'Gaming & Animation', icon: FaGamepad, color: 'text-pink-400' },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Hero() {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full overflow-x-clip pt-16 sm:pt-18 lg:pt-20 pb-3 sm:pb-4 lg:pb-5 min-h-[100dvh] lg:h-screen lg:max-h-[1080px] flex flex-col justify-between"
    >
      <div
        className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 w-full max-w-[1500px] h-[50vh] max-h-[500px] bg-gradient-to-b from-slate-300/40 via-rose-200/20 to-transparent dark:from-rose-500/15 dark:via-pink-500/10 dark:to-transparent blur-[80px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 top-24 w-72 h-72 rounded-full bg-slate-200/50 dark:bg-rose-500/10 blur-[80px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-40 w-72 h-72 rounded-full bg-rose-100/40 dark:bg-pink-500/10 blur-[80px] -z-10"
        aria-hidden="true"
      />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 relative z-10 flex-1 flex flex-col justify-between gap-2.5 sm:gap-3.5 lg:gap-4 min-h-0">
        <div className="relative flex-1 flex items-center justify-center min-h-[200px] sm:min-h-[260px] lg:min-h-[300px] max-h-[46vh] my-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full flex items-center justify-center select-none pointer-events-none z-0 px-2 sm:px-4"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1000 140"
              className="w-full h-auto max-h-[36vh] overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              <text
                x="500"
                y="85"
                textAnchor="middle"
                dominantBaseline="middle"
                textLength="970"
                lengthAdjust="spacingAndGlyphs"
                className="font-black uppercase tracking-wide transition-colors duration-300 fill-slate-300 dark:fill-slate-800"
                style={{
                  fontWeight: 900,
                  fontSize: '120px',
                }}
              >
                HAMAYAL
              </text>
            </svg>
          </motion.div>

          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:flex justify-between w-full max-w-7xl mx-auto px-4 z-20">
            <motion.div
              initial={{ opacity: 0, x: -35, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/5 max-w-[190px]"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-500">
                  <FaLaptopCode className="w-3 h-3" />
                </span>
                <span>MERN Stack</span>
              </div>
              <p className="text-[10.5px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                Full-stack apps with MongoDB, Express, React &amp; Node.js.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/5 max-w-[190px] text-right"
            >
              <div className="flex items-center justify-end gap-2 text-xs font-bold text-slate-900 dark:text-white">
                <span>Code + Games</span>
                <span className="p-1.5 rounded-lg bg-pink-500/10 text-pink-500">
                  <FaGamepad className="w-3 h-3" />
                </span>
              </div>
              <p className="text-[10.5px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                C++, C#, and interactive game prototypes under the hood.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 h-full flex flex-col items-center justify-end"
          >
            <div
              className="relative group cursor-pointer h-full flex items-end justify-center"
              onClick={() => setIsPhotoModalOpen(true)}
              title="Click to expand photo"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-b from-rose-300/35 via-pink-200/20 to-transparent dark:from-rose-500/25 dark:via-pink-500/15 dark:to-transparent blur-2xl group-hover:scale-110 transition-transform duration-500 -z-10"
              />

              <div className="relative h-[220px] xs:h-[260px] sm:h-[310px] md:h-[360px] lg:h-[min(44vh,400px)] xl:h-[min(46vh,430px)] w-auto aspect-[3/4] flex items-end justify-center transition-transform duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1">
                <Image
                  src="/images/profile-transparent.webp"
                  alt="Hamayal Ansari - Full-Stack Web Developer & BS CS Student"
                  width={360}
                  height={480}
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 45vw, 360px"
                  className="relative z-[1] w-full h-full object-cover object-top rounded-2xl"
                  style={{
                    filter:
                      'drop-shadow(0 18px 28px rgba(0, 0, 0, 0.35)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.18))',
                  }}
                />

                <div className="absolute top-3 right-3 z-[2] p-2 rounded-full bg-slate-900/80 dark:bg-black/80 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <FaExpand className="w-3 h-3" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.08 }}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 z-20 shrink-0 select-none"
        >
          {techBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-xs backdrop-blur-md"
              >
                <Icon className={`w-3 h-3 ${badge.color}`} />
                <span>{badge.label}</span>
              </span>
            );
          })}
        </motion.div>

        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-3 sm:gap-4 z-20 shrink-0 text-center md:text-left">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2.5"
          >
            <a
              href="https://www.linkedin.com/in/hamayal-ansari-a12b10371/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2] border border-[#0A66C2]/30 hover:border-[#0A66C2] text-[#0A66C2] hover:text-white shadow-sm hover:shadow-md transition-all duration-200 text-xs font-bold active:scale-95"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/hamayalansari"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-black dark:hover:bg-white/20 border border-slate-800 dark:border-white/20 text-white shadow-sm hover:shadow-md transition-all duration-200 text-xs font-bold active:scale-95"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="mailto:hamayalansari10@gmail.com"
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-600 border border-rose-200 hover:border-rose-600 text-rose-700 dark:bg-rose-500/10 dark:border-rose-500/30 dark:text-rose-400 dark:hover:bg-rose-500 dark:hover:border-rose-500 hover:text-white dark:hover:text-white shadow-sm hover:shadow-md transition-all duration-200 text-xs font-bold active:scale-95"
              aria-label="Email Hamayal Ansari"
            >
              <FaEnvelope className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>

            <a
              href="https://wa.me/923284024706"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 dark:bg-gradient-to-r dark:from-rose-500 dark:to-pink-500 dark:hover:from-rose-600 dark:hover:to-pink-600 text-white font-bold text-xs shadow-md shadow-rose-600/25 hover:shadow-lg hover:shadow-rose-600/30 transition-all duration-200 active:scale-95"
            >
              <FaWhatsapp className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.12 }}
            className="text-center md:text-right"
          >
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-rose-700 dark:text-rose-400 mb-1">
              BS CS Student · UET Lahore · Open to work
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white leading-none">
              Full-Stack Web
            </h2>
            <p className="text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-pink-400 mt-1">
              Developer &amp; Designer
            </p>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.14 }}
          className="pt-2.5 sm:pt-3 border-t border-slate-200/80 dark:border-slate-800/80 text-center md:text-left z-20 flex flex-col lg:flex-row items-center justify-between gap-2.5 sm:gap-3 lg:gap-6 shrink-0"
        >
          <div className="max-w-5xl space-y-1">
            <p className="text-[11px] sm:text-xs md:text-[13px] lg:text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
              Passionate about{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">
                C++, web development, gaming &amp; animation
              </strong>
              — combining technical skills with creativity to build interactive projects. Continuously
              improving in problem solving, DSA, and software development from Lahore, Pakistan.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                MERN · C++ · C# · SQL
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                Graphic Design
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                Lahore, Pakistan
              </span>
            </div>
          </div>

          <a
            href="#projects"
            className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold text-white shadow-md shadow-rose-600/25 dark:shadow-rose-500/20 transition-all hover:scale-[1.02]"
          >
            <span>View Work</span>
            <FaArrowRight className="h-3 w-3" />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {isPhotoModalOpen && (
          <motion.div
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPhotoModalOpen(false)}
          >
            <motion.div
              className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-sm sm:max-w-md w-full shadow-2xl text-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsPhotoModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="w-4 h-4" />
              </button>

              <div className="relative w-52 h-64 sm:w-56 sm:h-72 mx-auto rounded-2xl overflow-hidden mt-2 shadow-lg">
                <Image
                  src="/images/profile-transparent.webp"
                  alt="Hamayal Ansari"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              <h3 className="mt-4 text-xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                Hamayal Ansari
              </h3>
              <p className="text-xs text-rose-600 dark:text-rose-400 font-semibold mt-1">
                Full-Stack Web Developer · BS CS Student
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-3">
                <a
                  href="https://wa.me/923284024706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold transition-colors"
                >
                  WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setIsPhotoModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
