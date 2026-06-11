import gsap, { ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Statement from "./sections/Statement";
import Products from "./sections/Products";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main
      id="main-container"
      className="overflow-x-hidden h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
    >
      <Navbar />
      <Hero />
      <Statement />
      <Products />
    </main>
  );
};

export default App;
