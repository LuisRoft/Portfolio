import { getI18N } from "../i18n";

interface Tech {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  webLink?: string;
  repoLink?: string;
  repoFrontendLink?: string;
  repoBackendLink?: string;
  technologies: Tech[];
}

export const getProjects = (currentLocale: string) => {
  const i18n = getI18N({ currentLocale });

  const UProjects: Project[] = [
    {
      title: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_UTRACE,
      description: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_UTRACE_DESC,
      repoLink: "https://github.com/LuisRoft/uTrace",
      technologies: [
        { name: "React Native", icon: "react-plain" },
        { name: "Firebase", icon: "firebase-plain" },
        { name: "Tailwind CSS", icon: "tailwindcss-plain" },
      ],
    },
    {
      title: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_CINEMAN,
      description: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_CINEMAN_DESC,
      webLink: "https://luisroft.github.io/MOVIE-API-REST/",
      repoLink: "https://github.com/LuisRoft/MOVIE-API-REST",
      technologies: [
        { name: "JavaScript", icon: "javascript-plain" },
        { name: "HTML", icon: "html5-plain" },
        { name: "CSS", icon: "css3-plain" },
      ],
    },
    {
      title: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_MICRO_SHOP,
      description: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_MICRO_SHOP_DESC,
      repoLink: "https://github.com/LuisRoft/micro-nest-shop",
      technologies: [
        { name: "NestJS", icon: "nestjs-plain" },
        { name: "TypeScript", icon: "typescript-plain" },
        { name: "Docker", icon: "docker-plain" },
      ],
    },
    {
      title: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_POKEDEX,
      description: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_POKEDEX_DESC,
      repoLink: "https://github.com/LuisRoft/nest-pokedex",
      technologies: [
        { name: "NestJS", icon: "nestjs-plain" },
        { name: "TypeScript", icon: "typescript-plain" },
        { name: "MongoDB", icon: "mongodb-plain" },
        { name: "Docker", icon: "docker-plain" },
      ],
    },
  ];

  const ProProjects: Project[] = [
    {
      title: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_ROSVEP,
      description: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_ROSVEP_DESC,
      webLink: "https://www.rosvep.com/",
      technologies: [
        { name: "Astro", icon: "astro-plain" },
        { name: "Tailwind CSS", icon: "tailwindcss-plain" },
        { name: "TypeScript", icon: "typescript-plain" },
      ],
    },
    {
      title: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_GENESIS,
      description: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_GENESIS_DESC,
      repoFrontendLink: "https://github.com/LuisRoft/proformas-fronted",
      repoBackendLink: "https://github.com/LuisRoft/proformas-backend",
      technologies: [
        { name: "NestJS", icon: "nestjs-plain" },
        { name: "React", icon: "react-plain" },
        { name: "Tailwind CSS", icon: "tailwindcss-plain" },
        { name: "TypeScript", icon: "typescript-plain" },
      ],
    },
    {
      title: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_PUCEM,
      description: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_PUCEM_DESC,
      technologies: [
        { name: "NextJS", icon: "nextjs-plain" },
        { name: "Tailwind CSS", icon: "tailwindcss-plain" },
        { name: "TypeScript", icon: "typescript-plain" },
      ],
    },
  ];

  return { UProjects, ProProjects };
};
