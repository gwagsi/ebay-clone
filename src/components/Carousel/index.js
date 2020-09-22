import React, { Component } from "react";
import Slide from "./slide";
import landingData from "../Landing";
import LeftArrow from "./left_arrow";
import RightArrow from "./right_arrow";
import "./main.css";
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      length: landingData.length,
    };
  }
}
