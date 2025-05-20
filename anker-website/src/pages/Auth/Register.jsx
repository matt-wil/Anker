import { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [keycode, setKeycode] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:5001/auth/register', {
        username, password, email, keycode
      })
      navigate("/login")
    } catch (err) {
      setError(`Registration Failed ${err.message}`)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {error && <p className="text-red-400 mb-2">{error}</p>}
        <input type="text" placeholder="Username" className="w-full p-2 mb-4 bg-gray-700 rounded" onChange={e => setUsername(e.target.value)} required/>
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 bg-gray-700 rounded" onChange={e => setEmail(e.target.value)} required/>
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 bg-gray-700 rounded" onChange={e => setPassword(e.target.value)} required/>
        <input type="text" placeholder='Special Registration Code' className='w-full p-2 mb-4 bg-gray-700 rounded' onChange={e => setKeycode(e.target.value)} required />
        <button className="bg-green-600 w-full py-2 rounded hover:bg-green-700">Register</button>
        <Link to="/login" className='underline text-blue-200'>Back to Login</Link>
      </form>
    </div>
  )
}

export default Register