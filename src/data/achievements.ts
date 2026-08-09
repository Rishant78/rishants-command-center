export interface Achievement {
  id: string;
  title: string;
  description: string;
  xp: number;
  rarity: "common" | "rare" | "epic" | "legendary";
}

export const achievements: Achievement[] = [
  {
    id: "amd",
    title: "AMD Developer Hackathon",
    description:
      "Built an AI Video Captioning Agent and currently ranked 49th worldwide in our category in a global hackathon with 20,000+ participants. Final results are yet to be announced.",
    xp: 1000,
    rarity: "legendary",
  },
  {
    id: "nit-rourkela-game-jam",
    title: "NIT Rourkela Game Jam",
    description:
      "Secured 6th position in an All-India game development competition.",
    xp: 950,
    rarity: "legendary",
  },
  {
    id: "aws",
    title: "AWS Cloud Practitioner",
    description:
      "Completed AWS Cloud Practitioner training focused on core cloud concepts and AWS services.",
    xp: 500,
    rarity: "rare",
  },
  {
    id: "freelance",
    title: "Freelance Game Development",
    description:
      "Developed and delivered gameplay systems and multiplayer functionality for a Unity client project.",
    xp: 600,
    rarity: "epic",
  },
];

export const totalXp = achievements.reduce((sum, a) => sum + a.xp, 0);