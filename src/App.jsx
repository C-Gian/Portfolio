import "./App.css";
import { Homepage } from "./components/Homepage/Homepage";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { ParticlesBackground } from "./components/Homepage/ParticlesBackground";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <ParticlesBackground type={"main"}></ParticlesBackground>
      <Homepage></Homepage>
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
