import { motion, useReducedMotion } from "framer-motion";
import { skillGroups, websiteStack } from "../data/skills";
import { SectionWrapper } from "./SectionWrapper";

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="skills"
      eyebrow="Skills"
      title="A compact technical toolkit for modern data work."
      subtitle="Grouped so the technical range is easy to scan."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <motion.article
            key={group.title}
            className="rounded-3xl border border-slate-200/80 bg-white/74 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.07]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.06 }}
          >
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-cyanline hover:bg-cyanline/10 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.025 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-white/55 p-6 backdrop-blur dark:border-white/20 dark:bg-white/[0.04]">
        <p className="text-sm font-semibold uppercase text-slate-500 dark:text-slate-400">Website built with</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {websiteStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-plasma/30 bg-plasma/10 px-3 py-2 text-sm font-semibold text-slate-700 dark:text-violet-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
