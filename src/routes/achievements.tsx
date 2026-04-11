import Heading from "@/components/shared/Heading";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/achievements")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex-1 flex flex-col px-6 pt-8 sm:py-12 sm:px-10 md:px-16 lg:px-20">
      <Heading>Achievements</Heading>
      <h1 className="mx-auto my-4">Coming Soon...</h1>
    </div>
  );
}
