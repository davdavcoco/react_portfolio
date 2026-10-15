import { FiCode, FiLayers, FiZap, FiCheck } from "react-icons/fi";

const stackGroups = [
  {
    index: "01",
    title: "Core Architecture",
    description: "Modern, scalable React infrastructure.",
    skills: ["Next.js 13/14 (App & Pages)", "React 18", "TypeScript", "JavaScript ES6+", "Node.js Ecosystem"],
  },
  {
    index: "02",
    title: "Styling & Systems",
    description: "Pixel-perfect translation from Figma tokens.",
    skills: ["Tailwind CSS", "Modern Vanilla CSS", "Design Tokens System", "Fluid Typographic Scale", "CSS Grid & Flexbox"],
  },
  {
    index: "03",
    title: "Motion & Interaction",
    description: "Tactile micro-animations without lag.",
    skills: ["Framer Motion", "Intersection Observer", "Smooth Drawers & Sliders", "Gesture & Hover Feedback", "Custom Carousels"],
  },
  {
    index: "04",
    title: "Delivery & Standards",
    description: "Ensuring top performance and clean handoffs.",
    skills: ["Vercel Deployment", "Git & GitHub Workflow", "Core Web Vitals (95+)", "SEO & OpenGraph Meta", "Headless CMS Ready"],
  },
];

export default function TechStackSection() {
  return (
    <section className="studio-section py-20 md:py-28 border-b border-studio-border/70 dark:border-studio-darkBorder/70 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-studio-border/60 dark:border-studio-darkBorder/60">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center">
                <span>[04 / TOOLKIT & STANDARDS]</span>
                <span className="typing-cursor text-emerald-500"></span>
              </span>
              <span className="h-[1px] header-line-expand bg-studio-border dark:bg-studio-darkBorder"></span>
            </div>
            <h2 className="section-title-glide text-3xl sm:text-5xl font-sans font-black tracking-tight text-studio-text dark:text-neutral-100 uppercase leading-[1.05]">
              Technical Disciplines &amp;{" "}
              <span className="font-serif italic font-normal lowercase text-emerald-600 dark:text-emerald-400 hover:tracking-wide transition-all duration-300">
                stack.
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-studio-textMuted dark:text-neutral-400 font-sans max-w-md text-left md:text-right">
            Curated frontend tools selected specifically for speed, long-term reliability, and aesthetic precision.
          </p>
        </div>

        {/* Toolkit Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackGroups.map((group, idx) => (
            <div
              key={idx}
              className="interactive-card p-6 md:p-8 rounded-2xl border border-studio-border dark:border-studio-darkBorder bg-white/50 dark:bg-studio-darkSurface/50 flex flex-col justify-between shadow-sm hover:border-emerald-500/40 dark:hover:border-neutral-400 transition-all hover:shadow-xl"
            >
              <div>
                <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block mb-2">
                  [{group.index}]
                </span>
                <h3 className="text-lg font-bold font-sans text-studio-text dark:text-neutral-100 group-hover:text-emerald-600 dark:group-hover:text-amber-300 transition-colors">
                  {group.title}
                </h3>
                <p className="mt-1 text-xs text-studio-textMuted dark:text-neutral-400 font-sans">
                  {group.description}
                </p>
                <div className="mt-6 space-y-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 text-xs font-mono text-studio-text dark:text-neutral-300 p-1.5 rounded-md hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
