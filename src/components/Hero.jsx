import bg from "../assets/bg.png";

function GithubIcon({ className = "w-4 h-4 sm:w-5 sm:h-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4 sm:w-5 sm:h-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative w-full pb-12 sm:pb-16 md:pb-20 overflow-x-clip">
      
      {/* Full Width Hero Picture Container */}
      <div className="relative w-full">
        <img
          src={bg}
          alt="Tanu Sharma Portfolio"
          className="block w-full h-auto select-none"
        />

        {/* Floating Action Button Bar centered on the bottom edge */}
        <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 z-20 w-[96%] max-w-2xl flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 px-2">
          
          {/* GitHub button */}
          <a
            href="https://github.com/tanusharma630"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tanu Sharma on GitHub"
            className="
              group
              flex
              items-center
              gap-2
              px-3.5
              py-2
              sm:px-5
              sm:py-2.5
              rounded-full
              bg-[#24232B]
              text-[#FFF9F5]
              font-sans
              text-xs
              sm:text-sm
              md:text-base
              font-medium
              shadow-lg
              hover:shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#34323e]
              whitespace-nowrap
            "
          >
            <span
              className="
                w-6
                h-6
                sm:w-7
                sm:h-7
                md:w-8
                md:h-8
                rounded-full
                bg-[#FFF9F5]
                text-[#24232B]
                flex
                items-center
                justify-center
                transition-transform
                duration-300
                group-hover:scale-110
                shrink-0
              "
            >
              <GithubIcon />
            </span>
            <span>GitHub</span>
          </a>

          {/* LinkedIn button */}
          <a
            href="https://www.linkedin.com/in/tanusharma2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tanu Sharma on LinkedIn"
            className="
              group
              flex
              items-center
              gap-2
              px-3.5
              py-2
              sm:px-5
              sm:py-2.5
              rounded-full
              bg-[#24232B]
              text-[#FFF9F5]
              font-sans
              text-xs
              sm:text-sm
              md:text-base
              font-medium
              shadow-lg
              hover:shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#34323e]
              whitespace-nowrap
            "
          >
            <span
              className="
                w-6
                h-6
                sm:w-7
                sm:h-7
                md:w-8
                md:h-8
                rounded-full
                bg-[#FFF9F5]
                text-[#24232B]
                flex
                items-center
                justify-center
                transition-transform
                duration-300
                group-hover:scale-110
                shrink-0
              "
            >
              <LinkedinIcon />
            </span>
            <span>LinkedIn</span>
          </a>

          {/* Resume button */}
          <a
            href="/resume.pdf"
            download
            className="
              px-4
              py-2
              sm:px-6
              sm:py-2.5
              rounded-full
              bg-[#FFF9F5]
              border-2
              border-[#24232B]
              text-[#24232B]
              font-sans
              text-xs
              sm:text-sm
              md:text-base
              font-semibold
              shadow-lg
              hover:shadow-xl
              transition-all
              duration-300
              hover:bg-[#24232B]
              hover:text-[#FFF9F5]
              hover:-translate-y-1
              whitespace-nowrap
            "
          >
            Resume ↓
          </a>

        </div>
      </div>

    </section>
  );
}

export default Hero;