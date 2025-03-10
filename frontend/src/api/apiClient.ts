import axios from "axios";

// Viteでの環境変数アクセス方法
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
    },
});

export default apiClient;