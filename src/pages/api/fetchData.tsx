import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch("https://api.example.com/data", {
    headers: {
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  });

  if (!response.ok) {
    res.status(response.status).json({ error: "Error fetching data" });
    return;
  }

  const data = await response.json();
  res.status(200).json(data);
}
