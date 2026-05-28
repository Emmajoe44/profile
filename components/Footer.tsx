import site from '@/data/site.json'

export default function Footer() {
  return (
    <footer className="mt-20 rounded-3xl border border-slate-200 bg-white/95 p-8 text-slate-700 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-950 dark:text-white">{site.owner.name}</p>
          <p className="mt-2 text-sm">Website and ERP Developer — delivering modern business systems.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {site.social.map((item) => (
            <a key={item.name} href={item.url} className="transition hover:text-slate-900 dark:hover:text-white" target="_blank" rel="noreferrer">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
