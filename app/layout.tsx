import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'
import site from '@/data/site.json'

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-hero-gradient opacity-70 dark:opacity-50" />
          <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
            <Navbar />
            <div className="mt-8 flex-1">{children}</div>
            <Footer />
          </div>
          <ThemeToggle />
        </div>
      </body>
    </html>
  )
}
