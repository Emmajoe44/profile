import site from '@/data/site.json'
import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import BlogCard from '@/components/BlogCard'
import ContactForm from '@/components/ContactForm'

export default function HomePage() {
  return (
    <main className="space-y-24">
      <section id="home" className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 px-6 py-16 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90 sm:px-10 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200">
              Website & ERP Developer
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Emmanuel Joseph
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              I create modern SaaS-style websites, ERP platforms, and business systems with clean UI, fast performance, and strong UX.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100">
                Contact me
              </a>
              <a href={site.owner.cvLink} download className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
                Download CV
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-100 p-6 dark:bg-slate-800">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Clients served</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">20+</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-6 dark:bg-slate-800">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Projects</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">15+</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-slate-950/95 p-10 text-white shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Hello, I’m Emmanuel.</p>
            <h2 className="mt-8 text-3xl font-semibold">Professional digital systems for modern business.</h2>
            <p className="mt-4 text-slate-300 leading-7">
              From ERP to hospital management and POS solutions, I deliver polished systems that help clients scale with confidence.
            </p>
            <div className="mt-8 space-y-4 rounded-3xl bg-slate-800 p-6">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Web Development</span>
                <span>ERP / SaaS</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>API Development</span>
                <span>Database Design</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Hospital Systems</span>
                <span>POS / Billing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="space-y-8">
        <SectionHeader title="About Me" subtitle="Smart systems, clean design, and enterprise-grade workflows." />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-white p-10 shadow-soft dark:bg-slate-900">
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              I am Emmanuel Joseph, a website and ERP developer with experience building business systems, hospital management software, and point-of-sale platforms.
              My work blends usability, performance, and scalability so teams can operate faster and with fewer errors.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-white">{site.owner.email}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">WhatsApp</p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-white">{site.owner.whatsapp}</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-950/95 p-10 text-white shadow-soft">
            <p className="text-sm uppercase tracking-[0.24em] text-indigo-300">Core strengths</p>
            <ul className="mt-8 space-y-5">
              <li className="rounded-3xl bg-slate-900/80 p-5">
                <p className="font-semibold">Custom ERP Architecture</p>
                <p className="mt-2 text-sm text-slate-300">Maintainable modules with reporting, workflows, and data integrity.</p>
              </li>
              <li className="rounded-3xl bg-slate-900/80 p-5">
                <p className="font-semibold">Modern Frontend Interfaces</p>
                <p className="mt-2 text-sm text-slate-300">Beautiful dashboards and landing pages built with Tailwind and React.</p>
              </li>
              <li className="rounded-3xl bg-slate-900/80 p-5">
                <p className="font-semibold">Secure Web APIs</p>
                <p className="mt-2 text-sm text-slate-300">API-driven systems for services, mobile apps, and integrations.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="space-y-8">
        <SectionHeader title="Skills" subtitle="Technologies and tools I use in every project." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.skills.map((skill) => (
            <div key={skill.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{skill.name}</h3>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="space-y-8">
        <SectionHeader title="Services" subtitle="Solutions I deliver for business and enterprise." />
        <div className="grid gap-6 lg:grid-cols-3">
          {site.services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{service.title}</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="space-y-8">
        <SectionHeader title="Projects" subtitle="Selected work that demonstrates capability and impact." />
        <div className="grid gap-6 lg:grid-cols-3">
          {site.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="experience" className="space-y-8">
        <SectionHeader title="Experience" subtitle="A timeline of product, systems, and software delivery." />
        <div className="space-y-6">
          {site.experience.map((item) => (
            <div key={`${item.year}-${item.title}`} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{item.year}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.company}</p>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="certificates" className="space-y-8">
        <SectionHeader title="Certificates" subtitle="Professional credentials and learning achievements." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.certificates.map((certificate) => (
            <div key={certificate.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{certificate.year}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{certificate.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{certificate.issuer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="blog" className="space-y-8">
        <SectionHeader title="Blog" subtitle="Latest insights on development, performance, and systems." />
        <div className="grid gap-6 lg:grid-cols-3">
          {site.blog.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section id="contact" className="space-y-8">
        <SectionHeader title="Contact" subtitle="Start a project or request a quote." />
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-soft">
            <p className="text-sm uppercase tracking-[0.24em] text-indigo-300">Let's talk</p>
            <h2 className="mt-6 text-3xl font-semibold">Ready to build your next system?</h2>
            <p className="mt-4 text-slate-300 leading-7">Send a message and I will respond within one business day. I can help with web apps, ERP solutions, POS, and hospital systems.</p>
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-slate-100">Email</p>
                <p>{site.owner.email}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-100">WhatsApp</p>
                <p>{site.owner.whatsapp}</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
