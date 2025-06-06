import { useState, useRef } from 'react';
import emailjs from "@emailjs/browser"
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const [form, setForm] = useState({name: "", email: "", subject: "", message: ""});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const formRef = useRef()

  const { t } = useTranslation();
  // emailJS config
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY


  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmissionStatus('submitting');

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
    .then(() => {
      setSubmissionStatus('success');
      formRef.current.reset();
    })
    .catch ((error) => {
      console.error("Form submission error:", error);
      setSubmissionStatus('error');
    })
  };

  const handleFormChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <div className='flex justify-center items-center py-10'>
      <form
        ref={formRef}
        onChange={handleFormChange}
        onSubmit={handleSubmit}
        className='bg-white rounded-lg shadow-xl border border-gray-300 p-8 w-full max-w-md'
      >
        <h2 className='text-2xl font-semibold mb-6 text-gray-800'>{t("contact.form.header")}</h2>

        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2'>
            {t("contact.form.name")}
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Ihr Name'
            value={form.name}
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
            {t("contact.form.email")}
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Ihre Email-Adresse'
            value={form.email}
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='subject' className='block text-gray-700 text-sm font-bold mb-2'>
            {t("contact.form.subject")}
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Betreff Ihrer Nachricht'
            value={form.subject}
          />
        </div>

        <div className='mb-6'>
          <label htmlFor='message' className='block text-gray-700 text-sm font-bold mb-2'>
            {t("contact.form.message")}
          </label>
          <textarea
            id='message'
            name='message'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
            placeholder='Ihre Nachricht an uns'
            value={form.message}
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
            <p className='text-green-500 text-sm italic'>{t("contact.form.success")}</p>
          )}
          {submissionStatus === 'error' && (
            <p className='text-red-500 text-sm italic'>{t("contact.form.error")}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;