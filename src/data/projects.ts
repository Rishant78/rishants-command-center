import aiCaptioning from "@/assets/project-ai-captioning.jpg";
import analytics from "@/assets/project-analytics.jpg";
import fps from "@/assets/project-fps.jpg";
import platformer from "@/assets/project-platformer.jpg";
import focusRun from "@/assets/project-focus-run.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  screenshots: string[];
  videoUrl: string;
  github?: string;
  demo: string;
  tech: string[];
  description: string;
  challenges: string;
  contribution: string;
  lessons: string;
}

export const projects: Project[] = [
  {
    id: "ai-video-captioning",
    title: "AI Video Captioning Agent",
    category: "AI • Backend",
    thumbnail: aiCaptioning,
    screenshots: [aiCaptioning, analytics, focusRun],

    videoUrl:
      "https://drive.google.com/file/d/1lhmYKkLjiBdbqepkl5Lmv8hGqOxieaLN/view?usp=drive_link",

    github: "https://github.com/Rishant78/AMD_Deveoper_Hakathon",

    demo: "https://amd-deveoper-hakathon-veeo-gilt.vercel.app/",

    tech: ["Python", "FastAPI", "OpenCV", "REST APIs", "AWS"],

    description:
      "An AI-powered video captioning agent that processes video content, extracts frames, and generates contextual captions using computer vision and large language models.",

    challenges:
      "Processing video efficiently while maintaining meaningful visual context across extracted frames.",

    contribution:
      "Worked on the backend, including video processing, frame extraction, API integration, and caption generation workflow.",

    lessons:
      "Learned how multimodal AI systems combine computer vision, backend APIs, and efficient data processing.",
  },

  {
    id: "player-engagement",
    title: "Player Engagement & Retention Analytics",
    category: "Machine Learning • Data",
    thumbnail: analytics,
    screenshots: [analytics, aiCaptioning, platformer],

    videoUrl:
      "https://drive.google.com/file/d/1nMSeOEw7Kb9ui0lTY82v_7alGqrSccCP/view?usp=drive_link",

    github: "https://github.com/Rishant78/IBM-Project-Internship",

    demo: "https://ibm-project-internship.vercel.app/",

    tech: ["Python", "Scikit-learn", "Machine Learning", "Data Analysis"],

    description:
      "A machine learning system designed to analyze player behavior and predict potential churn using gameplay and engagement data.",

    challenges:
      "Selecting meaningful behavioral features and building a model that could identify patterns related to player retention.",

    contribution:
      "Built the data analysis and machine learning workflow, including preprocessing, model training, evaluation, and integration with the retention simulator.",

    lessons:
      "Learned the importance of feature engineering, model evaluation, and understanding the limitations of real-world datasets.",
  },

  {
    id: "focus-run",
    title: "Focus Run",
    category: "Unity • 3D",
    thumbnail: focusRun,
    screenshots: [focusRun, fps, analytics],

    videoUrl:
      "https://drive.google.com/file/d/1h8L6FnbQ33dqheNwsqycdGv1fhkbsz-c/view?usp=drive_link",

    demo: "https://rishant78.itch.io/focusrun",

    tech: ["Unity", "C#", "3D Game Development"],

    description:
      "A 3D game designed around player attention and focus, combining gameplay mechanics with behavioral evaluation.",

    challenges:
      "Designing gameplay mechanics that could evaluate player focus while keeping the experience engaging and responsive.",

    contribution:
      "Developed the game systems, gameplay mechanics, and player attention-related features.",

    lessons:
      "Learned how game design, player behavior, and technical systems can work together to create meaningful gameplay experiences.",
  },

  {
    id: "2d-platformer",
    title: "World of Kinsuk",
    category: "Unity • Gameplay",
    thumbnail: platformer,
    screenshots: [platformer, focusRun, fps],

    videoUrl:
      "https://drive.google.com/file/d/13HutAV_9JXzTeZ8kpGs9qyxvtR3zu8TO/view?usp=drive_link",

    demo: "https://jalaj-singhal.itch.io/world-of-kinsuk",

    tech: ["Unity", "C#", "2D Game Development"],

    description:
      "A 2D platformer featuring multiple levels, enemy encounters, boss battles, special abilities, attacks, and teleportation mechanics.",

    challenges:
      "Balancing different gameplay mechanics while maintaining smooth level progression and a consistent player experience.",

    contribution:
      "Worked as part of a team on gameplay systems, mechanics, and the overall game experience.",

    lessons:
      "Learned the importance of teamwork, gameplay balancing, and iterative testing in game development.",
  },

  {
    id: "before-u-act",
    title: "Before U Act",
    category: "Unity • Game",
    thumbnail: fps,
    screenshots: [fps, focusRun, platformer],

    videoUrl:
      "https://drive.google.com/file/d/1m0t5SIBTZQltleQiCQxwyC_oC_4RRpeU/view?usp=drive_link",

    demo: "https://rishant78.itch.io/before-u-act",

    tech: ["Unity", "C#", "Game Design"],

    description:
      "A game focused on decision-making, timing, and player actions in different gameplay situations.",

    challenges:
      "Balancing player responsiveness with meaningful choices and maintaining engaging gameplay pacing.",

    contribution:
      "Developed core gameplay mechanics, interactions, and the overall gameplay flow.",

    lessons:
      "Learned how pacing, player feedback, and simple mechanics can combine to create engaging gameplay.",
  },
];