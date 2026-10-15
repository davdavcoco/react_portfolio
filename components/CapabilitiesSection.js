import { FiLayout, FiZap, FiLayers, FiMaximize2, FiCheck } from "react-icons/fi";

const services = [
  {
    number: "01",
    icon: FiLayout,
    title: "Studio & Company Profile Websites",
    audience: "Design Studios · Architecture Practices · Photography Collectives",
    description:
      "Digital homes tailored for creative practices. Translating Figma designs 1:1 with surgical precision—respecting typographical rhythm, whitespace hierarchy, and brand narrative without generic template compromises.",
    features: [
      "Bespoke Case Study & Project Archives",
      "Typographic & Editorial Grid Layouts",
      "Complete Brand Storytelling & About Sections",
      "Mobile-Optimized Touch Navigation",
    ],
  },
  {
    number: "02",
    icon: FiZap,
    title: "Creative Development & Micro-Interactions",
    audience: "Brands Requiring Memorable, Tactile Web Experiences",
    description:
      "Sensory web interactions powered by Framer Motion and modern CSS. Subtle, organic animations that elevate the user experience—from smooth image reveals and magnetic triggers to fluid horizontal project carousels.",
    features: [
      "Smooth 60fps Page & Component Transitions",
      "Horizontal Sliders & Interactive Carousels",
      "Dynamic Accordion & Drawer Systems",
      "Zero Visual Lag or Layout Shifts (CLS 0.00)",
    ],
  },
  {
    number: "03",
    icon: FiMaximize2,
    title: "Lightweight Architecture & Performance",
    audience: "High-Traffic Showcases & Speed-Critical Portfolios",
    description:
      "Engineered on Next.js with extreme discipline. Eliminating bloated dependencies and heavy 3D canvases to deliver blazing fast initial loads, SEO visibility, and instant responsiveness across all devices.",
    features: [
      "Lighthouse 95+ Score Performance",
      "Next.js Hybrid Rendering (SSG / SSR)",
      "Adaptive WebP/AVIF Image Pipelines",
      "SEO & Structured Schema Architecture",
    ],
  },
  {
    number: "04",
    icon: FiLayers,
    title: "Design Systems & Headless CMS Readiness",
    audience: "Scalable Practices Growing Their Digital Footprint",
    description:
      "Structured component architectures designed for long-term maintainability. Clean tokenized Tailwind CSS styles and modular code ready for seamless headless CMS integrations.",
    features: [
      "Atomic & Reusable React Component Library",
      "Tailwind Design Token Setup",
      "Headless CMS Integration (Sanity, Strapi)",
      "Clean Git Versioning & Automated Vercel CI/CD",
    ],
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="studio-section py-20 md:py-32 border-b border-studio-border/70 dark:border-studio-darkBorder/70 relative">
      {/* Ambient background glow */}
      <div className="ambient-glow-mid hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Asymmetrical Header: Left/Right Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24 pb-8 border-b border-studio-border/60 dark:border-studio-darkBorder/60">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center">
                <span>[02 / CAPABILITIES MATRIX]</span>
                <span className="typing-cursor text-emerald-500"></span>
              </span>
              <span className="h-[1px] header-line-expand bg-studio-border dark:bg-studio-darkBorder"></span>
            </div>
            <h2 className="section-title-glide text-3xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight text-studio-text dark:text-neutral-100 uppercase leading-[1.05]">
              Studio Disciplines &amp;{" "}
              <span className="font-serif italic font-normal lowercase text-emerald-600 dark:text-emerald-400 hover:tracking-wide transition-all duration-300">
                delivery.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-6 text-left lg:text-right">
            <p className="text-base sm:text-lg text-studio-textMuted dark:text-neutral-400 font-sans leading-relaxed">
              Engineered with studio discipline, not arbitrary percentages. I partner with creative directors, architects, and founders to translate high-taste visual concepts into lightweight reality.
            </p>
          </div>
        </div>

        {/* Matrix Grid with Staggered Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isEven = idx % 2 === 1;
            return (
              <div
                key={service.number}
                className={`interactive-card group relative p-8 md:p-10 rounded-2xl md:rounded-3xl border border-studio-border dark:border-studio-darkBorder bg-white/50 dark:bg-studio-darkSurface/50 hover:border-emerald-500/50 dark:hover:border-neutral-400 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between ${
                  isEven ? "md:translate-y-4" : ""
                }`}
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-studio-border/60 dark:border-studio-darkBorder/60 mb-6">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded bg-emerald-500/10">
                      [{service.number}]
                    </span>
                    <div className="p-3 rounded-xl bg-studio-surface dark:bg-neutral-800 text-studio-text dark:text-neutral-200 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5 transition-transform" />
                    </div>
                  </div>

                  {/* Title & Audience with Interactive Hover */}
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-studio-text dark:text-neutral-100 group-hover:text-emerald-600 dark:group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-studio-moss dark:text-neutral-400 font-medium">
                    {service.audience}
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-studio-textMuted dark:text-neutral-300 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="mt-8 pt-6 border-t border-studio-border/60 dark:border-studio-darkBorder/60">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-studio-textMuted dark:text-neutral-500 mb-3">
                    Deliverables &amp; Standards:
                  </span>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-studio-text dark:text-neutral-300 group-hover:text-studio-text dark:group-hover:text-white transition-colors"
                      >
                        <FiCheck className="w-4 h-4 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
