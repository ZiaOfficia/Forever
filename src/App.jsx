import React from "react";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import PlaceOrder from "./pages/PlaceOrder";
import About from "./pages/About";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import SearchBar from "./component/SearchBar";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar></Navbar>
      <SearchBar></SearchBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/product-id" elemnet={<Product />} />
        <Route path="/cart" elemnet={<Cart />} />
        <Route path="/login" elemnet={<Login />} />
        <Route path="/placeorder" elemnet={<PlaceOrder />} />
        <Route path="/orders" elemnet={<Order />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
