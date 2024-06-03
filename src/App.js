
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Project } from "./components/Project";
import { Publication } from "./components/Publication";
import { Award } from "./components/Award";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Publication />
      <Award />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;