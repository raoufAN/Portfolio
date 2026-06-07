import { useSelector } from "react-redux";
import About from "./componenets/about/About";
import Curtains from "./componenets/curtains/Curtains";
import Hero from "./componenets/hero/Hero";
import Experience from "./componenets/Experience/Experience";
import Skills from "./componenets/Skills/Skills";

function App() {
  const loading = useSelector((state) => state.loader.loading);
  return (
    <div className={`relative font-['Roboto'] w-full   ${loading ? "overflow-hidden" : ""}`}>
      <Curtains />
      <Hero />

      <About />
      <Experience />
      <Skills />

      <section className="h-[200vh] services snap-start"></section>
    </div>
  );
}

export default App;
