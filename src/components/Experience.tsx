'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { ExperienceCompany } from '../types';

const INITIAL_VISIBLE = 4;

const experiences: ExperienceCompany[] = [
  {
    name: 'Wayout Lab',
    workMode: 'Full-time · On-site',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdOoQSklA2DH-qMP0iuWbhvslolpvNkHLbHw&s',
    positions: [
      {
        title: 'Full Stack Developer',
        period: 'Nov 2025 - Present · 4 mos',
        description:
          'As a Full Stack Developer, I work on designing, developing, and maintaining end-to-end web applications. My responsibilities include building responsive and user-friendly interfaces, developing robust backend services, integrating APIs, and ensuring smooth communication between frontend and backend systems. I collaborate closely with cross-functional teams to deliver scalable features, improve system performance, and contribute to the overall architecture of the product. I also participate in code reviews, debugging, and continuous optimization to ensure high-quality, efficient, and reliable solutions.',
        skills: ['Software Infrastructure', 'Web Technologies', 'Full-Stack Development', 'Node.js'],
      },
    ],
  },
  {
    name: 'airec',
    workMode: 'Full-time · Remote',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mWKCOI_ZFn-p15rrXjjLxV5RJh-NYXyjzg&s',
    positions: [
      {
        title: 'Senior Developer',
        period: 'Feb 2026 - Present · 1 mo',
        location: 'Dover, Delaware, United States',
        description:
          'As a Full Stack Developer, I work across the complete MERN stack to build scalable, responsive and high-quality web applications. My responsibilities include developing dynamic user interfaces using React, creating robust backend services with Node.js & Express, and managing databases using MongoDB. I collaborate closely with teams to deliver clean, efficient code and ensure smooth end-to-end functionality.',
        skills: [
          'Software Development',
          'Software Design',
          'Software Infrastructure',
          'Large Scale Development',
          'Microsoft Development',
        ],
      },
      {
        title: 'Full Stack Developer',
        period: 'Oct 2025 - Feb 2026 · 5 mos',
        location: 'United States',
        description:
          'As a Full Stack Developer, I work across the complete MERN stack to build scalable, responsive and high-quality web applications. My responsibilities include developing dynamic user interfaces using React, creating robust backend services with Node.js & Express, and managing databases using MongoDB. I collaborate closely with teams to deliver clean, efficient code and ensure smooth end-to-end functionality. I focus on performance, UI/UX improvements, API integration, and deploying applications for real-world use.',
        skills: ['Management', 'Front-End Development', 'Full-Stack Development'],
      },
    ],
  },
  {
    name: 'Gitwork',
    workMode: 'Full-time · Hybrid',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbSKeBwtW3xlV_dpD69QM3AIpu0kU1UO1wgA&s',
    positions: [
      {
        title: 'Full Stack Developer',
        period: 'Apr 2025 - Nov 2025 · 8 mos',
        location: 'Islāmābād, Pakistan',
        description: 'Full Stack Developer building web applications with a focus on full-stack development and software delivery.',
        skills: ['Full-Stack Development', 'Software Development', 'Front-End Development', 'Python (Programming Language)'],
      },
      {
        title: 'Solutions Engineer',
        period: 'Jul 2024 - Mar 2025 · 9 mos',
        location: 'Salford, England, United Kingdom',
        description: 'Solutions engineering with focus on problem solving, software development, and IT integration.',
        skills: [
          'Problem Solving',
          'Software Development',
          'Leadership Development',
          'Application Programming Interfaces (API)',
          'IT Integration',
        ],
      },
    ],
  },
  {
    name: 'Phebsoft (Pvt.) Ltd.',
    workMode: 'Full-time · On-site',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUVIOBp-PdQHYeLELbqqObdqsg_Mz9BwNVQ&s',
    positions: [
      {
        title: 'Full Stack Developer',
        period: 'Jul 2024 - Nov 2025 · 1 yr 5 mos',
        location: 'Islāmābād, Pakistan',
        description:
          'I build scalable web applications from front to back. I use React.js for intuitive user interfaces and Flask/Node.js to design efficient, secure APIs. I work with MongoDB and SQL, manage authentication with JWT/OAuth, and ensure reliability through Postman testing and Selenium automation. Passionate about clean code, performance optimization, and seamless user experiences.',
        skills: ['Software Infrastructure', 'Web Technologies', 'Mean Stack', 'Full-Stack Development', 'Node.js'],
      },
    ],
  },
  {
    name: 'Center for Advanced Research in Engineering (CARE)',
    workMode: 'Internship · Hybrid',
    logoUrl: 'https://media.glassdoor.com/sqll/467307/center-for-advanced-research-in-engineering-squarelogo-1424776613488.png',
    positions: [
      {
        title: 'Artificial Intelligence Intern',
        period: 'Feb 2024 - Apr 2024 · 3 mos',
        location: 'Islamabad, Pakistan',
        description:
          'AI Specialist – Image Processing & Computer Vision. Developed and deployed advanced algorithms to analyze and interpret visual data. Applied machine learning and computer vision techniques to solve complex, real-world problems and enhance image-based systems. Optimized performance and accuracy across multiple projects, delivering intelligent visual solutions that improved workflows and decision-making.',
        skills: ['Artificial Intelligence (AI)', 'Machine Learning', 'Image Processing', 'Computer Vision', 'Artificial Neural Networks'],
      },
    ],
  },
  {
    name: 'Punjab Information Technology Board (PITB)',
    workMode: 'Internship · Hybrid',
    logoUrl: 'https://images.seeklogo.com/logo-png/42/2/punjab-information-technology-board-pitb-logo-png_seeklogo-424304.png',
    positions: [
      {
        title: 'Web Developer',
        period: 'May 2023 - Jul 2023 · 3 mos',
        location: 'Lahore, Punjab, Pakistan',
        description: 'Web development internship focusing on responsive design and modern front-end technologies.',
        skills: ['HTML', 'Cascading Style Sheets (CSS)', 'Responsive Web Design', 'React.js', 'JavaScript'],
      },
    ],
  },
];

