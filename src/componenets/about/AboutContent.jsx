import { motion as Motion } from "framer-motion";
import CvButton from "../CvButton/CvButton";
import AboutGridimage from "./AboutGridimage";

const AboutContent = ({ isDark }) => {
  return (
    <div className="mt-[10vh] relative z-50 flex flex-col text-center overflow-hidden">
      <Motion.h2
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
        initial={{ opacity: 0, x: -200 }}
        className={`font-['Bebas_Neue'] text-2xl md:text-6xl leading-[0.85] tracking-tight uppercase  p-0 m-0 ${
          isDark ? "text-white" : "text-slate-900"
        }`}>
        Hello Again, I'm{" "}
        <span
          className={`transition-colors duration-500 ${
            isDark
              ? "text-transparent bg-clip-text bg-linear-to-r from-white via-white/40 to-white/20"
              : "text-transparent bg-clip-text bg-linear-to-r from-white via-white/40 to-white/20"
          }`}>
          Raouf Annani
        </span>
      </Motion.h2>
      <div className="container relative flex flex-row items-center justify-center w-full gap-12 px-5 py-5 mx-auto md:py-20 ">
        <AboutGridimage />

        <div
          className={`space-y-1 md:space-y-6 font-mono  lg:w-1/2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
          <p className="text-sm leading-relaxed md:text-lg">
            I’m **Raouf Annani**, a 29-year-old **Electrical Engineer** and **Front-end Developer**
            from the historic city of Constantine, Algeria. My background in engineering provides me
            with a unique, analytical approach to building digital interfaces—the perfect
            intersection where **precision meets creativity**.
          </p>

          <p className="text-sm leading-relaxed md:text-lg">
            Beyond the code, I am an **Amadeus Agent**, an experience that has sharpened my focus on
            efficiency and user experience. I thrive on the logic of complex systems, whether I'm
            designing electrical circuits or crafting seamless web applications.
          </p>

          <p className="text-sm leading-relaxed md:text-lg">
            I have an insatiable hunger for learning and problem-solving. Always ready for the next
            challenge—one coffee at a time 😇
          </p>

          <CvButton isdark={isDark} />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
