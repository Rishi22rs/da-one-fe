import apiClient from '..';
import {baseURL} from '../../constants/api';

export const useGetAlerts = (payload: object) => {
  return apiClient.get(`${baseURL}/get-alerts`, payload);
};

export const useMarkAlertAsRead = (payload: object) => {
  return apiClient.get(`${baseURL}/mark-alert-as-read`, payload);
};
