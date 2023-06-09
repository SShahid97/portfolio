import './App.css';
import Banner from './components/Banner';
import Experts from './components/Experts';
import Footer from './components/Footer';
import Header from './components/Header';
import NewLetter from './components/NewLetter';
import Plans from './components/Plans';

function App() {
  return (
   <>
    <Header/>
    <Banner/>
    <Experts/>
    <NewLetter/>
    <Plans/>
    <Footer/>
   </>
  );
}

export default App;
