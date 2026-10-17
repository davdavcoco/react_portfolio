const disciplines = [
  {
    number: "01",
    title: "Studio & Profile Websites",
    description:
      "Bespoke digital spaces for creative practices. Translating Figma designs 1:1 with surgical precision—respecting typography rhythm, whitespace hierarchy, and brand narrative without template compromises.",
    deliverables: "Case study archives · Editorial grid layouts · Touch navigation",
  },
  {
    number: "02",
    title: "Creative Motion & Interaction",
    description:
      "Sensory, tactile micro-interactions powered by Framer Motion and modern CSS. Subtle, organic animations that elevate the user experience from first impression to final click.",
    deliverables: "60fps transitions · Custom carousels · Zero layout shift (CLS 0.00)",
  },
  {
    number: "03",
    title: "Lightweight Architecture & Speed",
    description:
      "Engineered on Next.js with extreme discipline. Eliminating bloated dependencies to deliver blazing fast initial loads, exceptional SEO visibility, and instant responsiveness.",
    deliverables: "Lighthouse 95+ score · Next.js SSG/SSR · WebP optimization",
  },
  {
    number: "04",
    title: "Design Systems & Headless CMS",
    description:
      "Modular component architectures designed for long-term maintainability. Clean tokenized Tailwind CSS styles and modular code ready for seamless headless CMS integrations.",
    deliverables: "Reusable React components · Tailwind design tokens · CMS ready",
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="studio-section py-16 md:py-24 border-b border-studio-border/70 dark:border-studio-darkBorder/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-6 border-b border-studio-border/60 dark:border-studio-darkBorder/60">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                [02 / CAPABILITIES MATRIX]
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight text-studio-text dark:text-neutral-100 uppercase leading-[1.05]">
              Studio Disciplines &amp;{" "}
              <span className="font-serif italic font-normal lowercase text-emerald-600 dark:text-emerald-400">
                delivery.
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-studio-textMuted dark:text-neutral-400 font-sans max-w-sm">
            Translating high-taste visual concepts into lightweight, durable digital reality.
          </p>
        </div>

        {/* Clean Editorial Disciplines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {disciplines.map((item) => (
            <div
              key={item.number}
              className="flex flex-col justify-between pt-4 border-t border-studio-border dark:border-studio-darkBorder group hover:border-emerald-500 transition-colors"
            >
              <div>
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-3">
                  [{item.number}]
                </span>
                <h3 className="text-lg font-bold font-sans text-studio-text dark:text-neutral-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-studio-textMuted dark:text-neutral-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-studio-border/40 dark:border-studio-darkBorder/40">
                <span className="font-mono text-[11px] text-studio-textMuted dark:text-neutral-400 leading-normal block">
                  {item.deliverables}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
