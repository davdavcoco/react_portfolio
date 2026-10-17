import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import CapabilitiesSection from "../components/CapabilitiesSection";
import ApproachSection from "../components/ApproachSection";
import TechStackSection from "../components/TechStackSection";
import ContactFooter from "../components/ContactFooter";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme ? savedTheme === "dark" : true;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggleTheme = () => {
    setDarkMode((prev) => {
      const nextMode = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", nextMode ? "dark" : "light");
        if (nextMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
      return nextMode;
    });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>David Adiel — Creative Developer for Design Studios & Architecture</title>
        <meta
          name="description"
          content="Portfolio of David Adiel. Creative developer building lightweight, bespoke digital spaces for design studios, architecture practices, and photography portfolios. Live works: Fanrong Studio, Fillouvre."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="David Adiel — Creative Developer for Studios" />
        <meta
          property="og:description"
          content="Translating refined design concepts into fast, responsive, and tactile web experiences."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-[#FBF9F5] text-studio-text dark:bg-[#0F1113] dark:text-neutral-100 transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleTheme={handleToggleTheme} setDarkMode={setDarkMode} />

        <Hero />

        {/* Studio Ticker Marquee (CSS only, zero CPU lag, smooth 60fps) */}
        <div className="py-3.5 border-b border-studio-border/60 dark:border-studio-darkBorder/60 bg-studio-surface/40 dark:bg-black/40 overflow-hidden select-none">
          <div className="animate-studio-marquee flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-studio-textMuted dark:text-neutral-400">
            <span>Next.js Architecture</span>
            <span className="text-emerald-500">✦</span>
            <span>Figma to Code 1:1</span>
            <span className="text-emerald-500">✦</span>
            <span>Sub-second Load Times</span>
            <span className="text-emerald-500">✦</span>
            <span>Architectural Systems</span>
            <span className="text-emerald-500">✦</span>
            <span>60fps Micro-Interactions</span>
            <span className="text-emerald-500">✦</span>
            <span>Headless CMS Ready</span>
            <span className="text-emerald-500">✦</span>
            {/* Infinite loop items */}
            <span>Next.js Architecture</span>
            <span className="text-emerald-500">✦</span>
            <span>Figma to Code 1:1</span>
            <span className="text-emerald-500">✦</span>
            <span>Sub-second Load Times</span>
            <span className="text-emerald-500">✦</span>
            <span>Architectural Systems</span>
            <span className="text-emerald-500">✦</span>
            <span>60fps Micro-Interactions</span>
            <span className="text-emerald-500">✦</span>
            <span>Headless CMS Ready</span>
            <span className="text-emerald-500">✦</span>
          </div>
        </div>

        <ProjectsSection />

        <CapabilitiesSection />

        <ApproachSection />

        <TechStackSection />

        <ContactFooter />
      </main>
    </div>
  );
}

