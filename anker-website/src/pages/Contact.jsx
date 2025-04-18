import ContactForm from '../components/ContactForm';
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


const Contact = () => {

  useGSAP(() => {
    gsap.from('.contact-form', {
      opacity: 0,
      duration: 3,
      ease: 'power3.out',
      y: 50,
    })
  })
  return (
    <>
    <div>
      <div className='contact-form'>
       <ContactForm />
      </div>
      <div className='text-center m-10'>
        <h2 className='text-4xl mb-4 font-bold'>Öffnungszeiten</h2>
          <p><strong>Dienstag - Freitag</strong>: 12:00 - 18:00 Uhr<br/>
        <strong>Samstag</strong>: 12:00 - 16:00 Uhr<br/>
        <strong>Sonntag & Montag</strong>: Geschlossen</p>
      </div>
      <div className='text-center m-10'>
        <h2 className='text-4xl mb-4 font-bold'>Adresse</h2>
        <a href="https://www.google.de/maps/place/Anchor+Tattoo+%26+Piercing/@47.992937,7.8459964,17z/data=!3m2!4b1!5s0x47911c9f3ba9bd43:0x78627daf6b29d5ed!4m6!3m5!1s0x47911c9f3ba91f21:0xd7b8fd0d6016ea0e!8m2!3d47.992937!4d7.8485713!16s%2Fg%2F1hc27lzgy?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D" target='_blank'><p>An der Mehlwaage 2. <br/>79098 <strong>Freiburg im Breisgau</strong></p></a>
      </div>
      <div className='text-center m-10'>
        <h2 className='text-4xl mb-4 font-bold'>Kontakt</h2>
        <p><strong>Telefon</strong>: <a href="tel:+4976151462878">0761 51 46 28 78</a> </p>
        <p><strong>E-Mail</strong>: <a href='mailto:info@anker-tattoo.de'>info@anker-tattoo.de</a></p>
      </div>
    </div>
    
    <div className="flex justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.075038012869!2d7.845996376530922!3d47.99293697122794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911c9f3ba91f21%3A0xd7b8fd0d6016ea0e!2sAnker%20Tattoo%20%26%20Piercing!5e0!3m2!1sde!2sde!4v1744477504960!5m2!1sde!2sde" width="1000" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
  );
};
export default Contact;