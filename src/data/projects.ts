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
  /** Placeholder gameplay/demo video URL — replace later. */
  videoUrl: string;
  github: string;
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
    title: "AI Video Captioning Backend",
    category: "AI • Backend",
    thumbnail: aiCaptioning,
    screenshots: [aiCaptioning, analytics, focusRun],
    videoUrl: "https://example.com/placeholder-demo-video",
    github: "https://github.com/your-username/ai-video-captioning",
    demo: "https://example.com/live-demo",
    tech: ["Python", "FastAPI", "OpenCV", "REST APIs", "AWS"],
    description:
      "Placeholder description. A backend service that ingests video, extracts frames, and returns generated captions through a documented REST API.",
    challenges:
      "Placeholder. Keeping inference latency predictable while streaming large video files through a stateless API.",
    contribution:
      "Placeholder. Designed the API surface, frame-sampling pipeline, and deployment configuration.",
    lessons:
      "Placeholder. Queueing and batching matter more than raw model speed for real workloads.",
  },
  {
    id: "player-analytics",
    title: "Player Engagement & Retention Analytics",
    category: "Machine Learning • Data",
    thumbnail: analytics,
    screenshots: [analytics, aiCaptioning, platformer],
    videoUrl: "https://example.com/placeholder-demo-video",
    github: "https://github.com/your-username/player-analytics",
    demo: "https://example.com/live-demo",
    tech: ["Python", "Scikit-learn", "SQL", "Machine Learning"],
    description:
      "Placeholder description. An analytics pipeline that models player sessions to surface churn signals and engagement cohorts.",
    challenges:
      "Placeholder. Cleaning noisy event data and avoiding leakage in the retention labels.",
    contribution:
      "Placeholder. Built the feature engineering layer, model evaluation, and reporting views.",
    lessons:
      "Placeholder. A well-defined label beats a fancier model almost every time.",
  },
  {
    id: "multiplayer-fps",
    title: "Multiplayer FPS Game",
    category: "Unity • Networking",
    thumbnail: fps,
    screenshots: [fps, focusRun, platformer],
    videoUrl: "https://example.com/placeholder-gameplay-video",
    github: "https://github.com/your-username/multiplayer-fps",
    demo: "https://example.com/live-demo",
    tech: ["Unity", "C#", "Photon PUN", "Git"],
    description:
      "Placeholder description. A networked first-person shooter with matchmaking, synced weapon states, and round-based scoring.",
    challenges:
      "Placeholder. Reconciling client prediction with authoritative state without visible rubber-banding.",
    contribution:
      "Placeholder. Implemented networking layer, weapon system, and match lifecycle.",
    lessons:
      "Placeholder. Netcode decisions must be made before the gameplay code, not after.",
  },
  {
    id: "2d-platformer",
    title: "2D Platformer Game",
    category: "Unity • Gameplay",
    thumbnail: platformer,
    screenshots: [platformer, focusRun, fps],
    videoUrl: "https://example.com/placeholder-gameplay-video",
    github: "https://github.com/your-username/2d-platformer",
    demo: "https://example.com/live-demo",
    tech: ["Unity", "C#", "Game Design"],
    description:
      "Placeholder description. A momentum-driven 2D platformer with hand-tuned movement, hazards, and checkpoint progression.",
    challenges:
      "Placeholder. Getting jump feel right across variable frame rates.",
    contribution:
      "Placeholder. Built the character controller, level flow, and camera system.",
    lessons: "Placeholder. Game feel is iteration, not theory.",
  },
  {
    id: "focus-run",
    title: "Focus Run (3D)",
    category: "Unity • 3D",
    thumbnail: focusRun,
    screenshots: [focusRun, fps, analytics],
    videoUrl: "https://example.com/placeholder-gameplay-video",
    github: "https://github.com/your-username/focus-run",
    demo: "https://example.com/live-demo",
    tech: ["Unity", "C#", "3D Graphics"],
    description:
      "Placeholder description. A 3D endless runner built around focus mechanics, procedural track segments, and escalating difficulty.",
    challenges:
      "Placeholder. Keeping procedural generation fair while difficulty scales.",
    contribution:
      "Placeholder. Authored the segment generator, scoring loop, and shader-driven visuals.",
    lessons:
      "Placeholder. Procedural systems need guardrails and lots of seeded testing.",
  },
];
