export interface Project {
  title: string;
  tagline?: string;
  description: string;
  technologies: string[];
  features?: string[];
  image?: string;
  liveUrl?: string;
  github?: string;
  featured?: boolean;
  badge?: string;
  category?: 'ai' | 'fullstack' | 'client' | 'research' | 'design' | 'gamedev';
}