function CompanyLogo({ company }: { company: ExperienceCompany }) {
  const size = 56;
  if (company.logoUrl) {
    return (
      <div className="relative flex-shrink-0 rounded overflow-hidden bg-muted border border-border" style={{ width: size, height: size }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={company.logoUrl} alt={`${company.name} logo`} width={size} height={size} className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div
      className="flex-shrink-0 rounded overflow-hidden bg-muted border border-border flex items-center justify-center text-muted-foreground text-xs font-medium"
      style={{ width: size, height: size }}
      title="Company logo (upload option)"
    >
      Logo
    </div>
  );
}

function ExperienceCard({
  company,
  isNewlyRevealed,
  companyIndex,
}: {
  company: ExperienceCompany;
  isNewlyRevealed: boolean;
  companyIndex: number;
}) {
  return (
    <motion.li
      initial={isNewlyRevealed ? { opacity: 0, y: 12 } : { opacity: 0, y: 16 }}
      animate={isNewlyRevealed ? { opacity: 1, y: 0 } : undefined}
      whileInView={!isNewlyRevealed ? { opacity: 1, y: 0 } : undefined}
      viewport={!isNewlyRevealed ? { once: true } : undefined}
      transition={
        isNewlyRevealed
          ? { duration: 0.25, delay: (companyIndex - INITIAL_VISIBLE) * 0.06 }
          : { duration: 0.4, delay: companyIndex * 0.08 }
      }
      className="relative flex gap-4 pb-10 last:pb-0"
    >
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: 56 }}>
        <div className="relative z-10 w-3 h-3 rounded-full bg-primary dark:bg-emerald-500 border-2 border-background shadow-sm" aria-hidden />
      </div>
      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-start gap-3">
          <CompanyLogo company={company} />
          <div>
            <h3 className="text-xl font-bold text-foreground">{company.name}</h3>
            <p className="text-sm text-muted-foreground mt-0.5">{company.workMode}</p>
            {company.positions[0]?.location && (
              <p className="text-sm text-muted-foreground mt-0.5">{company.positions[0].location}</p>
            )}
          </div>
        </div>
        <ul className="mt-4 space-y-4 list-none p-0 m-0">
          {company.positions.map((position, positionIndex) => {
            const isFirst = positionIndex === 0;
            const firstLocation = company.positions[0]?.location;
            const showLocation = position.location && position.location !== firstLocation;
            return (
              <li key={`${company.name}-${position.title}-${positionIndex}`} className="relative pl-4 border-l-0">
                <div className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                <h4 className="text-base font-semibold text-primary dark:text-emerald-400">{position.title}</h4>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {position.period}
                  {showLocation && ` · ${position.location}`}
                </p>
                {isFirst && position.description && (
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-left">{position.description}</p>
                )}
                {position.skills.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2 text-left">
                    <span className="text-xs font-medium text-muted-foreground">Skills:</span>
                    {position.skills.map((skill) => (
                      <span key={skill} className="inline-flex items-center rounded-md bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.li>
  );
}

export default function Experience() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const visibleExperiences = showAllExperience ? experiences : experiences.slice(0, INITIAL_VISIBLE);
  const hasMore = experiences.length > INITIAL_VISIBLE && !showAllExperience;

  return (
    <section id="experience" className="section bg-background text-foreground w-full py-16">
      <div className="container text-left">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="mt-10 max-w-4xl relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-border" aria-hidden />

          <ul className="space-y-0 list-none p-0 m-0">
            {visibleExperiences.map((company, companyIndex) => (
              <ExperienceCard
                key={company.name}
                company={company}
                isNewlyRevealed={showAllExperience && companyIndex >= INITIAL_VISIBLE}
                companyIndex={companyIndex}
              />
            ))}
            {hasMore && (
              <li className="relative flex gap-4 pb-10">
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: 56 }}>
                  <div className="relative z-10 w-3 h-3 rounded-full border-2 border-dashed border-emerald-400/60 dark:border-emerald-500/60 bg-background" aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <button
                    type="button"
                    onClick={() => setShowAllExperience(true)}
                    className="w-full rounded-xl border-2 border-dashed border-emerald-400/60 dark:border-emerald-500/60 bg-emerald-50/80 dark:bg-emerald-950/30 hover:bg-emerald-100/80 dark:hover:bg-emerald-900/30 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-200 py-6 px-6 flex items-center justify-center gap-2 group"
                  >
                    <span className="text-base font-semibold text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-800 dark:group-hover:text-emerald-300">
                      Show more
                    </span>
                    <ChevronDown className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
