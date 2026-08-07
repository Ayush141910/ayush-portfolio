export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Markovate",
    role: "AI/ML Engineer",
    location: "United States",
    dates: "Jun 2025 - Present",
    bullets: [
      "Implemented retrieval-augmented generation across 1.2 million contract pages using LangChain, Azure OpenAI, and FAISS, delivering evidence-based answers with 92% contextual relevance.",
      "Streamlined contract obligation tracking for 12 business units using PostgreSQL, scheduled workflows, and Power BI, reducing missed renewal deadlines by 45%.",
      "Optimized semantic search across 8 million text chunks using FAISS embeddings and metadata filters, reducing average document discovery time from 12 minutes to 40 seconds.",
      "Established human-in-the-loop validation for low-confidence extractions below 55% using FastAPI and reviewer queues, increasing production accuracy to 98%.",
      "Configured prompt templates and output schemas for 15 legal use cases using Azure OpenAI and Pydantic, reducing malformed responses by 72%.",
      "Set up GitHub Actions workflows for 25+ services to run automated tests, security checks, Docker builds, and deployments, cutting release time by 55%.",
    ],
  },
  {
    company: "Hexaware Technologies",
    role: "AI/ML Engineer",
    location: "Mumbai, India",
    dates: "Jan 2023 - Jul 2024",
    bullets: [
      "Developed an automated KYC workflow for slow manual verification, processing 12,000+ annual documents through Python, OpenCV, and OCR with 96% accuracy.",
      "Established model-governance workflows across 35 model versions using MLflow, improving reproducibility and reducing production release cycles from 21 to 8 days.",
      "Built a customer risk-scoring system across 2.4 million historical records using XGBoost and 45 features, achieving 61% ROC-AUC and strengthening fraud prevention.",
      "Deployed scalable inference services using Docker and AWS SageMaker, supporting 350 concurrent requests while maintaining 99.7% availability.",
    ],
  },
];
