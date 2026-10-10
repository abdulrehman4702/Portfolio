'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Award, MapPin } from 'lucide-react';

interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  detail: string;
  badge?: string;
  focus?: string[];
  logo?: string;
  logoAlt?: string;
}

const educationList: EducationEntry[] = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University of Engineering and Technology, Lahore',
    period: 'Pursuing',
    detail:
      'Focused interest in programming, web development, gaming & animation. Building strong technical and analytical skills with a commitment to continuous learning.',
    badge: 'Gaming & Animation',
    focus: ['Programming', 'Web Development', 'Gaming & Animation', 'DSA'],
    logo: '/images/education/uet.webp',
    logoAlt: 'University of Engineering and Technology, Lahore logo',
  },
  {
    degree: 'Intermediate — ICS',
    institution: 'Lahore College for Women University',
    period: 'Completed',
    detail: 'Intermediate in Computer Science with a strong academic foundation.',
    badge: 'Grade: A+',
    focus: ['Computer Science', 'Mathematics', 'Analytical Skills'],
    logo: '/images/education/lcwu.webp',
    logoAlt: 'Lahore College for Women University logo',
  },
];

const topSkills = [
  'Web Development',
  'Game Development',
  'C++ Programming',
  'MERN Stack',
  'C#',
  'SQL',
  'Graphic Design',
  'Project Management',
  'Creativity & Innovation',
  'DSA & Problem Solving',
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-x-clip w-full py-20 sm:py-24 lg:py-28 border-t border-slate-200 dark:border-slate-800/70 bg-white dark:bg-slate-950"
    >
      <div
        className="pointer-events-none absolute -right-24 top-24 w-72 h-72 rounded-full bg-slate-200/70 dark:bg-pink-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-24 w-72 h-72 rounded-full bg-slate-100 dark:bg-rose-500/10 blur-3xl"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-rose-700 dark:text-rose-400 mb-4">
            <span className="h-px w-6 bg-rose-500/50 dark:bg-rose-400/70" aria-hidden />
            Education
            <span className="h-px w-6 bg-rose-500/50 dark:bg-rose-400/70" aria-hidden />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Academic background
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Building a strong foundation in computer science while growing as a full-stack developer.
          </p>
        </motion.div>

        <div className="space-y-5 sm:space-y-6 mb-12">
          {educationList.map((entry, index) => (
            <motion.article
              key={entry.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/70 overflow-hidden shadow-sm shadow-slate-900/[0.04] hover:border-rose-300 dark:hover:border-rose-500/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-48 flex-shrink-0 bg-white dark:bg-slate-900 p-5 sm:p-6 flex flex-col items-center justify-center text-center border-b sm:border-b-0 sm:border-r border-slate-200 dark:border-slate-800">
                  {entry.logo ? (
                    <div className="relative h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] rounded-2xl overflow-hidden bg-black border border-slate-200 dark:border-slate-700 shadow-sm">
                      <Image
                        src={entry.logo}
                        alt={entry.logoAlt || entry.institution}
                        fill
                        unoptimized
                        sizes="72px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-600 dark:bg-gradient-to-br dark:from-rose-500 dark:to-pink-500 text-white shadow-md shadow-rose-600/20">
                      <GraduationCap className="h-7 w-7" strokeWidth={2} />
                    </span>
                  )}
                  <span className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {entry.period}
                  </span>
                  {entry.badge && (
                    <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 dark:text-rose-400">
                      <Award className="h-3 w-3" />
                      {entry.badge}
                    </span>
                  )}
                </div>

                <div className="flex-1 p-5 sm:p-7 md:p-8">
                  <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {entry.degree}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-rose-700 dark:text-rose-400">
                    {entry.institution}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="h-3 w-3" />
                    Lahore, Punjab, Pakistan
                  </p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {entry.detail}
                  </p>
                  {entry.focus && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.focus.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-lg bg-white dark:bg-slate-800 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300 ring-1 ring-slate-200 dark:ring-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-[1.75rem] border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8"
        >
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-900 dark:text-white mb-4">
            Top skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {topSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-rose-300 dark:hover:border-rose-500/40 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
