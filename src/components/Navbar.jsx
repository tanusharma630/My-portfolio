
import { useState, useEffect } from "react";

function GithubNavIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinNavIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFF9F5]/90 backdrop-blur-md border-b border-[#24232B]/10 transition-all">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between" aria-label="Main Navigation">
        
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          onClick={closeMenu}
          className="group flex items-center gap-2 text-[#24232B] font-display text-lg sm:text-xl font-bold tracking-tight"
        >
          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#B8B1F2] text-[#24232B] flex items-center justify-center font-display font-bold text-xs sm:text-sm shadow-sm group-hover:scale-105 transition-transform">
            TS
          </span>
          <span className="tracking-wider">TANU SHARMA</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#24232B]/80">
          <a href="#about" className="hover:text-[#24232B] hover:underline underline-offset-8 decoration-[#B8B1F2] decoration-2 transition-all">
            About
          </a>
          <a href="#about" className="hover:text-[#24232B] hover:underline underline-offset-8 decoration-[#B8B1F2] decoration-2 transition-all">
            Tech Stack
          </a>
          <a href="#projects" className="hover:text-[#24232B] hover:underline underline-offset-8 decoration-[#B8B1F2] decoration-2 transition-all">
            Projects
          </a>
          <a href="#journey" className="hover:text-[#24232B] hover:underline underline-offset-8 decoration-[#B8B1F2] decoration-2 transition-all">
            Journey
          </a>

          {/* Social Links in Header */}
          <div className="flex items-center gap-2 border-l border-[#24232B]/15 pl-4">
            <a
              href="https://github.com/tanusharma630"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub Profile"
              className="p-2 rounded-full text-[#24232B]/80 hover:text-[#24232B] hover:bg-[#B8B1F2]/30 transition-all"
            >
              <GithubNavIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/tanusharma2"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-full text-[#24232B]/80 hover:text-[#24232B] hover:bg-[#B8B1F2]/30 transition-all"
            >
              <LinkedinNavIcon className="w-4 h-4" />
            </a>
          </div>

          <a 
            href="#contact" 
            className="px-4 py-2 rounded-full bg-[#24232B] text-[#FFF9F5] text-xs font-semibold tracking-wider hover:bg-[#B8B1F2] hover:text-[#24232B] shadow-sm hover:shadow transition-all"
          >
            LET'S TALK
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-[#24232B] hover:bg-[#24232B]/5 transition-colors focus:outline-none"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span 
              className={`block h-0.5 w-full bg-[#24232B] rounded-full transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-[7px]" : ""
              }`} 
            />
            <span 
              className={`block h-0.5 w-full bg-[#24232B] rounded-full transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`} 
            />
            <span 
              className={`block h-0.5 w-full bg-[#24232B] rounded-full transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`} 
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-[#24232B]/10 bg-[#FFF9F5]/98 backdrop-blur-xl ${
          isOpen ? "max-h-[420px] opacity-100 py-4 px-6 shadow-xl" : "max-h-0 opacity-0 py-0 px-6 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-3 font-sans">
          <a
            href="#about"
            onClick={closeMenu}
            className="px-3 py-2 rounded-lg text-base font-medium text-[#24232B]/90 hover:bg-[#B8B1F2]/20 hover:text-[#24232B] transition-colors"
          >
            About
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="px-3 py-2 rounded-lg text-base font-medium text-[#24232B]/90 hover:bg-[#B8B1F2]/20 hover:text-[#24232B] transition-colors"
          >
            Tech Stack
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="px-3 py-2 rounded-lg text-base font-medium text-[#24232B]/90 hover:bg-[#B8B1F2]/20 hover:text-[#24232B] transition-colors"
          >
            Projects
          </a>
          <a
            href="#journey"
            onClick={closeMenu}
            className="px-3 py-2 rounded-lg text-base font-medium text-[#24232B]/90 hover:bg-[#B8B1F2]/20 hover:text-[#24232B] transition-colors"
          >
            Journey
          </a>

          <div className="pt-2 border-t border-[#24232B]/10 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/tanusharma630"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#24232B]/5 hover:bg-[#B8B1F2]/30 text-xs font-semibold text-[#24232B] transition-colors"
              >
                <GithubNavIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/tanusharma2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#24232B]/5 hover:bg-[#B8B1F2]/30 text-xs font-semibold text-[#24232B] transition-colors"
              >
                <LinkedinNavIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            <a
              href="#contact"
              onClick={closeMenu}
              className="w-full text-center py-2.5 px-4 rounded-xl bg-[#24232B] text-[#FFF9F5] text-xs font-bold tracking-wider hover:bg-[#B8B1F2] hover:text-[#24232B] shadow transition-colors"
            >
              LET'S TALK
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
