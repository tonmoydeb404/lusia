import { CMSStackSkillLevelEnum, TCMSStack } from "@/types/cms/db/stack";

export const stacks: TCMSStack[] = [
  {
    id: "stack-frontend",
    title: "Frontend",
    items: [
      {
        id: "html",
        title: "HTML5",
        description: "Markup language for structuring web content.",
        icon: {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          alt: "HTML5 Icon",
        },
        skillLevel: null,
      },
      {
        id: "css",
        title: "CSS3",
        description: "Stylesheet language for designing web pages.",
        icon: {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          alt: "CSS3 Icon",
        },
        skillLevel: CMSStackSkillLevelEnum.ADVANCED,
      },
      {
        id: "react",
        title: "React",
        description: "JavaScript library for building user interfaces.",
        icon: {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          alt: "React Icon",
        },
        skillLevel: CMSStackSkillLevelEnum.ADVANCED,
      },
    ],
  },
  {
    id: "stack-backend",
    title: "Backend",
    items: [
      {
        id: "nodejs",
        title: "Node.js",
        description: "JavaScript runtime built on Chrome's V8 engine.",
        icon: {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          alt: "Node.js Icon",
        },
        skillLevel: null,
      },
      {
        id: "nestjs",
        title: "NestJS",
        description:
          "Node.js framework for building efficient server-side apps.",
        icon: {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
          alt: "NestJS Icon",
        },
        skillLevel: CMSStackSkillLevelEnum.ADVANCED,
      },
    ],
  },
  {
    id: "stack-database",
    title: "Databases",
    items: [
      {
        id: "mongodb",
        title: "MongoDB",
        description: "NoSQL document database for high-volume data storage.",
        icon: {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          alt: "MongoDB Icon",
        },
        skillLevel: CMSStackSkillLevelEnum.ADVANCED,
      },
      {
        id: "postgresql",
        title: "PostgreSQL",
        description: "Advanced open-source relational database.",
        icon: {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          alt: "PostgreSQL Icon",
        },
        skillLevel: CMSStackSkillLevelEnum.ADVANCED,
      },
    ],
  },
  {
    id: "stack-tools",
    title: "Tools & Platforms",
    items: [
      {
        id: "docker",
        title: "Docker",
        description: "Container platform for developing and deploying apps.",
        icon: {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          alt: "Docker Icon",
        },
        skillLevel: CMSStackSkillLevelEnum.ADVANCED,
      },
      {
        id: "git",
        title: "Git",
        description: "Distributed version control system.",
        icon: {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          alt: "Git Icon",
        },
        skillLevel: CMSStackSkillLevelEnum.ADVANCED,
      },
      {
        id: "github",
        title: "GitHub",
        description: "Code hosting platform for collaboration.",
        icon: {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          alt: "GitHub Icon",
        },
        skillLevel: CMSStackSkillLevelEnum.ADVANCED,
      },
    ],
  },
  {
    id: "stack-devops",
    title: "DevOps",
    items: [
      {
        id: "linux",
        title: "Linux",
        description: "Open-source operating system widely used in servers.",
        icon: {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
          alt: "Linux Icon",
        },
        skillLevel: CMSStackSkillLevelEnum.ADVANCED,
      },
      {
        id: "nginx",
        title: "NGINX",
        description: "High-performance HTTP server and reverse proxy.",
        icon: {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
          alt: "NGINX Icon",
        },
        skillLevel: CMSStackSkillLevelEnum.ADVANCED,
      },
    ],
  },
];
