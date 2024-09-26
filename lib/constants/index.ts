import { ProjectCardProp, SkillCardProp } from "@/lib/types";

export const projectsArr: ProjectCardProp[] = [
  {
    imageSrc: "zapier.png",
    title: "Zapier Clone (In Progress)",
    description:
      "Turborepo, Next.js, typescript, Kafka, React hook form, postgres",
    github_repo_link: "https://github.com/fkk989/zapier-clone",
  },
  {
    imageSrc: "repo-tracker.png",
    title: "Repo Tracker",
    description: "Next.js, typescript, chart.js, postgresQl",
    github_repo_link: "https://github.com/fkk989/repo-tracker",
    hosted_link: "https://repo-tracker-seven.vercel.app",
  },
  {
    imageSrc: "organizerPro.png",
    title: "Organier Pro",
    description: "Typescript, React.js, Tailwind Css, Node.js, Prisma, Docker",
    github_repo_link: "https://github.com/fkk989/task-manager",
    hosted_link: "https://task-manager-xy.vercel.app/",
  },
  {
    imageSrc: "react-custom-component.png",
    title: "React Custom Component",
    description:
      "Custom components which gives you the  functional behaviour with full customization",
    github_repo_link: "https://github.com/fkk989/custom-components",
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
