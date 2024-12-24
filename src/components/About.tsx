import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">About Me</h2>
          <motion.div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a passionate Solution Engineer specializing in API integration, full-stack development, and computer vision solutions. 
              With expertise in Flask, React.js, and OpenCV, I excel at creating dynamic, efficient, and scalable applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              From developing intelligent personal assistants to crafting real-time weather web applications, 
              I consistently push the boundaries of software solutions. My focus is on delivering robust, 
              user-centric designs that drive meaningful outcomes.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}