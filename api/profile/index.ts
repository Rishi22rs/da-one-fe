import {baseURL} from '../../constants/api';
import apiClient from '..';

export const useGetUserInfo = () => {
  return apiClient.get(`${baseURL}/get-user-info`);
};
