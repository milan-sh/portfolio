import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/retroui/Card";
import type { Project } from "@/types/project.types";
import ButtonAnimated from "../ButtonAnimated";

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="relative h-full w-full"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <motion.div
        animate={{ y: isHovered ? -3 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="h-full w-full rounded-md relative"
      >
        <Card className="w-full border-3 rounded-lg shadow-none">
          {/* Image container */}
          <div className="relative w-full h-[150px] sm:h-[170px] md:h-[190px] overflow-hidden flex-shrink-0 border-b-[2px] sm:border-b-[3px] border-black">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-300 ${
                isHovered ? "scale-105" : "scale-100"
              }`}
            />
          </div>

          {/* Content area */}
          <div className="flex flex-col flex-grow overflow-hidden">
            <Card.Header className="pl-3 pr-3 sm:pl-4 sm:pr-4 pt-3 pb-1 sm:pt-4 sm:pb-2">
              <Card.Title className="text-sm sm:text-base md:text-xl tracking-wide font-heading font-extrabold line-clamp-2">
                {project.title}
              </Card.Title>
            </Card.Header>

            <Card.Content className="px-3 sm:px-4 flex-grow overflow-y-auto">
              <Card.Description className="text-xs sm:text-base tracking-wide text-black">
                {project.description}
              </Card.Description>
            </Card.Content>

            <Card.Header className="flex items-center justify-between flex-col sm:flex-row gap-3 lg:gap-4 p-3 flex-shrink-0">
              <Link
                to={project.link}
                target="_blank"
                className="w-full relative group"
              >
                <ButtonAnimated className="rounded-lg w-full justify-center">
                  <span className="flex items-center justify-center gap-1 sm:gap-2 font-heading uppercase tracking-wide">
                    View Project
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </ButtonAnimated>
              </Link>

              <Link
                to={project.github}
                target="_blank"
                className="w-full relative group"
              >
                <ButtonAnimated className="rounded-lg w-full justify-center">
                  <span className="flex items-center justify-center gap-1 sm:gap-2 font-heading uppercase tracking-wide ">
                    GitHub
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </ButtonAnimated>
              </Link>
            </Card.Header>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
