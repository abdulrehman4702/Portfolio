"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLink } from "react-icons/fa";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section
      id="hero"
      className="section bg-background text-foreground w-full py-16"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Abdur Rehman Profile"
            width={150}
            height={150}
            className="rounded-full w-32 h-32 mx-auto border-4 border-emerald-200 dark:border-emerald-600 object-cover cursor-pointer"
            priority
            onClick={toggleModal}
          />
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Abdur Rehman
        </motion.h1>
        <motion.p
          className="mt-4 text-xl sm:text-2xl text-emerald-600 dark:text-emerald-400 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Software Engineer
        </motion.p>
        <motion.div
          className="mt-2 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Image
            src="/images/logo.png"
            alt="VisionGrid Logo"
            width={70}
            height={70}
            className="w-16 h-16 object-contain cursor-pointer rounded-full bg-transparent"
            quality={100}
            priority
          />
          <span className="text-[22px] text-blue-500 dark:text-white">
            Founder, VisionGrid
          </span>
          <Link
            href="https://vision-grid.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink className="w-6 h-6 object-contain rounded-full bg-transparent" />
          </Link>
        </motion.div>
        <motion.p
          className="mt-1 text-[18px] text-black dark:text-white max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          "Your Vision, Our Code"
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Building Scalable Solutions with AI, Automation, and Modern Web
          Technologies.
        </motion.p>
        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="inline-block cursor-pointer bg-emerald-600 text-white py-2 px-6 rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-500 transition">
            <a
              href="https://drive.google.com/uc?export=download&id=1OMY0pd1TvHg-iPz3i8gBYimSlInjjN6L"
              download="Abdur_Rehman_Resume.pdf"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg p-4 relative max-w-sm w-full mx-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end absolute top-2 right-2">
                <button
                  onClick={toggleModal}
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
                >
                  ✕
                </button>
              </div>
              <Image
                src="/images/profile.jpg"
                alt="Abdur Rehman Profile"
                width={300}
                height={300}
                className="rounded-full w-64 h-64 mx-auto border-4 border-emerald-200 dark:border-emerald-600 object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
