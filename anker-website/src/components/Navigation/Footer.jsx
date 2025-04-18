import { CiInstagram } from "react-icons/ci";
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
        <div className="flex bottom-0">
            <footer className="flex w-full justify-center items-center h-20 text-sm italic sticky bottom-0">
                <div className="flex flex-col justify-center items-center">
                    <a className="m-5 not-first:mx-2 items-center hover:animate-pulse" href="https://www.instagram.com/anker.tattoo.freiburg?igsh=MTdtOxIkYXIxMHE0bw==" target="_blank"><CiInstagram className="w-10 h-10" /></a>
                    <p className="text-center items-center">
                    &#169; Anker Tattoo & Piercing Freiburg. All rights reserved |
                    <a href="https://www.google.de/maps/place/Anchor+Tattoo+%26+Piercing/@47.992937,7.8459964,17z/data=!3m2!4b1!5s0x47911c9f3ba9bd43:0x78627daf6b29d5ed!4m6!3m5!1s0x47911c9f3ba91f21:0xd7b8fd0d6016ea0e!8m2!3d47.992937!4d7.8485713!16s%2Fg%2F1hc27lzgy?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D" target="_blank">An der Mehlwaage 2, 79098 Freiburg</a> |
                    Telefon: <a href="tel:+4976151462878">0761-51 46 28 78</a> |
                    E-Mail: <a href="mailto:info@anker-tattoo.de">info@anker-tattoo.de</a> | 
                    <Link to="Datenschutz"> Datenschutz</Link> | 
                    <Link to="Impressum"> Impressum</Link> |
                    </p>
                </div>
            </footer>
        </div>
        </>
    )
}