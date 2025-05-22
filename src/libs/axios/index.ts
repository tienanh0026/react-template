import axios from 'axios';

// Create a default Axios instance
export const api = axios.create({
  baseURL: '/',
  withCredentials: true, // for cookies or ADFS
  timeout: 10000, // optional: set a global timeout
});

// Add request interceptor (e.g., auth token)
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

// Add response interceptor (e.g., handle errors globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (!response) {
      return Promise.reject(new Error('Network error'));
    }
    return Promise.reject(error);
  },
);
