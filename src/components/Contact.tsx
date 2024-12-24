import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const whatsappNumber = '923346828900';
  const contacts = [
    {
      href: `https://wa.me/${whatsappNumber}`,
      icon: <Phone className="w-6 h-6" />,
      label: "WhatsApp",
      text: "+92-334-6828900"
    },
    {
      href: "mailto:abdulrehman2001y@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      text: "abdulrehman2001y@gmail.com"
    },
    {
      href: "https://linkedin.com/in/abdul-rehman-165430230",
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      text: "abdul-rehman-165430230"
    },
    {
      href: "https://github.com/abdulrehman4702",
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      text: "abdulrehman4702"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Whether you're looking to collaborate on an innovative project or need expertise in API integration 
            and computer vision, feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {contacts.map(({ href, icon, label, text }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <span className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mb-3">
                  {icon}
                </span>
                <span className="font-semibold text-gray-800 dark:text-white mb-1">{label}</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">{text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}