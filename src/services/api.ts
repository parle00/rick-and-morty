import axios from "axios";
import { API_URL } from "./const";

const axiosCreateObject = {
  baseURL: API_URL,
};

export const publicAxiosİnstance = axios.create(axiosCreateObject);

publicAxiosİnstance.defaults.headers.common = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};
