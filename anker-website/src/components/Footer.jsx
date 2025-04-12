import { CiInstagram } from "react-icons/ci";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center h-20 text-sm italic bg-black">
        &#169; Anker Tattoo & Piercing Freiburg. All rights reserved |
        An der Mehlwaage 2, 79098 Freiburg |
        Telefon: 0761-51 46 28 78 |
        E-Mail: info@anker-tattoo.de |
        <a className="mx-2"href="https://www.instagram.com/anker.tattoo.freiburg?igsh=MTdtOxIkYXIxMHE0bw=="><CiInstagram /></a>
        </footer>
    )
}