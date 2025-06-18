import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "./Navigation/Header"
import Footer from "./Navigation/Footer"

export default function Layout() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location.pathname]);
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
                <main className="flex-grow">
                    <Outlet />
                </main>
            <Footer />
        </div>
    )
}