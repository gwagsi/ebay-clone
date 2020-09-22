import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

class ArrowLeft extends Component {
  render() {
    const mystyles = {};
    return (
      <div
        style={mystyles}
        className="forwardArrow"
        onClick={this.props.goToNextSlide}
      >
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </div>
    );
  }
}

export default ArrowLeft;
