// "use client";

// import { motion } from "framer-motion";
// import { Briefcase, ExternalLink, Calendar } from "lucide-react";
// import { experiences } from "@/data/portfolio";
// import SectionWrapper, { SectionHeading } from "@/components/ui/SectionWrapper";

// const typeColors: Record<string, string> = {
//   "Full-time": "text-accent-cyan border-accent-cyan/30 bg-accent-cyan/8",
//   Internship: "text-accent-green border-accent-green/30 bg-accent-green/8",
//   Freelance: "text-accent-gold border-yellow-500/30 bg-yellow-500/8",
//   Contract: "text-purple-400 border-purple-400/30 bg-purple-400/8",
// };

// export default function Experience() {
//   return (
//     <SectionWrapper id="experience">
//       <div className="max-w-6xl mx-auto px-6">
//         <SectionHeading
//           label="// career"
//           title="Experience"
//           subtitle="Where I've worked, what I've built, and what I've learned."
//         />

//         <div className="relative">
//           {/* Vertical timeline line */}
//           <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-cyan/40 via-border-active to-transparent hidden md:block" />

//           <div className="space-y-8">
//             {experiences.map((exp, i) => (
//               <motion.div
//                 key={exp.id}
//                 initial={{ opacity: 0, x: -24 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, margin: "-40px" }}
//                 transition={{
//                   duration: 0.6,
//                   delay: i * 0.1,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="relative flex gap-6 md:gap-8"
//               >
//                 {/* Timeline dot */}
//                 <div className="flex-shrink-0 hidden md:flex">
//                   <div className="w-10 h-10 rounded-full bg-bg-elevated border border-border-active flex items-center justify-center mt-1">
//                     <Briefcase size={15} className="text-accent-cyan" />
//                   </div>
//                 </div>

//                 {/* Card */}
//                 <div className="flex-1 bg-bg-card border border-border-subtle rounded-2xl p-6 hover:border-accent-cyan/25 transition-all duration-300 group shadow-card-base hover:shadow-card-hover">
//                   {/* Header */}
//                   <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
//                     <div>
//                       <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-accent-cyan transition-colors">
//                         {/* TODO: Your role title */}
//                         {exp.role}
//                       </h3>
//                       <div className="flex items-center gap-2 mt-1">
//                         {exp.companyUrl ? (
//                           <a
//                             href={exp.companyUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="font-body text-sm text-text-secondary hover:text-accent-cyan transition-colors flex items-center gap-1"
//                           >
//                             {/* TODO: Company name */}
//                             {exp.company}
//                             <ExternalLink size={11} />
//                           </a>
//                         ) : (
//                           <span className="font-body text-sm text-text-secondary">
//                             {exp.company}
//                           </span>
//                         )}
//                       </div>
//                     </div>

//                     <div className="flex flex-wrap items-center gap-2">
//                       <span
//                         className={`font-mono text-xs px-2.5 py-1 rounded-full border ${
//                           typeColors[exp.type] ?? "text-text-muted border-border-subtle"
//                         }`}
//                       >
//                         {exp.type}
//                       </span>
//                       <span className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
//                         <Calendar size={11} />
//                         {/* TODO: Duration */}
//                         {exp.duration}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Description */}
//                   <p className="text-text-secondary text-sm leading-relaxed mb-4 font-body">
//                     {/* TODO: Description of your work */}
//                     {exp.description}
//                   </p>

//                   {/* Highlights */}
//                   <ul className="space-y-2 mb-4">
//                     {exp.highlights.map((h, hi) => (
//                       <li key={hi} className="flex items-start gap-2 text-sm text-text-secondary">
//                         <span className="text-accent-cyan mt-0.5 flex-shrink-0 font-mono">›</span>
//                         {h}
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Tech stack */}
//                   <div className="flex flex-wrap gap-2 pt-2 border-t border-border-subtle">
//                     {exp.techStack.map((tech) => (
//                       <span key={tech} className="tag-pill">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// }
