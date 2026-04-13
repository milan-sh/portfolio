import { createFileRoute, Link } from "@tanstack/react-router";
import profile from "../assets/profile.jpeg";
import ButtonAnimated from "@/components/shared/ButtonAnimated";
import { ArrowRight } from "lucide-react";
import { SOCIALS } from "@/data";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col">
      {/* Main hero section */}
      <div className="flex-1 flex p-8 px-6 py-16 sm:px-10 md:px-16 lg:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center lg:items-start gap-10 md:gap-16 w-full max-w-6xl">
          {/* Text content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-start">
            <h1 className="text-[clamp(4rem,12vw,9rem)] leading-[0.9] font-bebas font-bold text-secondary tracking-wider">
              Milan Singh
            </h1>

            <p className="mt-4 max-w-sm text-sm sm:text-base leading-relaxed">
              I build high performance full stack web and{" "}
              <span className="highlight">mobile applications</span>
              with scalable architecture and intuitive user experiences.
            </p>

            <div className="mt-6 flex gap-4 flex-col sm:flex-row">
              <Link to="/contact">
                <ButtonAnimated className="w-full">
                  😁 LET'S TALK
                  <ArrowRight className="ml-2" />
                </ButtonAnimated>
              </Link>
              <Link to="/projects">
                <ButtonAnimated className="w-full">
                  👀 PROJECTS
                  <ArrowRight className="ml-2" />
                </ButtonAnimated>
              </Link>
            </div>

            {/* Socials — inline on all sizes */}
            <ul className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              {SOCIALS.map((social) => (
                <li key={social.name}>
                  <Link
                    to={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-2 underline-offset-2 text-sm sm:text-lg font-semibold transition-colors duration-300"
                  >
                    {social.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile image */}
          <div className="shrink-0">
            <img
              src={profile}
              alt="Milan Singh"
              className="
                w-52 h-52
                sm:w-64 sm:h-64
                md:w-[33vw] md:h-[70vh]
                border-3 rounded-sm object-cover object-center
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
