export type ProfileStat = {
  label: string;
  value: string;
  detail: string;
};

export const profile = {
  name: "Ayush Meshram",
  title: "Data Analyst",
  location: "Bradbury, California, USA",
  email: "ayushmeshram1914@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayush-meshram025/",
  github: "https://github.com/Ayush141910",
  headline:
    "Turning healthcare, financial, and operational data into dashboards, predictive insights, and business decisions.",
  summary:
    "I am a Data Analyst with experience across healthcare analytics, fraud analytics, KPI reporting, ETL processes, statistical analysis, predictive modeling, and data visualization. My work spans SQL, Python, Power BI, Tableau, Snowflake, and stakeholder-facing reporting in healthcare and financial environments.",
  about:
    "I focus on practical analytics work: clean data models, clear KPI dashboards, predictive analysis, and reporting workflows that help teams make faster decisions. My background combines healthcare analytics, AML and fraud analysis, data governance, dashboard development, and applied data science projects.",
  roleFocus: [
    "Data Analysis",
    "Healthcare Analytics",
    "Fraud Analytics",
    "KPI Reporting",
    "Predictive Analytics",
  ],
  stats: [
    {
      label: "Patient outreach lift",
      value: "28%",
      detail: "Improvement through EDA and intervention analysis",
    },
    {
      label: "AML efficiency gain",
      value: "34%",
      detail: "Improved investigation workflows with SQL analysis",
    },
    {
      label: "False-positive reduction",
      value: "29%",
      detail: "Reduced AML alert noise through statistical analysis",
    },
    {
      label: "Prediction accuracy",
      value: "87%",
      detail: "Machine learning risk stratification model",
    },
  ] satisfies ProfileStat[],
  targetRoles: [
    "Data Analyst",
    "Healthcare Data Analyst",
    "Business Intelligence Analyst",
    "Fraud Analyst",
    "Analytics Engineer",
  ],
};
