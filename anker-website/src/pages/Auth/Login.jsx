import { useState } from "react"
import { FaUserSecret } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import myLogo from "../../assets/vectors/BlackAnkerLogo.svg"
// import { useAuth } from "..auth/AuthContext"


const Login = () => {
    // const { login } = useAuth()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        login(username, password)
    }

  return (
    <div className="flex flex-col h-vh w-vw max-w-150 m-10 p-10 font-bold bg-blue-200 rounded-4xl shadow-2xl">
        <div>
            <h2 className='text-3xl sm:text-5xl text-center mb-2'>Anker Login</h2>
            <p className="text-center mb-5">Please Login to access the Anker Database</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
            <div className="flex gap-2 p-2">
                <FaUserSecret />
                <input 
                    type="text" 
                    name="username" 
                    placeholder="username" 
                    className="bg-amber-50 pl-2 rounded"
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>

            <div className="flex gap-2 p-2">
                <RiLockPasswordFill />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="password" 
                    className="bg-amber-50 pl-2 rounded"
                    onChange={(event) => setPassword(event.target.value)}    
                />
            </div>
            <button 
                type="submit" 
                className="bg-amber-50 p-2 rounded-2xl px-10 cursor-pointer hover:bg-amber-100 shadow-2xl mt-2"
                >Login</button>
        </form>
        <div className="flex justify-center items-center">
            <img 
                src={myLogo} 
                alt="Anker Logo"
                className="m-5 h-54 w-50 sm:ml-6"
            />
        </div>
    </div>
  )
}

export default Login
