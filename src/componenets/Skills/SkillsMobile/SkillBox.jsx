import { motion as Motion } from "framer-motion";

const SkillBox = ({ skill, index, isDark }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -3 }}
      transition={{
        duration: 0.8,
        delay: index * 0.03,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full group">
      <div
        className={`relative p-px rounded-3xl overflow-hidden transition-all duration-700
          ${
            isDark
              ? "bg-linear-to-br from-[#5945a1] via-purple-500/20 to-transparent"
              : "bg-linear-to-br from-blue-600/30 via-white to-blue-400/10"
          }`}>
        <div
          className={` relative z-10 flex items-center gap-4 px-5 py-4 rounded-3xl backdrop-blur-2xl

        ${isDark ? "bg-[#05050a]/90" : "bg-white/80"}`}>
          <img src={skill.icon} alt={skill.name} className="object-contain w-10 h-10" />

          <div className="flex-1 min-w-0">
            <h3
              className={` text-sm font-black uppercase tracking-wide truncate

            ${isDark ? "text-white" : "text-[#011d38]"}`}>
              {skill.name}
            </h3>

            <p
              className={` mt-1 text-[10px] font-black uppercase tracking-[0.15em]
               ${isDark ? "text-purple-300" : "text-blue-600"}`}>
              {skill.category}
            </p>
          </div>

          <div className={`w-3 h-3 rounded-full  ${isDark ? "bg-purple-500" : "bg-blue-500"}`} />
        </div>
      </div>
    </Motion.div>
  );
};

export default SkillBox;
