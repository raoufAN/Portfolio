import { useSelector } from "react-redux";
import AboutBackground from "./AboutBackground";
import AboutContent from "./AboutContent";

const About = () => {
  const { mode } = useSelector((state) => state.mode);
  const isDark = mode === "dark";

  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden transition-colors duration-700  py-20 ${
        isDark ? "bg-[#05050a]" : "bg-[#F0F7FF]"
      }`}>
      <div className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <AboutBackground isDark={isDark} />
      <AboutContent isDark={isDark} />
    </section>
  );
};

export default About;
