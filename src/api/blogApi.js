import axios from "axios";

const blogApi = axios.create({
    baseURL: 'http://localhost:8082/api'
})

export default blogApi;