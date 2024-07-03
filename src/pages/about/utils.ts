import { CodeLine } from "@/components/Code/Code";
import {
  ATTACH_TO_TITLE_KEY,
  CodeTreeItemProps,
} from "@/components/Code/CodeTree/CodeTreeItem";
import { getColor } from "@/styles/utils";

export const TREE_MENU_DATA = [
  {
    title: "personal-info",
    items: [
      { title: "bio", color: getColor("accent").salmon },
      { title: "job-experience", color: getColor("accent").green },
      { title: "education", color: getColor("secondary").blue },
    ],
  },
];

export const bioSnippet: CodeLine[] = [
  {
    comment:
      "bio\n \nMy name is <b>Soledad Pattoglio</b>, but as a 00s child I am, \nI have a nickname and is Sol Zeta. \n \nI'm a Frontend Developer specializing in React, \nwith experience in NextJS, SASS, Tailwind, and more. \nMy fullstack skills include NodeJS, ExpressJS, and databases like NoSQL and SQL. \nI've worked with startups and large companies, \ntackling projects from scratch and maintaining legacy systems. \nExperienced with CI/CD tools like Jenkins and testing with Cypress. \n \nCurious and a constant learner, I love pair programming \nand collaboration. \nAlways excited to take on new challenges and innovate in the tech space.",
    isBlock: true,
  },
];

export const jobSnippet: CodeTreeItemProps[] = [
  {
    [ATTACH_TO_TITLE_KEY]: "date",
    date: "2022 - 2024",
    title: "Frontend Web Developer",
    company: "Ofertia - Mediapost Spain",
    role: "Frontend Web Developer",
    responsibilities: [
      "Developing new backoffice app",
      "Creation new features in React apps",
      "Legacy code maintenance",
      "Google Tag and Google Analytics integration",
    ],
    skills: [
      "Continuous learning and improvement",
      "Problem-solving and innovation",
    ],
    technologies: [
      "ReactJS",
      "GraphQL",
      "NextJS",
      "NodeJS",
      "PostgreSQL",
      "Jenkins",
      "Jest",
      "Cypress",
      "Storybook",
      "Tailwind",
      "Google Analytics",
      "SEO",
      "SSR apps development",
    ],
  },
];
export const educationSnippet: CodeLine[] = [
  {
    comment:
      "education\n \nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.",
    isBlock: true,
  },
];

export const LEFT_CONTENT = [
  { id: "bio", title: "bio", snippet: bioSnippet },
  {
    id: "job-experience",
    title: "job-experience",
    snippet: jobSnippet,
  },
  {
    id: "education",
    title: "education",
    snippet: educationSnippet,
  },
];
