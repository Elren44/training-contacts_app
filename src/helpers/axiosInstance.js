import axios from 'axios';
import {envs} from '../config/env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigations/SideMenu/RootNavigator';
import {LOGOUT} from '../constants/routeNames';

let headers = {};

const axiosInstance = axios.create({
  baseURL: envs.BACKEND_URL,
  // baseURL: "http://localhos123",
  headers,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // config.headers.Authorization = `Bearer xxxxxx`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
    if (error.response.status === 403) {
      navigate(LOGOUT, {tokenExpired: true});
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export default axiosInstance;
