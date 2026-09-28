import axios from 'axios';

const API_BASE_URL = 'https://reel-food-app-backend.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export default api;
