import axios from "../api/axios"

export default function useRefreshToken() {
    const refresh = async () => {
        try {
            const response = await axios.get('/auth/refresh', {
                headers: {
                     "Content-Type": "application/json",
                },
                withCredentials: true,
             })
        const data = await response.data
        return data
        } catch (error) {
            console.error('Error with refresh token', error)
            return Promise.reject(error)
        }
    }
    return refresh
}
