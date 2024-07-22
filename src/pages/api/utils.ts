import axios from "axios";
import { getApiBaseUrl } from "@/utils/global";

const apiBaseUrl = getApiBaseUrl();

const http = axios.create({
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": apiBaseUrl,
  },
});

export default http;
