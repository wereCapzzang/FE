import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'https://e833-115-91-214-30.ngrok-free.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});

export default baseApi;
