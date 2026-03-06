import { motion as Motion } from "framer-motion";
import myPic from "../../assets/mypic.jpeg";
import CvButton from "../CvButton/CvButton";

const AboutContent = ({ isDark }) => {
  return (
    <div className="mt-[5vh] relative z-50 flex flex-col text-center overflow-hidden">
      {/* Header Section */}
      <Motion.h2
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
        initial={{ opacity: 0, x: -200 }}
        className={`font-['Bebas_Neue'] text-2xl md:text-6xl leading-[0.85] tracking-tight uppercase ${
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
      <div className="container mx-auto relative flex min-h-[500px] w-full flex-col items-center justify-center gap-12 rounded-3xl  px-10 py-20 text-left md:flex-row">
        {/* Left Side: Visuals with Grid */}
        <div className="hidden md:flex relative  h-[400px] w-full items-center justify-center md:w-1/2">
          {/* The Grid Background */}
          <div
            className="absolute h-3/5 w-full md:w-4/5 rounded-3xl border border-white/30 
                  [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] 
                  [background-size:40px_40px]"></div>

          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <Motion.div
              initial={{ rotate: 0, opacity: 0, y: 20 }}
              whileInView={{ rotate: 7, opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute left-0 md:left-25 top-1/4 transform rounded-2xl border-[6px] border-white bg-white shadow-xl">
              <img src={myPic} className="object-cover w-32 h-40 rounded-lg" alt="Raouf Profile" />
            </Motion.div>

            <Motion.div
              initial={{ rotate: 0, opacity: 0, y: 20 }}
              whileInView={{ rotate: -10, opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-10 left-40 md:left-65 transform rounded-2xl border-[6px] border-white bg-white shadow-xl">
              <img src={myPic} className="object-cover w-32 h-40 rounded-lg" alt="Raouf Profile" />
            </Motion.div>

            <Motion.div
              initial={{ rotate: 0, opacity: 0, y: 20 }}
              whileInView={{ rotate: 11, opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-20 right-20 md:right-30 transform rounded-2xl border-[6px] border-white bg-white shadow-xl">
              <img src={myPic} className="object-cover w-32 h-40 rounded-lg" alt="Raouf Profile" />
            </Motion.div>
          </div>
        </div>

        {/* Right Side: Copy */}
        <div
          className={`space-y-6 font-mono  md:w-1/2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
          <p className="text-lg leading-relaxed">
            I’m Raouf Annani, a 29-year-old Electrical Engineer and Front-end Developer based in the
            historic city of Constantine, Algeria. My background in engineering gives me a unique,
            analytical approach to building digital interfaces—where precision meets creativity.
          </p>
          <p className="text-lg leading-relaxed">
            Beyond the code, I’m an Amadeus Agent, which has sharpened my focus on efficiency and
            user experience. I thrive on the logic of complex systems, whether I’m designing a
            circuit, optimizing a booking flow, or crafting a seamless React component.
          </p>
          <p className="text-lg leading-relaxed">
            I have an insatiable hunger for learning. When I'm not debugging or exploring new tech
            stacks, I'm usually diving into the "how" and "why" of the world around me. Always ready
            for the next challenge—one coffee (and maybe a bit of baklawa) at a time ;
          </p>
          <CvButton />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
