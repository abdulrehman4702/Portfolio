'use client';

import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaTools, FaCamera } from 'react-icons/fa';

// Define TypeScript interface for services
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'Full Stack Web Development',
    description:
      'Building scalable, responsive web applications with modern technologies like React.js, Next.js, Flask, and Node.js. From intuitive front-ends to robust backends, I deliver end-to-end solutions tailored to your needs.',
    icon: <FaCode className="text-4xl text-emerald-600" />,
  },
  {
    title: 'AI/ML Integration',
    description:
      'Integrating advanced AI and machine learning models into production systems. Specializing in natural language processing, predictive analytics, and custom AI solutions to enhance business efficiency.',
    icon: <FaRobot className="text-4xl text-emerald-600" />,
  },
  {
    title: 'Automation Platform Development',
    description:
      'Designing no-code and low-code automation platforms like Easier Flow, inspired by Zapier and n8n. Streamline workflows with AI-powered orchestration, YAML support, and real-time monitoring.',
    icon: <FaTools className="text-4xl text-emerald-600" />,
  },
  {
    title: 'Computer Vision Solutions',
    description:
      'Developing smart computer vision systems using YOLOv8 and other cutting-edge algorithms. Applications include agricultural automation, object detection, and image analysis for real-world challenges.',
    icon: <FaCamera className="text-4xl text-emerald-600" />,
  },
];
 
export default function Services() {
  return (
    <section id="services" className="section bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          As a Full Stack Developer, I offer a range of services to transform your ideas into high-performance, scalable solutions.
        </motion.p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 dark:bg-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-emerald-600 dark:text-emerald-400 text-center">{service.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed justify-clean">
  {service.description}
</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="/#contact"
            className="inline-block bg-emerald-600 dark:bg-emerald-400 text-white py-3 px-8 rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-500 transition"
            aria-label="Contact me to discuss services"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}