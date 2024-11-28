// api.js
import axios from "axios";

const api = axios.create({
    baseURL: "/api/v1/auth",
  });
  

export default api;
