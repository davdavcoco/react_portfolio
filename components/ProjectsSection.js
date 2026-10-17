import { useState, useEffect } from "react";
import Image from "next/image";
import { motion as m, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiX, FiMaximize2 } from "react-icons/fi";

const projects = [
  {
    id: "fanrong",
    index: "01",
    title: "Fanrong Studio",
    client: "Fanrong Creative",
    category: "Design Studio & Consultancy",
    year: "2024",
    image: "/projects/fanrong.jpg",
    hoverImage: "/projects/fanrong-2.png",
    summary:
      "Bespoke digital home for a Surabaya-based creative consultancy. Features 1:1 Figma translation, tactile mobile navigation, and sub-second load times.",
    tech: "Next.js · Tailwind CSS · Framer Motion · Vercel",
    liveUrl: "https://fanrongcreative.com/",
    displayUrl: "fanrongcreative.com",
  },
  {
    id: "fillouvre",
    index: "02",
    title: "Fillouvre",
    client: "Fill Timber Solution",
    category: "Architectural Systems",
    year: "2024",
    image: "/projects/fillouvre.jpg",
    hoverImage: "/projects/fillouvre-2.webp",
    summary:
      "Minimalist web showcase engineered for sustainable timber louver systems. Delivers crisp architectural imagery and modular technical specifications for architects and developers.",
    tech: "Next.js · Responsive Grid · Tailwind CSS",
    liveUrl: "https://fill.co.id/",
    displayUrl: "fill.co.id",
  },
];

export default function ProjectsSection() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Lock body scroll and listen for ESC key when full-page iframe modal is active
  useEffect(() => {
    if (!activeModalProject) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalProject]);

  return (
    <section id="works" className="studio-section py-16 md:py-24 border-b border-studio-border/70 dark:border-studio-darkBorder/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-6 border-b border-studio-border/60 dark:border-studio-darkBorder/60">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                [01 / FEATURED ARCHIVE]
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight text-studio-text dark:text-neutral-100 uppercase leading-[1.05]">
              Selected{" "}
              <span className="font-serif italic font-normal lowercase text-emerald-600 dark:text-emerald-400">
                works.
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-studio-textMuted dark:text-neutral-400 font-sans max-w-sm">
            Live web builds engineered for design practices and architectural systems.
          </p>
        </div>

        {/* Minimal Editorial Project Showcase */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={project.id}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Visual Preview Container - Click opens Full-Screen Iframe */}
                <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="block relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-900 border border-black/10 dark:border-white/10 shadow-md cursor-pointer group/img"
                  >
                    {/* Primary Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={idx === 0}
                      className="object-cover object-top transition-all duration-700 ease-out group-hover/img:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />

                    {/* Secondary Image crossfade on hover */}
                    <Image
                      src={project.hoverImage}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover object-top transition-all duration-700 ease-out opacity-0 group-hover/img:opacity-100 group-hover/img:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />

                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors pointer-events-none" />

                    {/* Hover Full-Page Iframe Trigger Pill */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full backdrop-blur-md bg-black/85 text-white font-mono text-xs font-semibold tracking-wider uppercase shadow-2xl border border-white/20 transform group-hover/img:scale-105 transition-transform">
                        <FiMaximize2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Open Full-Page Live Preview</span>
                      </span>
                    </div>

                    {/* Bottom Right Live indicator */}
                    <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md bg-black/80 text-white font-mono text-[10px] tracking-wider uppercase opacity-90 group-hover/img:opacity-0 transition-opacity">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Live Site Available</span>
                    </div>
                  </div>
                </div>

                {/* Editorial Details */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-2 font-mono text-xs text-studio-textMuted dark:text-neutral-400 mb-2">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      [{project.index}]
                    </span>
                    <span>·</span>
                    <span className="uppercase tracking-wider">{project.category}</span>
                    <span>·</span>
                    <span>{project.year}</span>
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-2 text-left group/title cursor-pointer"
                  >
                    <h3 className="text-2xl sm:text-3xl font-sans font-bold text-studio-text dark:text-white group-hover/title:text-emerald-600 dark:group-hover/title:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <FiMaximize2 className="w-4 h-4 text-studio-textMuted group-hover/title:text-emerald-600 dark:group-hover/title:text-emerald-400 transition-transform group-hover/title:scale-110" />
                  </button>

                  <p className="mt-3 text-sm md:text-base text-studio-textMuted dark:text-neutral-300 font-sans leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="mt-5 pt-4 border-t border-studio-border/60 dark:border-studio-darkBorder/60 flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs text-studio-textMuted dark:text-neutral-400">
                      {project.tech}
                    </span>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold hover:bg-emerald-500 hover:text-white transition-all cursor-pointer"
                    >
                      <FiMaximize2 className="w-3 h-3" />
                      <span>Full Page [↗]</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Page Interactive Iframe Modal (100vw x 100vh) */}
      <AnimatePresence>
        {activeModalProject && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col bg-[#08090A]/95 backdrop-blur-2xl"
          >
            {/* Minimalist Browser Navigation Chrome */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#0E1012] text-white">
              {/* Left: Window Controls & Title */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors cursor-pointer"
                    title="Close Full Page Preview"
                  />
                  <span className="w-3 h-3 rounded-full bg-amber-500/40" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/40" />
                </div>

                <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-white/10">
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold">
                    [{activeModalProject.index}]
                  </span>
                  <span className="font-sans text-sm font-semibold text-neutral-100">
                    {activeModalProject.title}
                  </span>
                  <span className="font-mono text-xs text-neutral-400">
                    · {activeModalProject.client}
                  </span>
                </div>
              </div>

              {/* Right: Close button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black hover:bg-neutral-200 font-mono text-xs font-bold transition-all cursor-pointer shadow-sm hover:scale-105"
              >
                <FiX className="w-3.5 h-3.5" />
                <span>Close [ESC]</span>
              </button>
            </div>

            {/* Massive Full-Page Interactive Iframe Viewport */}
            <div className="flex-1 w-full h-full relative bg-white">
              <iframe
                src={activeModalProject.liveUrl}
                title={`${activeModalProject.title} Full Webpage`}
                className="w-full h-full border-0 bg-white"
                loading="eager"
              />
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
