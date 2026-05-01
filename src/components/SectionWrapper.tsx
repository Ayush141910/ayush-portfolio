import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type SectionWrapperProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({ id, eyebrow, title, subtitle, children, className = "" }: SectionWrapperProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={`relative scroll-mt-28 px-5 py-20 sm:px-6 lg:px-8 ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase text-cyanline">{eyebrow}</p>
          ) : null}
          <h2 className="text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
          {subtitle ? (
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </motion.section>
  );
}
