'use client'

import { FormEvent, useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('')
    setLoading(true)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message }),
    })

    setLoading(false)

    if (!response.ok) {
      setStatus('There was a problem submitting your message. Please try again.')
      return
    }

    setStatus('Message sent successfully. I’ll respond soon.')
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Name</span>
          <input value={name} onChange={(event) => setName(event.target.value)} type="text" required className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Email</span>
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Subject</span>
        <input value={subject} onChange={(event) => setSubject(event.target.value)} type="text" required className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Message</span>
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={6} required className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
      </label>
      <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-white transition hover:bg-slate-800 dark:bg-indigo-500 dark:hover:bg-indigo-400">
        {loading ? 'Sending…' : 'Send message'}
      </button>
      {status && <p className="text-sm text-slate-700 dark:text-slate-300">{status}</p>}
    </form>
  )
}
