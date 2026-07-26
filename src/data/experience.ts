export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Magellan Health",
    role: "Data Analyst",
    location: "United States",
    dates: "Jun 2025 - Present",
    bullets: [
      "Engineered scalable Snowflake data models using Python and MySQL, integrating EHR and claims datasets to improve behavioral health risk analysis accuracy and query performance.",
      "Developed interactive Tableau dashboards visualizing behavioral risk trends, helping leadership reduce care escalation delays and improve population health monitoring efficiency.",
      "Applied data storytelling and exploratory data analysis to behavioral health datasets, increasing patient outreach effectiveness by 28% and improving executive intervention strategies.",
      "Implemented generative AI clinical note summarization and machine learning risk stratification models, achieving 87% prediction accuracy for provider decision support.",
      "Performed healthcare analytics on behavioral health populations while supporting HIPAA-compliant governance and 70% enterprise security compliance assessments.",
    ],
  },
  {
    company: "Deloitte",
    role: "Data Analyst",
    location: "United States",
    dates: "Jan 2023 - Jul 2024",
    bullets: [
      "Used SQL and PostgreSQL to analyze suspicious transaction patterns and integrate sanctions datasets, improving AML investigation efficiency by 34%.",
      "Developed interactive Power BI dashboards for AML transaction monitoring, enabling compliance teams to identify high-risk activity and improve regulatory reporting accuracy.",
      "Applied statistical analysis to anomalous transaction behaviors, reducing false-positive AML alerts by 29% and improving financial crime investigation effectiveness.",
      "Built predictive analysis models and performed feature engineering on transactional datasets to improve money laundering detection and fraud model precision.",
      "Created Advanced Excel reporting models with Pivot Tables, Power Query, XLOOKUP, and conditional formatting to validate AML alerts and reconcile transaction exceptions.",
      "Automated financial reporting workflows using SQL and Power BI, improving suspicious activity detection by 27% and reducing reconciliation effort.",
    ],
  },
];
