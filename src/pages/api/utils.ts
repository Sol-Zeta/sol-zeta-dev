import axios from "axios";
import { getApiBaseUrl } from "@/utils/global";
import { NextApiRequest, NextApiResponse } from "next";

const apiBaseUrl = getApiBaseUrl();

const http = axios.create({
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": apiBaseUrl,
  },
});

export default http;

// lib/corsMiddleware.js

const allowedOrigins = [
  apiBaseUrl,
  'https://sol-zeta-dev-git-main-solzeta1s-projects.vercel.app/',
  'https://sol-zeta-luur9rbo0-solzeta1s-projects.vercel.app/'
];

export const corsMiddleware = (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
  const origin = req.headers.origin || '';

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    // Handle preflight requests
    res.status(200).end();
    return;
  }

  next();
}

