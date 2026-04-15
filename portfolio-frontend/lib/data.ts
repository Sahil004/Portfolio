import type { IconType } from "react-icons";
import { BiNetworkChart } from "react-icons/bi";
import { FaBrain, FaCss3Alt, FaJava, FaLinkedin } from "react-icons/fa";
import {
  MdDevices,
  MdPayment,
  MdOutlineMail,
  MdOutlineSmartToy,
  MdAccessibility,
  MdOutlineTravelExplore,
  MdOutlineSpeed,
} from "react-icons/md";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiGithub,
  SiGit,
  SiDocker,
  SiWebpack,
  SiLinux,
  SiNestjs,
  SiPython,
  SiDjango,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiWordpress,
  SiCanva,
  SiFigma,
  SiPostman,
  SiBootstrap,
  SiMui,
  SiShadcnui,
  SiSpringboot,
  SiBabel,
  SiGooglecloud,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type Skill = {
  name: string;
  icon: IconType;
  iconClass?: string;
};

export type SocialLink = {
  name: string;
  handle: string;
  href: string;
  icon: IconType;
  bg: string;
  iconClass?: string;
};

export const SKILLS: Record<string, Skill[]> = {
  Frontend: [
    {
      name: "HTML5",
      icon: SiHtml5,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-orange-500",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-yellow-400",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-[#3178c6]",
    },
    {
      name: "React.js",
      icon: SiReact,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-500",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      iconClass:
        "text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white",
    },
    {
      name: "Redux",
      icon: SiRedux,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-violet-600",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-sky-500",
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-purple-500",
    },
    {
      name: "Material UI",
      icon: SiMui,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500",
    },
    {
      name: "Shadcn UI",
      icon: SiShadcnui,
      iconClass:
        "text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white",
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
      iconClass:
        "text-zinc-700 dark:text-zinc-300 group-hover:text-fuchsia-500",
    },
    {
      name: "Responsive Design",
      icon: MdDevices,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-sky-500",
    },
    {
      name: "SEO",
      icon: MdOutlineTravelExplore,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500",
    },
    {
      name: "Web Accessibility",
      icon: MdAccessibility,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-500",
    },
    {
      name: "Core Web Vitals",
      icon: MdOutlineSpeed,
      iconClass:
        "text-zinc-700 dark:text-zinc-300 group-hover:text-emerald-500",
    },
  ],

  Backend: [
    {
      name: "Node.js",
      icon: SiNodedotjs,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-lime-500",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-slate-600",
    },
    {
      name: "Nest.js",
      icon: SiNestjs,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-red-500",
    },
    {
      name: "Java",
      icon: FaJava,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-red-600",
    },
    {
      name: "Spring Boot",
      icon: SiSpringboot,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-green-600",
    },
    {
      name: "Python",
      icon: SiPython,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-yellow-500",
    },
    {
      name: "Django",
      icon: SiDjango,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-green-700",
    },
    {
      name: "REST APIs",
      icon: BiNetworkChart,
      iconClass:
        "text-zinc-700 dark:text-zinc-300 group-hover:text-emerald-500",
    },
    {
      name: "GraphQL",
      icon: SiGraphql,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-pink-500",
    },
  ],

  Database: [
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-orange-400",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-green-500",
    },
  ],

  "Tools & DevOps": [
    {
      name: "Git",
      icon: SiGit,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-slate-600",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      iconClass:
        "text-zinc-700 dark:text-zinc-300 group-hover:text-slate-900 dark:group-hover:text-white",
    },
    {
      name: "Docker",
      icon: SiDocker,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-sky-600",
    },
    {
      name: "CI/CD Pipelines",
      icon: SiGit,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-slate-600",
    },
    {
      name: "Webpack",
      icon: SiWebpack,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-violet-600",
    },
    {
      name: "Babel",
      icon: SiBabel,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-yellow-500",
    },
    {
      name: "Linux",
      icon: SiLinux,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-sky-500",
    },
    {
      name: "Cloud",
      icon: SiGooglecloud,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500",
    },
    {
      name: "Postman",
      icon: SiPostman,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-orange-500",
    },
    {
      name: "VS Code",
      icon: VscCode,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500",
    },
    {
      name: "GitHub Copilot",
      icon: MdOutlineSmartToy,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-orange-500",
    },
    {
      name: "ChatGPT",
      icon: FaBrain,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-lime-500",
    },
  ],

  Other: [
    {
      name: "Figma",
      icon: SiFigma,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-[#f24e1e]",
    },
    {
      name: "Canva",
      icon: SiCanva,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-[#00c4cc]",
    },
    {
      name: "WordPress",
      icon: SiWordpress,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500",
    },
    {
      name: "Razorpay",
      icon: MdPayment,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-amber-500",
    },
    {
      name: "Cashfree",
      icon: MdPayment,
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-amber-500",
    },
  ],
};

export const PROJECT_CATEGORIES = [
  { id: "company", label: "Company" },
  { id: "college", label: "College" },
  { id: "self", label: "Self" },
];

export const PROJECTS = [
  {
    title: "My Pulse Pay",
    desc: "A production-grade fintech platform featuring Pay-In, Pay-Out, wallet management, beneficiary modules, and real-time analytics dashboards with Excel export and commission calculation logic.",
    tags: ["Next.js", "TypeScript", "Razorpay", "Cashfree", "Tailwind CSS"],
    category: "company",
    company: "Consociate Solutions",
    image: "/projects/pulsepay-fintech.png",
    gradient: "from-[#0f1a2e] via-[#162040] to-[#0f2035]",
    gradientLight: "from-blue-100 via-blue-50 to-blue-100",
    demo: "#",
    github: "#",
  },
  {
    title: "Mango E-Commerce",
    desc: "An SEO-optimized eCommerce platform with product listing, advanced filtering, variant selection, cart/checkout, and a full admin dashboard for managing products, orders, and users.",
    tags: ["React.js", "Node.js", "Express.js", "SEO", "REST API"],
    category: "company",
    company: "Consociate Solutions",
    image: "/projects/mango-ecommerce.png",
    gradient: "from-[#1a0f2e] via-[#2a1545] to-[#200f35]",
    gradientLight: "from-purple-100 via-purple-50 to-purple-100",
    demo: "#",
    github: "#",
  },
  {
    title: "Match My Needs",
    desc: "A SaaS quiz & survey builder with dynamic UI customization, logic-based recommendation engine, and third-party iframe integrations for Shopify and WordPress.",
    tags: ["Next.js", "TypeScript", "SaaS", "Shopify", "WordPress"],
    category: "company",
    company: "Freelance", // ← change per project as needed
    image: "/projects/myneeds-saas.png",
    gradient: "from-[#0a1f1a] via-[#0f2e24] to-[#0a2018]",
    gradientLight: "from-teal-100 via-teal-50 to-teal-100",
    demo: "#",
    github: "#",
  },
];

export const TIMELINE = [
  {
    type: "work" as const,
    role: "Associate Software Engineer",
    company: "Consociate Solutions · Pune, India",
    date: "Jan 2025 – Mar 2026",
    bullets: [
      "Developed scalable web applications using Next.js, React.js, and TypeScript for fintech and SaaS clients",
      "Architected reusable, modular UI component libraries improving development efficiency and maintainability",
      "Integrated REST APIs and end-to-end business logic across high-volume transaction platforms",
      "Built interactive dashboards, reporting modules, and real-time data visualization tools",
      "Reduced development time by implementing AI-assisted workflows (ChatGPT, GitHub Copilot)",
    ],
  },
  {
    type: "edu" as const,
    role: "Master of Computer Science (MCS)",
    company: "Vishwakarma College of Arts, Commerce and Science · Pune",
    date: "2021 - 2023",
    bullets: [
      "CGPA: 8.6 — Graduated with distinction",
      "Relevant courses: Data Structures, Web Development, Databases, Software Engineering, Cloud",
    ],
  },
  {
    type: "edu" as const,
    role: "Bachelor of Computer Science (MCS)",
    company: "AKI's Poona College of Arts, Commerce and Science · Pune",
    date: "2018 - 2021",
    bullets: [
      "CGPA: 8.2 — First Class with distinction",
      "Relevant courses: Data Structures, Web Development, Databases, Software Engineering, Cloud",
    ],
  },
  {
    type: "cert" as const,
    role: "Full Stack Web Development",
    company: "Envision Computer Institute · Pune",
    date: "Dec 2024",
    bullets: [
      "HTML5, CSS3, Flexbox, Grid — building structured, accessible web pages",
      "JavaScript DOM manipulation, React (Components, JSX, Hooks, SPAs)",
      "AI API integration: chatbots, UI enhancement, task automation",
    ],
  },
];

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
