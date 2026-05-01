import { Check, Copy, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/profile";
import { SectionWrapper } from "./SectionWrapper";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ayush-meshram025",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Ayush141910",
    href: profile.github,
    icon: Github,
  },
  {
    label: "Location",
    value: profile.location,
    href: "#home",
    icon: MapPin,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact"
      title="Let’s build, analyze, and automate something useful."
      subtitle="Use email, LinkedIn, or GitHub to connect."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-slate-200/80 bg-slate-950 p-7 text-white shadow-card-glow dark:border-white/10">
          <p className="text-sm font-semibold uppercase text-cyanline">Let's connect</p>
          <h3 className="mt-4 text-3xl font-semibold">{profile.name}</h3>
          <p className="mt-4 leading-8 text-slate-300">{profile.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-cyanline"
            >
              <Mail size={17} aria-hidden="true" />
              Email Ayush
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyanline focus:outline-none focus:ring-2 focus:ring-cyanline"
            >
              {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
              {copied ? "Copied" : "Copy Email"}
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="h-full rounded-3xl border border-slate-200/80 bg-white/74 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-cyanline/60 dark:border-white/10 dark:bg-white/[0.07]">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-cyanline/10 text-cyan-700 dark:text-cyanline">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="mt-2 break-words text-base font-semibold text-slate-950 dark:text-white">{item.value}</p>
              </div>
            );

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-3xl focus:outline-none focus:ring-2 focus:ring-cyanline"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
