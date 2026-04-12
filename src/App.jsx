import { useSelector } from "react-redux";
import About from "./componenets/about/About";
import Curtains from "./componenets/curtains/Curtains";
import Hero from "./componenets/hero/Hero";
import Experience from "./componenets/Experience/Experience";
import Skills from "./componenets/Skills/Skills";

function App() {
  const loading = useSelector((state) => state.loader.loading);
  return (
    <div
      className={`relative font-['Roboto'] w-full snap-y snap-mandatory scroll-smooth  ${loading ? "overflow-hidden" : ""}`}>
      <Curtains />

      <section className="relative w-full h-screen ">
        <Hero />
      </section>

      <About />
      <Experience />
      <Skills />

      <section className="h-screen services"></section>
    </div>
  );
}

export default App;
