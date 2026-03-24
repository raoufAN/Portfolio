import { motion as Motion } from "framer-motion";

const BoxExperience = ({ exp, isDark, isEven }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, x: isEven ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full md:w-5/12 group">
      <div
        className={`relative p-0.5 rounded-4xl overflow-hidden transition-all duration-700 ${
          isDark
            ? "bg-linear-to-br from-[#5945a1] via-purple-500/20 to-transparent shadow-[0_20px_50px_rgba(59,130,246,0.1)]"
            : "bg-linear-to-br from-blue-600/40 via-white to-blue-400/20 shadow-[0_25px_50px_-12px_rgba(6,54,102,0.15)]"
        }`}>
        <div
          className={`relative z-10 p-8 md:p-10 rounded-4xl backdrop-blur-3xl transition-colors duration-700 ${
            isDark ? "bg-[#05050a]/90" : "bg-white/80"
          }`}>
          {/* Section Année */}
          <div className="mb-6">
            <span
              className={`text-4xl italic font-black tracking-tighter text-transparent bg-linear-to-r bg-clip-text ${
                isDark ? "from-[#7054e9] to-purple-500" : "from-[#063666] to-blue-500"
              }`}>
              {exp.year}
            </span>
            <div
              className={`w-12 h-1.5 mt-1 rounded-full bg-linear-to-r ${
                isDark ? "from-purple-600 to-transparent" : "from-[#063666] to-transparent"
              }`}
            />
          </div>

          {/* Titre */}
          <h3
            className={`text-2xl md:text-3xl font-black tracking-tight mb-2 uppercase ${
              isDark ? "text-white" : "text-[#011d38]"
            }`}>
            {exp.title}
          </h3>

          {/* Entreprise */}
          <p
            className={`text-sm font-black uppercase tracking-[0.25em] mb-6 bg-linear-to-r bg-clip-text text-transparent ${
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

          {/* Footer de la box */}
          <div className="flex items-center justify-between mt-10">
            <span
              className={`px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] border transition-all ${
                isDark
                  ? "bg-linear-to-r from-blue-500/10 to-purple-500/10 text-purple-300 border-blue-500/20"
                  : "bg-[#063666] text-white border-transparent shadow-lg shadow-blue-900/20"
              }`}>
              {exp.tag}
            </span>

            {/* Animation décorative */}
            <div
              className={`w-10 h-10 rounded-full blur-2xl animate-pulse ${
                isDark ? "bg-purple-500/30" : "bg-blue-400/40"
              }`}
            />
          </div>
        </div>

        {/* Effet de reflet en mode clair */}
        {!isDark && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-linear-to-br from-white/40 to-transparent" />
        )}
      </div>
    </Motion.div>
  );
};

export default BoxExperience;
