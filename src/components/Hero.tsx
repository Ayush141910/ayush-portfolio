import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BarChart3, BrainCircuit, Database, Github, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";

const buildAreas = [
  {
    icon: Database,
    title: "Data pipelines",
    text: "Kafka, Spark, Delta Lake, Airflow",
  },
  {
    icon: BrainCircuit,
    title: "ML systems",
    text: "Prediction, anomaly detection, forecasting",
  },
  {
    icon: BarChart3,
    title: "Analytics products",
    text: "Dashboards, insights, automation",
  },
];

const featuredProjects = ["AegisFlow", "ValorPredict", "Food For U"];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanline/35 bg-cyanline/10 px-4 py-2 text-sm font-semibold text-slate-700 shadow-glow backdrop-blur dark:text-cyanline">
            <span className="h-2 w-2 rounded-full bg-signal shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
            Open to data, ML, analytics, and automation roles
          </div>

          <p className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
            <MapPin size={16} aria-hidden="true" />
            {profile.location}
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-medium text-cyan-700 dark:text-cyanline sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-card-glow transition hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyanline dark:bg-white dark:hover:bg-slate-200"
            >
              View Projects
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-cyanline hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyanline dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-cyanline"
            >
              <Github size={17} aria-hidden="true" />
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-cyanline hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyanline dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-cyanline"
            >
              <Mail size={17} aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {profile.stats.slice(0, 4).map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl border border-slate-200/80 bg-white/72 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.07]"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.08, duration: 0.55 }}
              >
                <p className="text-2xl font-semibold text-slate-950 dark:text-white">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">{stat.label}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/78 p-5 shadow-card-glow backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.08]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanline to-transparent" />
            <div className="mb-6">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Portfolio Snapshot</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                A quick view of the work I want people to remember.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-slate-200/80 bg-slate-950 p-5 text-white shadow-glow dark:border-white/10">
                <p className="text-xs font-semibold uppercase text-cyanline">Core focus</p>
                <h2 className="mt-3 text-2xl font-semibold">Data science with automation depth.</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  I build practical systems where data cleaning, modeling, dashboards, and deployment logic connect into one usable product.
                </p>
              </div>

              <div className="grid gap-3">
                {buildAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <motion.div
                      key={area.title}
                      className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/65 p-4 dark:border-white/10 dark:bg-white/[0.08]"
                      animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                      transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cyanline/10 text-cyan-700 dark:text-cyanline">
                        <Icon size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{area.title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{area.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white/65 p-4 dark:border-white/10 dark:bg-white/[0.08]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Featured project range</p>
                  <p className="rounded-full bg-signal/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-signal">
                    3 projects
                  </p>
                </div>
                <div className="grid gap-2">
                  {featuredProjects.map((project, index) => (
                    <div key={project} className="flex items-center gap-3">
                      <span className="grid h-7 w-7 place-items-center rounded-full border border-cyanline/30 bg-cyanline/10 text-xs font-bold text-cyan-700 dark:text-cyanline">
                        {index + 1}
                      </span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-cyanline to-signal"
                          initial={{ width: "28%" }}
                          animate={
                            reduceMotion
                              ? undefined
                              : { width: [`${52 + index * 10}%`, `${78 + index * 5}%`, `${58 + index * 8}%`] }
                          }
                          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
                        />
                      </div>
                      <span className="w-24 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
