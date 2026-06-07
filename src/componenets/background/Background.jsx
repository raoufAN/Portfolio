import { motion as Motion } from "framer-motion";

const Background = ({ isDark }) => {
  return (
    <div className="absolute inset-0 z-30 overflow-hidden pointer-events-none">
      {/* OUTER LIGHT */}
      <Motion.div
        animate={{
          background: isDark ? "#af89ff" : "#0c5eb0",
        }}
        transition={{ duration: 0.5 }}
        className={`absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[280vw]
          h-[400vh]
          rounded-full
          blur-[180px]
          ${isDark ? "opacity-[0.3]" : "opacity-[0.15]"}`}
      />

      {/* MID BLUE */}
      <Motion.div
        animate={{
          background: isDark ? "#7054e9" : "#007FFF",
        }}
        transition={{ duration: 0.5 }}
        className={`
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[270vw]
          h-[380vh]
          rounded-full
          blur-[140px]
          ${isDark ? "opacity-[0.5]" : "opacity-[0.1]"}
          `}
      />

      {/* DARK CENTER */}
      <Motion.div
        animate={{
          background: isDark ? "#000000" : "#003366",
        }}
        transition={{ duration: 0.5 }}
        className={`         
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[250vw]
          h-[350vh]
          rounded-full
          blur-[100px]
            ${isDark ? "opacity-[0.8]" : "opacity-[0.08]"}
          `}
      />
    </div>
  );
};

export default Background;
