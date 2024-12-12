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
  const images = [
    'https://img1.wsimg.com/cdnassets/transform/a4beaca9-862a-416c-a247-abc591413f9d/koretailfurnituretemplate_mobile',
    'https://img1.wsimg.com/cdnassets/transform/2024302c-7976-4f9a-b878-578f3d2fc2dc/kobookstoretemplate_desktop',
    'https://img1.wsimg.com/cdnassets/transform/bc4b4bee-f709-4f8b-b606-a92a74286ae2/Raheim-Thompson-sit',
    'https://img1.wsimg.com/cdnassets/transform/5be08aac-da26-4a95-816b-e5b5abe1c46b/retailsingleproduct_mobile',
    'https://img1.wsimg.com/cdnassets/transform/c5ec380c-f411-41f0-8d20-eb469ad39b05/koartgallerytemplate1_desktop',
    'https://img1.wsimg.com/cdnassets/transform/cfb06d21-498d-4421-9355-167d720e015b/kohomehousewarestemplate_desktop',
    'https://img1.wsimg.com/cdnassets/transform/d196e84d-26d6-47d0-b4df-b3e493a3934c/kohealthalternativetemplate_mobile',
    // Add more image URLs as needed
  ];

  return (
   <>
        <Navbar/>
        <Header/>
        <Business/>
        <Marketing/>
        <Slider images={images}/> 
        <Poster/>
        <Trust/>
        <Work/>
        <Footer/>
   </>
  );
}

export default App;
