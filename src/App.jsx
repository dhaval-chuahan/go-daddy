import './index.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Business from './components/Business';
import Marketing from './components/Marketing';
import Slider from './components/Slider';
import Poster from './components/Poster';
import Trust from './components/Trust';
import Work from './components/Work';
import Footer from './components/Footer';


function App() {
  return (
   <>
        <Navbar/>
        <Header/>
        <Business/>
        <Marketing/>
        <Slider/>
        <Poster/>
        <Trust/>
        <Work/>
        <Footer/>
   </>
  );
}

export default App;
