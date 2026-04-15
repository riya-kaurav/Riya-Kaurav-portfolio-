# 🚀 Dev Portfolio — Next.js 14 + TypeScript + Tailwind CSS

A premium developer portfolio template built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to impress recruiters, freelance clients, and collaborators.

---

## ✨ Features

- ⚡ **Next.js 14** App Router with TypeScript
- 🎨 **Dark-first** aesthetic with a cyan/green accent system
- 🎭 **Framer Motion** animations — staggered reveals, hover effects, scroll triggers
- 🖱️ **Custom cursor** with smooth magnetic follow (desktop only)
- ⌨️ **Typewriter effect** in Hero for multiple roles
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🔵 **Active section highlighting** in Navbar via scroll tracking
- 🧹 **Single data file** — edit `src/data/portfolio.ts` to personalize everything
- 🔠 **Syne + DM Sans + JetBrains Mono** font trio

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, CSS vars, custom utilities
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main page composing all sections
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky nav with active section tracking
│   │   │   └── Footer.tsx       # Footer with socials
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Hero with typewriter + animated entrance
│   │   │   ├── About.tsx        # Bio, skills, avatar
│   │   │   ├── Projects.tsx     # Project grid with filter
│   │   │   ├── Experience.tsx   # Timeline-style work history
│   │   │   ├── Services.tsx     # Service cards + CTA banner
│   │   │   └── Contact.tsx      # Contact form + social links
│   │   └── ui/
│   │       ├── CustomCursor.tsx # Smooth custom cursor
│   │       ├── ProjectCard.tsx  # Reusable project card
│   │       └── SectionWrapper.tsx # Motion wrapper + heading component
│   ├── data/
│   │   └── portfolio.ts         # 📝 ALL YOUR CONTENT LIVES HERE
│   └── lib/
│       └── utils.ts             # cn() helper (clsx + tailwind-merge)
├── public/
│   └── resume.pdf               # TODO: Add your resume here
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### 1. Clone or download the project

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ Personalization Guide

**All content lives in a single file:** `src/data/portfolio.ts`

Search for `// TODO:` comments throughout the codebase — every customization point is marked.

### Step 1 — Update personal info
```ts
// src/data/portfolio.ts
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline here.",
  bio: "Your bio here...",
  location: "Your City, Country",
  email: "you@yourdomain.com",
  availableForWork: true,
  socials: {
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    twitter: "https://twitter.com/yourhandle",
  },
  resumeUrl: "/resume.pdf",
};
```

### Step 2 — Add your skills
```ts
export const skills = {
  frontend: ["React", "Next.js", ...],
  backend: ["Node.js", "Python", ...],
  tools: ["Git", "Docker", ...],
};
```

### Step 3 — Add your projects
```ts
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project",
    description: "What it does...",
    techStack: ["Next.js", "Tailwind"],
    liveUrl: "https://yourproject.com",
    githubUrl: "https://github.com/you/project",
    featured: true,
    year: "2024",
  },
];
```

### Step 4 — Add your experience
```ts
export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Company Name",
    companyUrl: "https://company.com",
    duration: "Jun 2024 – Present",
    type: "Full-time",
    description: "What you did...",
    highlights: ["Achievement 1", "Achievement 2"],
    techStack: ["React", "Node.js"],
  },
];
```

### Step 5 — Add your photo
Replace the avatar placeholder in `src/components/sections/About.tsx`:
```tsx
// Uncomment and update:
import Image from "next/image";
<Image src="/avatar.jpg" alt="Your Name" fill className="object-cover rounded-2xl" />
```
Place your photo in `public/avatar.jpg`.

### Step 6 — Add your resume
Place your resume PDF at `public/resume.pdf`.

---

## 🌐 Deployment

### Deploy to Vercel (recommended — free)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

### Deploy to Netlify

```bash
npm run build
# Upload the .next folder, or connect via Netlify Git integration
```

---

## 📬 Contact Form Setup

The contact form is UI-only by default. To make it functional, choose one:

**Option A — Formspree (easiest, free)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and copy your form ID
3. In `Contact.tsx`, replace the TODO comment:
```ts
await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  body: JSON.stringify(form),
  headers: { "Content-Type": "application/json" },
});
```

**Option B — EmailJS (client-side)**
```bash
npm install @emailjs/browser
```

**Option C — Next.js API Route + Resend/Nodemailer**
Create `src/app/api/contact/route.ts` with your email logic.

---

## 🎨 Customization Tips

- **Colors**: Edit `tailwind.config.ts` → `colors` section. The main accent is `accent.cyan` (#00d4ff).
- **Fonts**: Change the Google Fonts import in `globals.css` and update `--font-*` CSS vars.
- **Sections**: Add/remove sections in `src/app/page.tsx` and update the `navLinks` array in `Navbar.tsx`.
- **Animations**: All Framer Motion configs are inline — tweak `duration`, `delay`, and easing to taste.

---

## 📄 License

MIT — use freely for personal and commercial portfolios.

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion.
