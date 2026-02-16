import { useScroll } from "motion/react";
import About from "./componenets/about/About";
import Curtains from "./componenets/curtains/Curtains";
import Hero from "./componenets/hero/Hero";
import { useRef } from "react";

function App() {
  const containerRef = useRef(null);
  // 1. SCROLL ANIMATION SETUP
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  return (
    <section className="relative w-full overflow-hidden h-[200vh]">
      <Curtains />
      <div ref={containerRef} className="relative">
        <section className="relative h-screen w-full overflow-hidden bg-[#]">
          <Hero scrollYProgress={scrollYProgress} />
        </section>

        <About scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}

export default App;
