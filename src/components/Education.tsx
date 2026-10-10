'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  logoUrl: string;
  logoAlt: string;
  subtitle?: string;
  coursework?: string[];
}

const educationList: EducationEntry[] = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Sir Syed CASE Institute of Technology',
    period: '2020 – 2024',
    logoUrl: 'https://www.hec.gov.pk/english/universities/PublishingImages/Sir%20Syed%20Case%20Institute.jpg',
    logoAlt: 'Sir Syed CASE Institute of Technology',
    subtitle: 'HEC-Recognized University · Top Academic Track',
    coursework: [
      'Software Engineering & Design',
      'Artificial Intelligence & Deep Learning',
      'Computer Vision & Pattern Recognition',
      'Advanced Database Management',
      'Distributed Systems & Networks',
      'Agile Project Management',
    ],
  },
  {
    degree: 'ICS (Intermediate in Computer Science)',
    institution: 'Punjab Group of Colleges, Mianwali',
    period: '2018 – 2020',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3K5RYwa4DOEhcMExswKoZoMIo6aEiHsQ-RA&s',
    logoAlt: 'Punjab Group of Colleges',
    subtitle: 'Intermediate Level · Mathematics & Computer Science',
  },
];

function EducationCard({ entry, index }: { entry: EducationEntry; index: number }) {
  return (
    <motion.article
      className="rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-lg hover:border-orange-400/60 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col sm:flex-row items-stretch">
        {/* Logo & period */}
        <div className="sm:w-56 flex-shrink-0 bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-6 flex flex-col items-center justify-center text-center border-b sm:border-b-0 sm:border-r border-slate-200/80 dark:border-slate-800">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={entry.logoUrl}
              alt={entry.logoAlt}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
            <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
            {entry.period}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 sm:p-7 md:p-8 flex flex-col justify-center">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            {entry.degree}
          </h3>
          <p className="mt-1 text-xs sm:text-sm font-semibold text-orange-600 dark:text-orange-400">
            {entry.institution}
          </p>
          {entry.subtitle && (
            <p className="mt-0.5 text-[11px] sm:text-xs text-slate-500">
              {entry.subtitle}
            </p>
          )}

          {entry.coursework && entry.coursework.length > 0 && (
            <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2.5">
                <Award className="w-3.5 h-3.5 text-orange-500" />
                Key Coursework &amp; Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-600 dark:text-slate-300">
                {entry.coursework.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Education() {
  return (
    <section id="education" className="section bg-white dark:bg-slate-900/40 text-foreground w-full py-16 sm:py-20 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center rounded-full bg-teal-50 dark:bg-teal-950/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 ring-1 ring-teal-200/80 dark:ring-teal-800 mb-3">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education &amp; Qualifications
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300">
            Formal degrees and software engineering specialization.
          </p>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {educationList.map((entry, index) => (
            <EducationCard key={entry.institution} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
