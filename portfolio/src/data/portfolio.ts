
export const personalInfo = {
  // TODO: Add your name
  name: "Riya Kaurav",
  // TODO: Add your title/role
  title: "Full-Stack Developer",
  // TODO: Add your tagline
  tagline: "I'm Riya, a 3rd-year engineering student into backend systems, applied AI, and building products that solve real problems. I learn by shipping, through projects, hackathons, and experiments. Open to internships, freelance work, and collaborations.",
  // TODO: Add your availability status
  location:"India",
  // TODO: Add your email
  email: "kauravriya665@gmail.com",
  availableForWork: true,
  availabilityText: "Open to freelance & full-time",
  coverQuote: "The best view comes after the hardest climb",
  age: "21",
  shortTags: [ "engineer", "building", "learning"],
  githubStars: "96",

  
  socials: {
    github: "https://github.com/riya-kaurav",
    linkedin: "https://linkedin.com/in/riya-kaurav",
    twitter: "https://x.com/Riya_K11",
    // TODO: Add your Hashnode blog URL
    medium: "https://medium.com/@kauravriya665",
    resume: "https://drive.google.com/file/d/1B-INGkw0bhRVj6M-e5QLwOkyxI4rb9PM/view?usp=drivesdk",
    
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
      "A multi-tenant job queue and scheduling system built with Fastify, BullMQ, PostgreSQL, and Redis. It lets teams submit background jobs, schedule recurring tasks via cron, and monitor execution all behind a secure dual-auth API.  ",
    
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
    imageUrl: "/project1.jpeg",
  },
  {
    id: 2,
    title: "SpendLens — Free AI Spend Audit for Startups",
    description:
      "SpendLens helps startup founders and engineering managers find out exactly where they're overspending on AI tools. It analyzes your SaaS subscriptions, usage patterns, and team needs to provide actionable insights for cost optimization.  ",
    techStack: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Supabase",
    "Vitest",
    "GitHub Actions",
    "AI/LLM Integration"],
     liveUrl: "https://credex-audit-alpha.vercel.app/",
    githubUrl: "https://github.com/riya-kaurav/credex-audit",
    featured: true,
    year: "2026",
     imageUrl: "/project2.jpeg",
  },
  {
    id: 3,
    // TODO: Replace with your project name
    title: "SaaS Team Workspace Api",
    // TODO: Replace with your project description
    description:
      "Enterprise-grade multi-tenant REST API with role-based access control, JWT authentication, and token refresh rotation. Built for SaaS platforms handling team collaboration at scale.  ",
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
     imageUrl: "/project3.png",
  },
{
  id: 4,
    title: "AI Job Copilot",
    description:
      "Intelligent job search assistant powered by AI that helps users optimize resumes, prepare for interviews, and discover relevant opportunities. ",
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
     imageUrl: "/project4.png",
  
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
    role: "Full Stack Developer Intern",
    // TODO: Add the company name
    company: "Code With Conscience",
    // TODO: Add the company URL
    
    // TODO: Add the duration
    duration: "Jun 2026 –  present",
    // TODO: Add location
    location: "Remote",
    type: "Internship",
    // TODO: Write what you did
    description:
      "Built production-grade AI backend systems by developing scalable APIs, integrating LLMs, and engineering reliable services using TypeScript and Next.js.",
    // TODO: Add bullet-point highlights
    highlights: [
      "Developing and optimizing the backend AI pipeline for an offline-first rural healthcare IVR system using Node.js, Express, TypeScript, PostgreSQL, Drizzle ORM, Twilio, and OpenAI, integrating speech transcription, symptom analysis, severity classification, and real-time emergency alert workflows. ",
      "Researching and implementing edge-ready AI inference by evaluating offline speech recognition and small language models (SLMs), improving backend orchestration, API reliability, and privacy-first processing to support secure, low latency healthcare assistance in low-connectivity environments. ",
      
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  
];

