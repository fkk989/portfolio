import { ProjectCardProp, SkillCardProp } from "@/lib/types";

export const projectsArr: ProjectCardProp[] = [
  {
    imageSrc: "email-marketing-app.png",
    title: "A Email marketing automations tool",
    description:
      "Node.js, Agenda(for scheduling), React.js, Redis(Rate Limiting), React hook form",
    github_repo_link: "https://github.com/fkk989/future-blink",
    hosted_link: "https://future-blink-five.vercel.app/"
  },
  {
    imageSrc: "chat-app.png",
    title: "Highly scale able chap app",
    description:
      "Websockets, Node.js, Next.js, Redis( pub/sub), React hook form",
    github_repo_link: "https://github.com/fkk989/chat-app",
    hosted_link: "https://chat-app-delta-two-82.vercel.app"
  },
  {
    imageSrc: "zapier.png",
    title: "Zapier Clone (In Progress)",
    description:
      "Turborepo, Next.js, typescript, Kafka, React hook form, postgres",
    github_repo_link: "https://github.com/fkk989/zapier-clone",
  },
  {
    imageSrc: "react-custom-component.png",
    title: "React Custom Component",
    description:
      "Custom components which gives you the  functional behaviour with full customization",
    github_repo_link: "https://github.com/fkk989/custom-components",
  },
  {
    imageSrc: "organizerPro.png",
    title: "Organier Pro",
    description: "Typescript, React.js, Tailwind Css, Node.js, Prisma, Docker",
    github_repo_link: "https://github.com/fkk989/task-manager",
    hosted_link: "https://task-manager-xy.vercel.app/",
  }
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
