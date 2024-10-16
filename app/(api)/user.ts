import axios from "axios";
import { BASEURL } from "./apiconfig";

const baseURL = BASEURL;

const api = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

export const USERDETAILS_API = (accessToken:string) => {
    return api({
        url: `/users/me`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
      });
};
