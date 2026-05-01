import { BriefcaseBusiness } from "lucide-react";
import { experiences } from "../data/experience";
import { SectionWrapper } from "./SectionWrapper";

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      eyebrow="Experience"
      title="Internship experience across analytics, automation, and software delivery."
      subtitle="A concise timeline focused on measurable impact, technical execution, and clean handoffs."
    >
      <div className="relative space-y-5 before:absolute before:left-5 before:top-8 before:h-[calc(100%-4rem)] before:w-px before:bg-gradient-to-b before:from-cyanline before:via-plasma before:to-transparent">
        {experiences.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="relative pl-14"
          >
            <div className="absolute left-0 top-6 grid h-10 w-10 place-items-center rounded-full border border-cyanline/40 bg-white text-cyan-700 shadow-glow dark:bg-ink-soft dark:text-cyanline">
              <BriefcaseBusiness size={18} aria-hidden="true" />
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-white/76 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-cyanline/60 dark:border-white/10 dark:bg-white/[0.07]">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{item.role}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {item.company} | {item.location}
                  </p>
                </div>
                <p className="inline-flex w-fit shrink-0 rounded-full border border-cyanline/30 bg-cyanline/10 px-4 py-2 text-sm font-semibold text-cyan-800 dark:text-cyanline">
                  {item.dates}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
                  <BriefcaseBusiness size={18} aria-hidden="true" />
                  Internship
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
