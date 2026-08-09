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
    role: "Project-Based AI / ML Intern",
    org: "IBM SkillsBuild",
    duration: "June 2026 — Present",
    description:
      "Working on the Player Engagement & Retention Analytics System, using player behavior data to analyze engagement patterns and predict potential player churn. Built the data preprocessing, machine learning, evaluation, and retention simulation workflow.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Machine Learning",
      "Pandas",
      "Jupyter",
    ],
    achievement:
      "Built a machine learning-based player retention analytics system with an interactive web interface.",
    status: "active",
  },

  {
    id: "amd-hackathon",
    role: "Backend Developer / Participant",
    org: "AMD Developer Hackathon (ACT II)",
    duration: "2026",
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
    duration: "Jan 2026 — March 2026",
    description:
      "Independently developed a multiplayer FPS game using Unity, C#, and Photon PUN, implementing networking, player movement, shooting, and health systems.",
    technologies: ["Unity", "C#", "Photon PUN", "Multiplayer", "Git"],
    achievement:
      "Collaborated to deliver two client game projects under a freelance contract.",
    status: "completed",
  },

  {
    id: "hydrology-it",
    role: "IT Intern",
    org: "Office of Hydrology & Meteorology, Pokhara",
    duration: "June 2025 — July 2025",
    description:
      "Supported daily IT operations by troubleshooting desktops and peripherals, assisting with LAN setup, and configuring organizational devices.",
    technologies: [
      "Hardware Troubleshooting",
      "Networking",
      "LAN",
      "Device Configuration",
      "IT Support",
    ],
    achievement:
      "Provided hands-on technical support for organizational IT systems and network-connected devices.",
    status: "completed",
  },

  {
    id: "inf-it",
    role: "IT Intern",
    org: "International Nepal Fellowship — Green Pastures Hospital",
    duration: "June 2024 — July 2024",
    description:
      "Supported IT operations by troubleshooting PCs, printers, and projectors, configuring LAN devices and media converters, and gaining hands-on experience with Active Directory, Azure, and Windows Server.",
    technologies: [
      "Windows Server",
      "Active Directory",
      "Microsoft Azure",
      "Microsoft Entra ID",
      "Networking",
      "Oracle VM",
    ],
    achievement:
      "Gained hands-on experience supporting real organizational IT systems and troubleshooting hardware, software, and network-related issues.",
    status: "completed",
  },
];