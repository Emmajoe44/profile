type ProjectCardProps = {
  project: {
    id: string
    title: string
    summary: string
    tags: string[]
    link: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{project.summary}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
            {tag}
          </span>
        ))}
      </div>
      <a href={project.link} className="mt-8 inline-flex text-sm font-semibold text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-300">
        View project →
      </a>
    </article>
  )
}
