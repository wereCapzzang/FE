import axios from 'axios';

const baseApi = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default baseApi;
