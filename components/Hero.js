import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const studioRoles = [
  "Design Studios",
  "Architectural Practices",
  "Creative Consultancies",
  "Spatial Designers",
];

function useTypewriter(words, typingSpeed = 95, deletingSpeed = 50, pause = 2000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (index >= words.length) {
      setIndex(0);
      return;
    }

    const currentWord = words[index];

    if (!isDeleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, words, typingSpeed, deletingSpeed, pause]);

  return words[index].substring(0, subIndex);
}

export default function Hero() {
  const typedRole = useTypewriter(studioRoles);

  const whatsappUrl =
    "https://wa.me/628978294220?text=" +
    encodeURIComponent("Halo David, saya tertarik diskusi proyek website.");

  return (
    <section className="studio-section hero-auto-line relative overflow-hidden pt-16 md:pt-28 pb-16 md:pb-28 border-b border-studio-border/70 dark:border-studio-darkBorder/70">
      {/* Ambient background glow (automatically floats and breathes) */}
      <div className="ambient-glow-top animate-ambient-float hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Monospaced Label - Left aligned with automatic entrance */}
        <m.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center shadow-sm">
            <span>[00 / STUDIO TECHNOLOGIST]</span>
            <span className="typing-cursor text-emerald-500"></span>
          </span>
          <span className="h-[1px] header-line-expand bg-studio-border dark:bg-studio-darkBorder"></span>
          <span className="font-mono text-xs text-studio-textMuted dark:text-neutral-400">
            Surabaya, ID · Global Collaborations
          </span>
        </m.div>

        {/* Hero Headline (H1) - Staggered Asymmetrical Layout with Automatic Typewriter */}
        <div className="space-y-2 md:space-y-4">
          {/* Row 1: Left with automatic shimmer */}
          <m.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-left"
          >
            <h1 className="section-title-glide text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black tracking-tight text-studio-text dark:text-white uppercase leading-[0.98]">
              Creative{" "}
              <span className="animate-shimmer-text font-serif italic font-normal tracking-normal text-emerald-600 dark:text-emerald-400 hover:text-amber-400 dark:hover:text-amber-300 transition-colors duration-300 cursor-default">
                Front-End
              </span>
            </h1>
          </m.div>

          {/* Row 2: Staggered Right with Automatic Typewriter Effect */}
          <m.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-left md:text-center lg:text-right md:pl-12 lg:pl-0"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black tracking-tight text-studio-text dark:text-neutral-100 uppercase leading-[0.98]">
              For{" "}
              <span className="inline-block min-w-[260px] sm:min-w-[420px] md:min-w-[540px] text-left">
                <span className="font-serif italic font-normal lowercase tracking-normal text-emerald-600 dark:text-amber-300 hover-underline-wipe">
                  {typedRole}
                </span>
                <span className="typing-cursor text-emerald-500 dark:text-amber-300 font-sans font-normal"></span>
              </span>
            </h1>
          </m.div>

          {/* Row 3: Left with Architectural Subtitle */}
          <m.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-left"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black tracking-tight text-studio-text dark:text-neutral-200 uppercase leading-[0.98]">
              &amp; Spatial{" "}
              <span className="font-serif italic font-light lowercase text-studio-timber dark:text-emerald-300 hover:tracking-wide transition-all duration-300 cursor-default">
                practices.
              </span>
            </h1>
          </m.div>
        </div>

        {/* Asymmetrical Narrative Section: Two Column Grid with Right Offset */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Quick CTA Buttons */}
          <m.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#works"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-studio-forest text-neutral-100 hover:bg-studio-moss dark:bg-neutral-100 dark:text-studio-dark dark:hover:bg-amber-300 font-sans text-xs md:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Selected Works</span>
              <FiArrowDown className="w-4 h-4 animate-bounce" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white font-sans text-xs md:text-sm font-semibold transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5"
            >
              <BsWhatsapp className="w-4 h-4" />
              <span>WhatsApp Chat</span>
              <FiArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </m.div>

          {/* Right Column: Offset Narrative Paragraph */}
          <m.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 lg:pl-6"
          >
            <p className="text-base sm:text-lg md:text-xl text-studio-textMuted dark:text-neutral-300 leading-relaxed font-sans">
              I partner with creative consultancies, architectural firms, and
              curators to translate Figma designs into lightweight, tactile web
              spaces. Specializing in{" "}
              <span className="text-studio-text dark:text-white font-semibold hover-underline-wipe">
                Figma-to-Next.js 1:1 fidelity
              </span>
              , subtle micro-interactions, and sub-second load times without
              clunky template bloat.
            </p>
          </m.div>
        </div>

        {/* Dynamic Credibility Strip - 3 Asymmetric Interactive Cards with Staggered Auto-Fade */}
        <div className="mt-16 pt-8 border-t border-studio-border/60 dark:border-studio-darkBorder/60 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1: Left */}
          <m.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="interactive-card p-5 rounded-xl border border-studio-border/80 dark:border-studio-darkBorder/80 bg-white/40 dark:bg-studio-darkSurface/40 shadow-sm"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
              [01 / PROVEN ENGAGEMENTS]
            </span>
            <h2 className="text-base font-bold font-sans text-studio-text dark:text-neutral-100">
              Fanrong Studio &amp; Fillouvre
            </h2>
            <p className="text-xs text-studio-textMuted dark:text-neutral-400 mt-1 font-sans">
              Collaborative design practice &amp; architectural louver systems.
            </p>
          </m.div>

          {/* Box 2: Center */}
          <m.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="interactive-card p-5 rounded-xl border border-studio-border/80 dark:border-studio-darkBorder/80 bg-white/40 dark:bg-studio-darkSurface/40 shadow-sm"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-amber-600 dark:text-amber-400 block mb-1">
              [02 / TECHNICAL RIGOR]
            </span>
            <h2 className="text-base font-bold font-sans text-studio-text dark:text-neutral-100">
              Next.js, Tailwind &amp; Framer
            </h2>
            <p className="text-xs text-studio-textMuted dark:text-neutral-400 mt-1 font-sans">
              Clean modular components, micro-interactions &amp; responsive grids.
            </p>
          </m.div>

          {/* Box 3: Right */}
          <m.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="interactive-card p-5 rounded-xl border border-studio-border/80 dark:border-studio-darkBorder/80 bg-white/40 dark:bg-studio-darkSurface/40 shadow-sm"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
              [03 / BENCHMARK]
            </span>
            <h2 className="text-base font-bold font-sans text-studio-text dark:text-neutral-100 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              95+ Lighthouse Score
            </h2>
            <p className="text-xs text-studio-textMuted dark:text-neutral-400 mt-1 font-sans">
              Sub-second initial loads, zero CLS &amp; fluid mobile touch.
            </p>
          </m.div>
        </div>
      </div>
    </section>
  );
}
