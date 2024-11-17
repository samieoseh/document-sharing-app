import axios, { AxiosInstance } from "axios";

const axiosPrivate: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
})

export default axiosPrivate;