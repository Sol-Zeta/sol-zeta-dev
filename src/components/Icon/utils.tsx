import AndroidStudio from "@/assets/icons/android.svg";
import Aws from "@/assets/icons/aws.svg";
import Azure from "@/assets/icons/azure.svg";
import ChakraUi from "@/assets/icons/chakraui.svg";
import CheckboxBlank from "@/assets/icons/checkbox-blank-line.svg";
import CheckboxCheck from "@/assets/icons/checkbox-check-line.svg";
import CheckboxIntermediate from "@/assets/icons/checkbox-indeterminate-line.svg";
import ChevronDown from "@/assets/icons/chevron-down.svg";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import ChevronRight from "@/assets/icons/chevron-right.svg";
import ChevronUp from "@/assets/icons/chevron-up.svg";
import Close from "@/assets/icons/close-fill.svg";
import Coffee from "@/assets/icons/coffee.svg";
import Css from "@/assets/icons/css3.svg";
import Cypress from "@/assets/icons/cypress.svg";
import Directory from "@/assets/icons/directory.svg";
import Docker from "@/assets/icons/docker.svg";
import Expo from "@/assets/icons/expo.svg";
import Express from "@/assets/icons/express.svg";
import Figma from "@/assets/icons/figma.svg";
import Firebase from "@/assets/icons/firebase.svg";
import Git from "@/assets/icons/git.svg";
import Github from "@/assets/icons/github.svg";
import Gitlab from "@/assets/icons/gitlab.svg";
import GoogleAnalytics from "@/assets/icons/google-analytics.svg";
import Graphql from "@/assets/icons/graphql.svg";
import Highcharts from "@/assets/icons/highcharts.svg";
import Html from "@/assets/icons/html5.svg";
import Javascript from "@/assets/icons/javascript.svg";
import Jenkins from "@/assets/icons/jenkins.svg";
import Jest from "@/assets/icons/jest.svg";
import Jira from "@/assets/icons/jira.svg";
import Kubernetes from "@/assets/icons/kubernetes.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import MongoDb from "@/assets/icons/mongodb.svg";
import NextJs from "@/assets/icons/nextjs.svg";
import NodeJs from "@/assets/icons/nodejs.svg";
import Npm from "@/assets/icons/npm.svg";
import PostgreSql from "@/assets/icons/postgresq.svg";
import ReactJs from "@/assets/icons/reactjs.svg";
import Redux from "@/assets/icons/redux.svg";
import Sass from "@/assets/icons/sass.svg";
import Search from "@/assets/icons/search-line.svg";
import Seo from "@/assets/icons/seo.svg";
import Server from "@/assets/icons/server.svg";
import StarFill from "@/assets/icons/star-fill.svg";
import StarHalf from "@/assets/icons/star-half-line.svg";
import StarEmpty from "@/assets/icons/star-line.svg";
import Storybook from "@/assets/icons/storybook.svg";
import Strapi from "@/assets/icons/strapi.svg";
import Tailwind from "@/assets/icons/tailwind.svg";
import TypeScript from "@/assets/icons/typescript.svg";
import Vercel from "@/assets/icons/vercel.svg";
import XCode from "@/assets/icons/xcode.svg";

export interface IconButtonProps {
  isButton?: boolean;
  href?: string;
  width?: number;
  height?: number;
}

