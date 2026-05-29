
export const personalInfo = {
  // TODO: Add your name
  name: "Riya Kaurav",
  // TODO: Add your title/role
  title: "Full-Stack Developer",
  // TODO: Add your tagline
  tagline: "I build fast, scalable, and beautiful digital experiences.",
  // TODO: Add your short bio
  bio: "I’m Riya Kaurav, a 2nd-year engineering student at Mits Gwalior passionate about full-stack development, backend systems, and building products that solve real problems. I enjoy turning ideas into functional experiences while constantly learning through projects, hackathons, and experimentation. Outside of tech, I write poetry a different way of expressing creativity and perspective. Currently open to internships, freelance work, collaborations, hackathons, and opportunities where I can learn, contribute, and build meaningful things.",
  // TODO: Add your availability status
  location:"India",
  // TODO: Add your email
  email: "kauravriya665@gmail.com",
  availableForWork: true,
  availabilityText: "Open to freelance & full-time",
  coverQuote: "You make your own luck if you stay at it long enough.",
  age: "20",
  shortTags: ["engineer", "developer", "learner"],
  githubStars: "96",

  
  socials: {
    github: "https://github.com/riya-kaurav",
    linkedin: "https://linkedin.com/in/riya-kaurav",
    twitter: "https://x.com/Riya_K11",
    // TODO: Add your Hashnode blog URL
    medium: "https://medium.com/@kauravriya665",
    resume: "https://drive.google.com/file/d/1e7pd-cwf398ZQgn8SDMVf-AHlZ-dq9pr/view?usp=drivesdk",
    
  },


};


export const skills = {

  languages: [
    "TypeScript",
    "JavaScript",
    "Python",
    "C++",
    
  ],
  frameworksAndlibraries: [
    "React",
    "Next.js",
    "Tailwind CSS",
     "Node.js",
    "Express",
    "Fastify",
   
  ],
  databases: [
    "PostgreSQL",
    "MongoDB",
    "Redis"
  ],

  tools: [
    "Git",
    "Docker",
    "Linux",
    "Postman",
    "GitHub Actions"
    
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
    title: "Distributed Job Scheduler",
    // TODO: Replace with your project description
    description:
      "A multi-tenant job queue and scheduling system built with Fastify, BullMQ, PostgreSQL, and Redis. It lets teams submit background jobs, schedule recurring tasks via cron, and monitor execution all behind a secure dual-auth API. Containerized the full stack using Docker and Docker Compose, configured Nginx as a reverse proxy, and built a GitHub Actions CI pipeline with automated linting, database migrations, and 10 integration tests running against live Postgres and Redis service containers.  ",
    
    techStack: ["Node.js",
    "Fastify",
    "PostgreSQL",
    "Redis",
    "Nginx",
    "BullMQ",
    "Docker",
    "GitHub Actions"
  ],
    
    // liveUrl: "https://nexacommerce.demo",
    
    githubUrl: "https://github.com/riya-kaurav/JOB-SCHEDULER",
    featured: true,
    year: "2026",
    // imageUrl: "/ProjectImage.png"
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
  id: 4,
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
  location?: string;
  type: "Full-time" | "Internship" | "Freelance" | "Contract";
  description: string;
  highlights: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    // TODO: Add your role
    role: "Frontend Developer Intern",
    // TODO: Add the company name
    company: "Eena Pvt. Ltd.",
    // TODO: Add the company URL
    
    // TODO: Add the duration
    duration: "Jan 2026 – Feb 2026",
    // TODO: Add location
    location: "Remote",
    type: "Internship",
    // TODO: Write what you did
    description:
      "Worked on the core product team building features. Shipped 4 major features.",
    // TODO: Add bullet-point highlights
    highlights: [
      "Rebuilt the dashboard UI with Nextjs and Tailwind CSS, improving load times by 30%",
      "Collaborated with designers to implement a new design system, increasing UI consistency across the app",
      
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  
];

