import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import React from "react";

type SocialLink = {
  icon: React.ReactNode;
  href: string;
  label: string;
  username: string;
  bg: string;
};

const socialLinks: SocialLink[] = [
  {
    icon: <IconBrandGithub size={18} />,
    href: "https://github.com/milan-sh",
    label: "GitHub",
    username: "@milan-sh",
    bg: "bg-yellow-400",
  },
  {
    icon: <IconBrandX size={18} />,
    href: "https://x.com/dev_81milan",
    label: "Twitter",
    username: "@dev_81milan",
    bg: "bg-blue-400",
  },
  {
    icon: <IconBrandLinkedin size={18} />,
    href: "https://www.linkedin.com/in/milan-singh-81ms33",
    label: "LinkedIn",
    username: "Milan Singh",
    bg: "bg-red-400",
  },
];

const NeoIcon = ({
  bg,
  children,
}: {
  bg: string;
  children: React.ReactNode;
}) => (
  <div className="relative shrink-0">
    <div
      className={`absolute inset-0 ${bg} border-2 border-black translate-x-1 translate-y-1 rounded-md`}
    />
    <div className="bg-white border-2 border-black p-2 relative rounded-md flex items-center justify-center">
      {children}
    </div>
  </div>
);

const ContactCard = () => {
  return (
    <motion.div
      className="lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-5 relative rounded-md text-start">
        <div className="flex flex-col gap-3">
          {/* Email */}
          <a
            href="mailto:devmilansingh81@gmail.com"
            aria-label="Send email"
            className="flex items-center gap-3 group"
          >
            <NeoIcon bg="bg-red-400">
              <Mail size={18} />
            </NeoIcon>
            <div>
              <p className="text-sm font-bold font-heading text-black">EMAIL</p>
              <span className="text-sm font-medium relative inline-block">
                devmilansingh81@gmail.com
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </span>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+918533960192"
            aria-label="Call phone number"
            className="flex items-center gap-3 group"
          >
            <NeoIcon bg="bg-blue-400">
              <Phone size={18} />
            </NeoIcon>
            <div>
              <p className="text-sm font-bold font-heading text-black">PHONE</p>
              <span className="text-sm font-medium relative inline-block">
                +91 8533960192
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </span>
            </div>
          </a>

          <hr className="border-t-2 border-black mt-2" />

          {/* Socials */}
          <div className="pt-3">
            <p className="text-sm font-bold font-heading text-black mb-3">
              FIND ME ON
            </p>

            <div className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center gap-3 group"
                >
                  <NeoIcon bg={link.bg}>{link.icon}</NeoIcon>
                  <div>
                    <p className="text-sm font-bold font-heading text-black">
                      {link.label.toUpperCase()}
                    </p>
                    <span className="text-sm font-medium relative inline-block">
                      {link.username}
                      <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
