import { motion as Motion, AnimatePresence, useTransform, useScroll } from "framer-motion";

import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const HeroContent = () => {
  const containerRef = useRef(null);

  const { mode } = useSelector((state) => state.mode);
  const isDark = mode === "dark";

  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacityFadeoText = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const heroY = useTransform(scrollYProgress, [0, 1], ["0vh", "64vh"]);

  const portfolioScale = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const roles = t("HeroContent.heroRoles", {
    returnObjects: true,
  });

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div
      ref={containerRef}
      className="relative z-50 flex flex-col items-center justify-center h-full px-6 text-center pointer-events-none ">
      <Motion.div className="max-w-6xl">
        {/* TOP TEXT */}
        <Motion.p
          style={{ opacity: opacityFadeoText }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className={`
            text-[10px]
            md:text-xs
            tracking-[0.8em]
            uppercase
            font-bold
            ${isDark ? "text-white/30" : "text-slate-900/40"}
          `}>
          Raouf Annani
          <span className="mx-2">—</span>
          2026
        </Motion.p>

        {/* HERO */}
        <div className="relative mt-4">
          <Motion.div
            style={{
              y: heroY,
              scale: portfolioScale,
            }}
            className="relative flex flex-col items-center text-center ">
            {/* GLOW TEXT */}
            <h1
              aria-hidden
              className={`
                absolute
                text-5xl
                font-bold
                text-transparent
                uppercase
                md:text-[12rem]
                blur-3xl
                opacity-30
                bg-linear-to-r
                ${
                  isDark
                    ? "from-[#54419e] via-[#332f46] to-[#54419e]"
                    : "from-[#011d38] via-white to-[#007FFF]"
                }
                bg-clip-text
                select-none
              `}>
              Portfolio
            </h1>

            {/* MAIN TEXT */}
            <h1
              className={`
                relative
                text-6xl
                font-bold
                tracking-tighter
                text-transparent
                uppercase
                md:text-[8rem]
                lg:text-[12rem]
                bg-linear-to-r
                ${
                  isDark
                    ? "from-[#54419e] via-[#332f46] to-[#54419e]"
                    : "from-[#063666] via-white to-[#011d38]"
                }
                bg-clip-text
              `}>
              Portfolio
            </h1>
          </Motion.div>

          {/* ROLES */}
          <Motion.div
            style={{
              opacity: opacityFadeoText,
            }}
            className="
              flex
              items-center
              justify-center
              w-full
              text-3xl
              md:text-[4rem]
              tracking-[2px]
              max-w-7xl
              h-20
              md:h-32
              overflow-hidden
            ">
            <AnimatePresence mode="wait">
              <Motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                  filter: "blur(12px)",
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-5  md:gap-10">
                {/* MAIN */}
                <h1
                  className={`
                    font-['Bebas_Neue']
                    font-bold
                    leading-none
                    whitespace-nowrap
                    ${
                      isDark
                        ? "text-white drop-shadow-[0_0_25px_rgba(123,13,250,0.4)]"
                        : "text-[#063666]"
                    }
                  `}>
                  {roles[index].main}
                </h1>

                {/* TECH */}
                <h1
                  className={`
                    font-['Bebas_Neue']
                    font-bold
                    leading-none
                    ${isDark ? "text-white" : "text-[#063666]"}
                  `}>
                  <span className="inline-block drop-shadow-[0_0_30px_rgba(0,127,255,0.25)]">
                    {roles[index].tech}
                  </span>
                </h1>
              </Motion.div>
            </AnimatePresence>
          </Motion.div>
        </div>

        {/* DESCRIPTION */}
        <Motion.div
          style={{
            opacity: opacityFadeoText,
          }}
          className="flex flex-col items-center gap-4 ">
          <p
            className={`
              max-w-xl
              text-[10px]
              md:text-sm
              tracking-[0.3em]
              uppercase
              ${isDark ? "text-white/40" : "text-[#a8b2bd]"}
            `}>
            {t("HeroContent.HeroDescription")}
          </p>
        </Motion.div>
      </Motion.div>
    </div>
  );
};

export default HeroContent;
