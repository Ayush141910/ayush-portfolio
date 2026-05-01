export type ProfileStat = {
  label: string;
  value: string;
  detail: string;
};

export const profile = {
  name: "Ayush Meshram",
  title: "Data Science & Automation Student",
  location: "Arlington, Texas, USA",
  email: "meshramayush765@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayush-meshram025/",
  github: "https://github.com/Ayush141910",
  headline:
    "Building machine learning, analytics, and real-time data systems that turn complex data into decisions.",
  summary:
    "I am a Master's student in Data Science at the University of Texas at Arlington with experience across analytics, automation, machine learning pipelines, and data engineering systems. I have worked on SQL migrations, Tableau reporting, predictive automation, full-stack ML dashboards, and real-time anomaly detection platforms using tools such as Python, Spark, Kafka, Airflow, MLflow, Great Expectations, and Streamlit.",
  about:
    "I focus on practical data products: cleaned data that teams can trust, models that explain decisions, and dashboards that make technical work usable. My background combines data analysis internships, software development internships, and projects that connect machine learning with real-time data engineering.",
  roleFocus: [
    "Data Science",
    "Machine Learning",
    "Data Engineering",
    "Analytics Automation",
    "AI Product Prototyping",
  ],
  stats: [
    {
      label: "Product data migrated",
      value: "75,000+",
      detail: "Excel records moved to SQL with 95% data accuracy",
    },
    {
      label: "Inventory processing lift",
      value: "30%",
      detail: "Improvement through cleaning and process automation",
    },
    {
      label: "Restaurant sources mined",
      value: "500+",
      detail: "Used for ETL pipelines powering app recommendations",
    },
    {
      label: "Current GPA",
      value: "3.83/4",
      detail: "Master's in Data Science at UT Arlington",
    },
  ] satisfies ProfileStat[],
  targetRoles: [
    "Data Analyst",
    "Data Scientist",
    "Machine Learning Engineer",
    "Data Engineer",
    "AI / Analytics Intern",
  ],
};
