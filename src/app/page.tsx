'use client';

import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Testimonials from '../app/testimonials/page';
import ContentCreator from '../components/ContentCreator';
export default function Home() {
  return (
    <div className="scroll-smooth">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <ContentCreator />
        <Education />
        <Contact />
      </motion.div>
    </div>
  );
}