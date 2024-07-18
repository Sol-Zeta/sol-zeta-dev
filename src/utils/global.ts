import { GistCard } from "@/components/GithubCard";
// import { getGist, getGists, getMyGithubUser } from "@/http/services/github";

export const env = (key: string) => process.env[key];

export const getEnv = () => process.env.NODE_ENV;

export const isProductionEnv = () => getEnv() === "production";

export const getApiBaseUrl = () =>
  isProductionEnv()
    ? process.env.NEXT_PUBLIC_BASE_URL
    : process.env.NEXT_PUBLIC_DEV_BASE_URL;
