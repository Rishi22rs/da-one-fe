import axios from 'axios';
import {baseURL} from '../../constants/api';
import apiClient from '..';

export const useLogin = (payload: object) => {
  return axios.post(`${baseURL}/create-otp`, payload);
};

export const useOtp = (params: {phoneNumber: string; otp: string}) => {
  return axios.get(
    `${baseURL}/verify-otp?phone_number=${params.phoneNumber}&otp=${params.otp}`,
  );
};

export const useCurrentStep = () => {
  return apiClient.get(`${baseURL}/current-step`);
};
