import dayjs, {
  Dayjs,
} from "dayjs";
import {
  DeepReadonly,
} from "next/dist/shared/lib/deep-readonly";


import {
  Colors,
} from "@/types/theme";

export interface Experience {
    position: string;
    color: Colors;
    place: string;
    description: string;
    link: string;
    startDate: Dayjs;
    endDate?: Dayjs;
    size: number;
    skills: Skills[];
    projects?: Project[];
}

export interface Project {
    name: string;
    url?: string;
    description: string;
}

export const SKILLS: DeepReadonly<Record<string, string>> = {
  CSS: "CSS",
  CYPRESS: "cypress",
  DOCKER: "Docker",
  ELASTIC_SEARCH: "Elastic search",
  GIT: "git",
  GRAPHQL: "graphQL",
  HTML: "HTML",
  JQUERY: "JQuery",
  JAVASCRIPT: "javascript",
  JEST: "jest",
  KNEX: "knex",
  MOCHA: "mocha",
  MYSQL: "mySQL",
  NETLIFY_FUNCTIONS: "Netlify functions",
  NEXT_JS: "Next.js",
  NODE_JS: "node.js",
  NUXT: "nuxt",
  PLAYWRIGHT: "playwright",
  REACT: "react",
  REST_API: "Rest Api",
  SASS: "Sass",
  SQLITE: "SQLite",
  TAILWIND: "tailwind",
  TYPESCRIPT: "typescript",
  VITEST: "vitest",
  VUE: "vue",
};

export const SORTS: DeepReadonly<Record<string, number>> = {
  ALPHABETICALLY: 0,
  FEW_TIME: 1,
  OFTEN: 2,
  DAILY: 3,
};

export type Skills = typeof SKILLS[keyof typeof SKILLS];


export type Sorts = typeof SORTS[keyof typeof SORTS];

export const EXPERIENCES: Experience[] = [
  {
    position: "Front-end developer",
    color: Colors.Primary,
    place: "Designeo / Prague",
    description: "Client tailored web applications (Retail, Sport, Business segments).",
    link: "https://www.designeo.cz/",
    startDate: dayjs("2024-11-01"),
    endDate: dayjs("2025-07-31"),
    size: 30,
    skills: [
      SKILLS.VUE,
      SKILLS.NUXT,
      SKILLS.NODE_JS,
      SKILLS.DOCKER,
      SKILLS.JAVASCRIPT,
      SKILLS.CSS,
      SKILLS.SASS,
      SKILLS.TAILWIND,
      SKILLS.GIT,
    ],
    projects: [
      {
        name: "famicura.cz",
        url: "https://famicura.cz/",
        description: "Platform that helps users quickly find verified social and healthcare services tailored to their needs, offering guidance and support during challenging life situations.",
      },
      {
        name: "eisking.tv",
        url: "https://eisking.tv/",
        description: "Motorsport platform offering videos, podcasts, articles, and event access for Formula 1 fans, with all content managed via Payload CMS.",
      },
    ],
  },
  {
    position: "Front-end developer",
    color: Colors.PrimaryContent,
    place: "Easy Software / Prague",
    description: "Project management software: Easy Project.",
    link: "https://www.easyproject.cz/",
    startDate: dayjs("2023-10-01"),
    endDate: dayjs("2025-04-30"),
    size: 80,
    skills: [
      SKILLS.VUE,
      SKILLS.JQUERY,
      SKILLS.GRAPHQL,
      SKILLS.VITEST,
      SKILLS.PLAYWRIGHT,
      SKILLS.JAVASCRIPT,
      SKILLS.CSS,
      SKILLS.SASS,
      SKILLS.TAILWIND,
      SKILLS.GIT,
    ],
    projects: [
      {
        name: "easyproject.cz",
        url: "https://www.easyproject.cz/",
        description: "Tool that helps plan, manage, and finish projects more smoothly by combining everything they need into one easy-to-use platform—with smart features that save time and keep work organized.",
      },
    ],
  },
  {
    position: "Front-end and back-end developer",
    color: Colors.PrimaryContent,
    place: "Amio / Prague",
    description: "Creating chatbot solutions for various communication channels.",
    link: "https://www.amio.io/",
    startDate: dayjs("2022-04-01"),
    endDate: dayjs("2023-10-31"),
    size: 10,
    skills: [
      SKILLS.VUE,
      SKILLS.NODE_JS,
      SKILLS.MYSQL,
      SKILLS.REACT,
      SKILLS.TYPESCRIPT,
      SKILLS.MOCHA,
      SKILLS.JEST,
      SKILLS.CYPRESS,
      SKILLS.JAVASCRIPT,
      SKILLS.CSS,
      SKILLS.SASS,
      SKILLS.GIT,
    ],
    projects: [
      {
        name: "Chatwidget & chatbot administration app",
        description: "Chatbot platform built for e-commerce that lets businesses create AI shopping assistants in minutes—automating customer support, boosting product discovery, and increasing online conversions across web chat, WhatsApp, Messenger, and more.",
      },
    ],
  },
  {
    position: "Front-end and back-end developer",
    color: Colors.PrimaryContent,
    place: "Equiradar / Prague",
    description: "Development of website for horse enthusiasts.",
    link: "https://equiradar.com/",
    startDate: dayjs("2021-05-01"),
    endDate: dayjs("2022-09-30"),
    size: 5,
    skills: [
      SKILLS.VUE,
      SKILLS.NETLIFY_FUNCTIONS,
      SKILLS.ELASTIC_SEARCH,
      SKILLS.REACT,
      SKILLS.CYPRESS,
      SKILLS.JAVASCRIPT,
      SKILLS.CSS,
      SKILLS.SASS,
      SKILLS.TAILWIND,
      SKILLS.GIT,
    ],
    projects: [
      {
        name: "equiradar.com",
        url: "https://equiradar.com/",
        description: "Web app that helps users discover and compare horse racing tips from verified tipsters, offering performance stats, rankings, and transparent results to guide smarter betting decisions.",
      },
    ],
  },
  {
    position: "Front-end developer",
    color: Colors.PrimaryContent,
    place: "Easy Software / Prague",
    description: "Project management software: Easy Project.",
    link: "https://www.easyproject.cz/",
    startDate: dayjs("2020-10-01"),
    endDate: dayjs("2022-03-31"),
    size: 80,
    skills: [
      SKILLS.VUE,
      SKILLS.JQUERY,
      SKILLS.GRAPHQL,
      SKILLS.JEST,
      SKILLS.JAVASCRIPT,
      SKILLS.CSS,
      SKILLS.SASS,
      SKILLS.TAILWIND,
      SKILLS.GIT,
    ],
    projects: [
      {
        name: "easyproject.cz",
        url: "https://www.easyproject.cz/",
        description: "Tool that helps plan, manage, and finish projects more smoothly by combining everything they need into one easy-to-use platform—with smart features that save time and keep work organized.",
      },
    ],
  },
];

