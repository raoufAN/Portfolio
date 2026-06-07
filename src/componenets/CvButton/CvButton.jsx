import { motion as Motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CvButton = ({ isdark }) => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center pt-6 md:pt-8">
      <Motion.a
        href="/cv.pdf"
        target="_blank"
        whileHover={{ scale: 1.06, y: -4 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
        className="group relative inline-flex items-center gap-2 md:gap-3 overflow-hidden rounded-lg md:rounded-xl 
    bg-[#111827] px-4 py-2.5 md:px-8 md:py-4 
    text-sm md:text-base font-mono text-white shadow-xl">
        {/* gradient glow */}
        <span
          className={`absolute inset-0 rounded-xl bg-linear-to-r ${
            isdark
              ? "from-[#60a5fa] via-[#a78bfa] to-[#f472b6]"
              : "from-[#90f3b1] via-[#10e9f8] to-[#729ff4]"
          } opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-70`}
        />

        {/* shine */}
        <span className="absolute -left-24 top-0 h-full w-24 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]" />

        {/* content */}
        <span className="relative flex items-center gap-2 md:gap-3">
          <span className="text-base md:text-lg">🚀</span>

          <span className="tracking-wide whitespace-nowrap">{t("aboutContent.CvButton")}</span>

          <Motion.svg
            className="w-4 h-4 md:w-5 md:h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            initial={{ x: 0 }}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300 }}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </Motion.svg>
        </span>
      </Motion.a>
    </div>
  );
};

export default CvButton;
