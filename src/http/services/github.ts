import { Gist, Owner } from "@/types/github";
import axiosInstance from "../utils";
export const getMyGithubUser = async (): Promise<Owner | undefined> => {
  try {
    const response = await axiosInstance.get(
      "https://api.github.com/users/Sol-Zeta",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    );
    console.log("get user", response.data.login);
    return response.data;
  } catch (error) {
    console.log({ error });
    return;
  }
};

export const getGists = async (): Promise<Gist[] | undefined> => {
  try {
    const response = await axiosInstance.get(
      "https://api.github.com/users/Sol-Zeta/gists",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    );
    console.log("get gests", response.data);
    return response.data;
  } catch (error) {
    console.log({ error });
    return;
  }
};
export const getGist = async (url: string): Promise<any> => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.log({ error });
    return "";
  }
};
