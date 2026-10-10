import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
}
