export interface Skill {
  name: string;
  /** Project ids from data/projects.ts that use this skill. */
  projects: string[];
}

export interface SkillBranch {
  id: string;
  name: string;
  skills: Skill[];
}

export const skillTree: SkillBranch[] = [
  {
    id: "programming",
    name: "Programming",
    skills: [
      { name: "Python", projects: ["ai-video-captioning", "player-analytics"] },
      { name: "C#", projects: ["multiplayer-fps", "2d-platformer", "focus-run"] },
      { name: "C", projects: [] },
      { name: "SQL", projects: [] },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "FastAPI", projects: ["ai-video-captioning"] },
      { name: "REST APIs", projects: ["ai-video-captioning"] },
    ],
  },
  {
    id: "ai",
    name: "AI",
    skills: [
      { name: "Machine Learning", projects: ["player-analytics"] },
      { name: "OpenCV", projects: ["ai-video-captioning"] },
      { name: "Scikit-learn", projects: ["player-analytics"] },
    ],
  },
  {
    id: "gamedev",
    name: "Game Development",
    skills: [
      { name: "Unity", projects: ["multiplayer-fps", "2d-platformer", "focus-run","before U act"] },
      { name: "Photon PUN", projects: ["multiplayer-fps"] },
    ],
  },
  {
    id: "cloud",
    name: "Cloud",
    skills: [
      { name: "AWS", projects: [] },
    ],
  },
  {
    id: "tools",
    name: "Developer Tools",
    skills: [
      { name: "Git", projects: [] },
      { name: "GitHub", projects: [] },
    ],
  },
];
