import axios from 'axios';

const api = axios.create({
  baseURL: '', // The Vite proxy handles routing to the backend
  withCredentials: true, // Important: Sends cookies with requests
});

let isRefreshing = false;
let failedQueue: Array<{ resolve: (value: any) => void, reject: (reason?: any) => void }> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

api.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  const originalRequest = error.config;

  if (error.response?.status === 401 && !originalRequest._retry) {
    if (originalRequest.url === '/auth/refresh') {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise(function(resolve, reject) {
        failedQueue.push({ resolve, reject });
      }).then(token => {
        return api(originalRequest);
      }).catch(err => {
        return Promise.reject(err);
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      await api.post('/auth/refresh');
      processQueue(null, 'refreshed');
      return api(originalRequest);
    } catch (err) {
      processQueue(err, null);
      window.dispatchEvent(new Event('auth:unauthorized'));
      return Promise.reject(err);
    } finally {
      isRefreshing = false;
    }
  }

  return Promise.reject(error);
});

export default api;
