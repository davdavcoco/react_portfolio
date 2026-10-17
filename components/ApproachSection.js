const principles = [
  {
    index: "01",
    title: "Design-Literate Engineering",
    description:
      "Bridging design and code seamlessly. Translating Figma layouts into production with 1:1 fidelity—respecting typography rhythm, whitespace, and visual identity without compromise.",
  },
  {
    index: "02",
    title: "Lightweight & Fast by Default",
    description:
      "Crafting tactile, 60fps micro-interactions using native CSS and Next.js architecture. Sub-second initial loads without sluggish scripts, bloated 3D canvases, or layout shifts.",
  },
  {
    index: "03",
    title: "Clean & Reliable Delivery",
    description:
      "Transparent staging links, structured Git commits, and modular React components. Built for effortless handoff, long-term stability, and continuous performance.",
  },
];

export default function ApproachSection() {
  return (
    <section id="approach" className="studio-section py-16 md:py-24 border-b border-studio-border/70 dark:border-studio-darkBorder/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-6 border-b border-studio-border/60 dark:border-studio-darkBorder/60">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                [03 / VALUE &amp; APPROACH]
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight text-studio-text dark:text-neutral-100 uppercase leading-[1.05]">
              Why Studios &amp; Practices{" "}
              <span className="font-serif italic font-normal lowercase text-emerald-600 dark:text-emerald-400">
                partner with me.
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-studio-textMuted dark:text-neutral-400 font-sans max-w-sm">
            Tailored for creative consultancies and architecture studios that prioritize taste, precision, and performance.
          </p>
        </div>

        {/* Minimal 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {principles.map((p) => (
            <div
              key={p.index}
              className="pt-4 border-t border-studio-border dark:border-studio-darkBorder group hover:border-emerald-500 transition-colors"
            >
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-3">
                [{p.index}]
              </span>

              <h3 className="text-xl font-bold font-sans text-studio-text dark:text-neutral-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {p.title}
              </h3>

              <p className="mt-3 text-sm md:text-base text-studio-textMuted dark:text-neutral-300 leading-relaxed font-sans">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
