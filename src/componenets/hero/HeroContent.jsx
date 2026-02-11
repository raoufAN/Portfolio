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
        className="max-w-5xl">
        {/* 1. TOP LABEL (Faded & Spaced) */}
        <p
          className={`mb-8 text-[10px] md:text-xs tracking-[0.8em] uppercase font-bold transition-all duration-700 ${
            isDark ? "text-white/30" : "text-slate-900/40"
          }`}>
          Raouf Annani <span className="mx-2">—</span> 2026
        </p>

        {/* 3. THE DESCRIPTION (Very Faded / Sophisticated) */}
        <div className="relative mt-12 space-y-2">
          <div className="relative flex flex-col items-center text-center">
            {/* Glow Layer */}
            <h1
              aria-hidden
              className="absolute text-5xl font-semibold text-transparent uppercase md:text-[7rem] blur-2xl opacity-40 bg-linear-to-r from-indigo-400 via-purple-500 to-blue-400 bg-clip-text">
              Portfolio
            </h1>

            {/* Main Text */}
            <h1 className="relative text-5xl font-semibold tracking-tight text-transparent uppercase md:text-[7rem] bg-linear-to-r from-white via-indigo-200 to-white bg-clip-text">
              Portfolio
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mt-6 text-sm text-white/60">
              Crafting high-performance interfaces for the modern web.
            </p>
          </div>
        </div>

        {/* 4. THE SCROLL INDICATOR */}
        <div className="flex flex-col items-center gap-4 mt-20">
          <p
            className={`text-[9px] tracking-[1.2em] uppercase font-black ${
              isDark ? "text-white/20" : "text-slate-400/50"
            }`}>
            Explore
          </p>
          <div
            className={`w-1px h-12 relative overflow-hidden ${isDark ? "bg-white/10" : "bg-slate-200"}`}>
            <Motion.div
              animate={{ y: [-48, 48] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-1/2 bg-linear-to-b from-transparent via-[#007FFF] to-transparent"
            />
          </div>
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
