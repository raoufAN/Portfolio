import myPic from "../../assets/mypic.jpeg";
import { motion as Motion } from "framer-motion";

const AboutGridimage = () => {
  return (
    <div className="relative hidden h-[500px] w-full items-center justify-center md:flex md:w-1/2">
      {/* --- PROFESSIONAL TECHNICAL GRID --- */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* 1. The Rotating Rings Group */}
        <div className="absolute inset-0 flex items-center justify-center animate-[spin_20s_linear_infinite]">
          {/* The Outer Circuit Rings */}
          <div className="absolute h-80 w-80 rounded-full border border-white/30 animate-[pulse_4s_infinite]"></div>
          <div className="absolute h-[450px] w-[450px] rounded-full border border-white/30"></div>

          {/* Diagonal "Electrical" Cross-lines - They rotate with the rings now */}
          <div className="absolute h-[1px] w-[120%] rotate-45 bg-white/30"></div>
          <div className="absolute h-[1px] w-[120%] -rotate-45 bg-white/30"></div>

          {/* Adding a third line for more "Spider" detail */}
          <div className="absolute h-[1px] w-[120%] rotate-90 bg-white/20"></div>
        </div>

        {/* 2. The "Spider/Radial" Pattern (Fixed or Rotating) */}
        {/* I wrapped this in its own div so you can control the speed separately */}
        <div
          className="absolute w-full h-full opacity-30 animate-[spin_60s_linear_infinite]"
          style={{
            backgroundImage: `
        radial-gradient(circle at center, transparent 0%, transparent 1px, rgba(255,255,255,0.2) 1px, transparent 2px),
        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
      `,
            backgroundSize: "100% 100%, 50px 50px, 50px 50px",
            maskImage: "radial-gradient(circle at center, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)",
          }}></div>

        {/* 3. Static Center Point (The "Core") */}
        <div className="absolute h-2 w-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-0"></div>
      </div>

      {/* --- PHOTO STACK --- */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {/* Photo 1: Left */}
        <Motion.div
          initial={{ rotate: 0, opacity: 0, x: -50 }}
          whileInView={{ rotate: -8, opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute left-10 top-1/4 rounded-2xl border-[6px] border-white bg-white shadow-2xl">
          <img
            src={myPic}
            className="object-cover w-32 h-40 transition-all duration-500 rounded-lg grayscale hover:grayscale-0"
            alt="Profile"
          />
        </Motion.div>

        {/* Photo 2: Center-Top */}
        <Motion.div
          initial={{ rotate: 0, opacity: 0, y: -50 }}
          whileInView={{ rotate: 4, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-5 left-1/2 -translate-x-1/2 rounded-2xl border-[6px] border-white bg-white shadow-2xl">
          <img src={myPic} className="object-cover rounded-lg h-44 w-36" alt="Profile" />
        </Motion.div>

        {/* Photo 3: Right-Bottom */}
        <Motion.div
          initial={{ rotate: 0, opacity: 0, x: 50 }}
          whileInView={{ rotate: -3, opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-10 right-10 rounded-2xl border-[6px] border-white bg-white shadow-2xl">
          <img
            src={myPic}
            className="object-cover w-40 h-48 transition-all duration-500 rounded-lg grayscale hover:grayscale-0"
            alt="Profile"
          />
        </Motion.div>
      </div>

      {/* Decorative "Engineer" Elements: Little Tech Dots */}
      <div className="absolute w-2 h-2 rounded-full top-1/4 right-1/4 bg-white/40 animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/4 h-1.5 w-1.5 rounded-full bg-white/30"></div>
    </div>
  );
};

export default AboutGridimage;
