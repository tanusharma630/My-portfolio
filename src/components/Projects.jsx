import { useEffect, useRef, useState } from "react";
import DepthCarousel from "./ProjectCard";
import cart from "../assets/cart.png";
import Moneymate from "../assets/Moneymate.png";
import gsap from "gsap";

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    alt: "Netflix",
    title: "Netflix Clone",
    category: "Frontend Project",
    description:
      "A Netflix-inspired streaming platform with a responsive interface, movie search, authentication flow, and dynamic movie data.",
    technologies: ["React", "JavaScript", "CSS", "API"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    image: cart,
    alt: "Aanvi's Cart",
    title: "Aanvi's Cart",
    category: "E-Commerce",
    description:
      "A modern e-commerce shopping experience with product browsing, cart management, pricing, and a clean responsive interface.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    image:
      "https://i.pinimg.com/736x/29/46/6c/29466cf42eddad023773aba96db0100d.jpg",
    alt: "Weather App",
    title: "Weather App",
    category: "API Based Project",
    description:
      "A weather forecasting application that fetches live weather information and presents it through a simple and intuitive interface.",
    technologies: ["JavaScript", "API", "HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    image:
      "https://i.pinimg.com/1200x/21/9e/35/219e35af8a5ac0a0ae213f24a0685be5.jpg",
    alt: "Tic Tac Toe",
    title: "Tic Tac Toe",
    category: "JavaScript Game",
    description:
      "A responsive Tic Tac Toe game built with JavaScript featuring interactive gameplay, player turns, and winning-state detection.",
    technologies: ["JavaScript", "HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    image:
      "https://media.assettype.com/analyticsinsight%2F2025-06-14%2F26xfp942%2F5-Pro-Tips-to-Make-Your-GitHub-Profile-Job-Ready.jpg",
    alt: "GitHub Profile Finder",
    title: "GitHub Profile Finder",
    category: "API Based Project",
    description:
      "A GitHub profile search application that uses the GitHub API to display developer information, repositories, and profile statistics.",
    technologies: ["JavaScript", "GitHub API", "HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    image: Moneymate,
    alt: "MoneyMate",
    title: "MoneyMate",
    category: "Full Stack Application",
    description:
      "A full-stack personal finance application designed to help users manage their money, track transactions, and understand their financial activity.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    image: "https://picsum.photos/seed/depth6/800/1000",
    alt: "Project",
    title: "More Coming Soon",
    category: "Upcoming Project",
    description:
      "Another project is currently in development. More details and an interactive experience will be added soon.",
    technologies: ["React", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const summaryRef = useRef(null);

  const project = items[activeProject];

  useEffect(() => {
    if (!summaryRef.current) return;

    gsap.fromTo(
      summaryRef.current,
      {
        opacity: 0,
        x: -35,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
      }
    );
  }, [activeProject]);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-[#FFF9F5] border-b border-[#24232B]/10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

      
        {/* <div className="flex items-center gap-3 mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#24232B]/70 bg-[#F8DCCF] px-3 py-1 rounded-full">
            03 / Works
          </span>

          <div className="h-px bg-[#24232B]/10 flex-1"></div>
        </div> */}

    
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[#24232B] tracking-tight">
              Featured Projects.
            </h2>

            <p className="mt-3 text-base sm:text-lg text-[#24232B]/70 max-w-xl">
              An editorial showcase of full stack and frontend web
              applications designed with user focus and modern web code.
            </p>
          </div>

          <div className="hidden md:block text-right">
            <span className="font-handwriting text-2xl text-[#24232B] block -rotate-3">
              Selected Works 2025–2026
            </span>
          </div>
        </div>

      

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] items-center gap-8 lg:gap-4">


          <div
            ref={summaryRef}
            className="order-2 lg:order-1 px-2 sm:px-6 lg:px-0"
          >
    

            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-xs text-[#24232B]/40">
                {String(activeProject + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </span>

              <div className="h-px w-12 bg-[#24232B]/20"></div>

              <span className="text-xs uppercase tracking-[0.18em] text-[#24232B]/45">
                {project.category}
              </span>
            </div>

    

            <h3 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#24232B] tracking-tight leading-[0.95]">
              {project.title}
            </h3>

           

            <p className="mt-6 max-w-md text-sm sm:text-base leading-7 text-[#24232B]/65">
              {project.description}
            </p>

       

            <div className="flex flex-wrap gap-2 mt-7 max-w-md">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#24232B]/10 bg-[#F8DCCF]/50 px-3 py-1.5 text-[11px] font-medium text-[#24232B]/70"
                >
                  {tech}
                </span>
              ))}
            </div>


            <div className="flex items-center gap-3 mt-8">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#24232B] px-5 py-2.5 text-xs font-semibold text-[#FFF9F5] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B8B1F2] hover:text-[#24232B]"
              >
                Live Demo ↗
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#24232B]/20 bg-transparent px-5 py-2.5 text-xs font-semibold text-[#24232B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#24232B] hover:text-[#FFF9F5]"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 h-[500px] relative">
            <DepthCarousel
              items={items}
              depth={220}
              spread={90}
              tilt={22}
              tiltDirection="right"
              perspective={1400}
              visibleCards={4}
              falloff={0.2}
              blur={6}
              autoplay={false}
              loop
              cardWidth={300}
              cardHeight={380}
              radius={18}
              tint="#05060a"
              duration={700}
              ease="power3.out"
              autoplayDelay={3200}
              showControls
              showIndicators
              onChange={(index) => setActiveProject(index)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}