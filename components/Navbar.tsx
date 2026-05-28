import Link from 'next/link'
import site from '@/data/site.json'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-2 sm:px-4">
        <Link href="/" className="text-lg font-semibold text-slate-950 dark:text-white">
          {site.owner.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="#about" className="transition hover:text-slate-950 dark:hover:text-white">About</Link>
          <Link href="#skills" className="transition hover:text-slate-950 dark:hover:text-white">Skills</Link>
          <Link href="#projects" className="transition hover:text-slate-950 dark:hover:text-white">Projects</Link>
          <Link href="#contact" className="transition hover:text-slate-950 dark:hover:text-white">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
