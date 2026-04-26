import { motion as Motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const SkillBox = ({ skill, index, isDark }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: 300 }}
      whileInView={{ opacity: 1, x: 0 }}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,

        width: "250px",
        height: "80px",
      }}
      transition={{ duration: 0.8, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      className="relative cursor-pointer group">
      {/* GLOW EFFECT */}
      <Motion.div
        className="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 pointer-events-none rounded-2xl group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(150px circle at ${x}px ${y}px, ${isDark ? "rgba(139, 92, 246, 0.25)" : "rgba(37, 99, 235, 0.15)"}, transparent 80%)`,
          ),
        }}
      />

      <div
        className={`relative p-[1px] rounded-2xl overflow-hidden transition-all duration-700 h-full w-full shadow-2xl ${
          isDark
            ? "bg-slate-800/50 group-hover:bg-linear-to-br from-purple-500 via-transparent to-blue-500 shadow-purple-500/5"
            : "bg-slate-200 group-hover:bg-linear-to-br from-blue-500 via-transparent to-cyan-400 shadow-blue-500/5"
        }`}>
        <div
          className={`relative z-10 px-4 py-2 rounded-[15px] backdrop-blur-2xl transition-all duration-500 w-full h-full flex items-center justify-start gap-3 ${
            isDark
              ? "bg-[#08080c]/95 group-hover:bg-[#0c0c14]/90"
              : "bg-white/90 group-hover:bg-white/95"
          }`}>
          {/* ICON SECTION */}
          <div className="relative flex items-center justify-center shrink-0">
            <Motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="relative z-20">
              <img
                src={skill.icon}
                alt={skill.name}
                className={`object-contain w-8 h-8 transition-all duration-500 group-hover:scale-110 ${isDark ? "brightness-110" : "brightness-100"}`}
              />
            </Motion.div>
            <div
              className={`absolute inset-0 blur-xl opacity-30 transition-all duration-500 group-hover:opacity-60 ${isDark ? "bg-purple-600" : "bg-blue-400"}`}
            />
          </div>

          {/* TEXT SECTION - overflow-hidden ensures text doesn't break the box */}
          <div className="flex flex-col flex-1 overflow-hidden">
            <h3
              className={`text-[11px] md:text-[13px] font-black tracking-widest uppercase truncate transition-colors duration-500 ${
                isDark
                  ? "text-slate-200 group-hover:text-white"
                  : "text-slate-800 group-hover:text-blue-700"
              }`}>
              {skill.name}
            </h3>
            <span
              className={`text-[7px] font-bold tracking-[0.1em] uppercase opacity-40 group-hover:opacity-100 transition-opacity duration-500 truncate ${isDark ? "text-purple-400" : "text-blue-500"}`}>
              {skill.category}
            </span>
          </div>

          {/* DECORATIVE ELEMENT */}
          <div className="flex flex-col items-end gap-1 shrink-0 opacity-20 group-hover:opacity-100">
            <div
              className={`w-3 h-[2px] rounded-full ${isDark ? "bg-purple-500" : "bg-blue-600"}`}
            />
            <div
              className={`w-1.5 h-[2px] rounded-full ${isDark ? "bg-blue-400" : "bg-cyan-500"}`}
            />
          </div>
        </div>

        {/* LIGHT STREAK */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 -translate-x-full group-hover:translate-x-full" />
      </div>
    </Motion.div>
  );
};

export default SkillBox;
