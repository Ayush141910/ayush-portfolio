export type Education = {
  institution: string;
  degree: string;
  field: string;
  location: string;
  dates?: string;
  gpa?: string;
};

export const education: Education[] = [
  {
    institution: "University of Texas at Arlington",
    degree: "Master of Science",
    field: "Data Science",
    location: "Arlington, TX, USA",
  },
  {
    institution: "Vidyalankar Institute of Technology",
    degree: "Bachelor's",
    field: "Electronics and Telecommunication Engineering with Minor in Data Science",
    location: "Mumbai, India",
  },
];
