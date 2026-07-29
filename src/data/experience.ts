export interface Experience {
  id: string;
  role: string;
  org: string;
  duration: string;
  description: string;
  technologies: string[];
  achievement: string;
  status: "completed" | "active";
}

export const experiences: Experience[] = [
  {
    id: "ibm-skillsbuild",
    role: "AI / ML Intern",
    org: "IBM SkillsBuild — Project-Based Internship",
    duration: "Placeholder • 2025",
    description:
      "Placeholder description. Worked through project-based AI/ML modules, building and evaluating models on real datasets and documenting the full experimentation workflow.",
    technologies: ["Python", "Scikit-learn", "Machine Learning", "Jupyter"],
    achievement: "Completed the project-based AI/ML track with a certified capstone submission.",
    status: "completed",
  },
  {
    id: "amd-hackathon",
    role: "Participant",
    org: "AMD Developer Hackathon",
    duration: "Placeholder • 2025",
    description:
      "Placeholder description. Built and pitched a prototype under a fixed time window, focusing on compute-accelerated inference and a demo-ready interface.",
    technologies: ["Python", "Optimization", "Rapid Prototyping"],
    achievement: "Shipped a working prototype and demo within the hackathon window.",
    status: "completed",
  },
  {
    id: "freelance-unity",
    role: "Freelance Unity Game Developer",
    org: "Independent Clients",
    duration: "Placeholder • 2024 — Present",
    description:
      "Placeholder description. Delivered gameplay systems, UI flows, and builds for client projects, from prototype to playable release.",
    technologies: ["Unity", "C#", "Photon PUN", "Git"],
    achievement: "Delivered client builds on schedule with positive review cycles.",
    status: "active",
  },
  {
    id: "gov-nepal-it",
    role: "IT Intern",
    org: "Government of Nepal",
    duration: "Placeholder • 2024",
    description:
      "Placeholder description. Supported internal IT operations, troubleshooting, and small automation tasks in a public-sector environment.",
    technologies: ["Networking", "Support", "Automation"],
    achievement: "Reduced manual routine work through simple scripted automation.",
    status: "completed",
  },
  {
    id: "inf-it",
    role: "IT Intern",
    org: "International Nepal Fellowship",
    duration: "Placeholder • 2024",
    description:
      "Placeholder description. Assisted with systems maintenance, data handling, and internal tooling for a non-profit organization.",
    technologies: ["SQL", "Systems Admin", "Documentation"],
    achievement: "Improved internal data handling workflows and documentation.",
    status: "completed",
  },
];