export interface IconProps extends IconButtonProps {
  icon: keyof typeof Icons;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export enum Icons {
  ANDROID_STUDIO = "ANDROID_STUDIO",
  AWS = "AWS",
  AZURE = "AZURE",
  CHAKRA_UI = "CHAKRA_UI",
  CHECKBOX_CHECK = "CHECKBOX_CHECK",
  CHECKBOX_BLANK = "CHECKBOX_BLANK",
  CHECKBOX_INTERMEDIATE = "CHECKBOX_INTERMEDIATE",
  CHEVRON_DOWN = "CHEVRON_DOWN",
  CHEVRON_LEFT = "CHEVRON_LEFT",
  CHEVRON_RIGHT = "CHEVRON_RIGHT",
  CHEVRON_UP = "CHEVRON_UP",
  CLOSE = "CLOSE",
  COFFEE = "COFFEE",
  CONTEXT_API = "CONTEXT_API",
  CSS = "CSS",
  CYPRESS = "CYPRESS",
  DIRECTORY = "DIRECTORY",
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
  SEARCH = "SEARCH",
  SEO = "SEO",
  SERVER = "SERVER",
  STAR_FILL = "STAR_FILL",
  STAR_HALF = "STAR_HALF",
  STAR_EMPTY = "STAR_EMPTY",
  STORYBOOK = "STORYBOOK",
  STRAPI = "STRAPI",
  TAILWIND = "TAILWIND",
  TYPESCRIPT = "TYPESCRIPT",
  VERCEL = "VERCEL",
  XCODE = "XCODE",
}

export const IconChildren = {
  [Icons.ANDROID_STUDIO]: <AndroidStudio />,
  [Icons.AWS]: <Aws />,
  [Icons.AZURE]: <Azure />,
  [Icons.CHAKRA_UI]: <ChakraUi />,
  [Icons.CHECKBOX_BLANK]: <CheckboxBlank />,
  [Icons.CHECKBOX_CHECK]: <CheckboxCheck />,
  [Icons.CHECKBOX_INTERMEDIATE]: <CheckboxIntermediate />,
  [Icons.CHEVRON_DOWN]: <ChevronDown />,
  [Icons.CHEVRON_LEFT]: <ChevronLeft />,
  [Icons.CHEVRON_RIGHT]: <ChevronRight />,
  [Icons.CHEVRON_UP]: <ChevronUp />,
  [Icons.CLOSE]: <Close />,
  [Icons.COFFEE]: <Coffee />,
  [Icons.CSS]: <Css />,
  [Icons.CYPRESS]: <Cypress />,
  [Icons.DIRECTORY]: <Directory />,
  [Icons.DOCKER]: <Docker />,
  [Icons.EXPO]: <Expo />,
  [Icons.EXPRESS]: <Express />,
  [Icons.FIGMA]: <Figma />,
  [Icons.FIREBASE]: <Firebase />,
  [Icons.GIT]: <Git />,
  [Icons.GITHUB]: <Github />,
  [Icons.GITLAB]: <Gitlab />,
  [Icons.GOOGLE_ANALYTICS]: <GoogleAnalytics />,
  [Icons.GRAPHQL]: <Graphql />,
  [Icons.HIGHCHARTS]: <Highcharts />,
  [Icons.HTML]: <Html />,
  [Icons.JAVASCRIPT]: <Javascript />,
  [Icons.JENKINS]: <Jenkins />,
  [Icons.JEST]: <Jest />,
  [Icons.JIRA]: <Jira />,
  [Icons.KUBERNETES]: <Kubernetes />,
  [Icons.LINKEDIN]: <Linkedin />,
  [Icons.MONGO]: <MongoDb />,
  [Icons.NEXTJS]: <NextJs />,
  [Icons.NODEJS]: <NodeJs />,
  [Icons.NPM]: <Npm />,
  [Icons.POSTGRESQL]: <PostgreSql />,
  [Icons.REACT]: <ReactJs />,
  [Icons.REACT_NATIVE]: <ReactJs />,
  [Icons.REDUX]: <Redux />,
  [Icons.SASS]: <Sass />,
  [Icons.SEARCH]: <Search />,
  [Icons.SEO]: <Seo />,
  [Icons.SERVER]: <Server />,
  [Icons.STAR_FILL]: <StarFill />,
  [Icons.STAR_HALF]: <StarHalf />,
  [Icons.STAR_EMPTY]: <StarEmpty />,
  [Icons.STORYBOOK]: <Storybook />,
  [Icons.STRAPI]: <Strapi />,
  [Icons.TAILWIND]: <Tailwind />,
  [Icons.TYPESCRIPT]: <TypeScript />,
  [Icons.VERCEL]: <Vercel />,
  [Icons.XCODE]: <XCode />,
};