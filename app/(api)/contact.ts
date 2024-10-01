import axios from "axios";
import { BASEURL } from "./apiconfig";

const baseURL = BASEURL;

const api = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

export const CONTACT_API = (data:any) => {
    return api({
        url: `/inquiries`,
        data: data,
        method: "POST",
      });
};