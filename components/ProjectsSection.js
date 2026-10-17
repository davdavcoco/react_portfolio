import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    id: "fanrong",
    index: "01",
    title: "Fanrong Studio",
    client: "Fanrong Creative",
    category: "Design Studio & Consultancy",
    year: "2024",
    image: "/projects/fanrong.jpg",
    summary:
      "Bespoke digital home for a Surabaya-based creative consultancy. Features 1:1 Figma translation, tactile mobile navigation, and sub-second load times.",
    tech: "Next.js · Tailwind CSS · Framer Motion · Vercel",
    liveUrl: "https://fanrongcreative.com/",
  },
  {
    id: "fillouvre",
    index: "02",
    title: "Fillouvre",
    client: "Fill Timber Solution",
    category: "Architectural Systems",
    year: "2024",
    image: "/projects/fillouvre.jpg",
    summary:
      "Minimalist web showcase engineered for sustainable timber louver systems. Delivers crisp architectural imagery and modular technical specifications for architects and developers.",
    tech: "Next.js · Responsive Grid · Tailwind CSS",
    liveUrl: "https://fill.co.id/",
  },
];

export default function ProjectsSection() {
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
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Visual Preview */}
                <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-black/10 dark:border-white/10 shadow-md"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-black/70 text-white font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Visit Live</span>
                      <FiArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
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

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2"
                  >
                    <h3 className="text-2xl sm:text-3xl font-sans font-bold text-studio-text dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <FiArrowUpRight className="w-5 h-5 text-studio-textMuted group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <p className="mt-3 text-sm md:text-base text-studio-textMuted dark:text-neutral-300 font-sans leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="mt-4 pt-4 border-t border-studio-border/60 dark:border-studio-darkBorder/60 flex items-center justify-between">
                    <span className="font-mono text-xs text-studio-textMuted dark:text-neutral-400">
                      {project.tech}
                    </span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      Live Site ↗
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
