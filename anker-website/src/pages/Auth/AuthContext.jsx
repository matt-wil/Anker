import { createContext, useContext, useState, useEffect } from 'react'
import api from "../../api/api" // MUST CONFIGURE AND SET UP AXIOS PROPERLY

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [ token, setToken ] = useState(localStorage.getItem("token"))
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const interceptor = api.interceptors.request.use(config => {
            if (token) config.headers.Authorization = `Bearer ${token}`
            return config
        })

        return () => {
            api.interceptors.request.eject(interceptor)
        }
    }, [token])

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
            }
        }
        validateToken()
    }, [])

    const login = (accessToken) => {
        localStorage.setItem("token", accessToken)
        setToken(accessToken)
    }

    const logout = () => {
        localStorage.removeItem("token")
        setToken(null)
        setLoading(false)
    }

    return (
        <AuthContext.Provider value= {{ token, login, logout, loading, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)