import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Plans from './components/Projects';
// import NewLetter from './components/NewLetter';
// import Experts from './components/Experts';
import {BrowserRouter as Router} from "react-router-dom";
function App() {
  // constants
  const appTitle = "MalikShahid";
  const footerBio = "I am a Software Developer, currently working as a front-end developer at GraphicWeave, Srinagar from the last 1 year.";

  return (
   <>
   <Router>
      <Header appTitle={appTitle}/>
      <Banner/>
      {/* <Experts/>
      <NewLetter/> */}
      <Plans/>
      <Footer appTitle={appTitle} footerBio={footerBio}/>
    </Router>
   </>
  );
}

export default App;
