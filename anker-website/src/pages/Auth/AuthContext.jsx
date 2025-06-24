import { createContext, useContext, useState, useEffect } from 'react'
import api from "../../api/api" // MUST CONFIGURE AND SET UP AXIOS PROPERLY

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [ token, setToken ] = useState(localStorage.getItem("token"))
    const [ refreshToken, setRefreshToken ] = useState(localStorage.getItem("refreshToken"));
    const [loading, setLoading] = useState(true)


    // handle token 
    useEffect(() => {
        const interceptor = api.interceptors.request.use(config => {
            if (
              token &&
              !config.url.includes("/auth/refresh") &&
              !config.headers?.Authorization
            ) config.headers.Authorization = `Bearer ${token}`
            return config
        })

        return () => {
            api.interceptors.request.eject(interceptor)
        }
    }, [token])


    // handle refresh token 
    useEffect(() => {
        const responseInterceptor = api.interceptors.response.use(
            res => res,
            async err => {
                const originalRequest = err.config;
                if (
                    err.response?.status === 401 &&
                    refreshToken &&
                    !originalRequest._retry &&
                    !originalRequest.url.includes("/auth/refresh")
                  ) {
                    originalRequest._retry = true;
                    try {
                      const res = await api.post("/auth/refresh", null, { 
                        headers: { Authorization: `Bearer ${refreshToken}` }});
                      const newAccessToken = res.data.accessToken;
                      localStorage.setItem("token", newAccessToken);
                      setToken(newAccessToken);
                      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                      return api(originalRequest);
                    } catch (refreshError) {
                      logout();
                      return Promise.reject(refreshError);
                    }
                  }
                  
            return Promise.reject(err);
            }
        )
        return () => api.interceptors.response.eject(responseInterceptor)
    }, [refreshToken])

    useEffect(() => {
        const validateToken = async () => {
            if (!token) {
                setLoading(false)
                return
            }
            
            try {
                await api.get("/auth/me")
                setLoading(false)
            } catch {
                logout()
            } finally {
                setLoading(false)
            }
        }
        validateToken()
    }, [])

    const login = ({accessToken, refreshToken}) => {
        localStorage.setItem("token", accessToken)
        localStorage.setItem("refreshToken", refreshToken)
        setToken(accessToken)
        setRefreshToken(refreshToken)
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
        setToken(null)
        setRefreshToken(null)
        setLoading(false)
    }

    return (
        <AuthContext.Provider value= {{ token, refreshToken, login, logout, loading, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)