import { GraduationCap } from "lucide-react";
import { education } from "../data/education";
import { SectionWrapper } from "./SectionWrapper";

export function Education() {
  return (
    <SectionWrapper
      id="education"
      eyebrow="Education"
      title="Academic foundation in data science, engineering, and analytical systems."
      subtitle="Academic background supporting the data and automation work."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item) => (
          <article
            key={item.institution}
            className="rounded-3xl border border-slate-200/80 bg-white/76 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-cyanline/60 dark:border-white/10 dark:bg-white/[0.07]"
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-cyanline dark:bg-white/10">
              <GraduationCap size={22} aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold text-cyan-700 dark:text-cyanline">{item.dates}</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{item.institution}</h3>
            <p className="mt-2 text-base font-semibold text-slate-700 dark:text-slate-200">
              {item.degree}, {item.field}
            </p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.location}</p>
            <p className="mt-5 inline-flex rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-sm font-semibold text-emerald-800 dark:text-signal">
              GPA: {item.gpa}
            </p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
