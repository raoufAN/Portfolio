import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import BoxesDesktop from "./BoxesDesktop";
import OrbitCenter from "./OrbitCenter";

const SkillsDesktop = ({ skillsData, isDark }) => {
  const [activeSkill, setActiveSkill] = useState(skillsData[0]);

  return (
    <div className="relative z-40 flex items-center justify-center w-full h-full gap-10 px-10">
      <div className="w-[40%] flex items-center justify-end">
        <div className="relative w-full max-w-md">
          <AnimatePresence mode="wait">
            <Motion.div
              key={activeSkill?.name}
              initial={{ x: -60, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -40, opacity: 0, scale: 0.95 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative p-6 rounded-2xl border shadow-xl backdrop-blur-xl overflow-hidden
          transition-all duration-500
          ${
            isDark
              ? "bg-linear-to-br from-white/10 via-white/5 to-transparent border-white/10 text-white"
              : "bg-linear-to-br from-white via-blue-50 to-blue-100 border-gray-200 text-black"
          }`}>
              {/* 🔥 INNER GLOW */}
              <div
                className={`absolute inset-0 opacity-30 blur-2xl pointer-events-none
            ${
              isDark
                ? "bg-linear-to-br from-purple-500/20 via-transparent to-cyan-400/20"
                : "bg-linear-to-br from-blue-300/30 via-transparent to-indigo-300/30"
            }`}
              />

              {/* 🔥 BORDER LIGHT */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  boxShadow: isDark
                    ? "0 0 30px rgba(168,85,247,0.15)"
                    : "0 0 25px rgba(59,130,246,0.15)",
                }}
              />

              {/* CONTENT */}
              <div className="relative z-10">
                {/* HEADER */}
                <div className="flex items-center gap-4 mb-4">
                  <Motion.img
                    src={activeSkill.icon}
                    alt={activeSkill.name}
                    className="w-12 h-12"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  />
                  <h3 className="text-2xl font-bold">{activeSkill.name}</h3>
                </div>

                {/* CATEGORY */}
                <p className="mb-3 text-sm opacity-70">{activeSkill.category}</p>

                {/* DESCRIPTION */}
                <p
                  className={`text-[14px] leading-relaxed tracking-[0.2px]
  ${isDark ? "text-white/80" : "text-black/80"}
`}>
                  {activeSkill.description}
                </p>

                {/* 🔥 ANIMATED LINE */}
                <Motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-4 h-0.5 bg-linear-to-r from-purple-500 to-cyan-400"
                />
              </div>
            </Motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative w-[60%] h-full flex items-center justify-center">
        <div className="relative flex items-center justify-center w-200 h-200">
          {/* 🔥 orbit  madar */}
          <Motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}>
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

          {/*  CENTER ORBIT */}
          <OrbitCenter isDark={isDark} />

          {/*  boxes SKILLS */}
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
