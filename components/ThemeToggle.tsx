'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const stored = window.localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored || (prefersDark ? 'dark' : 'light')
    setMode(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  function toggleMode() {
    const nextMode = mode === 'dark' ? 'light' : 'dark'
    setMode(nextMode)
    window.localStorage.setItem('theme', nextMode)
    document.documentElement.classList.toggle('dark', nextMode === 'dark')
  }

  return (
    <button
      type="button"
      onClick={toggleMode}
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-soft transition hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800"
      aria-label="Toggle dark mode"
    >
      {mode === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
