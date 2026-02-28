'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { FaLink, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../types';

const projects: Project[] = [
  // 4 new projects (MERN, AI, GCP)
  {
    title: 'Mansha Transport',
    description:
      'Client website for Mansha Transport, serving the Gulf region and built for an international client. A professional presence showcasing services and reach.',
    technologies: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'Express', 'GCP (Deployment)'],
    image: '/images/mansha-transport.png',
    liveUrl: 'https://manshatransport.com',
  },
  {
    title: 'Airec',
    description:
      'Full recruitment platform with complete hiring process and automation flow. Features role-based access control, real-time communication, and instant notifications. AI-powered assessment to evaluate applicant personality and job fit.',
    technologies: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'AI (Assessment)', 'Real-time Notifications', 'GCP (Deployment)'],
    image: '/images/airec.png',
    liveUrl: 'https://airec.io',
  },
  {
    title: 'Talent Sync IQ',
    description:
      'HR management platform with company hierarchy, OKR (Objectives and Key Results) system, attendance tracking, and payroll management. Streamlines HR operations end-to-end.',
    technologies: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'AI', 'GCP (Deployment)'],
    image: '/images/talent-sync.png',
    liveUrl: 'https://app.tsynciq.com/auth/login',
  },
  {
    title: 'Unsh',
    description:
      'E-commerce website for Unsh, a handmade embroidery brand. Full online store with product catalog, cart, and checkout for the brand.',
    technologies: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'Express', 'GCP (Deployment)'],
    image: '/images/unsh.png',
    liveUrl: 'https://unshhandmade.com',
  },
  {
    title: 'Computer Vision-Based Agricultural System (2024)',
    description:
      'A smart agriculture solution automating soil analysis and crop recommendation using YOLOv8 and decision tree algorithms.',
    technologies: ['Next.js (Frontend)', 'Python and MongoDB (Backend)', 'Node.js (Authentication)'],
    image: '/images/agriculture.jpg',
    github: 'https://github.com/abdulrehman4702/Final-Year-Project',
  },
  {
    title: 'Easier Flow (Research Project)',
    description:
      'A cutting-edge No-Code Automation Platform enabling users to build complex workflows visually. Features include YAML support, AI-based workflow suggestions, and real-time execution monitoring.',
    technologies: ['React.js (Frontend)', 'GoLang (Backend)', 'AI/ML engines'],
    image: '/images/easierflow.png',
    github: 'https://github.com/abdulrehman4702/easier-flow',
  },
  {
    title: 'Freeway X Uber (UK)',
    description:
      'A client project I developed independently, creating an insurance policy platform specifically designed for Uber drivers in the UK.',
    technologies: ['Fusion.js (Frontend)', '.NET (Backend)', 'MySQL'],
    image: '/images/freewayxuber.jpg',
  },
  {
    title: 'Dental Land Website',
    description:
      'A website for a dental clinic that allows users to book appointments and view the services offered.',
    technologies: ['WordPress (Frontend)', 'Elementor (Page Builder)', 'PHP (Backend)'],
    image: '/images/dental-land.png',
    liveUrl: 'https://dentallands.com',
  },
  {
    title: 'Shop Hub',
    description:
      'A website for a shop that allows users to buy and sell products online. It is the actual project that I worked on with my team.',
    technologies: ['TypeScript (Frontend)', 'Node.js (Backend)', 'MongoDB'],
    image: '/images/shop-hub.jpg',
    github: 'https://github.com/abdulrehman4702/Shophub',
  },
  {
    title: 'Alarm Clock',
    description:
      'A simple alarm clock that allows users to set alarms and get notifications. Practiced with Next.js and Node.js.',
    technologies: ['Next.js (Frontend)', 'Node.js (Backend)', 'MongoDB'],
    image: '/images/alarm-clock.webp',
    github: 'https://github.com/abdulrehman4702/alarm-clock',
  },
  {
    title: 'Insolvency Dashboard',
    description:
      'A real time dashboard for insolvency cases in the UK. It will fetch data from the API and display it in a dashboard and also provide a way to filter the data.',
    technologies: ['React.js (Frontend)', 'Python (Backend)', 'MySQL'],
    image: '/images/insolvency-dashboard.png',
    liveUrl: 'https://insolvency-dashboard.vercel.app/',
  },
];

function ProjectImage({ project }: { project: Project }) {
  const size = 192; // h-48 = 12rem
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover rounded-lg"
      />
    );
  }
  return (
    <div
      className="absolute inset-0 rounded-lg bg-muted flex items-center justify-center text-4xl font-bold text-muted-foreground"
      aria-hidden
    >
      {project.title.charAt(0)}
    </div>
  );
}

const INITIAL_VISIBLE = 6;

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects ? projects : projects.slice(0, INITIAL_VISIBLE);
  const hasMore = projects.length >= INITIAL_VISIBLE && !showAllProjects;
  const sixthCardIsShowMore = hasMore;

  return (
    <section id="projects" className="section bg-background text-foreground w-full py-16">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => {
            const isSixthWithBlur = sixthCardIsShowMore && index === INITIAL_VISIBLE - 1;
            const isNewlyRevealed = showAllProjects && index >= INITIAL_VISIBLE;
            return (
              <motion.div
                key={project.title}
                className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden"
                initial={isNewlyRevealed ? { opacity: 0, y: 12 } : { opacity: 0, y: 20 }}
                animate={isNewlyRevealed ? { opacity: 1, y: 0 } : undefined}
                whileInView={!isNewlyRevealed ? { opacity: 1, y: 0 } : undefined}
                viewport={!isNewlyRevealed ? { once: true } : undefined}
                transition={
                  isNewlyRevealed
                    ? { duration: 0.2, delay: (index - INITIAL_VISIBLE) * 0.04 }
                    : { duration: 0.6, delay: Math.min(index, 6) * 0.2 }
                }
                onClick={() => {
                  if (isSixthWithBlur) {
                    setShowAllProjects(true);
                  } else {
                    setSelectedProject(showAllProjects ? index : projects.indexOf(project));
                  }
                }}
              >
                <motion.div
                  className="relative h-48 w-full mb-4"
                  whileHover={{ scale: isSixthWithBlur ? 1 : 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectImage project={project} />
                  {isSixthWithBlur && (
                    <>
                      <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-md rounded-lg" aria-hidden />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-semibold text-emerald-700 dark:text-emerald-400 drop-shadow-sm">
                          Show more
                        </span>
                      </div>
                    </>
                  )}
                </motion.div>
                <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-400">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">{project.description}</p>
              </motion.div>
            );
          })}
        </div>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden bg-muted">
                <ProjectImage project={projects[selectedProject]} />
              </div>
              <h3 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-400">{projects[selectedProject].title}</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{projects[selectedProject].description}</p>
              <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">Technologies</h4>
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                {projects[selectedProject].technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {projects[selectedProject].liveUrl && (
                  <a
                    href={projects[selectedProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-emerald-700 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Visit site
                  </a>
                )}
                {projects[selectedProject].github && (
                  <a
                    href={projects[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                  >
                    <FaLink className="mr-2" />
                    Code
                  </a>
                )}
                <button
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
