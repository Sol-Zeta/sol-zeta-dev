import { CodeLine } from "@/components/Code";
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
    id: 'job-1',
    [ATTACH_TO_TITLE_KEY]: "date",
    date: "2022 - 2024",
    title: "Frontend Web Developer",
    company: "Ofertia - Mediapost Spain",
    role: "Frontend Web Developer",
    responsibilities: [
      "Develop new backoffice app",
      "Create new features in React apps",
      "Maintain Legacy code maintenance",
      "Integrate Google Tag and Google Analytics",
    ],
    skills: [
      "Continuous learning and improvement",
      "Problem-solving and innovation",
    ],
    technologies: [
      "ReactJS",
      "NextJS",
      "Redux",
      "ContextAPI",
      "Git",
      "GraphQL",
      "Strapi",
      "NodeJS",
      "PostgreSQL",
      "Jenkins",
      "Jest",
      "Cypress",
      "Storybook",
      "Tailwind",
      "Google Analytics",
      "SEO techniques",
      "SSR apps development",
      "AWS cloud services",
    ],
  },
  {
    id: 'job-2',
    [ATTACH_TO_TITLE_KEY]: "date",
    date: "2022",
    title: "Frontend Web Developer",
    company: "Laudus",
    responsibilities: [
      "Develop ERP app features with ReactJS",
      "Comunicate with design team",
      "Research libraries for feature improvements",
    ],
    technologies: [
      "ReactJS",
      "TypeScript",
      "Redux",
      "ContextAPI",
      "Git",
      "SASS",
      "Chakra UI",
      "Highcharts",
    ],
  },
  {
    id: 'job-3',
    [ATTACH_TO_TITLE_KEY]: "date",
    date: "2021 - 2022",
    title: "Frontend Web Developer",
    company: "Wiper Gaming - Startup",
    project: "E-sports digital learning platform",
    responsibilities: [
      "Develop component library with ReactJS",
      "Develop new features with NextJS",
      "Comunicate with design team",
    ],
    technologies: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "ContextAPI",
      "SASS",
      "Git",
      "Vercel",
    ],
  },
  {
    id: 'job-4',
    [ATTACH_TO_TITLE_KEY]: "date",
    date: "2021",
    title: "Mobile Developer",
    company: "Joy to the World 2021 - Startup",
    project: "iOS and Android interactive app",
    ['special features']: [
      "Interactive map",
      "AR filters",
      "Audio player",
      "Login with Google and Apple",
    ],
    responsibilities: [
      "Develop mobile features with React Native",
      "Connect app with the backend in Firebase",
      "Export app for iOS and Android",
      "Submit application to App Store and Google Store",
    ],
    technologies: [
      "React Native",
      "Expo",
      "XCode",
      "Android Studio",
      "SASS",
      "Git",
      "Firebase",
    ],
  },
  {
    id: 'job-5',
    [ATTACH_TO_TITLE_KEY]: "date",
    date: "2020 - 2021",
    title: "Full Stack Development Teacher",
    company: "The Bridge",
    responsibilities: [
      "Prepare and teach Fullstack development classes",
      "Support students individually",
    ],
  },
  {
    id: 'job-6',
    [ATTACH_TO_TITLE_KEY]: "date",
    date: "2020",
    title: "Frontend Web Developer",
    company: "Poolpo.in - Startup",
    project: "Insurance policy comparison platform with AI",
    responsibilities: [
      "Develop app from sratch with ReactJS",
      "Comunicate with design and backend team",
    ],
    technologies: [
      "ReactJS",
      "JavaScript",
      "ContextAPI",
      "SASS",
      "Git",
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
    showLineNumber: false,
  },
  {
    id: "education",
    title: "education",
    snippet: educationSnippet,
  },
];
