import { Button } from "../retroui/Button";
import { Link } from "@tanstack/react-router";
import ButtonAnimated from "./ButtonAnimated";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/", color: "bg-red-400" },
  { label: "Projects", href: "/projects", color: "bg-blue-400" },
  { label: "Experience", href: "/experience", color: "bg-green-400" },
  { label: "Achievements", href: "/achievements", color: "bg-purple-400" },
  { label: "Contact", href: "/contact", color: "bg-yellow-400" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white p-2 flex items-center justify-between">
      {/* logo */}
      <div className="flex-shrink-0">
        <Link to="/">
          <ButtonAnimated>
            <span>Milan&apos;s Folio</span>
          </ButtonAnimated>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        {/* desktop nav */}
        <div className="hidden xl:flex items-center space-x-1">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link to={item.href} key={item.label}>
                <span className="relative block py-1.5 px-3">
                  {/* animated underline */}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <Button
                    variant="link"
                    className={`relative z-10 text-sm xl:text-base font-bold font-heading no-underline hover:no-underline tracking-wide h-auto rounded-md px-0 py-1
                      ${isActive ? "text-black" : "text-black/50 hover:text-black"}
                      transition-colors duration-200
                    `}
                  >
                    {item.label.toUpperCase()}
                  </Button>
                </span>
              </Link>
            );
          })}
        </div>

        {/* resume */}
        <Link className="hidden lg:block" to="/">
          <ButtonAnimated>
            <span>Resume</span>
          </ButtonAnimated>
        </Link>

        {/* Mobile menu Trigger */}
        <div className="xl:hidden">
          <div className="relative group">
            <div
              className={`absolute inset-0 ${
                isOpen ? "bg-red-400" : "bg-green-400"
              } border-[2px] sm:border-[3px] border-black translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5 transition-transform rounded-md`}
            ></div>
            <Button
              variant="ghost"
              size="icon"
              className="relative border-[2px] sm:border-[3px] border-black bg-white text-black hover:bg-white hover:text-black flex items-center justify-center p-1.5 sm:p-2 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-md" // Reduced button size
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />{" "}
                    {/* Reduced icon size */}
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />{" "}
                    {/* Reduced icon size */}
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu with fixed positioning - Optimized for smaller screens */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.1,
                opacity: { duration: 0.2 },
                height: { duration: 0.3 },
              }}
              className="xl:hidden bg-white fixed top-14 sm:top-[80px] md:top-24 inset-x-0 overflow-auto z-40" // Adjusted for smaller header heights
              style={{
                maxHeight: "calc(100vh - 52px)", // Adjusted for smaller mobile header height
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="flex items-center justify-center py-12 sm:py-14 md:py-16" // Reduced padding
              >
                <div className="flex flex-col pt-10 sm:pt-6 md:pt-4 lg:pt-0 space-y-6 items-center justify-center w-full px-3 xs:px-4 sm:px-6 max-w-md mx-auto align-items">
                  {NAV_LINKS.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.08, duration: 0.3 }}
                      className="w-5/6"
                    >
                      <Link to={item.href} onClick={() => setIsOpen(false)}>
                        <div className="relative group w-full ">
                          <div
                            className={`absolute inset-0 ${
                              item.color
                            } border-[2px] sm:border-[3px] border-black translate-x-1.5 translate-y-1.5 sm:translate-x-2 rounded-md sm:translate-y-2 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 sm:group-hover:translate-x-1 sm:group-hover:translate-y-1 ${
                              pathname === item.href
                                ? "opacity-100"
                                : "opacity-75"
                            }`}
                          ></div>
                          <Button
                            variant="ghost"
                            className="relative w-full border-[2px] sm:border-[3px] border-black bg-white text-black hover:bg-white hover:text-black text-base xs:text-lg sm:text-xl md:text-2xl font-bold font-heading transition-transform group-hover:translate-x-[-0.5px] group-hover:translate-y-[-0.5px] sm:group-hover:translate-x-[-1px] sm:group-hover:translate-y-[-1px] py-1.5 sm:py-2 md:py-3 h-auto rounded-md" // Reduced font size and padding
                          >
                            {item.label.toUpperCase()}
                          </Button>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                  {/* Mobile Resume Button - Smaller for mobile */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + NAV_LINKS.length * 0.08,
                      duration: 0.3,
                    }}
                    className="w-full mt-1 sm:mt-2 md:mt-4 items-center flex flex-col justify-center align-items" // Reduced margin
                  >
                    <div className="relative group w-5/6">
                      <div className="absolute inset-0 bg-blue-400 border-[2px] sm:border-[3px] border-black translate-x-1.5 translate-y-1.5 rounded-md sm:translate-x-2 sm:translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 sm:group-hover:translate-x-1.5 sm:group-hover:translate-y-1.5"></div>
                      <Button className="relative w-full border-[2px] sm:border-[3px] border-black bg-white text-black hover:bg-white hover:text-black text-base xs:text-lg sm:text-lg md:text-2xl font-bold font-heading transition-transform group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] sm:group-hover:translate-x-[-1.5px] sm:group-hover:translate-y-[-1.5px] py-1 xs:py-1.5 sm:py-2 md:py-3 h-auto rounded-md">
                        <a
                          href="https://drive.google.com/file/d/1eWxM-pl6MNwfHjv-7maxbgiXSaSi42nC/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          RESUME
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
