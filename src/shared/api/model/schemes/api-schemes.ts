import axios from "axios";
import { BASE_URL } from "../consts";

export const BASE_API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": false,
  },
});