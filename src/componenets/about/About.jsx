import { motion as Motion, useTransform } from "framer-motion";
import { useSelector } from "react-redux";

const About = ({ scrollYProgress }) => {
  const { mode } = useSelector((state) => state.mode);
  const isDark = mode === "dark";
  const seniorY = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
  const seniorOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const portfolioScale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);

  return (
    <section
      className={`relative h-screen w-full overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-[#0a0a1a]" : "bg-[#F0F7FF]"
      }`}>
      <div className="absolute inset-0 z-40 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <Motion.div
        style={{ y: seniorY, opacity: seniorOpacity, scale: portfolioScale }}
        className="text-center">
        <Motion.div className="relative flex flex-col items-center text-center">
          <h1
            aria-hidden
            className="absolute text-5xl font-bold text-transparent uppercase md:text-[12rem] blur-3xl opacity-30 bg-linear-to-r from-[#204a88] via-white-900 to-blue-400 bg-clip-text select-none">
            Portfolio
          </h1>
          <h1 className="relative text-5xl font-bold tracking-tighter text-transparent uppercase md:text-[8rem] lg:text-[12rem] bg-linear-to-r from-[#54419e] via-[#332f46] to-[#54419e] bg-clip-text">
            Portfolio
          </h1>
        </Motion.div>
      </Motion.div>
    </section>
  );
};
export default About;
