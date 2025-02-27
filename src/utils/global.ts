import { GistCard } from "@/components/GithubCard";
import { Icons } from "@/components/Icon";
// import { getGist, getGists, getMyGithubUser } from "@/http/services/github";

export const env = (key: string) => process.env[key];

export const getEnv = () => process.env.NODE_ENV;

export const isProductionEnv = () => getEnv() === Environment.PRODUCTION;

export enum Environment {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
  LOCAL = 'local',
}

export const getApiBaseUrl = () => {
  const environment = getEnv();
  console.log('env =>', environment)
  switch (environment) {
    case Environment.PRODUCTION:
      return process.env.NEXT_PUBLIC_BASE_URL
    case Environment.DEVELOPMENT:
      return process.env.NEXT_PUBLIC_DEV_BASE_URL
      default:
      return process.env.NEXT_PUBLIC_LOCAL_BASE_URL
  }
}

export enum NavItemRoles {
  MAIN = "MAIN",
  LAST = "LAST",
}

export const NAV_SECTIONS = [
  {
    title: "_hello",
    href: "/",
    icon: Icons.HOME,
  },
  {
    title: "_about",
    href: "/about",
    icon: Icons.ABOUT,
  },
  // {
  //   title: "_projects",
  //   href: "/projects",
  // },
  {
    title: "code",
    desktop: false,
    href: "/code-snippets",
    icon: Icons.CODE,
  },
  {
    title: "_contact",
    role: NavItemRoles.LAST,
    href: "/contact",
    icon: Icons.CONTACT,
  },
  {
    title: "github",
    top: true,
    desktop: false,
    href: "https://github.com/Sol-Zeta",
    icon: Icons.GITHUB,
  },
  {
    title: "linkedin",
    top: true,
    desktop: false,
    href: "https://www.linkedin.com/in/mspattoglio/",
    icon: Icons.LINKEDIN,
  },
];
