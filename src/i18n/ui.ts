export const LANGUAGES: Record<string, { code: string; name: string }> = {
  en: {
    code: "en",
    name: "English",
  },
  es: {
    code: "es",
    name: "Español",
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.inicio": "Inicio",
    "nav.proyectos": "Proyectos",
    "nav.blog": "Blog",
  },
  en: {
    "nav.inicio": "Home",
    "nav.proyectos": "Projects",
    "nav.blog": "Blog",
  },
} as const;

export const routes = {
  es: {
    proyectos: "proyectos",
    blog: "blog",
  },
  en: {
    proyectos: "projects",
    blog: "blog",
  },
};
