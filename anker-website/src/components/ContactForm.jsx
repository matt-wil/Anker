import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus('submitting');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmissionStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div className='flex justify-center items-center py-10'>
      <form
        onSubmit={handleSubmit}
        className='bg-white rounded-lg shadow-xl border border-gray-300 p-8 w-full max-w-md'
      >
        <h2 className='text-2xl font-semibold mb-6 text-gray-800'>Kontaktiere uns</h2>

        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Ihr Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Ihre Email-Adresse'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='subject' className='block text-gray-700 text-sm font-bold mb-2'>
            Betreff
          </label>
          <input
            type='text'
            id='subject'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Betreff Ihrer Nachricht'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className='mb-6'>
          <label htmlFor='message' className='block text-gray-700 text-sm font-bold mb-2'>
            Nachricht
          </label>
          <textarea
            id='message'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
            placeholder='Ihre Nachricht an uns'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
            disabled={submissionStatus === 'submitting'}
          >
            {submissionStatus === 'submitting' ? 'Senden...' : 'Senden'}
          </button>
          {submissionStatus === 'success' && (
            <p className='text-green-500 text-sm italic'>Nachricht erfolgreich gesendet!</p>
          )}
          {submissionStatus === 'error' && (
            <p className='text-red-500 text-sm italic'>Fehler beim Senden der Nachricht.</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;