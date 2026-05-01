export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming & Frameworks",
    skills: [
      "Python",
      "C",
      "C++",
      "R Programming",
      "JavaScript",
      "HTML",
      "CSS",
      "Flutter",
      "PyTorch",
      "TensorFlow",
      "PySpark",
    ],
  },
  {
    title: "Data Science & Machine Learning",
    skills: [
      "Machine Learning",
      "AI Algorithms",
      "Deep Learning",
      "Natural Language Processing",
      "Data Analysis",
      "Statistical Inference",
      "Machine Learning Models",
      "Statistical Learning",
      "Time-Series Forecasting",
      "Anomaly Detection",
      "Geospatial Analytics",
      "Tableau",
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "Apache Spark Structured Streaming",
      "Apache Kafka",
      "Apache Airflow",
      "Delta Lake",
      "Great Expectations",
      "MLflow",
      "MinIO / S3",
    ],
  },
  {
    title: "Databases & Cloud",
    skills: ["SQL", "MySQL", "MongoDB", "AWS", "Azure"],
  },
];

export const websiteStack = ["React", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"];
