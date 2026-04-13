import { type WorkExperience } from "@/types/experience.types";
import { type Project } from "@/types/project.types";
import bingebee from "@/assets/projects/bingebee.png";
import blog from "@/assets/projects/blog.png";
import weather from "@/assets/projects/weather.png";
import dice from "@/assets/projects/dice.png";

const stats = {
  highestWpm: 92,
  avgWpm: 63,
  avgAccuracy: 91,
  highestConsistency: 64,
  avgConsistency: 63,
  testsCompleted: 20,
  completionRate: "100%",
  profileUrl: "https://monkeytype.com/profile/milan-sh",
};

const PROJECTS: Project[] = [
  {
    title: "BingeBee",
    description:
      "Video streaming platform with uploads, likes, comments, playlists, and subscriptions for an interactive viewing experience.",
    link: "https://bingebee.vercel.app/",
    github: "https://github.com/milan-sh/bingebee.git",
    image: bingebee,
  },
  {
    title: "Binary Blogs",
    description:
      "Responsive blogging platform for creating, editing, and exploring articles with focus on performance and UX.",
    link: "https://binary-blogs.vercel.app/",
    github: "https://github.com/milan-sh/binary-blogs.git",
    image: blog,
  },
  {
    title: "Weather Watcher",
    description:
      "Real-time weather app with clean UI showing temperature, humidity, and wind data for any location.",
    link: "https://milan-sh.github.io/weather-app/",
    github: "https://github.com/milan-sh/weather-app.git",
    image: weather,
  },
  {
    title: "Dice Guesser",
    description:
      "Interactive dice prediction game featuring smooth animations, real-time feedback, and an engaging user experience.",
    link: "https://dice-game-amber-beta.vercel.app/",
    github: "https://github.com/milan-sh/dice-game.git",
    image: dice,
  },
];

const WORK_EXPERIENCES: WorkExperience[] = [
  {
    company: "Dash Dynamic",
    title: "Software Developer",
    duration: "Sept 2025 - Present",
    description:
      "Building a high performance cross platform app with real time BLE streaming, scalable backend systems, and optimized APIs. Developed a data intensive dashboard and deployed fault tolerant AWS infrastructure to ensure reliability and performance.",
    technologies: [
      "React Native",
      "Express.js",
      "AWS",
      "PostgreSQL",
      "Redis",
      "Clerk",
    ],
    link: "https://dashdynamic.in",
  },
  {
    company: "Sudo Yantra",
    title: "Frontend Developer Intern",
    duration: "Nov 2024 - Feb 2025",
    description:
      "Improved platform performance and accessibility using modern frontend practices, while optimizing assets and leveraging shadcn and Docker for efficient development and delivery.",
    technologies: ["TypeScript", "Tailwind CSS", "Shadcn UI", "Docker"],
    link: "https://sudoyantra.com",
  },
];

const SOCIALS = [
  { name: "GitHub", url: "https://github.com/milan-sh" },
  { name: "X", url: "https://x.com/dev_81milan" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/milan-singh-81ms33" },
  { name: "Email", url: "mailto:devmilansingh81@gmail.com" },
];

export { stats, PROJECTS, WORK_EXPERIENCES, SOCIALS };
