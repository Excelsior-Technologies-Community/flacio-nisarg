import About from "./components/About";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import PremiumCare from "./components/PremiumCare";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Process />
      <Pricing />
      <Testimonials />
      <PremiumCare />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;