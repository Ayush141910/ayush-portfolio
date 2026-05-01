export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "IGP.com",
    role: "Data Analyst Intern",
    location: "Mumbai, India",
    dates: "Jul 2023 - Oct 2023",
    bullets: [
      "Analyzed customer data using statistical techniques and Tableau visualizations to identify preferences and support data-informed decisions.",
      "Migrated 75,000+ outdated product entries from MS Excel to a secure SQL database, achieving 95% data accuracy.",
      "Improved inventory processing by 30% through data cleaning and process automation.",
      "Developed a Python-based automated email campaign with predictive modeling, contributing to the acquisition of over 100 new customers.",
    ],
  },
  {
    company: "CodeCeTra",
    role: "Software Developer Intern",
    location: "Mumbai, India",
    dates: "Feb 2022 - Aug 2022",
    bullets: [
      "Created open-source HTML and CSS project templates with documentation for college professionals.",
      "Supported 500+ college professionals in streamlining web development projects and improving technical presentation workflows.",
      "Used MS Excel to track project documentation and development progress.",
    ],
  },
  {
    company: "SEKAI-ICHI",
    role: "Software Developer Intern",
    location: "Nagpur, India",
    dates: "Oct 2020 - Jan 2021",
    bullets: [
      "Built responsive websites using HTML, CSS, and JavaScript in a dynamic development environment.",
      "Documented development workflows to support team execution and handoff.",
      "Initiated a content strategy that generated 25,000+ petition signatures in the first month.",
    ],
  },
];
