import React from "react";
import "./assets/App.css";
import Header from "./components/Header/Header";

import Slider from "./components/carousel/Slider";
import Category from "./components/Category/Category";
import MainCarousel from "./components/maincarousel/maincarousel";
import Seller from "./components/Seller/Seller";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />

      <Slider />
      <Category />
      <MainCarousel />
      <Category />
      <Seller />
      <Footer />
      {/* Category -card*/}
      {/*Deals cardv2 */}
      {/* Celebrate[category]*/}
      {/*Seller */}
      {/*footer */}
    </div>
  );
}

export default App;
