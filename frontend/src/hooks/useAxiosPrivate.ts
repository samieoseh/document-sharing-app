import { useEffect } from 'react'
import useAuth from './useAuth'
import axiosPrivate from '@/api/axios-private';
import useRefreshToken from './useRefreshToken';
import { useNavigate } from 'react-router-dom';
export default function useAxiosPrivate() {
    const { token, setToken } = useAuth();
    const navigate = useNavigate()
    const refresh = useRefreshToken();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers.Authorization) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            }, 
            (error) => {
                console.error('Error with request interceptor', error);
                return Promise.reject(error);
            }
        )

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const originalRequest = error.config;
                
                if (error.response?.status === 403 && !originalRequest.sent) {
                    originalRequest.sent = true;
                    try {
                        const { accessToken } = await refresh();
                        originalRequest.headers[
                            "Authorization"
                        ] = `Bearer ${accessToken}`;
                        setToken(accessToken);
                        return axiosPrivate(originalRequest);
                    } catch (error) {
                        console.error('Error with response interceptor', error);
                        navigate("/login");
                    }   
                }
            
            }
        )

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    })

    return axiosPrivate;
}
