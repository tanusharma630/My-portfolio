

function GithubFooterIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinFooterIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function EmailFooterIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#24232B] text-[#FFF9F5] border-t border-[#34323E] py-12 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand and Title */}
        <div className="text-center md:text-left space-y-1.5">
          <a
            href="#hero"
            className="inline-block font-display font-bold text-2xl tracking-tight text-[#B8B1F2] hover:text-[#dcd8ff] transition-colors"
          >
            Tanu Sharma
          </a>
          <p className="text-xs sm:text-sm text-[#FFF9F5]/75 font-sans">
            Full Stack Developer — Crafting user-focused web applications
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="https://github.com/tanusharma630"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tanu Sharma on GitHub"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#34323E] hover:bg-[#B8B1F2] text-[#FFF9F5] hover:text-[#24232B] text-xs font-medium transition-all duration-200"
          >
            <GithubFooterIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/tanusharma2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tanu Sharma on LinkedIn"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#34323E] hover:bg-[#B8B1F2] text-[#FFF9F5] hover:text-[#24232B] text-xs font-medium transition-all duration-200"
          >
            <LinkedinFooterIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="#contact"
            aria-label="Contact Tanu Sharma"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#34323E] hover:bg-[#B8B1F2] text-[#FFF9F5] hover:text-[#24232B] text-xs font-medium transition-all duration-200"
          >
            <EmailFooterIcon className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-[#FFF9F5]/60 font-mono">
          <span>© {currentYear} Tanu Sharma.</span>
          <span className="hidden sm:inline">•</span>
          <a
            href="#hero"
            className="hover:text-[#B8B1F2] transition-colors inline-flex items-center gap-1"
          >
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}
