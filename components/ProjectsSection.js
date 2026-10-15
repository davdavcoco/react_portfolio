import { useState } from "react";
import Image from "next/image";
import { motion as m, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiCheck } from "react-icons/fi";

const projects = [
  {
    id: "fanrong",
    category: "studio",
    categoryLabel: "Design Studio & Consultancy",
    index: "01",
    title: "Fanrong Studio",
    subtitle: "Collaborative Practice — Mindful Creative Consultancy",
    image: "/projects/fanrong.jpg",
    client: "Fanrong Studio",
    year: "2024",
    role: "Lead Front-End Architecture & Interaction",
    deliverables: [
      "Figma to Next.js 1:1 Implementation",
      "Interactive Horizontal Project Showcase",
      "Dynamic Services Accordion & Drawer",
      "Lightweight Mobile Touch Optimization",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    description:
      "A tailored digital home for a design product studio and creative consultancy in Surabaya. Built with strategic visual clarity, seamless mobile navigation, and tailored brand storytelling that stays fast, responsive, and intuitive.",
    liveUrl: "https://fanrongcreative.com/",
    highlight: "Sub-second load times & 60fps micro-interactions",
    align: "left", // Image on left, details on right
  },
  {
    id: "fillouvre",
    category: "architecture",
    categoryLabel: "Architectural Systems",
    index: "02",
    title: "Fillouvre",
    subtitle: "Architectural Wooden Louver Systems",
    image: "/projects/fillouvre.jpg",
    client: "Fill Timber Solution",
    year: "2024",
    role: "Full Web Development & Product Experience",
    deliverables: [
      "Architectural Catalog Architecture",
      "Modular Product Specifications System",
      "Tactile Wood Texture Presentation",
      "Comprehensive SEO & Meta Strategy",
    ],
    techStack: ["Next.js", "Responsive Grid", "Tailwind CSS", "Image Pipeline"],
    description:
      "A digital platform engineered for sustainable timber louver systems. Features structural minimalism, tactile photography showcases, and modular technical product specifications crafted specifically for architects, interior designers, and developers.",
    liveUrl: "https://fill.co.id/",
    highlight: "High-resolution architectural imagery without performance degradation",
    align: "right", // Details on left, image on right (asymmetrical rhythm)
  },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="works" className="studio-section py-20 md:py-32 border-b border-studio-border/70 dark:border-studio-darkBorder/70 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Asymmetric Rhythm */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center">
                <span>[01 / FEATURED ARCHIVE]</span>
                <span className="typing-cursor text-emerald-500"></span>
              </span>
              <span className="h-[1px] header-line-expand bg-studio-border dark:bg-studio-darkBorder"></span>
            </div>
            <h2 className="section-title-glide text-3xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight text-studio-text dark:text-neutral-100 uppercase leading-[1.05]">
              Selected{" "}
              <span className="font-serif italic font-normal lowercase text-emerald-600 dark:text-emerald-400 hover:tracking-wider transition-all duration-300">
                works.
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-studio-textMuted dark:text-neutral-400 font-sans leading-relaxed">
              Live websites crafted specifically for design consultancies and
              architectural systems practices.
            </p>
          </div>

          {/* Filter Pills with Active Glow */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Works" },
              { id: "studio", label: "Design Studio" },
              { id: "architecture", label: "Architecture" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`text-xs font-mono px-4 py-2.5 rounded-full border transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-studio-forest text-neutral-100 border-studio-forest dark:bg-neutral-100 dark:text-studio-dark dark:border-neutral-100 shadow-md scale-105"
                    : "border-studio-border dark:border-studio-darkBorder text-studio-textMuted dark:text-neutral-400 hover:border-studio-text/40 dark:hover:border-neutral-500 bg-white/40 dark:bg-studio-darkSurface/40 hover:scale-102"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List - Alternating / Asymmetric Editorial Rows */}
        <div className="space-y-16 md:space-y-28">
          {filteredProjects.map((project, idx) => {
            const isLeft = project.align === "left";
            return (
              <m.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                key={project.id}
                className="group relative rounded-2xl md:rounded-3xl border border-studio-border dark:border-studio-darkBorder bg-white/50 dark:bg-studio-darkSurface/50 p-6 md:p-10 lg:p-12 hover:border-emerald-500/40 dark:hover:border-neutral-500 transition-all shadow-sm hover:shadow-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-7 ${
                      isLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative aspect-[16/10] w-full rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-black/10 dark:border-white/10 shadow-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />

                      {/* Live Badge Top Left */}
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                        <span className="font-mono text-[10px] md:text-[11px] font-medium tracking-wider uppercase px-3 py-1.5 rounded-full backdrop-blur-md bg-black/75 text-white border border-white/15 flex items-center gap-1.5 shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                          <span>{project.categoryLabel}</span>
                        </span>
                      </div>

                      {/* External Link Overlay Top Right */}
                      <div className="absolute top-4 right-4 z-10">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-11 h-11 rounded-full backdrop-blur-md bg-white/90 dark:bg-black/80 text-studio-text dark:text-white hover:scale-110 hover:bg-emerald-500 hover:text-white transition-all shadow-md group-hover:rotate-12"
                          title="Open Live Website"
                        >
                          <FiArrowUpRight className="w-5 h-5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Information Column */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between ${
                      isLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      {/* Meta header */}
                      <div className="flex items-center justify-between text-xs font-mono text-studio-textMuted dark:text-neutral-400 mb-3 pb-3 border-b border-studio-border/60 dark:border-studio-darkBorder/60">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                          [{project.index}] · {project.client}
                        </span>
                        <span>{project.year}</span>
                      </div>

                      {/* Title with hover effect */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group/title"
                      >
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-studio-text dark:text-white group-hover/title:text-emerald-600 dark:group-hover/title:text-amber-300 transition-colors">
                          {project.title}
                        </h3>
                      </a>

                      <p className="mt-2 font-serif italic text-sm md:text-base text-studio-moss dark:text-neutral-300">
                        {project.subtitle}
                      </p>

                      <p className="mt-4 text-sm md:text-base text-studio-textMuted dark:text-neutral-400 font-sans leading-relaxed">
                        {project.description}
                      </p>

                      {/* Deliverables snippet */}
                      <div className="mt-6 space-y-1.5">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-studio-textMuted dark:text-neutral-500 block mb-2">
                          Key Deliverables:
                        </span>
                        {project.deliverables.slice(0, 3).map((item, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2 text-xs font-sans text-studio-text dark:text-neutral-300"
                          >
                            <FiCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Area */}
                    <div className="mt-8 pt-6 border-t border-studio-border/60 dark:border-studio-darkBorder/60">
                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-studio-surface dark:bg-neutral-800/80 text-studio-text dark:text-neutral-300 border border-studio-border/80 dark:border-studio-darkBorder/80 hover:border-emerald-500/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex items-center justify-between gap-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-studio-forest text-neutral-100 hover:bg-studio-moss dark:bg-neutral-100 dark:text-studio-dark dark:hover:bg-amber-300 font-sans text-xs font-bold transition-all shadow-sm hover:shadow-md"
                        >
                          <span>Visit Live Website</span>
                          <FiExternalLink className="w-3.5 h-3.5" />
                        </a>

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-mono text-studio-textMuted hover:text-studio-text dark:text-neutral-400 dark:hover:text-neutral-200 cursor-pointer underline-offset-4 hover:underline"
                        >
                          Full Specs [+]
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>

        {/* Specs Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <m.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#FBF9F5] dark:bg-studio-darkSurface w-full max-w-2xl rounded-2xl border border-studio-border dark:border-studio-darkBorder p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
              >
                <div className="flex items-center justify-between pb-4 border-b border-studio-border dark:border-studio-darkBorder">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                      [{selectedProject.index}] Project Specifications
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-sans text-studio-text dark:text-neutral-100">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 font-mono text-xs text-studio-textMuted dark:text-neutral-400"
                  >
                    [CLOSE ✕]
                  </button>
                </div>

                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-studio-textMuted dark:text-neutral-400 mb-1">
                      Role & Responsibility
                    </h4>
                    <p className="text-sm font-sans font-medium text-studio-text dark:text-neutral-200">
                      {selectedProject.role}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-studio-textMuted dark:text-neutral-400 mb-2">
                      Full Scope & Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-studio-text dark:text-neutral-300 font-sans"
                        >
                          <FiCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-studio-textMuted dark:text-neutral-400 mb-1">
                      Performance & Engineering Standard
                    </h4>
                    <p className="text-sm text-studio-text dark:text-neutral-300 font-sans p-3.5 rounded-lg bg-studio-surface dark:bg-neutral-800/60 border border-studio-border dark:border-studio-darkBorder">
                      {selectedProject.highlight}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-studio-border dark:border-studio-darkBorder">
                    <span className="font-mono text-xs text-studio-textMuted dark:text-neutral-400">
                      Client: {selectedProject.client} ({selectedProject.year})
                    </span>
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-studio-forest text-neutral-100 hover:bg-studio-moss dark:bg-neutral-100 dark:text-studio-dark dark:hover:bg-amber-300 text-xs font-semibold transition-all"
                    >
                      <span>Open Live Site</span>
                      <FiExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
