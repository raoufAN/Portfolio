import { motion as Motion, AnimatePresence, useTransform, useScroll } from "framer-motion";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import useScramble from "../../hook/useScramble";

const HeroContent = () => {
  const containerRef = useRef(null);
  const { mode } = useSelector((state) => state.mode);
  const isDark = mode === "dark";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacityFadeoText = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0vh", `62vh`]);
  const portfolioScale = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const roles = [
    { main: "Electrical", tech: "Engineering" },
    { main: "Frontend", tech: "Developer" },
    { main: "Interface", tech: "Designer" },
  ];

  const [index, setIndex] = useState(0);
  const scrambledRole = useScramble(roles[index].tech, 1.2, true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div
      ref={containerRef}
      className="relative z-50 flex flex-col items-center justify-center h-full px-6 text-center pointer-events-none">
      <Motion.div className="max-w-6xl">
        <Motion.p
          style={{ opacity: opacityFadeoText }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={`text-[10px] md:text-xs tracking-[0.8em] uppercase font-bold ${
            isDark ? "text-white/30" : "text-slate-900/40"
          }`}>
          Raouf Annani <span className="mx-2">—</span> 2026
        </Motion.p>

        <div className="relative mt-4 ">
          <Motion.div
            style={{ y: heroY, scale: portfolioScale }}
            className="relative flex flex-col items-center text-center">
            <h1
              aria-hidden
              className={`absolute text-5xl font-bold text-transparent uppercase md:text-[12rem] blur-3xl opacity-30 bg-linear-to-r ${isDark ? "from-[#54419e] via-[#332f46] to-[#54419e]" : "from-[#011d38] via-white to-[#007FFF]"} bg-clip-text select-none`}>
              Portfolio
            </h1>
            <h1
              className={`relative text-6xl font-bold tracking-tighter text-transparent uppercase md:text-[8rem] lg:text-[12rem] bg-linear-to-r ${isDark ? "from-[#54419e] via-[#332f46] to-[#54419e]" : "from-[#063666] via-white to-[#011d38]"} bg-clip-text`}>
              Portfolio
            </h1>
          </Motion.div>

          <Motion.div
            style={{ opacity: opacityFadeoText }}
            className="flex items-center justify-center w-full text-3xl md:text-[4rem] tracking-[2px] gap-5 mx-auto  md:gap-10 max-w-7xl h-20 md:h-32 overflow-hidden line-clamp-1">
            <div className="flex items-center ">
              <AnimatePresence mode="wait">
                <Motion.h1
                  key={roles[index].main}
                  initial={{ opacity: 0, filter: "blur(10px)", x: -20 }}
                  animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                  exit={{ opacity: 0, filter: "blur(10px)", x: 20 }}
                  transition={{ duration: 0.6 }}
                  className={`font-['Bebas_Neue'] font-bold leading-none  whitespace-nowrap ${
                    isDark
                      ? "text-white drop-shadow-[0_0_25px_rgba(123,13,250,0.4)]"
                      : "text-[#063666]"
                  }`}>
                  {roles[index].main}
                </Motion.h1>
              </AnimatePresence>
            </div>

            <div className="flex items-center">
              <h2
                className={`font-['Bebas_Neue'] font-bold leading-none  ${
                  isDark ? "text-white" : "text-[#063666]"
                }`}>
                <span className="inline-block min-w-150px md:min-w-400px drop-shadow-[0_0_30px_rgba(0,127,255,0.3)] text-left">
                  {scrambledRole}
                </span>
              </h2>
            </div>
          </Motion.div>
        </div>

        <Motion.div
          style={{ opacity: opacityFadeoText }}
          className="flex flex-col items-center gap-4 ">
          <p
            className={`max-w-xl text-[10px] md:text-sm tracking-[0.3em] uppercase  ${isDark ? "text-white/40" : "text-[#a8b2bd]"}`}>
            Crafting high-performance interfaces for the modern web.
          </p>
        </Motion.div>
      </Motion.div>
    </div>
  );
};

export default HeroContent;
