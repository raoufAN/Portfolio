import { motion as Motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import useScramble from "../../hook/useScramble";

const HeroContent = () => {
  const { mode } = useSelector((state) => state.mode);
  const isDark = mode === "dark";

  // Senior Identity Array - Merging your Engineering & Creative sides
  const roles = [
    { main: "Electrical", tech: "Engineering" },
    { main: "Creative", tech: "Technologist" },
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
    <div className="relative z-50 flex flex-col items-center justify-center h-full px-6 text-center pointer-events-none">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="max-w-6xl">
        {/* 1. TOP LABEL (Faded & Spaced) */}
        <p
          className={`text-[10px] md:text-xs tracking-[0.8em] uppercase font-bold transition-all duration-700 ${
            isDark ? "text-white/30" : "text-slate-900/40"
          }`}>
          Raouf Annani <span className="mx-2">—</span> 2026
        </p>

        <div className="relative mt-4 space-y-8">
          <div className="relative flex flex-col items-center text-center">
            <h1
              aria-hidden
              className="absolute text-5xl font-bold text-transparent uppercase md:text-[12rem] blur-3xl opacity-30 bg-linear-to-r from-[#204a88] via-white-900 to-blue-400 bg-clip-text select-none">
              Portfolio
            </h1>
            <h1 className="relative text-6xl font-bold tracking-tighter text-transparent uppercase md:text-[8rem] lg:text-[12rem] bg-linear-to-r from-[#54419e] via-[#332f46] to-[#54419e] bg-clip-text">
              Portfolio
            </h1>
          </div>

          <div className="flex items-center justify-center w-full text-2xl md:text-[4rem] gap-5 mx-auto mt-5 md:gap-10 max-w-7xl min-h-140px md:min-h-180px">
            <div className="flex items-center justify-end h-full">
              <AnimatePresence mode="wait">
                <Motion.h1
                  key={roles[index].main}
                  initial={{ opacity: 0, filter: "blur(10px)", x: -20 }}
                  animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                  exit={{ opacity: 0, filter: "blur(10px)", x: 20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={` font-['Bebas_Neue'] font-bold leading-none tracking-tighter whitespace-nowrap
                  ${isDark ? "text-[#ffffff] drop-shadow-[0_0_25px_rgba(123,13,250,0.4)]" : "text-[#006666]"}`}>
                  {roles[index].main}
                </Motion.h1>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-start h-full">
              <h2
                className={`font-['Bebas_Neue'] font-bold leading-none tracking-tighter
                ${isDark ? "text-white" : "text-[#0a192f]"}`}>
                <span className="inline-block min-w-200px md:min-w-500px drop-shadow-[0_0_30px_rgba(0,127,255,0.3)] text-left">
                  {scrambledRole}
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* 4. THE SCROLL INDICATOR */}
        <div className="flex flex-col items-center gap-4 mt-4">
          <p className="max-w-xl  text-[10px] md:text-sm tracking-[0.3em] uppercase text-white/40">
            Crafting high-performance interfaces for the modern web.
          </p>
        </div>
      </Motion.div>
    </div>
  );
};

export default HeroContent;

{
  /* 2. THE DUAL-TONE HEADING  <div className="flex flex-col items-center">
          <AnimatePresence mode="wait">
            <Motion.h1
              key={roles[index].main}
              initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(8px)", y: -10 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`text-6xl md:text-[7rem] font-bold tracking-tighter italic leading-none
                ${
                  isDark
                    ? "text-[#7b0dfa] drop-shadow-[0_0_20px_rgba(0,210,255,0.6)] opacity-90"
                    : "text-[#006666] opacity-100"
                }
                `}>
              {roles[index].main}
            </Motion.h1>
          </AnimatePresence>

          <h2
            className={`text-4xl md:text-[5rem] font-semibold tracking-tight transition-all duration-1000 mt-4
              ${isDark ? "text-white" : "text-[#0a192f]"}
    `}>
            <span className="font-mono lowercase select-none opacity-80">{"<"}</span>
            <span className="font-mono mx-4 drop-shadow-[0_0_25px_rgba(0,127,255,0.4)]">
              {scrambledRole}
            </span>
            <span className="font-mono lowercase select-none opacity-80">{"/>"}</span>
          </h2>
        </div>*/
}
