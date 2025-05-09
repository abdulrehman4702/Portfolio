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
  }