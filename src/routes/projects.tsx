import Heading from "@/components/shared/Heading";
import ProjectCard from "@/components/shared/projects/ProjectCard";
import { PROJECTS } from "@/data";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

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
