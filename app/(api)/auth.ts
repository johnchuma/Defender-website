import axios from "axios";
import { BASEURL } from "./apiconfig";

const baseURL = BASEURL;

const api = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  interface LoginData {
    email: string;
    password: string;
  }

  interface GoogleLoginData {
    email: string;
  }

  interface RegisterData {
    name: string;
    email: string;
    phone: string;
    password: string;
  }

export const LOGIN_API = (data:LoginData) => {
    return api({
        url: `/users/auth/login`,
        data: data,
        method: "POST",
      });
};

export const GOOGLELOGIN_API = (data:GoogleLoginData) => {
  return api({
      url: `/users/auth/google`,
      data: data,
      method: "POST",
    });
};

export const REGISTER_API = (data:RegisterData) => {
    return api({
        url: `/users/`,
        data: data,
        method: "POST",
      });
};