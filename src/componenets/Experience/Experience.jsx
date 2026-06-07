import { AnimatePresence, motion as Motion } from "framer-motion";
import Background from "../background/Background";
import { useSelector } from "react-redux";
import BoxExperience from "./BoxExperience";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { mode } = useSelector((state) => state.mode);
  const isDark = mode === "dark";
  const { t } = useTranslation();
  const experiences = t("experienceContent.experiences", { returnObjects: true });
  return (
    <section
      className={`relative min-h-screen  w-full py-20 snap-start overflow-hidden font-['Roboto'] transition-colors duration-700 ${
        isDark ? "bg-[#05050a]" : "bg-[#F0F7FF]"
      }`}>
      <div className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Background isDark={isDark} />

      <div className="relative z-50 max-w-6xl px-6 mx-auto">
        <Motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 200, scale: 0.95, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}>
          <h2
            className={`text-2xl sm:text-3xl italic font-black tracking-tighter uppercase  lg:text-5xl transition-colors duration-700 
           text-white`}>
            {t("experienceContent.header.simpleHeader")}{" "}
            <span className={`${isDark ? "text-[#5945a1]" : "text-[#063666]"} text-glow`}>
              {t("experienceContent.header.ColorfuleHeader")}
            </span>
          </h2>
          <div
            className={`w-30 h-1 mx-auto mt-4 ${isDark ? "text-[#5945a1]" : "text-[#063666]"} rounded-full`}
          />
        </Motion.div>

        <div className="relative">
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-0.5 h-full hidden md:block transition-all duration-700 ${
              isDark
                ? "bg-linear-to-b from-[#5945a1] via-purple-500/50 to-transparent"
                : "bg-linear-to-b from-blue-400/30 via-blue-600/20 to-transparent"
            }`}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${isEven ? "md:flex-row-reverse" : ""}`}>
                  <div className="hidden w-5/12 md:block" />

                  <div className="relative z-20 items-center justify-center hidden w-2/12 md:flex">
                    <div
                      className={`w-4 h-4 rounded-full border-4 transition-all duration-700 ${
                        isDark
                          ? "bg-[#beaff3] border-[#a200ff] ring-4 ring-purple-500/20"
                          : "bg-blue-600 border-[#F0F7FF] ring-4 ring-blue-600/10"
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    <BoxExperience exp={exp} isDark={isDark} isEven={isEven} key={i} />
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
