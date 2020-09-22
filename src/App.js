import React from "react";
import "./assets/App.css";
import Header from "./components/Header";
import LeftArrow from "./components/Carousel/left_arrow";
import RightArrow from "./components/Carousel/right_arrow";
import Slider from "./components/carousel/Slider";
import Category from "./components/Category";
function App() {
  return (
    <div className="App">
      <Header />

      <Slider />
      <Category />
      {/* Category -card*/}
      {/*Deals cardv2 */}
      {/* Celebrate[category]*/}
      {/*Seller */}
      {/*footer */}
    </div>
  );
}

export default App;
