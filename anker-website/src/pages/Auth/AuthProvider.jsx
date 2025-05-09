import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react"

import api from "@/api"

const AuthContext = createContext(undefined)

export const useAuth = () => {
    const authContext = useContext(AuthContext)

    if (!authContext) {
        throw new Error("useAuth must be use within a AuthProvider")
    }
    return authContext
}

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState()

    useEffect(() => {
        const fetchAuth = async () => {
            try {
                const response = await api.get("/api/me")
                setToken(response.data.accessToken)
            } catch {
                setToken(null)
            }
        }
        fetchAuth()
    }, [])

    useLayoutEffect(() => {
        const authInterceptor = api.interceptors.request.use((config) => {
            config.headers.Authorization = 
            !config._retry && token
            ? `Bearer ${token}`
            : config.headers.Authorization;
        return config
        })
    }, [token])




  return (
    <div>AuthProvider</div>
  )
}
