import P_ONE from "../../assets/raouf1.jpeg";
import P_TWO from "../../assets/raouf2.jpeg";
import P_THREE from "../../assets/raouf3.jpeg";

import { motion as Motion } from "framer-motion";
import { useSelector } from "react-redux";

const AboutGridimage = () => {
  const { mode } = useSelector((state) => state.mode);

  const isDark = mode === "dark";

  return (
    <div className="relative items-center justify-center hidden w-full h-125 lg:flex md:w-1/2">
      {/* --- PROFESSIONAL TECHNICAL GRID --- */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* ROTATING RINGS */}
        <div className="absolute inset-0 flex items-center justify-center animate-[spin_20s_linear_infinite]">
          {/* OUTER RING */}
          <div
            className={`
              absolute
              h-80
              w-80
              rounded-full
              border
              animate-[pulse_4s_infinite]
              ${isDark ? "border-white/30" : "border-black/20"}
            `}
          />

          {/* BIG RING */}
          <div
            className={`
              absolute
              h-112.5
              w-112.5
              rounded-full
              border
              ${isDark ? "border-white/30" : "border-black/20"}
            `}
          />

          {/* CROSS LINES */}
          <div
            className={`
              absolute
              h-px
              w-[120%]
              rotate-45
              ${isDark ? "bg-white/30" : "bg-black/20"}
            `}
          />

          <div
            className={`
              absolute
              h-px
              w-[120%]
              -rotate-45
              ${isDark ? "bg-white/30" : "bg-black/20"}
            `}
          />

          <div
            className={`
              absolute
              h-px
              w-[120%]
              rotate-90
              ${isDark ? "bg-white/20" : "bg-black/10"}
            `}
          />
        </div>

        {/* RADIAL GRID */}
        <div
          className="absolute w-full h-full opacity-30 animate-[spin_60s_linear_infinite]"
          style={{
            backgroundImage: isDark
              ? `
                radial-gradient(circle at center, transparent 0%, transparent 1px, rgba(255,255,255,0.2) 1px, transparent 2px),
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `
              : `
                radial-gradient(circle at center, transparent 0%, transparent 1px, rgba(0,0,0,0.15) 1px, transparent 2px),
                linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
              `,
            backgroundSize: "100% 100%, 50px 50px, 50px 50px",
            maskImage: "radial-gradient(circle at center, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)",
          }}
        />

        {/* CENTER CORE */}
        <div
          className={`
            absolute
            z-0
            h-2
            w-2
            rounded-full
            ${
              isDark
                ? "bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                : "bg-black shadow-[0_0_15px_rgba(0,0,0,0.4)]"
            }
          `}
        />
      </div>

      {/* --- PHOTO STACK --- */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {/* PHOTO 1 */}
        <Motion.div
          initial={{ rotate: 0, opacity: 0, x: -50 }}
          whileInView={{ rotate: -8, opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`
            absolute
            left-10
            top-1/2
            rounded-2xl
            border-[6px]
            shadow-2xl
            ${isDark ? "border-white bg-white" : "border-black bg-black"}
          `}>
          <img
            src={P_ONE}
            className="object-cover w-40 h-48 transition-all duration-500 rounded-lg"
            alt="Profile"
          />
        </Motion.div>

        {/* PHOTO 2 */}
        <Motion.div
          initial={{ rotate: 0, opacity: 0, y: -50 }}
          whileInView={{ rotate: 4, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`
            absolute
            top-5
            left-1/2
            -translate-x-1/2
            rounded-2xl
            border-[6px]
            shadow-2xl
            ${isDark ? "border-white bg-white" : "border-black bg-black"}
          `}>
          <img src={P_TWO} className="object-cover rounded-lg h-44 w-36" alt="Profile" />
        </Motion.div>

        {/* PHOTO 3 */}
        <Motion.div
          initial={{ rotate: 0, opacity: 0, x: 50 }}
          whileInView={{ rotate: -3, opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`
            absolute
            bottom-10
            right-10
            rounded-2xl
            border-[6px]
            shadow-2xl
            ${isDark ? "border-white bg-white" : "border-black bg-black"}
          `}>
          <img
            src={P_THREE}
            className="object-cover w-40 h-48 transition-all duration-500 rounded-lg"
            alt="Profile"
          />
        </Motion.div>
      </div>

      {/* DECORATIVE DOTS */}
      <div
        className={`
          absolute
          top-1/4
          right-1/4
          h-2
          w-2
          rounded-full
          animate-ping
          ${isDark ? "bg-white/40" : "bg-black/30"}
        `}
      />

      <div
        className={`
          absolute
          bottom-1/3
          left-1/4
          h-1.5
          w-1.5
          rounded-full
          ${isDark ? "bg-white/30" : "bg-black/20"}
        `}
      />
    </div>
  );
};

export default AboutGridimage;
