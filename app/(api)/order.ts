import axios from "axios";
import { BASEURL } from "./apiconfig";

const baseURL = BASEURL;

const api = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  interface Product {
    product: string;
    color: string;
    count: number;
    price: number;
  }
  
  interface InquiryData {
    user_uuid: string;
    withDelivery: boolean;
    country: string;
    region: string;
    district: string;
    address: string;
    products: Product[];
  }  

export const ORDER_API = (data:InquiryData) => {
    return api({
        url: `/orders`,
        data: data,
        method: "POST",
      });
};

export const PREVIOUS_ORDER_API = (data:InquiryData) => {
    return api({
        url: `/orders/previous`,
        data: data,
        method: "POST",
      });
};

export const ACTIVE_ORDER_API = (data:InquiryData) => {
    return api({
        url: `/orders/active`,
        data: data,
        method: "POST",
      });
};

export const UNIQUE_ORDER_API = (user_uuid: string) => {
    return api({
        url: `/orders/user/${user_uuid}`,
        method: "GET",
      });
};
