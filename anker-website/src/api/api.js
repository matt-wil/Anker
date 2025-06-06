import axios from 'axios'
// import.meta.env.MODE if mode === development or if mode === production which database to use. 

console.log(import.meta.env.MODE)
const api = axios.create({
    baseURL: import.meta.env.VITE_ANKER_API,
})

export default api