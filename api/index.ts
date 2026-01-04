import axios, {AxiosRequestHeaders, AxiosResponse} from 'axios';
import {baseURL} from '../constants/api';
import {logout, useLogout} from '../utils/useLogout';
import {getJwtToken} from '../utils/getJwtToken';

const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 100000,
});

apiClient.interceptors.request.use(
  async config => {
    const token = await getJwtToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async error => {
    if (error.response?.status === 400) {
      await logout();
      console.log('Unauthorized access. Redirecting to login...');
    }

    return Promise.reject(error);
  },
);

export default apiClient;
