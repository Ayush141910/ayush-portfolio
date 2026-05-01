import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Filter, Github, Layers, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Project, projects } from "../data/projects";
import { SectionWrapper } from "./SectionWrapper";

const allFilter = "All";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState(allFilter);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  const filters = useMemo(() => [allFilter, ...Array.from(new Set(projects.map((project) => project.category)))], []);
  const visibleProjects = activeFilter === allFilter ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <SectionWrapper
      id="projects"
      eyebrow="Featured Projects"
      title="Selected work that shows depth across ML, analytics, and data engineering."
      subtitle="A focused look at the systems, dashboards, models, and data products behind my technical work."
    >
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <Filter size={16} aria-hidden="true" />
          Filter
        </span>
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyanline ${
              activeFilter === filter
                ? "border-cyanline bg-cyanline text-ink"
                : "border-slate-200/80 bg-white/70 text-slate-600 hover:border-cyanline hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 dark:hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.name}
              layout
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 12 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/78 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-cyanline/60 hover:shadow-glow dark:border-white/10 dark:bg-white/[0.07]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanline/80 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-cyanline dark:bg-white/10">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">{project.name}</h3>
                </div>
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyanline/30 bg-cyanline/10 text-cyanline">
                  <Layers size={20} aria-hidden="true" />
                </div>
              </div>

              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{project.summary}</p>

              {project.metrics?.length ? (
                <div className="mt-5 grid gap-2">
                  {project.metrics.map((metric) => (
                    <p
                      key={metric}
                      className="rounded-2xl border border-signal/25 bg-signal/10 px-4 py-3 text-sm font-semibold text-emerald-800 dark:text-signal"
                    >
                      {metric}
                    </p>
                  ))}
                </div>
              ) : null}

              <ul className="mt-5 space-y-3">
                {project.highlights.slice(0, 3).map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyanline" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.slice(0, 7).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.links.slice(0, 2).map((link) =>
                  link.placeholder ? (
                    <span
                      key={link.label}
                      className="inline-flex items-center gap-2 rounded-full border border-dashed border-slate-300 px-4 py-2 text-xs font-semibold text-slate-500 dark:border-white/20 dark:text-slate-400"
                    >
                      {link.label}
                    </span>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:border-cyanline focus:outline-none focus:ring-2 focus:ring-cyanline dark:border-white/10 dark:text-slate-200"
                    >
                      {link.label.includes("GitHub") ? <Github size={14} aria-hidden="true" /> : <ExternalLink size={14} aria-hidden="true" />}
                      {link.label}
                    </a>
                  ),
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyanline dark:bg-white dark:text-ink"
                >
                  Details
                  <ExternalLink size={14} aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-slate-950/72 px-4 py-8 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="max-h-[86vh] w-full max-w-3xl overflow-auto rounded-3xl border border-white/10 bg-white p-6 shadow-card-glow dark:bg-ink-soft"
              initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-cyan-700 dark:text-cyanline">{selectedProject.category}</p>
                  <h3 id="project-modal-title" className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">
                    {selectedProject.name}
                  </h3>
                </div>
                <button
                  type="button"
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:border-cyanline focus:outline-none focus:ring-2 focus:ring-cyanline dark:border-white/10 dark:text-white"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
              <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{selectedProject.summary}</p>
              <div className="mt-6 grid gap-3">
                {selectedProject.highlights.map((highlight) => (
                  <p
                    key={highlight}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
                  >
                    {highlight}
                  </p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyanline/30 bg-cyanline/10 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-cyanline"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionWrapper>
  );
}
