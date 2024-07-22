import { GistCard } from "@/components/GithubCard";
import { Owner } from "@/types/github";
import { getApiBaseUrl } from "@/utils/global";
import axiosInstance from "@/api/utils";

export interface GistData {
  user?: Owner;
  gists?: GistCard[];
}

const apiBaseUrl = getApiBaseUrl();

const getGist = async (url: string) => {
  try {
    const { data: code } = await axiosInstance.get(
      `${apiBaseUrl}api/github/gistByUrl?url=${url}`
    );
    return code;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const getGistsData = async (): Promise<GistData | undefined> => {
  try {
    const { data: user } = await axiosInstance.get(`${apiBaseUrl}api/github/user`);
    const { data: raw_gists } = await axiosInstance.get(
      `${apiBaseUrl}api/github/gists`
    );
    const gists: GistCard[] = [];

    if (!raw_gists?.length) {
      return;
    }

    for (let i = 0; i < raw_gists.length; i++) {
      const filesObject = raw_gists[i].files;
      for (const key in filesObject) {
        if (Object.prototype.hasOwnProperty.call(filesObject, key)) {
          if (!key.includes("fragment")) continue;
          const gist: GistCard = {
            description: raw_gists[i].description,
            url: raw_gists[i].html_url,
            creationDate: raw_gists[i].created_at,
            code: filesObject[key].raw_url,
          };
          gists.push(gist);
        }
      }
    }

    const gistsCode = await Promise.all(
      gists.map((gist) => getGist(gist.code))
    );

    for (let i = 0; i < gists.length; i++) {
      gists[i].code = gistsCode[i];
    }

    return { user, gists };
  } catch (error) {
    console.error(error);
    return;
  }
};
