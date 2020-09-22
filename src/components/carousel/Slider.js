import React, { Component } from "react";
import SliderContent from "./SliderContent";
import Data from "../constant/data";
import "./content.css";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      length: Data.length,
    };
  }
  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
    if (index < 1) {
      index = length - 1;
    } else {
      index--;
    }
    this.setState({
      activeIndex: index,
    });
  }
  goToNextSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
    if (index === length - 1) {
      index = 0;
    } else {
      index++;
    }
    this.setState({
      activeIndex: index,
    });
  }
  render() {
    return (
      <div className="slider">
        <div className="slider-items">
          <div className="arrow-left">
            <ArrowLeft goToNextSlide={() => this.goToPrevSlide()} />
          </div>
          <div id="slider-content">
            <SliderContent activeIndex={this.state.activeIndex} />
          </div>
          <div className="arrow-right">
            <ArrowRight goToNextSlide={() => this.goToNextSlide()} />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