export const CONTACTS_INFO = Object.freeze([
  {
    text: "Tomáš Richtr",
    icon: "icon-[tabler--user]",
    size: "default",
  },
  {
    icon: "icon-[tabler--phone]",
    text: "00 420 778 540 970",
    href: "tel:00420778540970",
  },
  {
    icon: "icon-[tabler--brand-mailgun]",
    text: "t.richtr@email.cz",
    href: "mailto:t.richtr@email.cz",
  },
  {
    icon: "icon-[tabler--brand-linkedin]",
    text: "linkedin.com/in/trichtr",
    href: "https://linkedin.com/in/trichtr",
  },
  {
    icon: "icon-[tabler--brand-github]",
    text: "github.com/TomasRichtr",
    href: "https://github.com/TomasRichtr",
  },
]);

export const DEV_ICONS_MAP: Record<string, string> = Object.freeze({
  CSS: "devicon-css3-plain",
  cypress: "devicon-cypressio-plain",
  Docker: "devicon-docker-plain",
  "Elastic search": "devicon-elasticsearch-plain",
  git: "devicon-git-plain",
  graphQL: "devicon-graphql-plain",
  HTML: "devicon-html5-plain",
  JQuery: "devicon-jquery-plain",
  javascript: "devicon-javascript-plain",
  jest: "devicon-jest-plain",
  knex: "devicon-knexjs-plain",
  mocha: "devicon-mocha-plain",
  mySQL: "devicon-mysql-plain",
  "Netlify functions": "devicon-netlify-plain",
  "Next.js": "devicon-nextjs-plain",
  "node.js": "devicon-nodejs-plain",
  nuxt: "devicon-nuxtjs-plain",
  playwright: "devicon-playwright-plain",
  react: "devicon-react-original",
  "Rest Api": "devicon-postman-plain",
  Sass: "devicon-sass-original",
  SQLite: "devicon-sqlite-plain",
  tailwind: "devicon-tailwindcss-plain",
  typescript: "devicon-typescript-plain",
  vitest: "devicon-vitest-plain",
  vue: "devicon-vuejs-plain",
});

export enum SkillDegree {
  Junior,
  Medior,
  Senior,
}

export const SKILL_DEGREE_MAP: Record<string, SkillDegree> = Object.freeze({
  CSS: SkillDegree.Medior,
  cypress: SkillDegree.Medior,
  Docker: SkillDegree.Junior,
  "Elastic search": SkillDegree.Junior,
  git: SkillDegree.Senior,
  graphQL: SkillDegree.Medior,
  HTML: SkillDegree.Senior,
  JQuery: SkillDegree.Medior,
  javascript: SkillDegree.Senior,
  jest: SkillDegree.Senior,
  knex: SkillDegree.Medior,
  mocha: SkillDegree.Medior,
  mySQL: SkillDegree.Junior,
  "Netlify functions": SkillDegree.Medior,
  "Next.js": SkillDegree.Medior,
  "node.js": SkillDegree.Medior,
  nuxt: SkillDegree.Medior,
  playwright: SkillDegree.Senior,
  react: SkillDegree.Medior,
  "Rest Api": SkillDegree.Junior,
  Sass: SkillDegree.Medior,
  SQLite: SkillDegree.Junior,
  tailwind: SkillDegree.Senior,
  typescript: SkillDegree.Senior,
  vitest: SkillDegree.Senior,
  vue: SkillDegree.Senior,
});
