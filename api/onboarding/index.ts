import {baseURL} from '../../constants/api';
import apiClient from '..';

export const useAddUserInfo = (payload: object) => {
  return apiClient.post(`${baseURL}/add-user-info`, payload);
};
