import { motion as Motion } from "framer-motion";

const BoxExperience = ({ exp, isDark, key }) => {
  return (
    <Motion.div
      key={key}
      initial={{
        opacity: 0,
        y: 120,
        scale: 0.92,
        filter: "blur(20px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        amount: 0.35,
      }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full md:w-5/12 group">
      <div
        className={`relative p-px rounded-[28px] overflow-hidden transition-all duration-700 ${
          isDark
            ? "bg-linear-to-br from-[#5945a1] via-purple-500/20 to-transparent shadow-[0_10px_30px_rgba(59,130,246,0.08)]"
            : "bg-linear-to-br from-blue-600/30 via-white to-blue-400/10 shadow-[0_10px_30px_rgba(6,54,102,0.08)]"
        }`}>
        <div
          className={`relative z-10 rounded-[28px] backdrop-blur-2xl transition-colors duration-700 p-5 sm:p-6 md:p-10 ${
            isDark ? "bg-[#05050a]/90" : "bg-white/80"
          }`}>
          {/* Year */}
          <div className="mb-4 md:mb-6">
            <span
              className={`text-2xl md:text-3xl italic font-black tracking-tight text-transparent bg-linear-to-r bg-clip-text ${
                isDark ? "from-[#7054e9] to-purple-500" : "from-[#063666] to-blue-500"
              }`}>
              {exp.year}
            </span>

            <div
              className={`w-10 md:w-12 h-1 mt-1 rounded-full bg-linear-to-r ${
                isDark ? "from-purple-600 to-transparent" : "from-[#063666] to-transparent"
              }`}
            />
          </div>

          {/* Title */}
          <h3
            className={`text-xl sm:text-xl md:text-2xl font-black tracking-tight leading-tight uppercase mb-2 ${
              isDark ? "text-white" : "text-[#011d38]"
            }`}>
            {exp.title}
          </h3>

          {/* Company */}
          <p
            className={`text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] mb-2 md:mb-4 bg-linear-to-r bg-clip-text text-transparent ${
              isDark ? "from-purple-300 to-purple-600" : "from-blue-600 to-[#063666]"
            }`}>
            {exp.company}
          </p>

          {/* Description */}
          <p
            className={`text-sm md:text-base leading-relaxed font-medium ${
              isDark ? "text-gray-400" : "text-slate-700/80"
            }`}>
            {exp.desc}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4 md:mt-6">
            <span
              className={`px-3 py-1.5 md:px-5 md:py-2 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] border transition-all ${
                isDark
                  ? "bg-linear-to-r from-blue-500/10 to-purple-500/10 text-purple-300 border-blue-500/20"
                  : "bg-[#063666] text-white border-transparent"
              }`}>
              {exp.tag}
            </span>

            <div
              className={`w-6 h-6 md:w-10 md:h-10 rounded-full blur-xl md:blur-2xl animate-pulse ${
                isDark ? "bg-purple-500/30" : "bg-blue-400/40"
              }`}
            />
          </div>
        </div>

        {!isDark && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-linear-to-br from-white/30 to-transparent" />
        )}
      </div>
    </Motion.div>
  );
};

export default BoxExperience;
