import axios from "axios";

export const axiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api", // use relative URL in production
=======
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
>>>>>>> saved-changes
  withCredentials: true,
});
