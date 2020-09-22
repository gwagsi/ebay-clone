import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Category() {
  return (
    <div id="conatainer">
      <div className="top-bar">
        <span className="top-text-one">Explore popular categories</span>{" "}
        <span className="top-text-two">
          See all <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
      <div className="circle-section">
        <div className="image-cicle">
          <img src="" />
        </div>
        <p>Title</p>
      </div>
    </div>
  );
}
