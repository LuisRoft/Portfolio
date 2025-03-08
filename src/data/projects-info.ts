import { getI18N } from "../i18n";
import type { Project } from "../types/projects";

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
    // {
    //   title: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_PUCEM,
    //   description: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_PUCEM_DESC,
    //   technologies: [
    //     { name: "NextJS", icon: "nextjs-plain" },
    //     { name: "Tailwind CSS", icon: "tailwindcss-plain" },
    //     { name: "TypeScript", icon: "typescript-plain" },
    //   ],
    // },
    {
      title: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_ANT,
      description: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_ANT_DESC,
      repoLink: "https://github.com/LuisRoft/Scrapping-ANT",
      technologies: [
        { name: "NodeJS", icon: "nodejs-plain" },
        { name: "TypeScript", icon: "typescript-plain" },
        { name: "Playwright", icon: "playwright-plain" },
        { name: "AI SDK", icon: "vercel-plain" },
        { name: "Gemini-AI" },
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
      title: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_MPOWERTRADE,
      description: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_MPOWERTRADE_DESC,
      webLink: "https://www.mpowertrade.com/",
      repoLink: "",
      technologies: [
        { name: "Astro", icon: "astro-plain" },
        { name: "Tailwind CSS", icon: "tailwindcss-plain" },
        { name: "TypeScript", icon: "typescript-plain" },
      ],
    },
  ];

  return { UProjects, ProProjects };
};
