import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date_time, setDateTime] = useState('');
  const [appointment_type, setAppointmentType] = useState('');
  const [duration, setDuration] = useState('');

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);
  const handleChangeDateTime = (e) => setDateTime(e.target.value);
  const handleChangeAppointmentType = (e) => setAppointmentType(e.target.value);
  const handleChangeDuration = (e) => setDuration(e.target.value);

  async function handleSubmit(e) {
    e.preventDefault();

    setName('');
    setEmail('');
    setPhone('');
    setDateTime('');
    setAppointmentType('');
    setDuration('');

    try {
      const res = await fetch(`${API_URL}/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          date_time: date_time,
          appointment_type: appointment_type,
          duration: duration,
        }),
      });

      if (res.ok) {
        getAppointments(); // Assuming getAppointments is defined elsewhere
      } else {
        console.error('Failed to submit appointment');
      }
    } catch (error) {
      console.error('Error submitting appointment:', error);
    }
  }

  return (
    <>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChangeName} placeholder="Name" />
        <input type="text" value={email} onChange={handleChangeEmail} placeholder="Email" />
        <input type="text" value={phone} onChange={handleChangePhone} placeholder="Phone" />
        <input type="text" value={date_time} onChange={handleChangeDateTime} placeholder="Date and Time" />
        <input type="text" value={appointment_type} onChange={handleChangeAppointmentType} placeholder="Appointment Type" />
        <input type="text" value={duration} onChange={handleChangeDuration} placeholder="Duration" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;