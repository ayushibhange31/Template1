import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Cart from './components/Cart';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import {Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Footer from './components/Footer';
import Accessories from './components/Accessories';
import Cloths from './components/Cloths';
import Wishlist from './components/Wishlist';
import GoToTop from './components/GoToTop';
// import SearchPage from './components/SearchPage';

const App = () => {

  return (
    <>
    <Navbar/>
    {/* <SearchPage/> */}
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/cloths" element={<Cloths/>}/>
    <Route path="/products/:id" element={<Product/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/wishlist" element={<Wishlist/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/accessories" element={<Accessories/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <GoToTop />
    <Footer/>
    </>
  );
}
export default App;
