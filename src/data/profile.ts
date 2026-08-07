export type ProfileStat = {
  label: string;
  value: string;
  detail: string;
};

export const profile = {
  name: "Ayush Meshram",
  title: "AI/ML Engineer",
  location: "Bradbury, California, USA",
  email: "ayushmeshram1419@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayush-meshram025/",
  github: "https://github.com/Ayush141910",
  headline:
    "Building machine learning, generative AI, computer vision, and scalable inference systems for healthcare and financial services.",
  summary:
    "I am an AI/ML Engineer with experience developing machine learning solutions for healthcare and financial services. My work spans predictive modeling, generative AI, fraud detection, clinical decision support, scalable ML applications, and production-oriented MLOps using Python, PyTorch, TensorFlow, scikit-learn, XGBoost, LangChain, FastAPI, Docker, AWS, Azure, and vector search systems.",
  about:
    "I focus on applied AI systems that move from model development into usable products: retrieval-augmented generation, semantic search, risk scoring, computer vision workflows, scalable inference APIs, and evaluation loops that teams can trust. My background combines AI/ML engineering, financial fraud detection, healthcare decision support, MLOps, and data-driven product delivery.",
  roleFocus: [
    "AI/ML Engineering",
    "Generative AI",
    "Computer Vision",
    "MLOps",
    "Fraud Detection",
  ],
  stats: [
    {
      label: "Contract pages indexed",
      value: "1.2M",
      detail: "RAG system with evidence-based answers",
    },
    {
      label: "Contextual relevance",
      value: "92%",
      detail: "Azure OpenAI and FAISS retrieval quality",
    },
    {
      label: "KYC accuracy",
      value: "96%",
      detail: "OCR and OpenCV verification workflow",
    },
    {
      label: "Inference availability",
      value: "99.7%",
      detail: "Docker and AWS SageMaker serving",
    },
  ] satisfies ProfileStat[],
  targetRoles: [
    "AI/ML Engineer",
    "Machine Learning Engineer",
    "Generative AI Engineer",
    "Computer Vision Engineer",
    "MLOps Engineer",
  ],
};
