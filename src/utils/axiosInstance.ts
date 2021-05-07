import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://agencyskyplus.herokuapp.com/',
});

export default axiosInstance;
