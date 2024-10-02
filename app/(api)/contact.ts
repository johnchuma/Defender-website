import axios from "axios";
import { BASEURL } from "./apiconfig";

const baseURL = BASEURL;

const api = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  interface InquiryData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

export const CONTACT_API = (data:InquiryData) => {
    return api({
        url: `/inquiries`,
        data: data,
        method: "POST",
      });
};