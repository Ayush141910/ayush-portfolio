import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="px-5 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.05]">
        <div className="mb-5 h-px bg-gradient-to-r from-cyanline via-plasma to-signal" />
        <div className="text-sm text-slate-600 dark:text-slate-300">
          <p>Built by {profile.name} - Data Science, Machine Learning, and Data Engineering.</p>
        </div>
      </div>
    </footer>
  );
}
