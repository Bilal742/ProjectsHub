export interface Project {
  slug: string;
  title: string;
  description: string;
  live: string;
  github: string;
  image?: string;
  project: Project;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string; // ✅ Ensure this is string type
  // live?: string;
  // github?: string;
  featured?: boolean;
  // techStack?: string[] | string; // ✅ Allow both array and string
  stats?: {
    stars?: number;
    forks?: number;
  };
  progress?: number;
  tags?: string[];
  createdAt?: Date;
  techStack: string[];
}