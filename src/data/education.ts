export type Education = {
  institution: string;
  degree: string;
  field: string;
  location: string;
  dates: string;
  gpa: string;
};

export const education: Education[] = [
  {
    institution: "University of Texas at Arlington",
    degree: "Master's",
    field: "Data Science",
    location: "Arlington, Texas, USA",
    dates: "2024 - 2026",
    gpa: "3.83/4",
  },
  {
    institution: "Vidyalankar Institute of Technology",
    degree: "Bachelor's",
    field: "Electronics and Telecommunication",
    location: "Mumbai, Maharashtra, India",
    dates: "2020 - 2024",
    gpa: "3.5/4",
  },
];
