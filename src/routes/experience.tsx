import Heading from "@/components/shared/Heading";
import { createFileRoute } from "@tanstack/react-router";
import { type WorkExperience } from "@/types/experience.types";
import ExperienceCard from "@/components/shared/experience/ExperienceCard";

export const Route = createFileRoute("/experience")({
  component: RouteComponent,
});

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
