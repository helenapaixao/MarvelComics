import axios from 'axios'

// const api = axios.create({
//   baseURL: 'http://localhost:3333'
// });

const api = axios.create({
  baseURL: 'https://gateway.marvel.com',
  params:{
    "apiKey":"95e056be50f97828fb6529b6fc46a109",
    "limit":"100"
  },
  timeout: 10000,
  method:'get',
  responseType:'json'
});
return instance;

export default api;
