import { CiInstagram } from "react-icons/ci";
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
        <div className="flex stickybottom-0">
            <footer className="flex w-full justify-center items-center h-20 text-sm italic sticky bottom-0">
                <div className="flex flex-col justify-center items-center">
                    <a className="m-5 not-first:mx-2 items-center hover:animate-pulse" href="https://www.instagram.com/anker.tattoo.freiburg?igsh=MTdtOxIkYXIxMHE0bw==" target="_blank"><CiInstagram className="w-10 h-10" /></a>
                    <p className="text-center items-center">
                    &#169; Anker Tattoo & Piercing Freiburg. All rights reserved |
                    An der Mehlwaage 2, 79098 Freiburg |
                    Telefon: 0761-51 46 28 78 |
                    E-Mail: info@anker-tattoo.de | 
                    <Link to="Datenschutz"> Datenschutz</Link> | 
                    <Link to="Impressum"> Impressum</Link> |
                    </p>
                </div>
            </footer>
        </div>
        </>
    )
}