import { motion as Motion } from "framer-motion";
import myPic from "../../assets/mypic.jpeg";
// Assuming you have other assets or will use myPic for one of these
// import locationPic from "../../assets/location.jpeg";

const AbouContent = ({ isDark }) => {
  return (
    <div className="mt-[5vh] relative z-50 flex flex-col px-6 text-center">
      {/* Header Section */}
      <Motion.h2
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
        initial={{ opacity: 0, x: -200 }}
        className={`mb-12 font-['Bebas_Neue'] text-5xl md:text-8xl leading-[0.85] tracking-tight uppercase ${
          isDark ? "text-white" : "text-slate-900"
        }`}>
        Hello Again, I'm{" "}
        <span
          className={`transition-colors duration-500 ${
            isDark
              ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-white/20"
              : "text-slate-400"
          }`}>
          Raouf Annani
        </span>
      </Motion.h2>
      {/* Hero Layout Section */}
      <div className="relative flex min-h-[500px] w-full flex-col items-center justify-center gap-12 rounded-3xl  px-10 py-20 text-left md:flex-row">
        {/* Left Side: Visuals with Grid */}
        <div className="relative flex h-[400px] w-full items-center justify-center md:w-1/2">
          {/* The Grid Background */}
          <div
            className="absolute h-4/5 w-full md:w-4/5 rounded-3xl border border-white/30 
            [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] 
            [background-size:40px_40px]"></div>

          {/* The Photo Stack with Motion */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            {/* Photo 1 (Left) */}
            <Motion.div
              initial={{ rotate: 0, opacity: 0, y: 20 }}
              whileInView={{ rotate: -6, opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute left-0 md:left-4 top-1/4 transform rounded-2xl border-[6px] border-white bg-white shadow-xl">
              <img src={myPic} className="object-cover w-32 h-40 rounded-lg" alt="Raouf Profile" />
            </Motion.div>

            {/* Photo 2 (Top Center/Right) */}
            <Motion.div
              initial={{ rotate: 0, opacity: 0, y: 20 }}
              whileInView={{ rotate: 3, opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-10 transform rounded-2xl border-[6px] border-white bg-white shadow-xl">
              <div className="flex items-center justify-center text-xs rounded-lg h-44 w-36 bg-slate-200 text-slate-400">
                {/* Replace with an actual image import */}
                [Secondary Image]
              </div>
            </Motion.div>

            {/* Photo 3 (Bottom Right) */}
            <Motion.div
              initial={{ rotate: 0, opacity: 0, y: 20 }}
              whileInView={{ rotate: -3, opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-10 right-0 md:right-10 transform rounded-2xl border-[6px] border-white bg-white shadow-xl">
              <div className="flex items-center justify-center w-40 h-48 text-xs rounded-lg bg-slate-200 text-slate-400">
                [Third Image]
              </div>
            </Motion.div>
          </div>
        </div>

        {/* Right Side: Copy */}
        <div className="max-w-xl space-y-6 font-mono text-[#2d3a4b] md:w-1/2">
          <p className="text-lg leading-relaxed">
            I’m Raouf, a [Your Role] who works hands-on with innovative digital solutions. Driven by
            clarity, simplicity, and a love for action, I build experiences that bridge the gap
            between complex systems and human-centric design.
          </p>
          <p className="text-lg leading-relaxed">
            Whether I'm coding a new interface or exploring fresh perspectives, I focus on
            communicating clearly and effectively. I'm always looking for the next challenge—one
            coffee at a time ;
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbouContent;
