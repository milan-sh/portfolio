import Heading from "@/components/shared/Heading";
import { createFileRoute } from "@tanstack/react-router";
import ExperienceCard from "@/components/shared/experience/ExperienceCard";
import { WORK_EXPERIENCES } from "@/data";

export const Route = createFileRoute("/experience")({
  component: RouteComponent,
});



function RouteComponent() {
  return (
    <div className="flex-1 flex flex-col px-6 pt-8 sm:py-12 sm:px-10 md:px-16 lg:px-20">
      <Heading>Work Experience</Heading>
      <div className="my-8">
        {WORK_EXPERIENCES.map((experience, index) => (
          <ExperienceCard experience={experience} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
