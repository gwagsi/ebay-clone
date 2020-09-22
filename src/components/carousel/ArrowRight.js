import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

class ArrowRight extends Component {
  render() {
    const mystyles = {};
    return (
      <div
        style={mystyles}
        className="forwardArrow"
        onClick={this.props.goToNextSlide}
      >
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </div>
    );
  }
}

export default ArrowRight;
