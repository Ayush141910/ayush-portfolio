import { motion, useReducedMotion } from "framer-motion";

const particles = [
  { left: "8%", top: "18%", delay: 0, duration: 8 },
  { left: "19%", top: "72%", delay: 1.1, duration: 10 },
  { left: "31%", top: "36%", delay: 0.5, duration: 7 },
  { left: "47%", top: "82%", delay: 1.8, duration: 9 },
  { left: "58%", top: "22%", delay: 0.8, duration: 11 },
  { left: "74%", top: "62%", delay: 1.4, duration: 8 },
  { left: "87%", top: "30%", delay: 0.3, duration: 10 },
  { left: "92%", top: "78%", delay: 2.1, duration: 12 },
];

export function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-ink" aria-hidden="true">
      <div className="absolute inset-0 bg-radial-signal opacity-80 dark:opacity-100" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40 dark:bg-[linear-gradient(rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.09)_1px,transparent_1px)]" />
      <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyanline/10 blur-3xl dark:bg-cyanline/15" />
      <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-plasma/10 blur-3xl dark:bg-plasma/15" />
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyanline/70 shadow-[0_0_24px_rgba(110,231,249,0.65)]"
          style={{ left: particle.left, top: particle.top }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -18, 0],
                  opacity: [0.25, 1, 0.25],
                  scale: [1, 1.35, 1],
                }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
