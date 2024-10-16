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
    withDelivery: boolean;
    country: string;
    region: string;
    district: string;
    address: string;
    products: Product[];
  }  

export const ORDER_API = (data:InquiryData,accessToken:string) => {
    return api({
        url: `/orders`,
        data: data,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
      },
      });
};

export const PREVIOUS_ORDER_API = (data:InquiryData,accessToken:string) => {
    return api({
        url: `/orders/previous`,
        data: data,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
      },
      });
};

export const ACTIVE_ORDER_API = (data:InquiryData,accessToken:string) => {
    return api({
        url: `/orders`,
        data: data,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
      },
      });
};

export const ORDERBYUSER_API = (user_uuid: string,accessToken:string) => {
    return api({
        url: `/orders/user/${user_uuid}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
      },
      });
};

export const PENDING_ORDERBYUSER_API = (user_uuid: string,accessToken:string) => {
  return api({
      url: `/orders/pending/user/${user_uuid}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
    },
    });
};

export const DELIVERED_ORDERBYUSER_API = (user_uuid: string,accessToken:string) => {
  return api({
      url: `/orders/delivered/user/${user_uuid}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
    },
    });
};

export const ORDERSTATS_PERUSER_API = (user_uuid: string, accessToken:string) => {
  return api({
      url: `/stats/user/${user_uuid}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
    },
    });
};

export const UNIQUEORDER_API = (order_uuid: string,accessToken:string) => {
  return api({
      url: `/orders/${order_uuid}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
    },
    });
};

export const ORDERTRACKING_API = (order_uuid: string,accessToken:string) => {
  return api({
      url: `/order-tracking/order/${order_uuid}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
    },
    });
};