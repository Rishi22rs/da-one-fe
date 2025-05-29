import {baseURL} from '../../constants/api';
import apiClient from '..';

export const useGetNearbyUsers = (payload: object) => {
  return apiClient.post(`${baseURL}/get-nearby-users`, payload);
};

export const useAddLikeDislike = (payload: object) => {
  return apiClient.post(`${baseURL}/add-like-dislike`, payload);
};
