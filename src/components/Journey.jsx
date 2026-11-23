import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const journeySteps = [
  {
    step: "01",
    title: "HTML & CSS",
    subtitle: "Structuring and styling web layouts",
    icon: "</>",
  },
  {
    step: "02",
    title: "JavaScript",
    subtitle: "Core logic, DOM manipulation & ES6+",
    icon: "JS",
  },
  {
    step: "03",
    title: "React",
    subtitle: "Component architecture & dynamic UI",
    icon: "⚛",
  },
  {
    step: "04",
    title: "Tailwind CSS",
    subtitle: "Utility-first modern web styling",
    icon: "≈",
  },
  {
    step: "05",
    title: "Node.js & Express",
    subtitle: "Server creation & RESTful API development",
    icon: "JS",
  },
  {
    step: "06",
    title: "MongoDB",
    subtitle: "Database modeling & data persistence",
    icon: "◆",
  },
  {
    step: "07",
    title: "Full Stack Development",
    subtitle: "End-to-end user-focused web applications",
    icon: "▱",
  },
];

function JourneyCard({ item, index }) {
  const cardRef = useRef(null);

  const isInView = useInView(cardRef, {
    once: false,
    margin: "-15% 0px -15% 0px",
  });

  const isLeft = index % 2 === 0;


  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);


  const rotateXValue = useTransform(
    mouseY,
    [-0.5, 0.5],
    [6, -6]
  );

  const rotateYValue = useTransform(
    mouseX,
    [-0.5, 0.5],
    [-6, 6]
  );

  const moveXValue = useTransform(
    mouseX,
    [-0.5, 0.5],
    [-8, 8]
  );

  const moveYValue = useTransform(
    mouseY,
    [-0.5, 0.5],
    [-8, 8]
  );

  const rotateX = useSpring(rotateXValue, {
    stiffness: 150,
    damping: 18,
    mass: 0.5,
  });

  const rotateY = useSpring(rotateYValue, {
    stiffness: 150,
    damping: 18,
    mass: 0.5,
  });

  const moveX = useSpring(moveXValue, {
    stiffness: 150,
    damping: 18,
    mass: 0.5,
  });

  const moveY = useSpring(moveYValue, {
    stiffness: 150,
    damping: 18,
    mass: 0.5,
  });


  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };


  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={cardRef}
      className="
        relative
        flex
        min-h-[230px]
        items-center
        md:min-h-[260px]
      "
    >

      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -100 : 100,
          rotate: isLeft ? -4 : 4,
          scale: 0.9,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                rotate: isLeft ? -2.5 : 2.5,
                scale: 1,
              }
            : {
                opacity: 0,
                x: isLeft ? -100 : 100,
                rotate: isLeft ? -4 : 4,
                scale: 0.9,
              }
        }
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          rotateX,
          rotateY,
          translateX: moveX,
          translateY: moveY,
          transformPerspective: 1200,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`
          group
          relative
          z-10
          w-full
          cursor-pointer

          md:w-[calc(50%-55px)]

          ${isLeft ? "md:mr-auto" : "md:ml-auto"}

          pl-14
          md:pl-0
        `}
      >


        <div
          className="
            pointer-events-none
            absolute
            -inset-5
            -z-10

            rounded-[35px]

            bg-[#B8B1F2]/35

            opacity-40
            blur-2xl

            transition-all
            duration-500

            group-hover:opacity-90
            group-hover:blur-3xl
          "
        />

        <div
          className="
            relative
            overflow-hidden

            rounded-[24px]

            border
            border-[#FFF9F5]/80

            bg-[#B8B1F2]/60

            px-7
            py-7

            backdrop-blur-xl

            shadow-[0_15px_40px_rgba(184,177,242,0.25)]

            transition-all
            duration-500
            ease-out

            group-hover:border-[#FFF9F5]
            group-hover:bg-[#B8B1F2]/75
            group-hover:shadow-[0_20px_60px_rgba(184,177,242,0.5)]

            sm:px-9
            sm:py-8
          "
        >
         
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0

              h-px
              w-full

              bg-gradient-to-r
              from-transparent
              via-[#FFF9F5]
              to-transparent

              opacity-80
            "
          />

          

          <div className="flex items-center gap-5">


            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center

                rounded-2xl

                border
                border-[#FFF9F5]/60

                bg-[#24232B]/15

                font-mono
                text-sm
                font-bold

                text-[#FFF9F5]

                shadow-[0_8px_20px_rgba(36,35,43,0.12)]

                backdrop-blur-md

                transition-all
                duration-300

                group-hover:scale-110
                group-hover:bg-[#24232B]/25
                group-hover:shadow-[0_0_25px_rgba(255,249,245,0.3)]
              "
            >
              {item.icon}
            </div>

       
            <div className="min-w-0">
          

              <span
                className="
                  block

                  font-mono
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]

                  text-[#24232B]/55

                  transition-all
                  duration-300

                  group-hover:tracking-[0.25em]
                "
              >
                Step {item.step}
              </span>

        

              <h3
                className="
                  mt-1

                  font-display
                  text-xl
                  font-extrabold
                  leading-tight
                  tracking-tight

                  text-[#24232B]

                  transition-transform
                  duration-300

                  group-hover:translate-x-1

                  sm:text-2xl
                "
              >
                {item.title}
              </h3>


              <p
                className="
                  mt-2

                  text-xs
                  leading-relaxed

                  text-[#24232B]/65

                  sm:text-sm
                "
              >
                {item.subtitle}
              </p>
            </div>
          </div>


          <div
            className="
              mt-6

              h-[3px]
              w-10

              rounded-full

              bg-[#FFF9F5]

              shadow-[0_0_12px_rgba(255,249,245,0.8)]

              transition-all
              duration-500

              group-hover:w-20
            "
          />
        </div>

        <div
          className={`
            absolute
            top-1/2
            z-0

            hidden

            h-[2px]
            w-12

            -translate-y-1/2

            bg-[#9187f1]

            shadow-[0_0_10px_rgba(184,177,242,0.9)]

            md:block

            ${
              isLeft
                ? "right-[-48px]"
                : "left-[-48px]"
            }
          `}
        />
      </motion.div>

      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                scale: 1,
                opacity: 1,
              }
            : {
                scale: 0,
                opacity: 0,
              }
        }
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
        className="
          absolute

          left-6
          top-1/2

          z-30

          flex
          h-6
          w-6

          -translate-x-1/2
          -translate-y-1/2

          items-center
          justify-center

          rounded-full

          border-[3px]
          border-[#FFF9F5]

          bg-[#9187f3]

          shadow-[0_0_12px_rgba(184,177,242,0.9),0_0_30px_rgba(184,177,242,0.45)]

          md:left-1/2
        "
      >
        <motion.div
          animate={
            isInView
              ? {
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.4, 1],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-2
            w-2
            rounded-full
            bg-[#FFF9F5]
          "
        />
      </motion.div>
    </div>
  );
}

export default function Journey() {
  const timelineRef = useRef(null);



  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 30%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  return (
    <section
      id="journey"
      className="
        relative
        overflow-hidden

        border-b
        border-[#24232B]/10

        bg-[#B8B1F2]/20

        px-6
        py-24

        sm:py-28
      "
    >
      <div className="mx-auto max-w-5xl">

        <div
          className="
            mb-20
            text-center

            sm:mb-24
          "
        >

         

          <h2
            className="
              font-display

              text-4xl
              font-extrabold
              tracking-tight

              text-[#24232B]

              sm:text-5xl
              md:text-6xl
            "
          >
            Learning Journey.
          </h2>

        

          <p
            className="
              mx-auto
              mt-4

              max-w-md

              text-sm
              leading-relaxed

              text-[#24232B]/65

              sm:text-base
            "
          >
            A step-by-step roadmap showing how I built my
            developer skill set.
          </p>

        
          <div
            className="
              mx-auto
              mt-7

              h-1
              w-20

              rounded-full

              bg-[#988ef3]

              shadow-[0_0_15px_rgba(184,177,242,0.7)]
            "
          />
        </div>

        <div
          ref={timelineRef}
          className="
            relative
            mx-auto
            max-w-4xl
          "
        >
       

          <div
            className="
              absolute

              left-6
              top-0
              bottom-0

              w-[2px]

              -translate-x-1/2

              bg-[#24232B]/10

              md:left-1/2
            "
          />

          <motion.div
            style={{
              scaleY: smoothProgress,
              transformOrigin: "top",
            }}
            className="
              absolute

              left-6
              top-0

              z-[2]

              h-full
              w-[3px]

              -translate-x-1/2

              bg-[#B8B1F2]

              shadow-[0_0_8px_rgba(184,177,242,0.95),0_0_20px_rgba(184,177,242,0.65),0_0_40px_rgba(184,177,242,0.3)]

              md:left-1/2
            "
          />

        

          <div className="relative z-10 space-y-8">
            {journeySteps.map((item, index) => (
              <JourneyCard
                key={item.step}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}