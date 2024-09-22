import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://jourhney-api-gateway-dev-c1be4c38fb06.herokuapp.com/alpha/api/v1',
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });


const api = axios.create({
  baseURL: 'https://jourhney-api-gateway-dev-c1be4c38fb06.herokuapp.com/sevis-backoffice-service/api/v1',
  headers: {
    'Content-Type': 'application/json',
  }
});

// const api = axios.create({
//   baseURL: 'https://jourhney-api-gateway-dev-c1be4c38fb06.herokuapp.com',
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });




api.interceptors.response.use(
  response => {
    console.log('Response status code:', response.status);
    return response;
  },
  error => {
    if (error.response) {
      console.error('Error response status:', error.response.status);
      return Promise.reject(error.response);
    } else if (error.request) {
      console.error('No response received:', error.request);
      return Promise.reject(error.request);
    } else {
      console.error('Error message:', error.message);
      return Promise.reject(error.message);
    }
  }
);

export default api;
