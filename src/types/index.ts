// TypeScript interfaces for type safety
export interface SkillItem {
    name: string;
    icon?: React.ReactNode;
  }
  
  
  export interface SkillGroup {
    category: string;
    items: SkillItem[];
  }
  
  export interface Project {
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    liveUrl?: string;
    github?: string;
  }

  export interface ExperiencePosition {
    title: string;
    period: string;
    location?: string;
    description: string;
    skills: string[];
  }

  export interface ExperienceCompany {
    name: string;
    workMode: string; // e.g. "Full-time · On-site", "Full-time · Remote"
    logoUrl?: string; // optional company logo URL (e.g. from upload)
    positions: ExperiencePosition[];
  }