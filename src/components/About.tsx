import { BrainCircuit, Database, LineChart, Workflow } from "lucide-react";
import { profile } from "../data/profile";
import { SectionWrapper } from "./SectionWrapper";

const focusCards = [
  {
    icon: BrainCircuit,
    title: "Machine learning that ships",
    text: "Modeling work connected to dashboards, predictions, and decision support rather than isolated notebooks.",
  },
  {
    icon: Workflow,
    title: "Automation-minded execution",
    text: "Experience improving workflows through Python automation, SQL migration, documentation, and repeatable pipelines.",
  },
  {
    icon: Database,
    title: "Data systems foundation",
    text: "Projects spanning Kafka, Spark Structured Streaming, Delta Lake, Airflow, Great Expectations, and MLflow.",
  },
  {
    icon: LineChart,
    title: "Clear measurable impact",
    text: "Quantified work across data accuracy, inventory processing, customer acquisition, and user engagement.",
  },
];

export function About() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About"
      title="A practical data builder with a product mindset."
      subtitle={profile.about}
    >
      <div className="grid gap-4 lg:grid-cols-4">
        {focusCards.map((card) => {
          const Icon = card.icon;
          return (
            <article
              key={card.title}
              className="rounded-3xl border border-slate-200/80 bg-white/74 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-cyanline/60 hover:shadow-glow dark:border-white/10 dark:bg-white/[0.07]"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-cyanline dark:bg-white/10">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{card.text}</p>
            </article>
          );
        })}
      </div>
      <div className="mt-8 rounded-3xl border border-slate-200/80 bg-white/72 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
        <p className="text-sm font-semibold uppercase text-slate-500 dark:text-slate-400">Target roles</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {profile.targetRoles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-cyanline/30 bg-cyanline/10 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-cyanline"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
