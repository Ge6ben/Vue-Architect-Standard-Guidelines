import axios from 'axios';
import router from '@/router';
import { alertService } from '@/services/alertServices';

// Create an Axios instance with a base URL and other configurations
const axiosInstance = axios.create({
  baseURL: 'https://www.ag-grid.com/example-assets', // Replace with your actual base URL
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Optional: Timeout after 10 seconds
});

// Adding request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Perform actions before request is sent
    console.log('Sending request to', config.url);
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Adding response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('Getting Response', response);

    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      router.push('/login');
      alertService.danger('Session Expired, please login again.');
    } else if (error.response.status === 422) {
      for (const [key, value] of Object.entries(
        error.response?.data.errors || {},
      )) {
        alertService.danger(error.response?.data.errors[key][0]);
      }
    } else if (error.response.status === 500 || error.response.status === 404) {
      alertService.danger(error.response?.data.message);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
