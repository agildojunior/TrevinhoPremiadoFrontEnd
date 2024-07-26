import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7088/api',
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; 
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

//Deslogar caso o token nao funcione
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) { 
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.setItem('isAuth', 'false');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
