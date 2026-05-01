export type ProjectLink = {
  label: string;
  href: string;
  placeholder?: boolean;
};

export type Project = {
  name: string;
  category: string;
  summary: string;
  stack: string[];
  highlights: string[];
  metrics?: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    name: "AegisFlow",
    category: "Data Engineering",
    summary:
      "Real-time risk and resilience platform for anomaly detection across transactions, logins, infrastructure, and external events.",
    stack: [
      "Kafka",
      "Spark Structured Streaming",
      "Delta Lake",
      "Streamlit",
      "Airflow",
      "Great Expectations",
      "MLflow",
      "Isolation Forest",
      "STL Decomposition",
    ],
    highlights: [
      "Built an end-to-end streaming platform for real-time anomaly detection.",
      "Developed ML models and an Aegis Score to quantify risk and financial impact.",
      "Engineered self-healing pipelines with validation, tracking, forecasting, and automated mitigation actions.",
      "Designed a geospatial dashboard for operational visibility.",
    ],
    links: [
      { label: "Add GitHub link", href: "#", placeholder: true },
      { label: "Add live demo link", href: "#", placeholder: true },
      { label: "Add case study link", href: "#", placeholder: true },
    ],
  },
  {
    name: "ValorPredict",
    category: "Machine Learning",
    summary:
      "Valorant match outcome predictor and performance analyzer with a full-stack ML pipeline and Streamlit dashboard.",
    stack: [
      "Python",
      "Logistic Regression",
      "Random Forest",
      "Streamlit",
      "Heatmaps",
      "Bar Charts",
      "Histograms",
    ],
    highlights: [
      "Processed gameplay data and documented preprocessing steps for model training.",
      "Trained logistic regression and random forest models for match outcome prediction.",
      "Visualized agent and map performance insights that informed three new team compositions.",
      "Built a Streamlit dashboard for real-time prediction inputs and performance insights.",
    ],
    metrics: ["100% test accuracy on match outcome predictions", "95% real-time logistic regression prediction accuracy"],
    links: [
      { label: "Add GitHub link", href: "#", placeholder: true },
      { label: "Add live demo link", href: "#", placeholder: true },
      { label: "Add case study link", href: "#", placeholder: true },
    ],
  },
  {
    name: "Food For U",
    category: "AI Product",
    summary:
      "Flutter app that recommends restaurants using taste profiles, dietary needs, mined restaurant data, and documented ETL pipelines.",
    stack: ["Flutter", "Python", "SQL", "Machine Learning", "AI Algorithms", "ETL"],
    highlights: [
      "Developed a mobile application that recommends restaurants based on user taste profiles and dietary needs.",
      "Mined restaurant data from 500+ sources using Python and SQL.",
      "Created ETL pipelines to populate a detailed menu database for personalized recommendations.",
    ],
    metrics: ["500+ restaurant data sources mined", "35% improvement in user engagement"],
    links: [
      { label: "Add GitHub link", href: "#", placeholder: true },
      { label: "Add live demo link", href: "#", placeholder: true },
      { label: "Add case study link", href: "#", placeholder: true },
    ],
  },
];
