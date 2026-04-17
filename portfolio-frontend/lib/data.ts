import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiGithub } from "react-icons/si";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type SocialLink = {
  name: string;
  handle: string;
  href: string;
  icon: IconType;
  bg: string;
  iconClass?: string;
};

export const SOCIALS: SocialLink[] = [
  {
    name: "LinkedIn",
    handle: "sahil-sayyad-b7a505221",
    href: "https://www.linkedin.com/in/sahil-sayyad-b7a505221/",
    icon: FaLinkedin,
    iconClass:
      "text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400",
    bg: "bg-blue-500/10 dark:bg-blue-500/10",
  },
  {
    name: "GitHub",
    handle: "@sahilsayyad",
    href: "https://github.com",
    icon: SiGithub,
    iconClass:
      "text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white",
    bg: "bg-white/5 dark:bg-white/5",
  },
  {
    name: "Email",
    handle: "parvezsayyad0045@gmail.com",
    href: "mailto:parvezsayyad0045@gmail.com",
    icon: MdOutlineMail,
    iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-[#6e73ff]",
    bg: "bg-[#6e73ff]/10",
  },
];
