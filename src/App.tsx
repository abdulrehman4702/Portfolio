import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from './hooks/useTheme';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navigation />
        <ThemeToggle />
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </ThemeProvider>
  );
}