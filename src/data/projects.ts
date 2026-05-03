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
      { label: "GitHub", href: "https://github.com/Ayush141910/aegisflow-risk-platform" },
      { label: "Live Demo", href: "https://ayush141910.github.io/aegisflow-risk-platform/" },
      { label: "Add case study link", href: "#", placeholder: true },
    ],
  },
  {
    name: "ValorPredict",
    category: "Machine Learning",
    summary:
      "Valorant esports strategy simulator that models map, agent composition, and per-agent kill targets from professional VCT history.",
    stack: [
      "Python",
      "scikit-learn",
      "Gradient Boosting",
      "AdaBoost",
      "Streamlit",
      "Pandas",
      "VCT Analytics",
      "Model Calibration",
    ],
    highlights: [
      "Built a Strategy Lab where users choose a map, five agents, expected kills, and target win probability.",
      "Engineered VCT 2021-2026 player-map and team-map features for lineup simulation and pre-match benchmarking.",
      "Added role-aware kill targets, composition confidence, sensitivity analysis, opponent pressure, and map meta insights.",
      "Deployed a public Streamlit dashboard with model cards, calibration reporting, CI, and clean project documentation.",
    ],
    metrics: ["86.9% 2026 strategy holdout balanced accuracy", "Public Streamlit demo + GitHub Actions CI"],
    links: [
      { label: "GitHub", href: "https://github.com/Ayush141910/valorpredict" },
      { label: "Live Demo", href: "https://valorpredict.streamlit.app/" },
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
