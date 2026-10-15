import { FiCompass, FiFeather, FiCheckCircle } from "react-icons/fi";

const principles = [
  {
    icon: FiCompass,
    index: "01",
    title: "Design-Literate Engineering",
    subtitle: "Speaking the vocabulary of Creative Directors & Architects",
    description:
      "Most developers see websites merely as data and components. I examine them through typography, kerning, spatial proportion, and art direction. Your Figma designs will be built with absolute fidelity, down to the subtle 1px border lines and letter-spacing.",
  },
  {
    icon: FiFeather,
    index: "02",
    title: "Lightweight by Conviction",
    subtitle: "Refined aesthetics without sluggish bundle sizes",
    description:
      "Stunning aesthetics should never cost your visitors speed or battery life. By leveraging clean Next.js architecture, native CSS transitions, and optimized WebP assets, I produce ultra-slick experiences that load in milliseconds.",
  },
  {
    icon: FiCheckCircle,
    index: "03",
    title: "Discipline & Collaboration",
    subtitle: "Clear staging, clean Git commits & reliable handoffs",
    description:
      "From initial component breakdown to live deployment on Vercel, I maintain structured communication and transparent staging environments. No guesswork, no messy spaghetti code—just rock-solid delivery.",
  },
];

export default function ApproachSection() {
  return (
    <section id="approach" className="studio-section py-20 md:py-32 border-b border-studio-border/70 dark:border-studio-darkBorder/70 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24 pb-8 border-b border-studio-border/60 dark:border-studio-darkBorder/60">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center">
                <span>[03 / ENGINEERING PHILOSOPHY]</span>
                <span className="typing-cursor text-emerald-500"></span>
              </span>
              <span className="h-[1px] header-line-expand bg-studio-border dark:bg-studio-darkBorder"></span>
            </div>
            <h2 className="section-title-glide text-3xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight text-studio-text dark:text-neutral-100 uppercase leading-[1.05]">
              Why Studios &amp; Practices{" "}
              <span className="font-serif italic font-normal lowercase text-emerald-600 dark:text-emerald-400 hover:tracking-wide transition-all duration-300">
                partner with me.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-sm sm:text-base text-studio-textMuted dark:text-neutral-400 font-sans leading-relaxed">
              A website for a creative consultancy or architectural firm demands more than basic frontend work—it requires taste, precision, and structural discipline.
            </p>
          </div>
        </div>

        {/* 3 Principles Grid with Asymmetric Staggering & Interactive Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="interactive-card group p-8 md:p-10 rounded-2xl md:rounded-3xl border border-studio-border dark:border-studio-darkBorder bg-white/50 dark:bg-studio-darkSurface/50 flex flex-col justify-between hover:border-emerald-500/50 dark:hover:border-neutral-400 transition-all shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-studio-border/60 dark:border-studio-darkBorder/60">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      [{p.index}]
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-studio-surface dark:bg-neutral-800 flex items-center justify-center text-studio-forest dark:text-amber-300 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-studio-text dark:text-neutral-100 group-hover:text-emerald-600 dark:group-hover:text-amber-300 transition-colors">
                    {p.title}
                  </h3>

                  <p className="mt-2 font-serif italic text-xs text-studio-moss dark:text-neutral-300">
                    {p.subtitle}
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-studio-textMuted dark:text-neutral-400 leading-relaxed font-sans">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Quote Callout Box */}
        <div className="interactive-card mt-16 p-8 md:p-12 rounded-2xl md:rounded-3xl bg-studio-forest text-neutral-100 dark:bg-neutral-900/90 dark:border dark:border-studio-darkBorder flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold block mb-2">
              {"// STUDIO PHILOSOPHY"}
            </span>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic font-normal text-white leading-relaxed">
              &ldquo;Great design should never be held back by clumsy development. The code must be as refined as the visual identity.&rdquo;
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 px-7 py-4 rounded-full bg-white text-studio-forest hover:bg-emerald-400 hover:text-studio-dark dark:bg-amber-300 dark:text-neutral-900 dark:hover:bg-amber-200 font-sans text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:scale-105"
          >
            <span>Start a Project</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
