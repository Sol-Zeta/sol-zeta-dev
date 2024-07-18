import { Icons } from "@/components/Icon";
import { colors } from "@/styles/theme";

export enum TechTagsKeys {
  ANDROID_STUDIO = "ANDROID_STUDIO",
  AWS = "AWS",
  AZURE = "AZURE",
  CHAKRA_UI = "CHAKRA_UI",
  CONTEXT_API = "CONTEXT_API",
  CSS = "CSS",
  CYPRESS = "CYPRESS",
  DOCKER = "DOCKER",
  EXPO = "EXPO",
  EXPRESS = "EXPRESS",
  FIGMA = "FIGMA",
  FIREBASE = "FIREBASE",
  GIT = "GIT",
  GITHUB = "GITHUB",
  GITLAB = "GITLAB",
  GOOGLE_ANALYTICS = "GOOGLE_ANALYTICS",
  GRAPHQL = "GRAPHQL",
  HIGHCHARTS = "HIGHCHARTS",
  HTML = "HTML",
  JAVASCRIPT = "JAVASCRIPT",
  JENKINS = "JENKINS",
  JEST = "JEST",
  JIRA = "JIRA",
  KUBERNETES = "KUBERNETES",
  LINKEDIN = "LINKEDIN",
  MONGO = "MONGO",
  NEXTJS = "NEXTJS",
  NODEJS = "NODEJS",
  NPM = "NPM",
  POSTGRESQL = "POSTGRESQL",
  REACT = "REACT",
  REACT_NATIVE = "REACT_NATIVE",
  REDUX = "REDUX",
  SASS = "SASS",
  SEO = "SEO",
  SERVER = "SERVER",
  STORYBOOK = "STORYBOOK",
  STRAPI = "STRAPI",
  TAILWIND = "TAILWIND",
  TYPESCRIPT = "TYPESCRIPT",
  VERCEL = "VERCEL",
  XCODE = "XCODE",
}

export interface TechTag {
  id: keyof typeof TechTagsKeys;
  icon: keyof typeof Icons;
  color: string;
}

export interface TechTags {
  [key: string]: TechTag;
}

