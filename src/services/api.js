import axios from "axios";

const api = axios.create({
    baseURL: 'https://64cbeb122eafdcdc8519792b.mockapi.io/'
  });
  
  export default api;