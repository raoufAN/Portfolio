import About from "./componenets/about/About";
import Curtains from "./componenets/curtains/Curtains";
import Hero from "./componenets/hero/Hero";

function App() {
  return (
    <div className="relative font-['Roboto'] w-full snap-y snap-mandatory scroll-smooth">
      <Curtains />

      <section className="relative w-full h-screen ">
        <Hero />
      </section>

      <About />

      <section className="h-screen services"></section>
    </div>
  );
}

export default App;
