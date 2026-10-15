import { FiMoon, FiSun, FiArrowUpRight } from "react-icons/fi";

export default function Navbar({ darkMode, setDarkMode, toggleTheme }) {
  const handleToggle = toggleTheme || (() => setDarkMode && setDarkMode(!darkMode));

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FBF9F5]/90 dark:bg-[#0F1113]/90 border-b border-studio-border/60 dark:border-studio-darkBorder/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="group flex flex-col font-sans tracking-tight"
          >
            <span className="text-base md:text-lg font-bold tracking-tight text-studio-text dark:text-neutral-100 group-hover:text-emerald-600 dark:group-hover:text-amber-400 transition-colors">
              DAVID ADIEL
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-studio-textMuted dark:text-neutral-400 group-hover:tracking-wider transition-all">
              Creative Developer · Studio Web
            </span>
          </a>

          {/* Availability badge */}
          <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-studio-border dark:border-studio-darkBorder">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-studio-textMuted dark:text-neutral-400">
              Available for Q1–Q2
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm">
          <a
            href="#works"
            className="text-studio-textMuted hover:text-studio-text dark:text-neutral-400 dark:hover:text-white transition-colors hover-underline-wipe"
          >
            Selected Works
          </a>
          <a
            href="#capabilities"
            className="text-studio-textMuted hover:text-studio-text dark:text-neutral-400 dark:hover:text-white transition-colors hover-underline-wipe"
          >
            Capabilities
          </a>
          <a
            href="#approach"
            className="text-studio-textMuted hover:text-studio-text dark:text-neutral-400 dark:hover:text-white transition-colors hover-underline-wipe"
          >
            Approach
          </a>
          <a
            href="#contact"
            className="text-studio-textMuted hover:text-studio-text dark:text-neutral-400 dark:hover:text-white transition-colors hover-underline-wipe"
          >
            Contact
          </a>
        </nav>

        {/* Actions: Theme Toggle & Contact Button */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={handleToggle}
            type="button"
            aria-label="Toggle Dark and Light Mode"
            className="group flex items-center gap-2 px-3 py-2 rounded-full border border-studio-border dark:border-studio-darkBorder bg-white/80 dark:bg-studio-darkSurface text-studio-text dark:text-neutral-200 hover:border-emerald-500/50 dark:hover:border-neutral-400 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
          >
            {darkMode ? (
              <>
                <FiSun className="w-4 h-4 text-amber-300 transition-transform group-hover:rotate-90 duration-500" />
                <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-wider text-neutral-300">
                  Light
                </span>
              </>
            ) : (
              <>
                <FiMoon className="w-4 h-4 text-studio-forest transition-transform group-hover:-rotate-45 duration-500" />
                <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-wider text-studio-forest">
                  Dark
                </span>
              </>
            )}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium font-sans px-4 py-2 rounded-full bg-studio-forest text-neutral-100 hover:bg-studio-moss dark:bg-neutral-100 dark:text-studio-dark dark:hover:bg-amber-300 transition-all shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
