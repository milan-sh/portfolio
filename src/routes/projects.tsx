import Heading from "@/components/shared/Heading";
import ProjectCard from "@/components/shared/projects/ProjectCard";
import type { Project } from "@/types/project.types";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

const PROJECTS: Project[] = [
  {
    title: "BingeBee",
    description:
      "Video streaming platform with uploads, likes, comments, playlists, and subscriptions for an interactive viewing experience.",
    link: "https://bingebee.vercel.app/",
    github: "https://github.com/milan-sh/bingebee.git",
    image: "/src/assets/projects/bingebee.png",
  },
  {
    title: "Binary Blogs",
    description:
      "Responsive blogging platform for creating, editing, and exploring articles with focus on performance and UX.",
    link: "https://binary-blogs.vercel.app/",
    github: "https://github.com/milan-sh/binary-blogs.git",
    image: "/src/assets/projects/blog.png",
  },
  {
    title: "Weather Watcher",
    description:
      "Real-time weather app with clean UI showing temperature, humidity, and wind data for any location.",
    link: "https://milan-sh.github.io/weather-app/",
    github: "https://github.com/milan-sh/weather-app.git",
    image: "/src/assets/projects/weather.png",
  },
  {
    title: "Dice Guesser",
    description:
      "Interactive dice prediction game featuring smooth animations, real-time feedback, and an engaging user experience.",
    link: "https://dice-game-amber-beta.vercel.app/",
    github: "https://github.com/milan-sh/dice-game.git",
    image: "/src/assets/projects/dice.png",
  },
];

function RouteComponent() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 flex flex-col px-6 pt-8 sm:py-12 sm:px-10 md:px-16 lg:px-20">
        <Heading>Projects</Heading>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mx-auto my-8">
          <h3 className="tracking-tight text-sm text-center font-semibold">
            MORE PROJECTS COMING SOON
          </h3>
          <p className="text-muted-foreground text-sm">
            🤫 <span className="italic">currently working on Happy Dates</span>
          </p>
        </div>
      </div>
    </div>
  );
}
