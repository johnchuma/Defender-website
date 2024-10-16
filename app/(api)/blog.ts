import axios from "axios";
import { BASEURL } from "./apiconfig";

const baseURL = BASEURL;

// Create axios instance with default settings
const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ==== TYPES =====
interface blogData {
  uuid: string | number;
  title: string;
  content: string;
  author: string;
  publishedDate: string;
}

// ==== API ENDPOINTS =====

// GET all blogs
export const fetchAllBlogs = (page: number = 1, limit: number = 15) => {
  return api({
    url: "blogs",
    method: "GET",
    params: {
      page,
      limit,
    },
  });
};

// GET featured blogs
export const fetchFeaturedBlogs = () => {
  return api({
    url: "blogs/featured",
    method: "GET",
  });
};

// GET a specific blog by ID
export const fetchBlogById = (id: string | string[]) => {
  return api({
    url: `blogs/${id}`,
    method: "GET",
  });
};

// UPDATE a specific blog by ID
export const updateBlogById = (id: string | number, data: blogData) => {
  return api({
    url: `blogs/${id}`,
    data: data,
    method: "PUT",
  });
};
