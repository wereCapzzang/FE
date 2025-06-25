import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'https://61c8-115-91-214-30.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default baseApi;
