// ============================================================
// 📝 PORTFOLIO DATA — Edit everything here to personalize
// ============================================================

export const personalInfo = {
  // TODO: Add your name
  name: "Riya Kaurav",
  // TODO: Add your title/role
  title: "Full Stack Engineer ",
  // TODO: Add your tagline
  tagline: "Frontend UX meets backend infrastructure. I build both, but engineer the foundation.",
  // TODO: Add your short bio
  bio: "Full-stack developer passionate about building clean, performant applications. I focus on scalable backend architecture, thoughtful API design, and intelligent features including AI integrations. Currently a 2nd-year B.Tech student, open to freelance work, internships, and full-time opportunitie.",
 // TODO: Add your location
  location: "India",
  // TODO: Add your email
  email: "kauravriya665@gmail.com",
  // TODO: Add your availability status
  availableForWork: true,
  availabilityText: "Open to freelance & full-time",

  // TODO: Add your social links
  socials: {
    github: "https://github.com/riya-kaurav",
    linkedin: "https://www.linkedin.com/in/riya-kaurav-23b008329/",
    twitter: "https://x.com/Riya_K11",
    // TODO: Optional extras
    // dribbble: "",
    // youtube: "",
  },

  // TODO: Replace with your real resume URL
  resumeUrl: "https://drive.google.com/file/d/1e7pd-cwf398ZQgn8SDMVf-AHlZ-dq9pr/view?usp=drivesdk",
};

// ============================================================
// 🛠️ SKILLS — TODO: Update with your actual skills
// ============================================================
export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    
  ],
  backend: [
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Fastify",
    "Redis",
  ],
  tools: [
    "Git",
    "Docker",
    "Linux",
    "Postman",
    
  ],
  others: [
    "Data Structures & Algorithms (C++)",
    "System Design",
    "Database Management System",
    "Operating System",
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
    title: "SaaS Team Workspace Api",
    // TODO: Replace with your project description
    description:
      "Enterprise-grade multi-tenant REST API with role-based access control, JWT authentication, and token refresh rotation. Built for SaaS platforms handling team collaboration at scale. Features Redis-based logout blacklisting, soft-delete audit trails, and role-scoped middleware enforcing Owner/Admin/Member permissions per organization. ",
    // TODO: Replace with your tech stack
    techStack: ["Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "JWT",
    "Redis",
    "Docker",],
    // TODO: Replace with your live URL
    // liveUrl: "https://nexacommerce.demo",
    // TODO: Replace with your GitHub URL
    githubUrl: "https://github.com/riya-kaurav/Saas-workspace-api",
    featured: true,
    year: "2026",
  },
  {
    id: 2,
    title: "AI Job Copilot",
    description:
      "Intelligent job search assistant powered by AI that helps users optimize resumes, prepare for interviews, and discover relevant opportunities. Features real-time job matching, AI-driven resume analysis, and personalized interview preparation with actionable feedback. Built with a modern tech stack for fast performance and seamless user experience.",
    techStack: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "AI/LLM Integration"],
    // liveUrl: "https://devcollab.demo",
    githubUrl: "https://github.com/riya-kaurav/Ai-Job-Copilot",
    featured: true,
    year: "2026",
  },
  {
    id: 3,
    title: "Resource Sharing Platform",
    description:
      "Community-driven platform for sharing and discovering educational resources. Users can upload, search, and upvote learning materials with a tag-based organization system. Features JWT-based authentication, optimized MongoDB search with indexing, and Cloudinary integration for secure file storage. Built for fast, scalable resource discovery.",
    techStack: ["React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Cloudinary",
    "Tailwind CSS",],
    // liveUrl: "https://pulseanalytics.demo",
    githubUrl: "https://github.com/riya-kaurav/resource-sharing-platform",
    featured: false,
    year: "2026",
  },
  {
    id: 4,
    title: "GitHub Explorer App",
    description:
      "Interactive web application for exploring GitHub repositories and user profiles. Search repositories, view detailed stats, and discover trending projects with real-time data from GitHub API.Built withoptimized API integration for fast, smooth exploration.",
    techStack: ["HTML" , "CSS" , "JavaScript", "Github API"],
    liveUrl: "https://promptforge.demo",
    githubUrl: "https://github.com/yourusername/promptforge",
    featured: false,
    year: "2025",
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
    icon: "🏗️",
    title: "Backend & API Development",
    description:
      "Scalable REST APIs and server-side architecture for startups. I design multi-tenant systems, implement secure authentication, and optimize databases for production. From auth flows to payment integrations, I handle the backend foundation.",
    features: [
      "REST API design & optimization",
      "JWT & role-based access control",
      "Database design (PostgreSQL/MongoDB)",
      "Redis caching & performance tuning",
      "Docker containerization",
    ],
  },
  {
    id: 2,
    icon: "⚡",
    title: "Full-Stack Product Development",
    description:
      "End-to-end product development from concept to deployment. I build complete applications with modern frontend, robust backend, and production-ready infrastructure. Perfect for MVPs and scaling startups.",
    features: [
      "Next.js & React frontends",
      "Express.js/Node.js backends",
      "Multi-tenant architecture",
      "API authentication & authorization",
      "Database optimization & migrations",
      "Docker & deployment pipelines",
    ],
  },
  {
    id: 3,
    icon: "🚀",
    title: "Startup MVP & Rapid Development",
    description:
      "Quick-turnaround MVP development for founders. I ship scalable, production-ready code fast. Focus on what matters: solving the core problem, validating the idea, and building investor-ready demos.",
    features: [
      "Rapid prototyping (weeks, not months)",
      "Scalable from day one",
      "Clean, maintainable code",
      "Quick iterations & pivots",
      "Deployment & post-launch support",
    ],
  },
  {
    id: 4,
    icon: "🔧",
    title: "System Design & Architecture",
    description:
      "Technical architecture consulting for growing teams. I audit codebases, design scalable systems, and help teams transition from monoliths to distributed architectures. Everything from database optimization to deployment strategy.",
    features: [
      "API architecture & design patterns",
      "Database optimization & indexing",
      "Scalability planning",
      "Docker & infrastructure setup",
      "Code quality & performance audits",
    ],
  },
  {
    id: 5,
    icon: "🤖",
    title: "AI Integration & Modern Features",
    description:
      "Integrate AI capabilities into your product. From LLM APIs to intelligent features, I help you add modern AI functionality without overcomplicating your stack.",
    features: [
      "LLM API integration",
      "Smart feature implementation",
      "Prompt engineering",
      "Real-time data processing",
      "AI-powered recommendations",
    ],
  },
];
