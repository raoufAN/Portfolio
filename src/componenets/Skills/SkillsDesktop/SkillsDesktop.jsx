import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

import BoxesDesktop from "./BoxesDesktop";
import OrbitCenter from "./OrbitCenter";

const SkillsDesktop = ({ skillsData, isDark }) => {
  const [activeSkill, setActiveSkill] = useState(skillsData[0]);

  return (
    <div className="relative z-40 flex items-center justify-center w-full h-full gap-10 px-10">
      {/* LEFT CONTENT */}
      <div className="w-[40%] flex items-center justify-end">
        <div className="relative w-full max-w-md">
          <AnimatePresence mode="wait">
            <Motion.div
              key={activeSkill?.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative">
              {/* GLOW */}
              <div
                className={`absolute -inset-10 blur-3xl opacity-20 pointer-events-none
                ${isDark ? "bg-purple-500" : "bg-blue-400"}
              `}
              />

              {/* CONTENT */}
              <div className="relative z-10">
                {/* ICON */}
                <Motion.img
                  src={activeSkill.icon}
                  alt={activeSkill.name}
                  className="mb-5 w-14 h-14"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                />

                {/* TITLE */}
                <h3
                  className={`text-4xl font-black tracking-tight mb-2
                  ${isDark ? "text-white" : "text-[#111]"}
                `}>
                  {activeSkill.name}
                </h3>

                {/* CATEGORY */}
                <p
                  className={`uppercase tracking-[4px] text-xs mb-5
                  ${isDark ? "text-purple-300/70" : "text-blue-700/70"}
                `}>
                  {activeSkill.category}
                </p>

                {/* DESCRIPTION */}
                <p
                  className={` max-w-110 text-[15px] md:text-[16px] leading-[1.9] tracking-[0.015em] font-medium antialiased
                    ${isDark ? "text-white/72" : "text-[#1a1a1a]/75"}`}>
                  {activeSkill.description}
                </p>

                {/* ANIMATED LINE */}
                <Motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`h-0.5 mt-6 rounded-full
                  ${
                    isDark
                      ? "bg-linear-to-r from-purple-500 to-cyan-400"
                      : "bg-linear-to-r from-blue-400 to-cyan-500"
                  }
                `}
                />
              </div>
            </Motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT ORBIT */}
      <div className="relative w-[60%] h-full flex items-center justify-center">
        <div className="relative flex items-center justify-center w-200 h-200">
          {/* ORBIT LINES */}
          <Motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: "linear",
            }}>
            {[180, 280, 390].map((r, i) => (
              <circle
                key={i}
                cx="50%"
                cy="50%"
                r={r}
                fill="none"
                stroke={isDark ? "#9333ea" : "#0a4988"}
                strokeWidth="0.3"
                strokeDasharray="5 5"
              />
            ))}
          </Motion.svg>

          {/* CENTER */}
          <OrbitCenter isDark={isDark} />

          {/* SKILLS */}
          <BoxesDesktop
            skillsData={skillsData}
            activeSkill={activeSkill}
            setActiveSkill={setActiveSkill}
            isDark={isDark}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsDesktop;
