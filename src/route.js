import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about';
import ProductItem from './components/productItem';
import Product from './components/Product';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Product/:id" element={<ProductItem />} />
        <Route path="*" element={()=><h2>404 Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
