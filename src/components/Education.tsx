'use client';

import { motion } from 'framer-motion';

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
    subtitle: 'HEC-recognized university',
    coursework: [
      'Software Engineering',
      'Project Management',
      'Artificial Intelligence',
      'Computer Networks',
      'Computer Vision',
    ],
  },
  {
    degree: 'ICS (Intermediate in Computer Science)',
    institution: 'Punjab Group of Colleges, Mianwali',
    period: '2018 – 2020',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3K5RYwa4DOEhcMExswKoZoMIo6aEiHsQ-RA&s',
    logoAlt: 'Punjab Group of Colleges',
    subtitle: 'Intermediate level',
  },
];

function EducationCard({ entry, index }: { entry: EducationEntry; index: number }) {
  return (
    <motion.article
      className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Logo & period */}
        <div className="sm:w-56 flex-shrink-0 bg-muted/50 dark:bg-muted/20 p-6 flex flex-col items-center justify-center text-center border-b sm:border-b-0 sm:border-r border-border">
          <div className="w-24 h-24 rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-border flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={entry.logoUrl}
              alt={entry.logoAlt}
              className="w-full h-full object-contain p-1"
            />
          </div>
          <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {entry.period}
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            {entry.degree}
          </h3>
          <p className="mt-2 text-lg font-medium text-emerald-600 dark:text-emerald-400">
            {entry.institution}
          </p>
          {entry.subtitle && (
            <p className="mt-1 text-sm text-muted-foreground">
              {entry.subtitle}
            </p>
          )}

          {entry.coursework && entry.coursework.length > 0 && (
            <>
              <h4 className="mt-6 text-base font-semibold text-foreground">
                Relevant coursework
              </h4>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
                {entry.coursework.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Education() {
  return (
    <section id="education" className="section bg-background text-foreground w-full py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="mt-10 space-y-8">
          {educationList.map((entry, index) => (
            <EducationCard key={entry.institution} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
