import React, { Component } from "react";
// get our fontawesome imports
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class RightArrow extends Component {
  render() {
    return (
      <div className="backArrow" onClick={this.props.goToPrevSlide}>
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </div>
    );
  }
}
