import { Icons } from "@/components/Icon";
import { TechTags } from "@/components/ProjectTag/utils";
import { ValueOf } from "next/dist/shared/lib/constants";

export const CHECKBOX_FILTERS = [
  {
    title: "technologies",
    isCheckboxList: true,
    items: [
      { id: "react", title: "React JS", icon: Icons.REACT },
      { id: "redux", title: "Redux", icon: Icons.REDUX },
      { id: "next", title: "Next JS", icon: Icons.NEXTJS },
      { id: "vercel", title: "Vercel", icon: Icons.VERCEL },
      { id: "html", title: "HTML 5", icon: Icons.HTML },
      { id: "css", title: "CSS 3", icon: Icons.CSS },
      { id: "sass", title: "SASS", icon: Icons.SASS },
      { id: "tailwind", title: "Tailwind", icon: Icons.TAILWIND },
      { id: "storybook", title: "Storybook", icon: Icons.STORYBOOK },
      { id: "figma", title: "Figma", icon: Icons.FIGMA },
      { id: "tailwind", title: "Tailwind", icon: Icons.TAILWIND },
      { id: "javascript", title: "JavaScript", icon: Icons.JAVASCRIPT },
      { id: "typescript", title: "TypeScript", icon: Icons.TYPESCRIPT },
      { id: "git", title: "Git", icon: Icons.GIT },
      { id: "github", title: "Github", icon: Icons.GITHUB },
      { id: "gitlab", title: "Gitlab", icon: Icons.GITLAB },
      { id: "jest", title: "Jest", icon: Icons.JEST },
      { id: "cypress", title: "Cypress", icon: Icons.CYPRESS },
      { id: "graphql", title: "GraphQL", icon: Icons.GRAPHQL },
      { id: "firebase", title: "Firebase", icon: Icons.FIREBASE },
      { id: "nodejs", title: "NodeJs", icon: Icons.NODEJS },
      { id: "npm", title: "NPM", icon: Icons.NPM },
      { id: "expressjs", title: "ExpressJS", icon: Icons.EXPRESS },
      { id: "strapi", title: "Strapi", icon: Icons.STRAPI },
      { id: "mongod", title: "MongoDB", icon: Icons.MONGO },
      { id: "postgresql", title: "PostgreSQL", icon: Icons.POSTGRESQL },
      { id: "jira", title: "Jira", icon: Icons.JIRA },
      { id: "azure", title: "Azure", icon: Icons.AZURE },
      { id: "jenkins", title: "Jenkins", icon: Icons.JENKINS },
      { id: "seo", title: "SEO Techniques", icon: Icons.SEO },
      { id: "ssr", title: "SSR (Server Side Rendering)", icon: Icons.SERVER },
      { id: "google", title: "Google Analytics", icon: Icons.GOOGLE_ANALYTICS },
      { id: "docker", title: "Docker", icon: Icons.DOCKER },
      { id: "kubernetes", title: "Kubernetes", icon: Icons.KUBERNETES },
      { id: "aws", title: "AWS Cloud Services", icon: Icons.AWS },
      { id: "chakra", title: "Chakra UI", icon: Icons.CHAKRA_UI },
      { id: "highcharts", title: "HighCharts", icon: Icons.HIGHCHARTS },
      { id: "chakra", title: "Chakra UI", icon: Icons.CHAKRA_UI },
      { id: "native", title: "React Native", icon: Icons.REACT_NATIVE },
      { id: "expo", title: "Expo", icon: Icons.EXPO },
      { id: "xcode", title: "xCode", icon: Icons.XCODE },
      { id: "android", title: "Android Studio", icon: Icons.ANDROID_STUDIO },
    ],
  },
];

export interface FullContent {
  id: string;
  image?: string;
  imageAlt?: string;
  text?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: (ValueOf<TechTags>)[];
  highlightedTags: (ValueOf<TechTags>)[];
  fullContent: FullContent[];
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "graphic-editor",
    title: "Graphic Editor",
    description: "A custom graphic editor made for Ofertia stakeholders",
    image:
      "https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      TechTags.REACT,
      TechTags.TAILWIND,
      TechTags.SASS,
      TechTags.STORYBOOK,
      TechTags.NODEJS,
    ],
    highlightedTags: [TechTags.REACT, TechTags.STORYBOOK, TechTags.REDUX],
    fullContent: [
      {
        id: "a1",
        text: "long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content.",
        image:
          "https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "graphic editor",
      },
      {
        id: "a2",
        text: "long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content.",
      },
      {
        id: "a3",
        text: "long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content.",
        image:
          "https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "graphic editor",
      },
      {
        id: "a4",
        text: "long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content.",
        image:
          "https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "graphic editor",
      },
      {
        id: "a5",
        text: "long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content.",
        image:
          "https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "graphic editor",
      },
      {
        id: "a6",
        text: "long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content long content.",
        image:
          "https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "graphic editor",
      },
    ],
  },
  // {
  //   id: "backsystem",
  //   title: "Backsystem",
  //   description: "A backoffice web application made for Ofertia stakeholders",
  //   image:
  //     "https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   tags: [
  //     TechTags.NEXT,
  //     TechTags.REACT,
  //     TechTags.TAILWIND,
  //     TechTags.SASS,
  //     TechTags.STORYBOOK,
  //     TechTags.NODEJS,
  //   ],
  //   highlightedTags: [TechTags.REACT, TechTags.NEXTJS],
  //   fullContent: [
  //     {
  //       id: "a1",
  //       text: "long content",
  //       image: "",
  //       imageAlt: "",
  //     },
  //   ],
  // },
  {
    id: "offers-and-catalogues",
    title: "Offers Searcher",
    description:
      "A custom website to search over thousands of catalogues to allow the user to find the offers he needs",
    image:
      "https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      TechTags.REACT,
      TechTags.TAILWIND,
      TechTags.SASS,
      TechTags.STORYBOOK,
      TechTags.NODEJS,
    ],
    highlightedTags: [TechTags.REACT, TechTags.NODEJS],
    fullContent: [
      {
        id: "a1",
        text: "long content",
        image: "",
        imageAlt: "",
      },
    ],
  },
  {
    id: "elearning-platform",
    title: "E-learning platform",
    description: "Gamified e-learning platform for e-sports",
    image:
      "https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [TechTags.REACT, TechTags.SASS, TechTags.STORYBOOK, TechTags.NODEJS],
    highlightedTags: [TechTags.REACT, TechTags.TYPESCRIPT, TechTags.SASS],
    fullContent: [
      {
        id: "a1",
        text: "long content",
        image: "",
        imageAlt: "",
      },
    ],
  },
];
