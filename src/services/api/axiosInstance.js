import axios from "axios";

// Base URL dibaca dari file .env (Vite: wajib diawali VITE_)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
});

// Interceptor: logging error di satu tempat saja
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export default api;
