import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/UI/Navbar/Navbar';  // Adjust import paths as needed
import Home from './Components/UI/Home/Home';      // Adjust import paths as needed
import SliderBanner from './Components/UI/Home/SliderBanner';
import Footer from './Components/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <SliderBanner/> */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
