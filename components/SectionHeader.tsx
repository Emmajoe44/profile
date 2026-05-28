type SectionHeaderProps = {
  title: string
  subtitle: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">{title}</p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">{subtitle}</h2>
    </div>
  )
}
