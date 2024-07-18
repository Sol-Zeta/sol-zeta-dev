import { Gist } from "@/types/github";
import axiosInstance from "../utils";
import type { NextApiRequest, NextApiResponse } from "next";

export const getGists = async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<Gist[] | undefined> => {
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
    if (response.statusText !== "OK") {
      res.status(response.status).json({ error: "Error fetching data" });
      return;
    }
    res.status(200).json(response.data);
    return response.data;
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
    return;
  }
};

export default getGists;
