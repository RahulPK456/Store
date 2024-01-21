import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Returned from "../Return/Returned";
import Header from "../Header";
import Footer from "../Footer/Footer";
import Home from "../Footer/Home/home";
import ProductDetails from "../ProductDetails/ProductDetails";

function RouterLoc() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/returned" element={<Returned />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default RouterLoc;
