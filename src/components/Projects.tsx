import { AnimatedSection } from './AnimatedSection';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const projects = [
    {
      title: 'Computer Vision-Based Agricultural System',
      objective: 'Automated soil analysis and crop recommendations.',
      technologies: 'YOLOv8, Python, Decision Tree, Next.js, MongoDB Cloud.',
      keyContributions: 'Designed a scalable architecture integrating classification algorithms and secure user authentication with Node.js and Express.',
      imageUrl: 'https://regaber.com/wp-content/uploads/2024/07/regaber_agricultura-digital-ai-01.jpg'
    },
    {
      title: 'Personal Assistant (Jarvis-like)',
      overview: 'Developed a virtual assistant capable of performing voice-based commands, managing tasks, and automating workflows.',
      technologies: 'Python, Natural Language Processing, Speech Recognition.',
      features: 'Integrated functionality for productivity management and real-time query resolution.',
      imageUrl: 'https://blog.aspiresys.pl/wp-content/uploads/2019/11/jarvis-1.jpg'
    },
    {
      title: 'Weather Web App',
      overview: 'Built a responsive application providing real-time weather updates.',
      technologies: 'React.js, OpenWeatherMap API, Node.js.',
      features: 'Delivered accurate and interactive weather forecasting with a clean user interface.',
      imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}