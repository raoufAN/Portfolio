import { motion as Motion } from "framer-motion";

import { useSelector } from "react-redux";
import HeroContent from "./HeroContent";
import Header from "../header/Header";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  const { mode } = useSelector((state) => state.mode);
  const isDark = mode === "dark";

  return (
    <section
      className={`relative h-screen w-full overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-[#0a0a1a]" : "bg-[#F0F7FF]"
      }`}>
      {/* 1. HEADER & NAVIGATION */}
      <Header />

      {/* 2. BACKGROUND SVG (Azure Blue & Purple) */}
      <div className="absolute inset-0 z-40 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <HeroBackground isDark={isDark} />

      {/* 3. HERO CONTENT */}
      <HeroContent />
    </section>
  );
};

export default Hero;
