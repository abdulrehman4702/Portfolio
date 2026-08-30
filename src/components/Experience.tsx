'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Briefcase } from 'lucide-react';
import type { ExperienceCompany } from '../types';

const INITIAL_VISIBLE = 3;

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
          'Designing, developing, and maintaining scalable end-to-end web applications. Responsibilities include building responsive UI architectures, developing robust backend microservices, integrating external and AI APIs, conducting code reviews, and optimizing continuous deployment pipelines.',
        skills: ['Full-Stack Development', 'React.js', 'Node.js', 'MongoDB', 'System Architecture', 'GCP'],
      },
    ],
  },
  {
    name: 'Airec',
    workMode: 'Full-time · Remote',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mWKCOI_ZFn-p15rrXjjLxV5RJh-NYXyjzg&s',
    positions: [
      {
        title: 'Senior Developer',
        period: 'Feb 2026 - Present · 1 mo',
        location: 'Dover, Delaware, United States',
        description:
          'Spearheading core architectural enhancements across the MERN stack for Airec’s recruitment automation platform. Designing real-time collaboration engines, AI assessment scoring pipelines, and enterprise-grade data structures.',
        skills: ['Large Scale Systems', 'AI Scoring Pipelines', 'React.js', 'Node.js', 'MongoDB', 'Cloud Infrastructure'],
      },
      {
        title: 'Full Stack Developer',
        period: 'Oct 2025 - Feb 2026 · 5 mos',
        location: 'United States (Remote)',
        description:
          'Engineered dynamic applicant tracking funnels, automated notification systems, and responsive candidate portals. Improved web app responsiveness and streamlined API response times.',
        skills: ['Front-End Development', 'Full-Stack Development', 'REST APIs', 'UI/UX Performance'],
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
        description: 'Delivered mission-critical web applications with end-to-end full-stack development, responsive interfaces, and high-performance server logic.',
        skills: ['Full-Stack Development', 'React.js', 'Node.js', 'Python', 'Web Performance'],
      },
      {
        title: 'Solutions Engineer',
        period: 'Jul 2024 - Mar 2025 · 9 mos',
        location: 'Salford, England, United Kingdom',
        description: 'Engineered custom client solutions, integrated enterprise APIs, led system architectural reviews, and solved cross-platform technical challenges.',
        skills: [
          'Solution Architecture',
          'API Integrations',
          'Client Consulting',
          'IT Infrastructure',
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
          'Built end-to-end full stack web platforms utilizing React.js, Node.js, and Flask. Implemented secure JWT/OAuth authentication systems, optimized database queries in MongoDB and SQL, and enforced rigorous API testing using Postman.',
        skills: ['MERN Stack', 'Node.js', 'Flask', 'Postman QA', 'MongoDB', 'Authentication'],
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
          'Computer vision and image processing research. Trained and benchmarked deep neural networks to extract insights from visual data, improving detection accuracy across experimental projects.',
        skills: ['Computer Vision', 'Deep Learning', 'Image Processing', 'YOLO', 'Python'],
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
        description: 'Designed and developed responsive web interfaces for public sector technological initiatives.',
        skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
      },
    ],
  },
];

function CompanyLogo({ company }: { company: ExperienceCompany }) {
  const size = 48;
  if (company.logoUrl) {
    return (
      <div className="relative flex-shrink-0 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm" style={{ width: size, height: size }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={company.logoUrl} alt={`${company.name} logo`} width={size} height={size} className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div
      className="flex-shrink-0 rounded-2xl overflow-hidden bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold"
      style={{ width: size, height: size }}
    >
      <Briefcase className="w-5 h-5" />
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
          ? { duration: 0.25, delay: (companyIndex - INITIAL_VISIBLE) * 0.05 }
          : { duration: 0.4, delay: companyIndex * 0.06 }
      }
      className="relative flex gap-5 pb-8 last:pb-0 group"
    >
      {/* Timeline Node */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: 48 }}>
        <div className="relative z-10 w-3.5 h-3.5 rounded-full bg-orange-500 border-4 border-white dark:border-slate-950 shadow-md shadow-orange-500/30 group-hover:scale-125 transition-transform" aria-hidden />
      </div>

      {/* Card Content */}
      <div className="flex-1 min-w-0 text-left bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-orange-400/60 dark:hover:border-orange-500/50 transition-all duration-300">
        <div className="flex items-start gap-4">
          <CompanyLogo company={company} />
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">{company.name}</h3>
            <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 mt-0.5">{company.workMode}</p>
            {company.positions[0]?.location && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{company.positions[0].location}</p>
            )}
          </div>
        </div>

        <ul className="mt-5 space-y-4 list-none p-0 m-0 border-t border-slate-100 dark:border-slate-800 pt-4">
          {company.positions.map((position, positionIndex) => {
            const isFirst = positionIndex === 0;
            const firstLocation = company.positions[0]?.location;
            const showLocation = position.location && position.location !== firstLocation;
            return (
              <li key={`${company.name}-${position.title}-${positionIndex}`} className="relative pl-4 border-l-2 border-orange-500/40">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{position.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {position.period}
                  {showLocation && ` · ${position.location}`}
                </p>
                {isFirst && position.description && (
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">{position.description}</p>
                )}
                {position.skills.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5 text-left">
                    {position.skills.map((skill) => (
                      <span key={skill} className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
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
    <section id="experience" className="section bg-slate-50/50 dark:bg-slate-950/50 text-foreground w-full py-20 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="container text-left mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full bg-teal-50 dark:bg-teal-950/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 ring-1 ring-teal-200/80 dark:ring-teal-800 mb-3">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Track record of driving software development, AI solutions, and system engineering across remote international companies and fast-paced tech hubs.
          </p>
        </div>

        <div className="mt-10 max-w-4xl mx-auto relative">
          <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-amber-400 to-slate-200 dark:to-slate-800" aria-hidden />

          <ul className="space-y-0 list-none p-0 m-0">
            {visibleExperiences.map((company, companyIndex) => (
              <ExperienceCard
                key={company.name}
                company={company}
                isNewlyRevealed={showAllExperience && companyIndex >= INITIAL_VISIBLE}
                companyIndex={companyIndex}
              />
            ))}
            {experiences.length > INITIAL_VISIBLE && (
              <li className="relative flex gap-5 pb-8">
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: 48 }}>
                  <div className="relative z-10 w-3.5 h-3.5 rounded-full border-2 border-dashed border-orange-500 bg-white dark:bg-slate-950" aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <button
                    type="button"
                    onClick={() => setShowAllExperience(!showAllExperience)}
                    className="w-full rounded-2xl border-2 border-dashed border-orange-300 dark:border-orange-500/40 bg-orange-50/50 dark:bg-orange-950/20 hover:bg-orange-100/60 dark:hover:bg-orange-900/30 transition-all duration-200 py-4 px-6 flex items-center justify-center gap-2 group shadow-sm"
                  >
                    <span className="text-xs sm:text-sm font-bold text-orange-700 dark:text-orange-400 group-hover:text-orange-800 dark:group-hover:text-orange-300">
                      {showAllExperience
                        ? 'Show Less'
                        : `Show More (${experiences.length - INITIAL_VISIBLE} Earlier Roles & Internships)`}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-orange-600 dark:text-orange-400 transition-transform ${
                        showAllExperience ? 'rotate-180' : 'group-hover:translate-y-0.5'
                      }`}
                    />
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
