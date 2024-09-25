import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

import { BrowserRouter as Router } from "react-router-dom";
import { about, appTitle, footerBio, introduction, jobTitle } from "./data/static";

function App() {


  return (

    <>
      <Router>
        <Header appTitle={appTitle}  />
        <Banner  introduction={introduction} jobTitle={jobTitle}/>
        <About about = {about}  />
        <Projects />
        <Certifications/>
        <Footer appTitle={appTitle} footerBio={footerBio} />
      </Router>
    </>
  );
}

export default App;
