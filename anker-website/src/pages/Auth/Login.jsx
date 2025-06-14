import { useState } from "react"
import { FaUserSecret } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import myLogo from "../../assets/vectors/BlackAnkerLogo.svg"
import { Link } from "react-router-dom"
import { useAuth } from "./AuthContext"
import api from "../../api/api"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const { login } = useAuth()
    
    const navigate = useNavigate()

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError("")
        try {
            const res = await api.post('/auth/login', { username, password})
            console.log('access token', res.data.access_token)
            console.log('refresh token', res.data.refresh_token)   
            login({
                accessToken: res.data.access_token,
                refreshToken: res.data.refresh_token})
            navigate("/dashboard")
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError("Invalid username or password. Please try again")
                setUsername("")
                setPassword("")
            } else if (error.message === "Network Error") {
                setError("Network error. Please check your internet connection")
            } else {
                setError("An unexpected error occurred during login.")
                console.error("Login error:", error)
            }
        }
    }

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center bg-gray-800 p-8 rounded shadow-md">
        <h2 className='text-3xl sm:text-5xl text-center mb-2'>Anker Login</h2>
        <p className="text-center mb-2">Please Login to access the Anker Database</p>
        { error && 
            <div className="text-red-700">{error}</div>
        }
            <div className="flex gap-2 p-2">
                <FaUserSecret />
                <input 
                    type="text" 
                    name="username" 
                    placeholder="username" 
                    className="bg-gray-700 rounded pl-2"
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>

            <div className="flex gap-2 p-2">
                <RiLockPasswordFill />
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    name="password" 
                    placeholder="password" 
                    className="bg-gray-700 rounded pl-2"
                    onChange={(event) => setPassword(event.target.value)}    
                />
            </div>
                <label className="text-[.90rem]">
                    <input className="m-2" type="checkbox" onChange={handleShowPassword}/>{showPassword ? 'Hide Password' : 'Show Password' }
                </label>
            <button 
                type="submit" 
                className="bg-green-600 p-2 rounded-2xl px-10 cursor-pointer hover:bg-green-700 shadow-2xl mt-2"
                >Login</button>
                        
        <div className="flex justify-center items-center">
            <img 
                src={myLogo} 
                alt="Anker Logo"
                className="m-5 h-54 w-50 sm:ml-6"
            />
        </div>
    <div className="mb-5">
        <Link to="/register" className="hover:text-blue-200 hover:animate-pulse ">Register Here  </Link>  |  
        <Link to="/home" className="hover:animate-pulse hover:text-red-400">  Back to the Homepage</Link>
    </div>
        </form>
    </div>
    </>
  )
}

export default Login
