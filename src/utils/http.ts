import axios, { AxiosInstance, AxiosResponse } from 'axios';

const http: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

http.interceptors.response.use((response: AxiosResponse) => response?.data);

export default http;
