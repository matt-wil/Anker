import { CiInstagram } from "react-icons/ci";
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.075038012869!2d7.845996376530922!3d47.99293697122794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911c9f3ba91f21%3A0xd7b8fd0d6016ea0e!2sAnker%20Tattoo%20%26%20Piercing!5e0!3m2!1sde!2sde!4v1744477504960!5m2!1sde!2sde" width="600" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="flex stickybottom-0">
            <footer className="flex w-full justify-center items-center h-20 text-sm italic sticky bottom-0">
                <div>
                    <p>
                    &#169; Anker Tattoo & Piercing Freiburg. All rights reserved |
                    An der Mehlwaage 2, 79098 Freiburg |
                    Telefon: 0761-51 46 28 78 |
                    E-Mail: info@anker-tattoo.de | 
                    <Link to="Datenschutz"> Datenschutz</Link> | 
                    <Link to="Impressum"> Impressum</Link> |
                    <a className="mx-2" href="https://www.instagram.com/anker.tattoo.freiburg?igsh=MTdtOxIkYXIxMHE0bw==" target="_blank"><CiInstagram /></a>
                    </p>
                </div>
            </footer>
        </div>
        </>
    )
}