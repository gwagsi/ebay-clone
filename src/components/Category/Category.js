import React, { Component } from "react";
import CategoryTop from "../CategoryTop/CategoryTop";
import img from "./iphone.jpg";
import "./category.css";

import PropTypes from "prop-types";
import catOne from "../constant/categoryOne";

export default class Category extends Component {
  constructor(props) {
    super(props);

    const data = catOne;

    this.state = { data };
  }

  render() {
    return (
      <div id="conatainer">
        <CategoryTop />
        <div className="cat">
          {this.state.data.map((data, index) => (
            <div className="circle-section">
              <div className="image-cicle">
                <img src={data.imgUrl} />
              </div>
              <p>{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
