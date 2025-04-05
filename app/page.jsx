import About from "./about/page";
import Projects from "./projects/page";
import IoTSection from "./iot/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
      <About />
      <Projects />
      <IoTSection />
      <Contact />
    </div>

  );
}
