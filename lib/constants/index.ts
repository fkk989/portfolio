import { ProjectCardProp, SkillCardProp } from "@/lib/types";

export const projectsArr: ProjectCardProp[] = [
  {
    imageSrc: "discord.png",
    title: "discord",
    description: "Next.js 13, React Hook Form, Zustand, Shadcn, Typescript",
    github_repo_link: "https://github.com/fkk989/task-manager",
  },
  {
    imageSrc: "organizerPro.png",
    title: "Organier Pro",
    description: "Next.js 13, React Hook Form, Zustand, Shadcn, Typescript",
    github_repo_link: "https://github.com/fkk989/task-manager",
    hosted_link: "https://task-manager-xy.vercel.app/",
  },
];

export const skillsArr: SkillCardProp[] = [
  {
    domain: "frontend",
    skills: ["Javascript", "Typescript", "Reach Js", "Next Js", "Tailwind"],
  },
  {
    domain: "backend",
    skills: [
      "Javascript",
      "Typescript",
      "Node Js",
      "Express js",
      "Nest Js",
      "Websockets",
      "GraphQl",
    ],
  },
  {
    domain: "database",
    skills: ["Postgres", "MySql", "MongoDB"],
  },
  {
    domain: "devops",
    skills: ["Docker", "CI/CD", "Kubernetes"],
  },
];
