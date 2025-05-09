'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'CareerCraft (2025)',
    description: 'An AI-driven platform that analyzes resumes, identifies skill gaps, and recommends matching job opportunities.',
    technologies: ['React.js (Frontend)', 'Flask (Backend with Machine Learning models)', 'MongoDB'],
    image: '/images/career-craft.jpg',
    github: 'https://github.com/abdulrehman4702/careercraft',
   
  },
  {
    title: 'Computer Vision-Based Agricultural System (2024)',
    description: 'A smart agriculture solution automating soil analysis and crop recommendation using YOLOv8 and decision tree algorithms.',
    technologies: ['Next.js (Frontend)', 'Python and MongoDB (Backend)', 'Node.js (Authentication)'],
    image: '/images/agriculture.jpg',
    github: 'https://github.com/abdulrehman4702/agri-vision',

  },
  {
    title: 'Easier Flow (Research Project)',
    description: 'A cutting-edge No-Code Automation Platform enabling users to build complex workflows visually. Features include YAML support, AI-based workflow suggestions, and real-time execution monitoring.',
    technologies: ['React.js (Frontend)', 'GoLang (Backend)', 'AI/ML engines'],
    image: '/images/easierflow.png',
    github: 'https://github.com/abdulrehman4702/easierflow',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(index)}
            >
              <motion.div
                className="relative h-48 w-full mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-400">{project.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
            </motion.div>
          ))}
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
              className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="relative h-64 w-full mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
              <h3 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-400">{projects[selectedProject].title}</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{projects[selectedProject].description}</p>
              <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">Technologies:</h4>
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                {projects[selectedProject].technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="mt-6 flex space-x-4">
                <a
                  href={projects[selectedProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
                
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