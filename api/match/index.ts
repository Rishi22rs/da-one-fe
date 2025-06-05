import {baseURL} from '../../constants/api';
import apiClient from '..';

export const useGetNearbyUsers = (payload: object) => {
  return apiClient.post(`${baseURL}/get-nearby-users`, payload);
};

export const useAddLikeDislike = (payload: object) => {
  return apiClient.post(`${baseURL}/add-like-dislike`, payload);
};

export const useMatchedUserData = () => {
  return apiClient.get(`${baseURL}/matched-user-data`);
};

export const useMatchedUserIds = () => {
  return apiClient.get(`${baseURL}/matched-user-ids`);
};

export const useUpdateUserLocation = (payload: object) => {
  return apiClient.post(`${baseURL}/update-user-location`, payload);
};
