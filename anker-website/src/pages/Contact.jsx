import React, { useState } from 'react';

const Contact = () => {
  return (
    <>
    <div>
      <div>
        <h1>Kontakt</h1>
      </div>
      <div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.075038012869!2d7.845996376530922!3d47.99293697122794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911c9f3ba91f21%3A0xd7b8fd0d6016ea0e!2sAnker%20Tattoo%20%26%20Piercing!5e0!3m2!1sde!2sde!4v1744477504960!5m2!1sde!2sde" width="600" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div>
        <h2>Öffnungszeiten</h2>
        <div>
          <p>Dienstag - Freitag: 12:00 - 18:00 Uhr</p>
          <p>Samstag: 12:00 - 16:00 Uhr</p>
          <p>Sonntag & Montag: Geschlossen</p>
        </div>
      </div>
    </div>
    <div>
      <form>
        Email contact form
      </form>
    </div>
    </>
  );
};
export default Contact;