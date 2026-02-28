'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

// Define TypeScript interface for testimonials
interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Project Manager, TechCorp",
    quote: "Abdur's expertise in full-stack development transformed our web application. His ability to integrate AI seamlessly and deliver on time was exceptional.",
    avatar: "/images/sarah.jpeg"
  },
  {
    name: "Michael Chen",
    role: "CTO, AgriTech Solutions",
    quote: "Working with Abdur on our computer vision project was a game-changer. His innovative approach to automation saved us significant time and resources.",
    avatar: "/images/Michael Chen.jpg"
  },
  {
    name: "Emily Davis",
    role: "Founder, StartUpX",
    quote: "Abdur's no-code automation platform was exactly what we needed. His professionalism and technical skills made the collaboration a success.",
    avatar: "/images/Emily Davis.jpg"
  },
  {
    name: "James Patel",
    role: "Lead Developer, InnovateTech",
    quote: "Abdur's ability to build scalable backends with Flask and Node.js is unmatched. His attention to detail ensured our project was a complete success.",
    avatar: "/images/James Patel.jpeg"
  },
  {
    name: "Laura Thompson",
    role: "Data Scientist, AIWorks",
    quote: "Abdur's AI/ML integration skills brought our predictive analytics platform to life. His creativity and technical prowess are truly impressive.",
    avatar: "/images/Laura Thompson.jpg"
  },
  {
    name: "David Kim",
    role: "CEO, SmartSolutions",
    quote: "Abdur's work on our automation platform streamlined our workflows significantly. His leadership and vision were key to our project's success.",
    avatar: "/images/David Kim.jpeg"
  }
];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="testimonials"
      className="section bg-background text-foreground w-full py-16"
    >
      <div className="container">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hear from clients and colleagues about my work in full-stack development, AI integration, and innovative automation solutions.
        </motion.p>
        <div
          className="mt-12 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Testimonials carousel"
        >
          <motion.div
            ref={carouselRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-border relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FaQuoteLeft className="absolute top-3 left-3 text-primary/20 text-2xl" />
                <div className="flex justify-center mb-3">
                  <div className="relative w-[60px] h-[60px]">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name}'s avatar`}
                      fill
                      sizes="60px"
                      className="rounded-full border-2 border-primary/50 object-cover"
                      priority={true}
                    />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-emerald-500 text-center">
                  {testimonial.name}
                </h3>
                <p className="text-xs text-muted-foreground text-center">{testimonial.role}</p>
                <div className="flex justify-center mt-2 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <p className="mt-3 text-foreground text-center italic text-sm leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </motion.div>
            ))}
          </motion.div>
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
            className="inline-block bg-emerald-500 text-primary-foreground py-3 px-8 rounded-lg hover:bg-emerald-600 transition"
            aria-label="Contact me to collaborate"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}