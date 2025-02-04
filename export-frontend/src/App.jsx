import React from 'react';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Certification from './components/Certification';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import GetQuote from './components/GetQuote';
import Basic from './components/Basic';
import Singleproductspage from './components/Singleproductspage';
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/" element={<Home />} />
        <Route path="/get-a-quote" element={<GetQuote />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Singleproductspage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/certificate" element={<Certification />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
