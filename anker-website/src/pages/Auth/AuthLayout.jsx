import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react";
import Header from "./Header"

const AuthLayout = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location.pathname]); 


  return (
    <>
        <Header />
            <main className="p-4 bg-gray-900">
                <Outlet />
            </main>
    </>
  )
}

export default AuthLayout