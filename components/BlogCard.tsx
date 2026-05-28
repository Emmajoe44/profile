type BlogCardProps = {
  post: {
    id: string
    title: string
    summary: string
    date: string
  }
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{post.date}</p>
      <h3 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">{post.title}</h3>
      <p className="mt-4 text-slate-600 dark:text-slate-300">{post.summary}</p>
      <a href="#contact" className="mt-6 inline-flex text-sm font-semibold text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-300">
        Read more →
      </a>
    </article>
  )
}
