import axios, {AxiosRequestHeaders, AxiosResponse} from 'axios';
import {baseURL} from '../constants/api';
import {useLogout} from '../utils/useLogout';
import {getJwtToken} from '../utils/getJwtToken';

const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

apiClient.interceptors.request.use(
  async config => {
    const token = await getJwtToken();
    console.log('token1', token);

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
  error => {
    const logout = useLogout();
    if (error.response?.status === 400) {
      logout();
      console.log('Unauthorized access. Redirecting to login...');
    }

    return Promise.reject(error);
  },
);

export default apiClient;
