import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7088/api',
});

export default axiosInstance;
