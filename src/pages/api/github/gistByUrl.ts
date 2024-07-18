import { NextApiRequest, NextApiResponse } from "next";
import axiosInstance from "../utils";
const getGist = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    if (!req?.query?.url) return;
    const response = await axiosInstance.get(req.query.url as string);
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

export default getGist;
