import "./App.css";
import { Homepage } from "./components/Homepage/Homepage";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { ParticlesBackground } from "./components/Homepage/ParticlesBackground";

function App() {
  return (
    <div className="App">
      <ParticlesBackground type={"main"}></ParticlesBackground>
      <Homepage></Homepage>
      <Navbar></Navbar>
      <About></About>
      {/* <Experience></Experience> */}
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
