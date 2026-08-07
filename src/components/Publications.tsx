import { BookOpen } from "lucide-react";
import { extras } from "../data/extras";
import { SectionWrapper } from "./SectionWrapper";

export function Publications() {
  if (!extras.publications.length) return null;

  return (
    <SectionWrapper
      id="publications"
      eyebrow="Publication"
      title="Published and presented work."
      subtitle="Research and project work connected to applied recommendation systems and product-minded AI."
    >
      <div className="grid gap-5">
        {extras.publications.map((publication) => (
          <article
            key={publication.title}
            className="rounded-3xl border border-slate-200/80 bg-white/76 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-cyanline/60 dark:border-white/10 dark:bg-white/[0.07]"
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-cyanline dark:bg-white/10">
              <BookOpen size={22} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{publication.title}</h3>
            <p className="mt-3 text-sm font-semibold text-slate-500 dark:text-slate-400">{publication.authors}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{publication.description}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
