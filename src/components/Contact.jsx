import React, { useMemo, useState } from 'react'

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const patterns = useMemo(() => ({
    name: /^[a-zA-Z\s]{2,30}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    subject: /^.{2,50}$/,
    message: /^[\s\S]{10,500}$/
  }), [])
  const errors = useMemo(() => ({
    name: 'Name must be 2-30 characters long, letters only',
    email: 'Please enter a valid email address',
    subject: 'Subject must be 2-50 characters long',
    message: 'Message must be 10-500 characters long'
  }), [])

  const [touched, setTouched] = useState({})
  const validateField = (name, value) => patterns[name].test(value)
  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value })
  const onBlur = (e) => setTouched({ ...touched, [e.target.name]: true })

  const invalid = Object.keys(patterns).reduce((acc, key) => {
    acc[key] = !validateField(key, values[key] || '')
    return acc
  }, {})

  const encode = (data) => new URLSearchParams(data).toString()

  const onSubmit = async (e) => {
    e.preventDefault()
    const anyInvalid = Object.values(invalid).some(Boolean)
    if (anyInvalid) {
      setTouched({ name: true, email: true, subject: true, message: true })
      return
    }
    try {
      setSubmitting(true)
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values, 'bot-field': '' }),
        mode: 'no-cors',
      })
      setSubmitted(true)
      setValues({ name: '', email: '', subject: '', message: '' })
      setTouched({})
    } catch (err) {
      // ignore
    } finally {
      setSubmitting(false)
    }
  }

  const fieldClass = (name, base) => [
    base,
    touched[name] && invalid[name] && 'border-red-500 shake',
    touched[name] && !invalid[name] && 'border-green-500 success-glow',
  ].filter(Boolean).join(' ')

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900" id="contact">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-4xl md:text-5xl font-bold dark:text-white mb-6 text-gray-900">
            Get In <span className="text-blue-400 dark:text-blue-600">Touch</span>
          </p>
          <div className="w-24 h-1 bg-blue-500 dark:bg-blue-600 mx-auto animate-pulse" />
          <p className="text-xl text-gray-400 mt-6 mx-auto dark:text-gray-600 max-w-2xl">
            I'm always interested in new opportunities and exciting projects. Let's create something amazing together!
          </p>
        </div>
        <div className="md:grid-cols-2 grid gap-12">
          <div className="space-y-8">
            <InfoItem title="Email" value={<a href="mailto:mrahaqs@gmail.com">mrahaqs@gmail.com</a>} />
            <InfoItem title="Location" value={"United Kingdom"} variant="location" />
            <InfoItem title="GitHub" value={"github.com/mhaques"} variant="github" />
            <div className="mt-8 flex space-x-4">
              <a href="https://www.linkedin.com/in/aminul-haque-a04a8222b" target="_blank" rel="noopener noreferrer" className="bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 p-3 transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/mhaques" target="_blank" rel="noopener noreferrer" className="bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 p-3 transition-all duration-300 transform hover:scale-110" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
          <div className="bg-gray-900 dark:bg-gray-100 rounded-lg shadow-lg p-8">
            <form className="space-y-6" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
              {/* honeypot field (invisible to users) */}
              <input name="bot-field" className="hidden" autoComplete="off" tabIndex="-1" />
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block dark:text-gray-700">Name</label>
                <input type="text" name="name" value={values.name} onChange={onChange} onBlur={onBlur} className={fieldClass('name', 'border border-gray-700 dark:border-gray-300 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent dark:text-gray-900 transition-all duration-300 w-full px-4 py-3 bg-gray-800 dark:bg-gray-200 rounded-lg text-white')} />
                {touched.name && invalid.name && (<div className="text-red-500 text-sm mt-1">{errors.name}</div>)}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block dark:text-gray-700">Email</label>
                <input type="email" name="email" value={values.email} onChange={onChange} onBlur={onBlur} className={fieldClass('email', 'border border-gray-700 dark:border-gray-300 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent dark:text-gray-900 transition-all duration-300 w-full px-4 py-3 bg-gray-800 dark:bg-gray-200 rounded-lg text-white')} />
                {touched.email && invalid.email && (<div className="text-red-500 text-sm mt-1">{errors.email}</div>)}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block dark:text-gray-700">Subject</label>
                <input type="text" name="subject" value={values.subject} onChange={onChange} onBlur={onBlur} className={fieldClass('subject', 'border border-gray-700 dark:border-gray-300 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent dark:text-gray-900 transition-all duration-300 w-full px-4 py-3 bg-gray-800 dark:bg-gray-200 rounded-lg text-white')} />
                {touched.subject && invalid.subject && (<div className="text-red-500 text-sm mt-1">{errors.subject}</div>)}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block dark:text-gray-700">Message</label>
                <textarea rows="5" name="message" value={values.message} onChange={onChange} onBlur={onBlur} className={fieldClass('message', 'w-full px-4 py-3 bg-gray-800 dark:bg-gray-200 rounded-lg text-white border border-gray-700 dark:border-gray-300 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent dark:text-gray-900 transition-all duration-300 resize-none')} />
                {touched.message && invalid.message && (<div className="text-red-500 text-sm mt-1">{errors.message}</div>)}
              </div>
              <button type="submit" disabled={submitting} className="hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full bg-blue-600 dark:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg disabled:opacity-70">
                {submitting ? 'Sending…' : (submitted ? 'Sent!' : 'Send Message')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ title, value, variant }) {
  const iconMap = {
    email: (
      <svg className="w-6 h-6 text-blue-400 dark:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    ),
    location: (
      <svg className="w-6 h-6 text-blue-400 dark:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    ),
    github: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
    )
  }

  const icon = iconMap[variant || 'email']

  return (
    <div className="items-start flex space-x-4 transform hover:scale-105 transition-transform duration-300">
      <div className="bg-blue-600/20 dark:bg-blue-600/30 rounded-lg p-3">{icon}</div>
      <div>
        <p className="text-lg font-semibold dark:text-white mb-2 text-black">{title}</p>
        <p className="text-gray-400 dark:text-gray-600">{value}</p>
      </div>
    </div>
  )
}