import axios from 'axios';
import store from './store/index';

const http = axios.create({
  baseURL: process.env.VUE_APP_SERVER,
});

// Add a request interceptor
http.interceptors.request.use(
  function(config) {
    if (config.url !== '/login') {
      const userToken = store.getters.userToken;
      if (userToken) config.headers.Authorization = `Bearer ${userToken}`;
    } 
    store.dispatch('addLoading');

    // Do something before request is sent
    return config;
  });

export default http;
