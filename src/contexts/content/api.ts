import axios from "axios";
import { Platform } from "react-native";
import { Article, Celebrity, Ad, Pagination } from "./types";

const HOST =  "10.0.2.2";
const API = axios.create({ baseURL: `http://192.168.1.253:3000/api/content` });

export const getArticles = async (pagination: Pagination, token: string) => {  
  const response = await API.post("/articles", {
    pagination
  },
   {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.data) {
    const articles = response.data.content as Article[]
    const pagination = response.data.pagination as Pagination

    return {
      articles, 
      pagination
    }
  } else {
    return false;
  }
};

  export const getCelebArticles = async (celebId: string, token: string) => {
  const response = await API.get(`/articles/${celebId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.data) {
    return response.data.content as Article[];
  }
}; 

export const getCelebrityById = async (celebId: string, token: string) => {
  const response = await API.get(`/celebrities/${celebId}`, {
    headers: { Authorization: `Bearer ${token}`}
  })

  if (response.data) {
    return response.data.content as Celebrity
  }
} 

export const getCelebrities = async () => {
  const response = await API.get("/celebreties");

  if (response.data) {
    return response.data.content as Celebrity[];
  }
};
export const getAds = async () => {
  const response = await API.get("/ads");

  if (response.data) {
    return response.data.content as Ad[];
  }
};
