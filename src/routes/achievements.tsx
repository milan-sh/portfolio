import { motion } from "framer-motion";
import Heading from "@/components/shared/Heading";
import { createFileRoute } from "@tanstack/react-router";
import SIHCard from "@/components/shared/achievement/SIHCard";
import MonkeyTypeCard from "@/components/shared/achievement/MonkeyTypeCard";

export const Route = createFileRoute("/achievements")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <motion.div
      className="flex-1 flex flex-col px-6 pt-8 sm:py-12 sm:px-10 md:px-16 lg:px-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Heading>Achievements</Heading>

      <div className="mx-auto mb-8 sm:mb-0 flex flex-col gap-8 sm:w-5/6">
        <SIHCard />
        <MonkeyTypeCard />
      </div>
    </motion.div>
  );
}
