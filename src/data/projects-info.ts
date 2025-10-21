import { getI18N } from "../i18n";
import type { Project } from "../types/projects";

export const getProjects = (currentLocale: string) => {
  const i18n = getI18N({ currentLocale });

  const UProjects: Project[] = [
    {
      title: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_IAN,
      description: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_IAN_DESC,
      webLink: "https://ian-fronted.vercel.app/",
      preview: "ian-shot.png",
      technologies: [
        { name: "LangChain" },
        { name: "Python", icon: "python-plain" },
        { name: "OCR" },
        { name: "RAG" },
      ],
    },
    {
      title: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_OUTIFY,
      description: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_OUTIFY_DESC,
      repoLink: "https://github.com/STIXGT/outify",
      webLink: "https://outify-n8o65a1bc-luis-projects-a4d57935.vercel.app/",
      preview: "outify-shot.png",
      technologies: [
        { name: "Next.js", icon: "nextjs-plain" },
        { name: "React", icon: "react-plain" },
        { name: "Tailwind CSS", icon: "tailwindcss-plain" },
        { name: "LangChain" },
        { name: "OpenAI" },
      ],
    },
    {
      title: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_UTRACE,
      description: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_UTRACE_DESC,
      repoLink: "https://github.com/LuisRoft/uTrace",
      preview: "utrace-shot.png",
      technologies: [
        { name: "React Native", icon: "react-plain" },
        { name: "Firebase", icon: "firebase-plain" },
        { name: "Tailwind CSS", icon: "tailwindcss-plain" },
      ],
    },
    // {
    //   title: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_POKEDEX,
    //   description: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_POKEDEX_DESC,
    //   repoLink: "https://github.com/LuisRoft/nest-pokedex",
    //   technologies: [
    //     { name: "NestJS", icon: "nestjs-plain" },
    //     { name: "TypeScript", icon: "typescript-plain" },
    //     { name: "MongoDB", icon: "mongodb-plain" },
    //     { name: "Docker", icon: "docker-plain" },
    //   ],
    // },
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
      preview: "ant-shot.png",
      technologies: [
        { name: "NodeJS", icon: "nodejs-plain" },
        { name: "TypeScript", icon: "typescript-plain" },
        { name: "Playwright", icon: "playwright-plain" },
        { name: "AI SDK", icon: "vercel-plain" },
        { name: "Gemini-AI" },
      ],
    },
    {
      title: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_AIMAGE,
      description: i18n.PROYECTOS_PERSONALES_LISTA.PROYECTO_AIMAGE_DESC,
      repoLink: "https://github.com/LuisRoft/ai-image-trends",
      webLink: "https://aimage-luisroftl.vercel.app/",
      preview: "aimage-shot.png",
      technologies: [
        { name: "Next.js", icon: "nextjs-plain" },
        { name: "React", icon: "react-plain" },
        { name: "Tailwind CSS", icon: "tailwindcss-plain" },
        { name: "TypeScript", icon: "typescript-plain" },
        { name: "Gemini-AI" },
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
  ];

  const ProProjects: Project[] = [
    // {
    //   title: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_ROSVEP,
    //   description: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_ROSVEP_DESC,
    //   webLink: "https://www.rosvep.com/",
    //   technologies: [
    //     { name: "Astro", icon: "astro-plain" },
    //     { name: "Tailwind CSS", icon: "tailwindcss-plain" },
    //     { name: "TypeScript", icon: "typescript-plain" },
    //   ],
    // },
    {
      title: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_PLANIFIA,
      description: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_PLANIFIA_DESC,
      webLink: "",
      repoLink: "",
      preview: "planifia-shot.png",
      technologies: [
        { name: "Nextjs", icon: "nextjs-plain" },
        { name: "Nestjs", icon: "nestjs-plain" },
        { name: "TypeScript", icon: "typescript-plain" },
        { name: "Tailwind CSS", icon: "tailwindcss-plain" },
        { name: "PostgreSQL", icon: "postgresql-plain" },
        { name: "Docker", icon: "docker-plain" },
      ],
    },
    {
      title: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_BILLEASE,
      description: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_BILLEASE_DESC,
      webLink: "https://www.billease.pro/",
      repoLink: "",
      preview: "billease-shot.png",
      technologies: [
        { name: "PHP", icon: "php-plain" },
        { name: "Laravel", icon: "laravel-plain" },
        { name: "Javascript", icon: "typescript-plain" },
        { name: "Bootstrap", icon: "bootstrap-plain" },
        { name: "PostgreSQL", icon: "postgresql-plain" },
        { name: "Docker", icon: "docker-plain" },
      ],
    },
    {
      title: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_MPOWERTRADE,
      description: i18n.PROYECTOS_PROFESIONALES_LISTA.PROYECTO_MPOWERTRADE_DESC,
      webLink: "https://www.mpowertrade.com/",
      repoLink: "",
      preview: "mpowertrade-shot.png",
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
  ];

  return { UProjects, ProProjects };
};
