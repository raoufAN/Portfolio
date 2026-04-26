import { motion as Motion } from "framer-motion";

const BoxesDesktop = ({ skillsData, activeSkill, setActiveSkill, isDark }) => {
  return (
    <>
      {[0, 1, 2].map((ring) => {
        const radiuses = [200, 300, 400];

        const ringSkills = skillsData.filter((_, idx) => idx % 3 === ring);
        const total = ringSkills.length;

        return ringSkills.map((skill, index) => {
          const angleStep = (2 * Math.PI) / total;
          const angle = index * angleStep + ring * 0.5;

          const x = Math.cos(angle) * radiuses[ring];
          const y = Math.sin(angle) * radiuses[ring];

          const isActive = activeSkill.name === skill.name;

          return (
            <Motion.div
              key={skill.name}
              className="absolute rounded-full "
              initial={{ x: 0, y: 0, scale: 0 }}
              whileInView={{ x, y, scale: isActive ? 1.25 : 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}>
              <Motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3 + ring,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                onMouseEnter={() => setActiveSkill(skill)}
                className={`flex items-center justify-center rounded-full  shadow-[0_0_25px_rgba(168,85,247,0.7)]
                  w-20 h-20 cursor-pointer transition-all duration-300
                  ${isActive ? `ring-2 ${isDark ? "ring-purple-500" : "ring-[#063666]"}  z-50` : "z-10"}
                  ${isDark ? "bg-[#08080c]/95" : "bg-white/90"} border`}>
                <img src={skill.icon} alt={skill.name} className="object-contain w-10 h-10" />
              </Motion.div>
            </Motion.div>
          );
        });
      })}
    </>
  );
};

export default BoxesDesktop;
