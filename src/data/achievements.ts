export interface Achievement {
  id: string;
  title: string;
  description: string;
  xp: number;
  rarity: "common" | "rare" | "epic" | "legendary";
}

export const achievements: Achievement[] = [
  {
    id: "ibm",
    title: "IBM SkillsBuild Internship",
    description: "Placeholder. Completed the project-based AI/ML internship track.",
    xp: 750,
    rarity: "epic",
  },
  {
    id: "amd",
    title: "AMD Developer Hackathon",
    description: "Placeholder. Built and pitched a prototype under hackathon conditions.",
    xp: 600,
    rarity: "rare",
  },
  {
    id: "aws",
    title: "AWS Cloud Practitioner",
    description: "Placeholder. Certified on core AWS cloud concepts and services.",
    xp: 500,
    rarity: "rare",
  },
  {
    id: "freelance",
    title: "Freelance Client Project",
    description: "Placeholder. Shipped a paid Unity project end to end.",
    xp: 450,
    rarity: "common",
  },
  {
    id: "fps",
    title: "Multiplayer FPS Completed",
    description: "Placeholder. Shipped a networked FPS with full match lifecycle.",
    xp: 900,
    rarity: "legendary",
  },
];

export const totalXp = achievements.reduce((sum, a) => sum + a.xp, 0);
