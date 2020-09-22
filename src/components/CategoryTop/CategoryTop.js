import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
function CategoryTop() {
  return (
    <div className="top-bar">
      <span className="top-text-one">Explore popular categories</span>{" "}
      <span className="top-text-two">
        See all <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </div>
  );
}

export default CategoryTop;
