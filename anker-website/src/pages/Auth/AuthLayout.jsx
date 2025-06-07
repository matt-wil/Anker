import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react";
import Header from "./Header"

const AuthLayout = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location.pathname]); 


  return (
    <div className="flex h-screen bg-gray-900 text-white">
        <Header />
            <main className="flex-1 overflow-y-auto p-4">
                <Outlet />
            </main>
    </div>
  )
}

export default AuthLayout