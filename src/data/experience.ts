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
    duration: "2025",
    description:
      "Worked on the Player Engagement & Retention Analytics System, using player behavior data to analyze engagement patterns and predict potential player churn. Built the data preprocessing, machine learning, evaluation, and retention simulation workflow.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Machine Learning",
      "Pandas",
      "Jupyter",
    ],
    achievement:
      "Built and deployed a machine learning-based player retention analytics system with an interactive web interface.",
    status: "completed",
  },

  {
    id: "amd-hackathon",
    role: "Backend Developer / Participant",
    org: "AMD Developer Hackathon",
    duration: "2025",
    description:
      "Worked on the backend for an AI Video Captioning Agent that processes video content, extracts frames using OpenCV, and generates contextual captions through a multimodal AI workflow.",
    technologies: [
      "Python",
      "FastAPI",
      "OpenCV",
      "REST APIs",
      "Fireworks AI",
    ],
    achievement:
      "Developed the video processing and AI integration pipeline for a working hackathon prototype.",
    status: "completed",
  },

  {
    id: "freelance-unity",
    role: "Freelance Unity Game Developer",
    org: "Independent Client Project",
    duration: "2024 — Present",
    description:
      "Developed gameplay systems and multiplayer functionality for a Unity-based client project, including player movement, shooting, health mechanics, and networked gameplay using Photon PUN.",
    technologies: ["Unity", "C#", "Photon PUN", "Multiplayer", "Git"],
    achievement:
      "Built the core multiplayer gameplay systems and delivered a playable client project.",
    status: "active",
  },

  {
    id: "inf-it",
    role: "IT Intern",
    org: "International Nepal Fellowship — Green Pastures Hospital",
    duration: "2025",
    description:
      "Supported IT operations by troubleshooting software and hardware issues, assisting with networking and device setup, and learning enterprise tools including Active Directory, Windows Server, Microsoft Entra ID, Azure, and virtual machines.",
    technologies: [
      "Windows Server",
      "Active Directory",
      "Microsoft Azure",
      "Microsoft Entra ID",
      "Networking",
      "Oracle VM",
    ],
    achievement:
      "Gained hands-on experience troubleshooting real organizational IT systems while improving communication and technical support skills.",
    status: "completed",
  },
];