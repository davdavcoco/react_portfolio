import { useState } from "react";
import { FiArrowUpRight, FiMail, FiLinkedin, FiTwitter, FiGithub, FiCheck, FiCopy } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const email = "davidadiel96@gmail.com";
  const whatsappNumber = "628978294220";
  const whatsappTemplate = encodeURIComponent(
    "Halo David, saya melihat portfolio Anda dan tertarik untuk mendiskusikan proyek website (company profile / studio portfolio / custom web). Boleh kita jadwalkan diskusi lebih lanjut?"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappTemplate}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="studio-section pt-20 md:pt-32 pb-12 bg-white dark:bg-[#0B0D0F] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Contact Hero */}
        <div className="max-w-4xl pb-16 md:pb-24 border-b border-studio-border dark:border-studio-darkBorder">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center">
              <span>[05 / INITIATE A PROJECT]</span>
              <span className="typing-cursor text-emerald-500"></span>
            </span>
            <span className="h-[1px] header-line-expand bg-studio-border dark:bg-studio-darkBorder"></span>
          </div>

          <h2 className="section-title-glide text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-studio-text dark:text-neutral-100 uppercase leading-[1.05]">
            Have an upcoming studio portfolio, company profile, or{" "}
            <span className="font-serif italic font-normal lowercase text-emerald-600 dark:text-emerald-400 hover:tracking-wide transition-all duration-300 cursor-default">
              spatial showcase?
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-studio-textMuted dark:text-neutral-400 font-sans max-w-2xl leading-relaxed">
            I am available for select freelance collaborations, agency overflow, and bespoke web builds for design studios, architects, and creative brands.
          </p>

          {/* Quick Actions with Interactive Lift */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* WhatsApp CTA with Indonesian Template */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-sm font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <BsWhatsapp className="w-4 h-4" />
              <span>Chat via WhatsApp</span>
              <FiArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Email Direct Mailto */}
            <a
              href={`mailto:${email}?subject=Diskusi%20Proyek%20Website%20via%20Portfolio`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-studio-forest text-neutral-100 hover:bg-studio-moss dark:bg-neutral-100 dark:text-studio-dark dark:hover:bg-amber-300 font-sans text-sm font-semibold transition-all shadow-md"
            >
              <FiMail className="w-4 h-4" />
              <span>Send Email</span>
              <FiArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-studio-border dark:border-studio-darkBorder bg-white/70 dark:bg-studio-darkSurface/70 text-studio-text dark:text-neutral-200 hover:border-studio-text/40 dark:hover:border-neutral-400 font-mono text-xs transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <FiCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied: {email}</span>
                </>
              ) : (
                <>
                  <FiCopy className="w-3.5 h-3.5" />
                  <span>Copy: {email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer Meta & Colophon */}
        <div className="pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-xs font-mono text-studio-textMuted dark:text-neutral-400">
          <div>
            <span className="font-sans font-bold text-sm text-studio-text dark:text-neutral-200 block mb-1">
              DAVID ADIEL
            </span>
            <span>Surabaya, Indonesia (UTC+7) · Creative Development for Studios</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/david-adiel-1b9187243/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-studio-text dark:hover:text-neutral-100 transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <FiArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="https://github.com/davdavcoco"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-studio-text dark:hover:text-neutral-100 transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <FiArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="https://twitter.com/davidadiel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-studio-text dark:hover:text-neutral-100 transition-colors flex items-center gap-1"
            >
              <span>Twitter</span>
              <FiArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div>
            <span>&copy; {new Date().getFullYear()} David Adiel. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
