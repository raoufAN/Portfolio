import { useSelector } from "react-redux";
import { motion as Motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { skillsData } from "../../data/SkillsData";
import SkillsDesktop from "./SkillsDesktop/SkillsDesktop";
import SkillsSlider from "./SkillsMobile/SkillsSlider";

import Background from "../background/Background";

const Skills = () => {
  const { mode } = useSelector((state) => state.mode);
  const isDark = mode === "dark";
  const { t } = useTranslation();

  const translatedSkills = t("skillsContent.skills", {
    returnObjects: true,
  });

  const skills = skillsData.map((skill) => {
    const translation = translatedSkills.find((item) => Object.keys(item)[0] === skill.name);

    return {
      ...skill,
      description: translation ? Object.values(translation)[0] : "",
    };
  });

  console.log(skills);

  return (
    <section
      className={`relative w-full flex items-center justify-center snap-start h-screen overflow-hidden ${
        isDark ? "bg-[#05050a]" : "bg-[#F0F7FF]"
      }`}>
      <Background isDark={isDark} />

      <Motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute z-50 w-full text-center top-8">
        <h2
          className={`text-2xl sm:text-3xl italic font-black tracking-tighter uppercase  lg:text-5xl transition-colors duration-700 
           text-white`}>
          Portfolio{" "}
          <span className={`${isDark ? "text-[#5945a1]" : "text-[#063666]"} text-glow`}>
            Skills
          </span>
        </h2>
        <div
          className={`w-30 h-1 mx-auto mt-4 ${isDark ? "text-[#5945a1]" : "text-[#063666]"} rounded-full`}
        />
      </Motion.div>

      <div className="items-center justify-center hidden w-full h-full 2xl:flex">
        <SkillsDesktop skillsData={skills} isDark={isDark} />
      </div>
      <div className="relative z-50 flex items-center justify-center w-full overflow-hidden 2xl:hidden">
        <SkillsSlider skillsData={skills} isDark={isDark} />
      </div>
    </section>
  );
};

export default Skills;
