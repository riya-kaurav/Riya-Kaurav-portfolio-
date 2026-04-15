// ============================================================
// 📝 PORTFOLIO DATA — Edit everything here to personalize
// ============================================================

export const personalInfo = {
  // TODO: Add your name
  name: "Alex Chen",
  // TODO: Add your title/role
  title: "Full-Stack Developer",
  // TODO: Add your tagline
  tagline: "I build fast, scalable, and beautiful web experiences.",
  // TODO: Add your short bio
  bio: "I'm a full-stack developer passionate about crafting clean, performant applications. I love working at the intersection of design and engineering — where great user experiences are born. Currently open to freelance work and exciting full-time opportunities.",
  // TODO: Add your location
  location: "San Francisco, CA",
  // TODO: Add your email
  email: "hello@yourname.dev",
  // TODO: Add your availability status
  availableForWork: true,
  availabilityText: "Open to freelance & full-time",

  // TODO: Add your social links
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    // TODO: Optional extras
    // dribbble: "",
    // youtube: "",
  },

  // TODO: Replace with your real resume URL
  resumeUrl: "/resume.pdf",
};

// ============================================================
// 🛠️ SKILLS — TODO: Update with your actual skills
// ============================================================
export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Vue.js",
  ],
  backend: [
    "Node.js",
    "Express",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
  ],
  tools: [
    "Git",
    "Docker",
    "AWS",
    "Vercel",
    "Figma",
    "Linux",
  ],
  // TODO: Add more categories if needed
};

// ============================================================
// 💼 PROJECTS — TODO: Replace with your real projects
// ============================================================
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  // TODO: Optionally add an image URL
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    // TODO: Replace with your project name
    title: "NexaCommerce",
    // TODO: Replace with your project description
    description:
      "A high-performance e-commerce platform built with Next.js and Stripe. Features real-time inventory, serverless checkout, and a custom CMS for merchants to manage products seamlessly.",
    // TODO: Replace with your tech stack
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma", "Tailwind"],
    // TODO: Replace with your live URL
    liveUrl: "https://nexacommerce.demo",
    // TODO: Replace with your GitHub URL
    githubUrl: "https://github.com/yourusername/nexacommerce",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    title: "DevCollab",
    description:
      "Real-time collaborative code editor for remote teams. Supports multi-cursor editing, voice chat, AI code suggestions, and instant deployment previews — think Figma but for code.",
    techStack: ["React", "WebSockets", "Node.js", "Monaco Editor", "Redis", "Docker"],
    liveUrl: "https://devcollab.demo",
    githubUrl: "https://github.com/yourusername/devcollab",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "PulseAnalytics",
    description:
      "Lightweight analytics dashboard for indie makers. Tracks key metrics, visualizes growth, and sends weekly digest emails. Privacy-first and cookie-free alternative to Google Analytics.",
    techStack: ["Vue.js", "Python", "FastAPI", "ClickHouse", "Chart.js", "Vercel"],
    liveUrl: "https://pulseanalytics.demo",
    githubUrl: "https://github.com/yourusername/pulseanalytics",
    featured: false,
    year: "2023",
  },
  {
    id: 4,
    title: "PromptForge",
    description:
      "A prompt engineering toolkit that helps developers test, version, and optimize LLM prompts at scale. Includes A/B testing, cost estimation, and team collaboration features.",
    techStack: ["Next.js", "OpenAI API", "Supabase", "TypeScript", "Zod"],
    liveUrl: "https://promptforge.demo",
    githubUrl: "https://github.com/yourusername/promptforge",
    featured: false,
    year: "2023",
  },
];

// ============================================================
// 🏢 EXPERIENCE — TODO: Add your real work experience
// ============================================================
export interface Experience {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  type: "Full-time" | "Internship" | "Freelance" | "Contract";
  description: string;
  highlights: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    // TODO: Add your role
    role: "Software Engineer Intern",
    // TODO: Add the company name
    company: "TechCorp Inc.",
    // TODO: Add the company URL
    companyUrl: "https://techcorp.io",
    // TODO: Add the duration
    duration: "Jun 2024 – Aug 2024",
    type: "Internship",
    // TODO: Write what you did
    description:
      "Worked on the core product team building features used by 50k+ daily active users. Shipped 3 major features and improved page load time by 40%.",
    // TODO: Add bullet-point highlights
    highlights: [
      "Rebuilt the dashboard UI with React and Tailwind, reducing bundle size by 30%",
      "Integrated Stripe billing with webhook handling for subscription management",
      "Wrote E2E tests with Playwright, increasing test coverage from 40% to 75%",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Stripe", "PostgreSQL"],
  },
  {
    id: 2,
    role: "Freelance Developer",
    company: "Self-Employed",
    duration: "Jan 2023 – Present",
    type: "Freelance",
    description:
      "Building custom web applications and MVPs for startups and small businesses across various industries.",
    highlights: [
      "Delivered 10+ client projects on time and within budget",
      "Built a SaaS MVP that helped a startup raise their seed round",
      "Maintained 5-star rating across freelance platforms",
    ],
    techStack: ["Next.js", "React", "Node.js", "Tailwind", "PostgreSQL"],
  },
];

// ============================================================
// 🎯 SERVICES — TODO: Customize based on your actual offerings
// ============================================================
export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    icon: "🖥️",
    // TODO: Customize service title
    title: "Frontend Development",
    description:
      "Pixel-perfect, accessible UIs built with React and Next.js. From landing pages to complex dashboards, I focus on performance and delightful user experiences.",
    features: [
      "React / Next.js apps",
      "Responsive & accessible design",
      "Performance optimization",
      "Animation & micro-interactions",
    ],
  },
  {
    id: 2,
    icon: "⚡",
    title: "Full-Stack Applications",
    description:
      "End-to-end web applications from database design to deployment. I handle the full lifecycle — architecture, API design, auth, payments, and DevOps.",
    features: [
      "REST & GraphQL APIs",
      "Auth & payments integration",
      "Database design",
      "Cloud deployment (AWS/Vercel)",
    ],
  },
  {
    id: 3,
    icon: "🚀",
    title: "MVP Development",
    description:
      "Fast, focused MVP development for startups and founders. I help you validate your idea quickly with clean, scalable code so you can iterate fast.",
    features: [
      "Rapid prototyping",
      "Scalable architecture",
      "Investor-ready demos",
      "Post-launch support",
    ],
  },
  {
    id: 4,
    icon: "🔍",
    title: "Code Review & Consulting",
    description:
      "Technical audits, code reviews, and architecture consulting for teams looking to improve their codebase quality, performance, or developer experience.",
    features: [
      "Code quality audits",
      "Performance profiling",
      "Architecture review",
      "Team workshops",
    ],
  },
];
