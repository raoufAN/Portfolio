import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import SkillBox from "./SkillBox";

const chunkArray = (array, size) => {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
};

const SkillsSlider = ({ skillsData, isDark }) => {
  // 🔥 4 BOXES PER SLIDE
  const groups = chunkArray(skillsData, 5);

  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < groups.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full mt-16 overflow-hidden 2xl:hidden">
      {/* MAIN CONTAINER */}
      <div className="relative w-full overflow-x-hidden overflow-y-visible">
        {/* SLIDER */}
        <Motion.div
          className="flex w-full"
          animate={{
            x: `-${current * 100}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 20,
          }}>
          {groups.map((group, i) => (
            <div
              key={i}
              className="w-full max-w-full min-w-full px-2 py-2 overflow-hidden shrink-0">
              {/* RESPONSIVE GRID */}
              <div className="grid grid-cols-1 gap-4 md:gap-x-10 md:grid-cols-2 place-items-center">
                {group.map((skill, index) => (
                  <div key={skill.name} className="flex justify-center w-full px-15">
                    <SkillBox skill={skill} index={index} isDark={isDark} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Motion.div>
      </div>

      <button
        onClick={prev}
        disabled={current === 0}
        className={`absolute  left-2  top-1/2  -translate-y-1/2  z-30 w-10  h-10 rounded-full  flex  items-center  justify-center backdrop-blur-xl  border  shadow-lg
          transition-all duration-300 ${current === 0 ? `  opacity-25 cursor-not-allowed pointer-events-none` : ` opacity-100`}
          ${
            isDark
              ? `   bg-black/40 border-white/10  text-white  hover:bg-black/60 `
              : ` bg-white/70 border-gray-200  text-black  hover:bg-white
              `
          }
        `}>
        <FaChevronLeft size={14} />
      </button>

      <button
        onClick={next}
        disabled={current === groups.length - 1}
        className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-xl border shad transition-all duration-300
          ${
            current === groups.length - 1
              ? ` opacity-25 cursor-not-allowed pointer-events-none
              `
              : ` opacity-100`
          }

          ${
            isDark
              ? ` bg-black/40  border-white/10   text-white   hover:bg-black/60 `
              : ` bg-white/70  border-gray-200   text-black   hover:bg-white
              `
          }
        `}>
        <FaChevronRight size={14} />
      </button>

      <div className="flex items-center justify-center gap-2 mt-8">
        {groups.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={` rounded-full transition-all duration-500
              ${
                current === index
                  ? `w-8 h-0.75  ${isDark ? "bg-purple-400" : "bg-blue-600"} `
                  : `w-3 h-0.75 ${isDark ? "bg-white/20" : "bg-black/10"}`
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSlider;
