import axios from 'axios';

const baseApi = axios.create({
  //   baseURL: 'https://your-api-endpoint.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default baseApi;
