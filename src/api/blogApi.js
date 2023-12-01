import axios from "axios";

const blogApi = axios.create({
    baseURL: 'http://localhost:8082/api'
})

blogApi.interceptors.request.use((config) => {

    const token = localStorage.getItem('token');

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
},
    (error) => {
        Promise.reject(error);
    }
);
export default blogApi;