import axios from 'axios';

// Create an Axios instance with a base URL and other configurations
const axiosInstance = axios.create({
  baseURL: 'https://www.ag-grid.com/example-assets', // Replace with your actual base URL
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Timeout after 10 seconds
});

export default axiosInstance;