export const TechTags: TechTags = {
  [TechTagsKeys.ANDROID_STUDIO]: {
    id: "ANDROID_STUDIO",
    icon: TechTagsKeys.ANDROID_STUDIO,
    color: colors.green,
  },
  [TechTagsKeys.AWS]: { id: "AWS", icon: TechTagsKeys.AWS, color: colors.orange },
  [TechTagsKeys.AZURE]: { id: "AZURE", icon: TechTagsKeys.AZURE, color: colors.blue },
  [TechTagsKeys.CHAKRA_UI]: {
    id: "CHAKRA_UI",
    icon: TechTagsKeys.CHAKRA_UI,
    color: colors.lightGreen,
  },
  [TechTagsKeys.CONTEXT_API]: {
    id: "CONTEXT_API",
    icon: TechTagsKeys.CONTEXT_API,
    color: colors.lightOrange,
  },
  [TechTagsKeys.CSS]: { id: "CSS", icon: TechTagsKeys.CSS, color: colors.plum },
  [TechTagsKeys.CYPRESS]: {
    id: "CYPRESS",
    icon: TechTagsKeys.CYPRESS,
    color: colors.greenCode,
  },
  [TechTagsKeys.DOCKER]: {
    id: "DOCKER",
    icon: TechTagsKeys.DOCKER,
    color: colors.blue,
  },
  [TechTagsKeys.EXPO]: { id: "EXPO", icon: TechTagsKeys.EXPO, color: colors.white },
  [TechTagsKeys.EXPRESS]: {
    id: "EXPRESS",
    icon: TechTagsKeys.EXPRESS,
    color: colors.white,
  },
  [TechTagsKeys.FIGMA]: {
    id: "FIGMA",
    icon: TechTagsKeys.FIGMA,
    color: colors.salmon,
  },
  [TechTagsKeys.FIREBASE]: {
    id: "FIREBASE",
    icon: TechTagsKeys.FIREBASE,
    color: colors.lightOrange,
  },
  [TechTagsKeys.GIT]: { id: "GIT", icon: TechTagsKeys.GIT, color: colors.orange },
  [TechTagsKeys.GITHUB]: {
    id: "GITHUB",
    icon: TechTagsKeys.GITHUB,
    color: colors.lightGreen,
  },
  [TechTagsKeys.GITLAB]: {
    id: "GITLAB",
    icon: TechTagsKeys.GITLAB,
    color: colors.orange,
  },
  [TechTagsKeys.GOOGLE_ANALYTICS]: {
    id: "GOOGLE_ANALYTICS",
    icon: TechTagsKeys.GOOGLE_ANALYTICS,
    color: colors.lightOrange,
  },
  [TechTagsKeys.GRAPHQL]: {
    id: "GRAPHQL",
    icon: TechTagsKeys.GRAPHQL,
    color: colors.plum,
  },
  [TechTagsKeys.HIGHCHARTS]: {
    id: "HIGHCHARTS",
    icon: TechTagsKeys.HIGHCHARTS,
    color: colors.blue,
  },
  [TechTagsKeys.HTML]: { id: "HTML", icon: TechTagsKeys.HTML, color: colors.salmon },
  [TechTagsKeys.JAVASCRIPT]: {
    id: "JAVASCRIPT",
    icon: TechTagsKeys.JAVASCRIPT,
    color: colors.yellow,
  },
  [TechTagsKeys.JENKINS]: {
    id: "JENKINS",
    icon: TechTagsKeys.JENKINS,
    color: colors.salmon,
  },
  [TechTagsKeys.JEST]: { id: "JEST", icon: TechTagsKeys.JEST, color: colors.salmon },
  [TechTagsKeys.JIRA]: { id: "JIRA", icon: TechTagsKeys.JIRA, color: colors.plum },
  [TechTagsKeys.KUBERNETES]: {
    id: "KUBERNETES",
    icon: TechTagsKeys.KUBERNETES,
    color: colors.blue,
  },
  [TechTagsKeys.MONGO]: { id: "MONGO", icon: TechTagsKeys.MONGO, color: colors.green },
  [TechTagsKeys.NEXTJS]: {
    id: "NEXTJS",
    icon: TechTagsKeys.NEXTJS,
    color: colors.white,
  },
  [TechTagsKeys.NODEJS]: {
    id: "NODEJS",
    icon: TechTagsKeys.NODEJS,
    color: colors.greenCode,
  },
  [TechTagsKeys.NPM]: { id: "NPM", icon: TechTagsKeys.NPM, color: colors.salmon },
  [TechTagsKeys.POSTGRESQL]: {
    id: "POSTGRESQL",
    icon: TechTagsKeys.POSTGRESQL,
    color: colors.blue,
  },
  [TechTagsKeys.REACT]: {
    id: "REACT",
    icon: TechTagsKeys.REACT,
    color: colors.lightBlue,
  },
  [TechTagsKeys.REACT_NATIVE]: {
    id: "REACT_NATIVE",
    icon: TechTagsKeys.REACT_NATIVE,
    color: colors.lightBlue,
  },
  [TechTagsKeys.REDUX]: { id: "REDUX", icon: TechTagsKeys.REDUX, color: colors.plum },
  [TechTagsKeys.SASS]: { id: "SASS", icon: TechTagsKeys.SASS, color: colors.plum },
  [TechTagsKeys.SEO]: { id: "SEO", icon: TechTagsKeys.SEO, color: colors.yellow },
  [TechTagsKeys.SERVER]: {
    id: "SERVER",
    icon: TechTagsKeys.SERVER,
    color: colors.white,
  },
  [TechTagsKeys.STORYBOOK]: {
    id: "STORYBOOK",
    icon: TechTagsKeys.STORYBOOK,
    color: colors.salmon,
  },
  [TechTagsKeys.STRAPI]: {
    id: "STRAPI",
    icon: TechTagsKeys.STRAPI,
    color: colors.plum,
  },
  [TechTagsKeys.TAILWIND]: {
    id: "TAILWIND",
    icon: TechTagsKeys.TAILWIND,
    color: colors.blue,
  },
  [TechTagsKeys.TYPESCRIPT]: {
    id: "TYPESCRIPT",
    icon: TechTagsKeys.TYPESCRIPT,
    color: colors.blue,
  },
  [TechTagsKeys.VERCEL]: {
    id: "VERCEL",
    icon: TechTagsKeys.VERCEL,
    color: colors.plum,
  },
  [TechTagsKeys.XCODE]: { id: "XCODE", icon: TechTagsKeys.XCODE, color: colors.blue },
};
