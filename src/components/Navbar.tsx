import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/profile";
import { education } from "../data/education";
import { experiences } from "../data/experience";
import { projects } from "../data/projects";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home", show: true },
  { label: "About", href: "#about", show: true },
  { label: "Projects", href: "#projects", show: projects.length > 0 },
  { label: "Skills", href: "#skills", show: true },
  { label: "Experience", href: "#experience", show: experiences.length > 0 },
  { label: "Education", href: "#education", show: education.length > 0 },
  { label: "Contact", href: "#contact", show: true },
].filter((item) => item.show);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-3 z-40 px-4 sm:px-6">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/70 bg-white/82 px-4 py-3 shadow-card-glow backdrop-blur-xl dark:border-white/10 dark:bg-ink-soft/78"
        aria-label="Main navigation"
      >
        <a href="#home" className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-cyanline">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-cyanline via-plasma to-signal text-sm font-bold text-ink">
            AM
          </span>
          <span className="hidden text-sm font-semibold text-slate-950 dark:text-white sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-950/5 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyanline dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white/70 text-slate-800 transition hover:border-cyanline focus:outline-none focus:ring-2 focus:ring-cyanline dark:border-white/10 dark:bg-white/10 dark:text-white lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-slate-200/80 bg-white/94 p-3 shadow-card-glow backdrop-blur-xl dark:border-white/10 dark:bg-ink-soft/95 lg:hidden"
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-950/5 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyanline dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
