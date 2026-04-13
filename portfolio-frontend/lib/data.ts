export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = {
  Frontend: [
    { name: "Next.js", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Redux", icon: "🔄" },
    { name: "Framer Motion", icon: "✨" },
    { name: "Responsive Design", icon: "📱" },
    { name: "HTML5 / CSS3", icon: "🌐" },
  ],
  "Backend & APIs": [
    { name: "Node.js", icon: "🟩" },
    { name: "Express.js", icon: "🚂" },
    { name: "REST APIs", icon: "🔌" },
    { name: "Razorpay / Cashfree", icon: "💳" },
    { name: "JavaScript ES6+", icon: "📊" },
  ],
  "Tools & DevOps": [
    { name: "Git / GitHub", icon: "🐙" },
    { name: "Docker (basic)", icon: "🐳" },
    { name: "CI/CD Pipelines", icon: "⚙️" },
    { name: "Webpack / Babel", icon: "🔧" },
    { name: "Linux / Cloud Deploy", icon: "☁️" },
    { name: "GitHub Copilot", icon: "🤖" },
    { name: "ChatGPT / Claude", icon: "🧠" },
  ],
};

export const PROJECTS = [
  {
    title: "My Pulse Pay",
    desc: "A production-grade fintech platform featuring Pay-In, Pay-Out, wallet management, beneficiary modules, and real-time analytics dashboards with Excel export and commission calculation logic.",
    tags: ["Next.js", "TypeScript", "Razorpay", "Cashfree", "Tailwind CSS"],
    emoji: "💳",
    gradient: "from-[#0f1a2e] via-[#162040] to-[#0f2035]",
    gradientLight: "from-blue-100 via-blue-50 to-blue-100",
    demo: "#",
    github: "#",
  },
  {
    title: "Mango E-Commerce",
    desc: "An SEO-optimized eCommerce platform with product listing, advanced filtering, variant selection, cart/checkout, and a full admin dashboard for managing products, orders, and users.",
    tags: ["React.js", "Node.js", "Express.js", "SEO", "REST API"],
    emoji: "🛍️",
    gradient: "from-[#1a0f2e] via-[#2a1545] to-[#200f35]",
    gradientLight: "from-purple-100 via-purple-50 to-purple-100",
    demo: "#",
    github: "#",
  },
  {
    title: "Match My Needs",
    desc: "A SaaS quiz & survey builder with dynamic UI customization, logic-based recommendation engine, and third-party iframe integrations for Shopify and WordPress.",
    tags: ["Next.js", "TypeScript", "SaaS", "Shopify", "WordPress"],
    emoji: "📋",
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
    date: "Jan 2025 – Present",
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
    date: "2021 – 2023",
    bullets: [
      "CGPA: 8.6 — Graduated with distinction",
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

export const SOCIALS = [
  {
    name: "LinkedIn",
    handle: "sahil-sayyad-b7a505221",
    href: "https://www.linkedin.com/in/sahil-sayyad-b7a505221/",
    icon: "💼",
    bg: "bg-blue-500/10 dark:bg-blue-500/10",
  },
  {
    name: "GitHub",
    handle: "@sahilsayyad",
    href: "https://github.com",
    icon: "🐙",
    bg: "bg-white/5 dark:bg-white/5",
  },
  {
    name: "Email",
    handle: "parvezsayyad0045@gmail.com",
    href: "mailto:parvezsayyad0045@gmail.com",
    icon: "✉️",
    bg: "bg-[#6e73ff]/10",
  },
];
