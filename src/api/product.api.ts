import { BASE_URL } from "@/constants/api.constant";
import axios from "axios";

const api: any = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

export const productListAPI = () => api.get("/products");
export const productDetailsAPI = (id: number) => api.get(`/products/${id}`);

export default {
  productListAPI,
  productDetailsAPI,
};
