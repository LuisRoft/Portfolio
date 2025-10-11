export interface Tech {
  name: string;
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  webLink?: string;
  repoLink?: string;
  repoFrontendLink?: string;
  repoBackendLink?: string;
  technologies: Tech[];
  preview?: string; // Image URL for project preview
}
