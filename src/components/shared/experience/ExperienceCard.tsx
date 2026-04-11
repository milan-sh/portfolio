import { type WorkExperience } from "@/types/experience.types";
import { useInView, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useRef } from "react";

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: WorkExperience;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10px 0px" });

  // Create reference for content animation
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-50px" });


  const colors = [
    "bg-yellow-400",
    "bg-blue-400",
    "bg-red-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-pink-400",
  ];

  const accentColor = colors[index % colors.length];
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex items-start group mb-12 last:mb-0"
    >
      {/* Content with improved responsiveness */}
      <div className="relative sm:w-5/6 mx-auto" ref={contentRef}>
        <motion.div
          initial={{ opacity: 0, y: 20, x: -10 }}
          animate={
            contentInView
              ? { opacity: 1, y: 0, x: 0 }
              : { opacity: 0, y: 20, x: -10 }
          }
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="relative bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] 
                     p-4 sm:p-6 md:p-8 transition-all duration-300 ease-out h-full rounded-md"
          style={{
            transformOrigin: "left center",
          }}
          whileHover={{
            y: -5,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6 mb-5 sm:mb-6">
            <div>
              <motion.h3
                className="font-heading text-xl sm:text-2xl md:text-3xl font-bold mb-3 relative inline-block pb-2"
                initial={{ opacity: 0 }}
                animate={contentInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
              >
                <Link to={experience.link} target="_blank">
                  {experience.company}
                </Link>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-black"></div>
              </motion.h3>
              <motion.p
                className="text-black font-sans text-base sm:text-lg md:text-xl font-medium"
                initial={{ opacity: 0 }}
                animate={contentInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              >
                {experience.title}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={
                contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }
              }
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              className="relative self-start"
            >
              <div
                className={`absolute inset-0 ${accentColor} border-[2px] border-black translate-x-1 translate-y-1 rounded-md`}
              ></div>
              <span className="relative bg-white border-[2px] border-black px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 font-bold font-heading text-sm sm:text-base md:text-lg block rounded-md ">
                {experience.duration}
              </span>
            </motion.div>
          </div>

          <motion.p
            className="text-black mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide font-sans"
            initial={{ opacity: 0 }}
            animate={contentInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
          >
            {experience.description}
          </motion.p>

          {/* Technologies section */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 pb-3 sm:pb-0">
            {experience.technologies.map((tech, i) => (
              <div key={i} className="relative">
                <div
                  className={`absolute inset-0 ${
                    colors[(i + index) % colors.length]
                  } border-[2px] border-black translate-x-1 translate-y-1 rounded-md transition-all duration-150 ease-in-out`}
                ></div>
                <span className="relative block bg-white border-[2px] border-black px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-1.5 text-xs sm:text-sm md:text-base font-medium font-sans rounded-md transition-all duration-150 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:cursor-pointer">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
