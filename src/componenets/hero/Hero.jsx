import { useSelector } from "react-redux";
import HeroContent from "./HeroContent";
import Header from "../header/Header";
import HeroBackground from "./HeroBackground";

const Hero = ({ scrollYProgress }) => {
  const { mode } = useSelector((state) => state.mode);
  const isDark = mode === "dark";

  return (
    <section
      className={`relative h-screen w-full overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-[#0a0a1a]" : "bg-[#F0F7FF]"
      }`}>
      <Header />

      <div className="absolute inset-0 z-40 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <HeroBackground isDark={isDark} />

      <HeroContent scrollYProgress={scrollYProgress} />
    </section>
  );
};

export default Hero;
