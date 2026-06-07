import { motion as Motion } from "framer-motion";
import CvButton from "../CvButton/CvButton";
import AboutGridimage from "./AboutGridimage";
import { useTranslation } from "react-i18next";

const AboutContent = ({ isDark }) => {
  const { t } = useTranslation();
  return (
    <div className="relative z-50 flex flex-col overflow-hidden text-center">
      <div className="container relative z-50 flex flex-col items-center justify-center w-full min-h-screen gap-12 px-5 py-10 mx-auto md:flex-row md:py-20">
        <AboutGridimage />

        <div
          className={`relative flex flex-col justify-center space-y-3 md:space-y-7 lg:w-1/2 text-left ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}>
          {/* small badge */}
          <div className="flex items-center gap-3 md:flex">
            <div className={`h-px w-10 ${isDark ? "bg-white/30" : "bg-slate-400"}`} />

            <span
              className={`text-[10px] md:text-xs uppercase tracking-[0.35em] ${
                isDark ? "text-white/40" : "text-slate-500"
              }`}>
              {t("aboutContent.sign")}
            </span>
          </div>

          {/* title */}
          <Motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-row justify-start space-x-2 md:justify-start space-y-2md:space-x-0">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl  leading-[0.9] tracking-tight font-bold uppercase`}>
              <span
                className={`text-transparent bg-clip-text bg-linear-to-r ${
                  isDark
                    ? "from-white via-white/30 to-white/10"
                    : "from-[#063666] via-[#3b82f6] to-[#93c5fd]"
                }`}>
                {t("aboutContent.title")}
              </span>
            </h2>
          </Motion.div>

          {/* description */}
          <div className="space-y-3 md:space-y-5">
            <p className="text-sm leading-7 md:text-base md:leading-8 lg:text-lg">
              {t("aboutContent.description.text1")}
            </p>

            <p className="text-sm leading-7 md:text-base md:leading-8 lg:text-lg">
              {t("aboutContent.description.text2")}
            </p>

            <p className="text-sm leading-7 md:text-base md:leading-8 lg:text-lg">
              {t("aboutContent.description.text3")}
            </p>
          </div>

          <CvButton isdark={isDark} />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
