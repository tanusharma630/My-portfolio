import { useEffect, useRef, useState } from "react";
import image from "../assets/image.png";

// ------------------------------------------------------------------
// Scroll-progress helpers
// ------------------------------------------------------------------
const clamp01 = (v) => Math.min(1, Math.max(0, v));

const mapRange = (v, inMin, inMax, outMin, outMax) => {
  if (inMax === inMin) return outMin;
  if (v <= inMin) return outMin;
  if (v >= inMax) return outMax;
  return outMin + ((v - inMin) / (inMax - inMin)) * (outMax - outMin);
};

// Scroll stages (fractions of total section progress, 0 -> 1)
const COVER_END = 0.18;

const PAGE_1_STATIC_END = 0.28;
const PAGE_1_FLIP_END = 0.38;

const PAGE_2_STATIC_END = 0.48;
const PAGE_2_FLIP_END = 0.58;

const PAGE_3_STATIC_END = 0.68;
const PAGE_3_FLIP_END = 0.78;

export default function About() {
  const sectionRef = useRef(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId;

    const updateTarget = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      targetRef.current = clamp01(total > 0 ? scrolled / total : 0);
    };

    // Continuously eases the visible progress toward the real scroll
    // position instead of snapping to it — this is what makes the
    // whole interaction (cover, flips, slides) feel smooth rather
    // than tied 1:1 to raw scroll jitter.
    const loop = () => {
      const diff = targetRef.current - currentRef.current;
      currentRef.current += diff * 0.12;
      if (Math.abs(diff) < 0.0001) currentRef.current = targetRef.current;
      setProgress(currentRef.current);
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);
    updateTarget();
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const coverT = mapRange(progress, 0, COVER_END, 0, 1);
  const page1T = mapRange(progress, PAGE_1_STATIC_END, PAGE_1_FLIP_END, 0, 1);
  const page2T = mapRange(progress, PAGE_2_STATIC_END, PAGE_2_FLIP_END, 0, 1);
  const page3T = mapRange(progress, PAGE_3_STATIC_END, PAGE_3_FLIP_END, 0, 1);

  // How "revealed" each page is — used to slide + fade its content in
  // as the page in front of it finishes flipping away.
  const page1Reveal = mapRange(coverT, 0.4, 1, 0, 1);
  const page2Reveal = mapRange(page1T, 0.35, 1, 0, 1);
  const page3Reveal = mapRange(page2T, 0.35, 1, 0, 1);
  const page4Reveal = mapRange(page3T, 0.35, 1, 0, 1);

  const coverOpen = coverT > 0.02;

  // Which page is currently "active" — drives the clickable index tabs.
  let activeTab = 0;
  if (progress >= PAGE_3_STATIC_END + (PAGE_3_FLIP_END - PAGE_3_STATIC_END) * 0.5) activeTab = 4;
  else if (progress >= PAGE_2_STATIC_END + (PAGE_2_FLIP_END - PAGE_2_STATIC_END) * 0.5) activeTab = 3;
  else if (progress >= PAGE_1_STATIC_END + (PAGE_1_FLIP_END - PAGE_1_STATIC_END) * 0.5) activeTab = 2;
  else if (progress >= COVER_END) activeTab = 1;

  // Lets the little side tabs jump straight to a page — smooth native
  // scroll, picked up by the easing loop above like any other scroll.
  const goToPage = (fraction) => {
    const el = sectionRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const y = el.offsetTop + total * fraction;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const scrollHintOpacity = clamp01(1 - coverT * 6);

  return (
    <section ref={sectionRef} id="about" className="relative h-[440vh] bg-[#FFF9F5] overflow-x-clip">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div
          className="diary-stage relative w-[92vw] max-w-[880px] h-[62vh] md:h-[68vh] max-h-[560px]"
          style={{ perspective: "2400px" }}
        >
          {/* ---------------------------------------------------- */}
          {/* Diary base: left page + right page stack             */}
          {/* ---------------------------------------------------- */}
          <div className="absolute inset-0 flex rounded-[14px] shadow-[0_18px_50px_rgba(36,35,43,0.16)] overflow-hidden">
            {/* LEFT PAGE — quiet, decorative, holds still */}
            <div
              className="hidden md:flex relative w-1/2 h-full border-r border-[#EFE6DC] flex-col items-center justify-center px-8 diary-paper-lines"
              style={{
                backgroundImage:
                  "linear-gradient(200deg, #FFFDFA 0%, #FFF9F2 55%, #FDF6EE 100%)",
              }}
            >
              <div
                className="w-14 h-14 rounded-full border border-[#B8B1F2]/40 flex items-center justify-center mb-4"
                style={{ boxShadow: "0 4px 12px rgba(184,177,242,0.25)" }}
              >
                <span className="font-serif italic text-[#B8B1F2] text-sm">
                  TS
                </span>
              </div>
              <p className="font-serif italic text-[#24232B]/45 text-sm text-center max-w-[220px] leading-relaxed">
                a journal of how I build for the web
              </p>
              <svg
                width="90"
                height="14"
                viewBox="0 0 90 14"
                className="mt-3 opacity-40"
              >
                <path
                  d="M2 8 Q 15 2, 28 8 T 54 8 T 80 8"
                  stroke="#B8B1F2"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute bottom-6 left-6 text-[11px] tracking-wide text-[#24232B]/30">
                Vol. I
              </div>
            </div>

            {/* RIGHT PAGE SLOT — pages 1‑4 live here, stacked */}
            <div
              className="relative w-full md:w-1/2 h-full bg-[#FFFDFA]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <DiaryPage
                zIndex={40}
                rotation={-180 * page1T}
                exitT={page1T}
                revealT={page1Reveal}
                label="01"
                title="Who I Am"
              >
                <div className="w-9 h-9 rounded-full bg-[#B8B1F2]/15 border border-[#B8B1F2]/40 flex items-center justify-center mb-3">
                  <span className="text-[#B8B1F2] text-sm">✦</span>
                </div>
                <p className="text-[13px] md:text-[14px] leading-relaxed text-[#24232B]/85">
                  Hi, I'm <span className="font-semibold">Tanu Sharma</span>, a
                  full stack developer who likes turning half-formed ideas
                  into interfaces people actually enjoy using.
                </p>
                <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed text-[#24232B]/70">
                  I spend most of my time in React, but what I care about is
                  the space between design and code — making modern web
                  applications feel considered, not just functional.
                </p>
                <span className="mt-5 inline-block px-3 py-1 rounded-full bg-[#F8DCCF] text-[#24232B] text-[11px] tracking-wide">
                  Full Stack Developer
                </span>
                <p className="mt-6 pt-3 border-t border-dashed border-[#24232B]/15 font-serif italic text-[12px] text-[#24232B]/50">
                  "building thoughtful interfaces, one project at a time."
                </p>
              </DiaryPage>

              <DiaryPage
                zIndex={30}
                rotation={-180 * page2T}
                exitT={page2T}
                revealT={page2Reveal}
                label="02"
                title="My Strengths"
              >
                <div className="mt-1">
                  {[
                    { n: "01", label: "Frontend UI architecture" },
                    { n: "02", label: "Responsive design" },
                    { n: "03", label: "Creativity" },
                    { n: "04", label: "Adaptability" },
                    { n: "05", label: "Problem solving" },
                    { n: "06", label: "Attention to detail" },
                  ].map((item, i) => (
                    <div
                      key={item.n}
                      className={`flex items-center gap-3 py-[7px] ${i !== 0 ? "border-t border-[#24232B]/8" : ""
                        }`}
                    >
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{
                          backgroundColor:
                            i % 2 === 0 ? "#B8B1F2" : "#F8DCCF",
                        }}
                      />
                      <span className="text-[12.5px] text-[#24232B]/40 tabular-nums w-4">
                        {item.n}
                      </span>
                      <span className="text-[13px] text-[#24232B]/85">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </DiaryPage>

              <DiaryPage
                zIndex={20}
                rotation={-180 * page3T}
                exitT={page3T}
                revealT={page3Reveal}
                label="03"
                title="My Stack"
              >
                <p className="text-[10.5px] uppercase tracking-[0.15em] text-[#24232B]/40 mb-2">
                  Frontend
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"].map(
                    (tech, i) => (
                      <Sticker key={tech} label={tech} index={i} />
                    )
                  )}
                </div>
                <p className="text-[10.5px] uppercase tracking-[0.15em] text-[#24232B]/40 mb-2">
                  Backend &amp; Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "MongoDB", "Git"].map((tech, i) => (
                    <Sticker key={tech} label={tech} index={i + 5} />
                  ))}
                </div>
              </DiaryPage>

              <DiaryPage
                zIndex={10}
                rotation={0}
                exitT={0}
                revealT={page4Reveal}
                label="04"
                title="What's Next"
              >
                <p className="text-[10.5px] uppercase tracking-[0.15em] text-[#24232B]/40 mb-2">
                  Currently learning
                </p>
                <ul className="space-y-2 mb-5">
                  {[
                    "Node.js / Express backend",
                    "MongoDB",
                    "REST APIs",
                    "Authentication",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-[13px] text-[#24232B]/80 flex items-center gap-2.5"
                    >
                      <span className="w-3 h-3 rounded-[3px] border border-[#B8B1F2] flex items-center justify-center shrink-0">
                        <span className="w-1 h-1 rounded-full bg-[#B8B1F2]" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] leading-relaxed text-[#24232B]/75 relative inline">
                  <span
                    className="relative"
                    style={{
                      backgroundImage:
                        "linear-gradient(#F8DCCF, #F8DCCF)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 40%",
                      backgroundPosition: "0 88%",
                    }}
                  >
                    Every project is one more page toward becoming a
                    stronger, more well-rounded full stack developer.
                  </span>
                </p>
                <p className="mt-6 text-right font-serif italic text-[13px] text-[#24232B]/50">
                  — T.S.
                </p>
              </DiaryPage>
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* Center spine                                          */}
          {/* ---------------------------------------------------- */}
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[14px] h-full pointer-events-none z-[45]">
            <div className="w-full h-full bg-gradient-to-r from-black/14 via-black/0 to-black/14" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6">
              {[0, 1, 2, 3].map((r) => (
                <div
                  key={r}
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 35% 30%, #FFFDFA, #B8B1F2 60%, #8f86d8 100%)",
                    boxShadow: "0 1px 3px rgba(36,35,43,0.35)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* COVER — closed diary, hinged on the left edge         */}
          {/* ---------------------------------------------------- */}
          <div
            className="diary-cover diary-cover-texture absolute inset-0 rounded-[14px] overflow-hidden group"
            style={{
              backgroundImage:
                "linear-gradient(150deg, #C7C1F6 0%, #B8B1F2 48%, #A79FE4 100%)",
              transformOrigin: "left center",
              transform: `rotateY(${-180 * coverT}deg)`,
              zIndex: 50,
              boxShadow:
                "0 24px 60px rgba(36,35,43,0.28), 0 2px 0 rgba(255,255,255,0.25) inset",
              pointerEvents: coverOpen ? "none" : "auto",
              transition: "transform 0.05s linear",
            }}
          >
            {/* soft sheen, top-left light source */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500"
              style={{
                backgroundImage:
                  "radial-gradient(120% 90% at 12% 8%, rgba(255,255,255,0.35), transparent 55%)",
              }}
            />
            {/* spine-side shadow so the cover reads as bound, not flat */}
            <div
              className="absolute inset-y-0 left-0 w-10 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.16), transparent)",
              }}
            />

            {/* hanging ribbon bookmark */}
            <div
              className="absolute top-0 left-10 w-4 h-16 pointer-events-none"
              style={{
                backgroundColor: "#F8DCCF",
                clipPath: "polygon(0 0, 100% 0, 100% 82%, 50% 100%, 0 82%)",
                boxShadow: "0 3px 8px rgba(36,35,43,0.18)",
              }}
            />

            <div className="relative w-full h-full flex flex-col items-center justify-center px-8">
              <div className="absolute inset-[10px] border border-white/30 rounded-[8px]" />
              <div className="absolute inset-[16px] border border-dashed border-white/20 rounded-[6px]" />
              <div className="absolute top-6 left-6 w-3.5 h-3.5 border-t-2 border-l-2 border-white/50 rounded-tl-sm" />
              <div className="absolute bottom-6 right-6 w-3.5 h-3.5 border-b-2 border-r-2 border-white/50 rounded-br-sm" />

              {/* wax-seal style monogram badge */}
              <div
                className="absolute top-8 right-8 w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "#24232B",
                  boxShadow: "0 4px 10px rgba(36,35,43,0.35)",
                }}
              >
                <span className="font-serif italic text-[#F8DCCF] text-[13px]">
                  TS
                </span>
              </div>

              <p className="text-[11px] tracking-[0.3em] text-[#24232B]/70 mb-5">
                ABOUT ME
              </p>

              {/* polaroid-framed photo */}
              <div
                className="bg-white p-2 pb-4 shadow-xl mb-5 transition-transform duration-500 group-hover:rotate-0"
                style={{
                  transform: "rotate(-3deg)",
                  boxShadow: "0 14px 30px rgba(36,35,43,0.3)",
                }}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 overflow-hidden">
                  <img
                    src={image}
                    alt="Tanu Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h2 className="font-serif text-xl md:text-2xl text-[#24232B] tracking-wide">
                Tanu Sharma
              </h2>
              <p className="text-[12px] tracking-[0.18em] text-[#24232B]/70 mt-1.5">
                FULL STACK DEVELOPER
              </p>

              <svg width="60" height="10" viewBox="0 0 60 10" className="mt-4 opacity-60">
                <path
                  d="M1 5 Q 10 1, 19 5 T 37 5 T 55 5"
                  stroke="#24232B"
                  strokeWidth="1.4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              {/* scroll hint, fades as the cover starts to open */}
              <div
                className="absolute bottom-7 flex flex-col items-center gap-1.5 transition-opacity"
                style={{ opacity: scrollHintOpacity }}
              >
                <span className="text-[10px] tracking-[0.2em] text-[#24232B]/55">
                  SCROLL TO OPEN
                </span>
                <svg
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  className="animate-bounce"
                >
                  <path
                    d="M1 1 L7 7 L13 1"
                    stroke="#24232B"
                    strokeOpacity="0.55"
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* Index tabs — click to jump straight to a page          */}
          {/* ---------------------------------------------------- */}
          <div
            className="hidden sm:flex absolute top-1/2 -right-3 -translate-y-1/2 translate-x-full flex-col gap-2 z-[60] transition-opacity duration-500"
            style={{ opacity: mapRange(progress, 0.04, 0.16, 0, 1) }}
          >
            {[
              { n: 1, frac: 0.23 },
              { n: 2, frac: 0.43 },
              { n: 3, frac: 0.63 },
              { n: 4, frac: 0.83 },
            ].map((tab) => (
              <button
                key={tab.n}
                type="button"
                onClick={() => goToPage(tab.frac)}
                aria-label={`Go to page ${tab.n}`}
                className="w-7 h-8 rounded-r-md text-[11px] font-medium transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: activeTab === tab.n ? "#B8B1F2" : "#F8DCCF",
                  color: "#24232B",
                  opacity: activeTab === tab.n ? 1 : 0.65,
                  transform: activeTab === tab.n ? "translateX(4px)" : "translateX(0)",
                  boxShadow: "2px 2px 6px rgba(36,35,43,0.12)",
                }}
              >
                0{tab.n}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .diary-stage, .diary-stage * {
          -webkit-font-smoothing: antialiased;
        }
        .diary-cover,
        .diary-page-inner {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .diary-paper-lines {
          background-image: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 27px,
            rgba(36,35,43,0.05) 28px
          );
        }
        .diary-dogear {
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }
      `}</style>
    </section>
  );
}

// ------------------------------------------------------------------
// A single right-hand diary page, flipping around the spine (left
// edge of its own box, which sits at the diary's center). Its
// content slides + fades in as it's revealed, and slides + fades
// out as the page itself flips away — layered on top of the 3D turn.
// ------------------------------------------------------------------
function DiaryPage({ zIndex, rotation, exitT, revealT, label, title, children }) {
  const exitFade = clamp01(exitT / 0.5); // fades out in the first half of its own flip
  const contentOpacity = clamp01(revealT) * (1 - exitFade);
  const slideX = (1 - clamp01(revealT)) * 18 - exitFade * 18;

  return (
    <div
      className="diary-page-inner diary-paper-lines absolute inset-0 overflow-hidden"
      style={{
        transformOrigin: "left center",
        transform: `rotateY(${rotation}deg)`,
        transformStyle: "preserve-3d",
        zIndex,
        backgroundImage:
          "linear-gradient(120deg, #FFFDFA 0%, #FFF9F2 60%, #FDF6EE 100%)",
        boxShadow: "-1px 0 0 rgba(36,35,43,0.06)",
      }}
    >
      {/* soft shadow near the spine for depth */}
      <div
        className="absolute inset-y-0 left-0 w-8 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(36,35,43,0.07), transparent)",
        }}
      />
      {/* dog-ear corner detail */}
      <div
        className="diary-dogear absolute top-0 right-0 w-5 h-5"
        style={{
          backgroundImage: "linear-gradient(135deg, #F8DCCF, #B8B1F2)",
          boxShadow: "-2px 2px 4px rgba(36,35,43,0.12)",
        }}
      />

      <div
        className="w-full h-full px-6 py-7 md:px-8 md:py-8 flex flex-col"
        style={{
          opacity: contentOpacity,
          transform: `translateX(${slideX}px)`,
        }}
      >
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-serif text-lg md:text-xl text-[#24232B]">
            {title}
          </h3>
          <span className="w-6 h-6 rounded-full border border-[#B8B1F2]/50 flex items-center justify-center text-[10px] text-[#24232B]/45 shrink-0">
            {label}
          </span>
        </div>
        <svg width="46" height="8" viewBox="0 0 46 8" className="mb-4 opacity-70">
          <path
            d="M1 5 Q 8 1, 15 5 T 29 5 T 43 5"
            stroke="#B8B1F2"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex-1 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function Sticker({ label, index }) {
  const dashed = index % 3 === 1;
  const bg = index % 2 === 0 ? "#F8DCCF" : "#FFF9F5";
  const rotate = ((index % 3) - 1) * 2.5;

  return (
    <span
      className={`px-2.5 py-1 rounded-[4px] text-[11.5px] border ${dashed ? "border-dashed" : "border-solid"
        }`}
      style={{
        borderColor: "#B8B1F2",
        color: "#24232B",
        backgroundColor: bg,
        transform: `rotate(${rotate}deg)`,
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}