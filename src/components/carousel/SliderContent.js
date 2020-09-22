import React, { Component } from "react";
import "./content.css";
import Data from "../constant/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class SliderContent extends Component {
  constructor(props) {
    super(props);
    this.state = { landing: Data };
  }

  render() {
    return (
      <section className="container">
        {this.state.landing.map((s, index) => (
          <div
            className={index === this.props.activeIndex ? "active" : "inactive"}
            key={index}
          >
            <div className="slider-card" style={{ backgroundColor: s.color }}>
              <h2 className="card-title">{s.title}</h2>
              <p> {s.desc}</p>
              <button>
                {s.button} <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <img src={s.imgUrl} id="img" />
          </div>
        ))}
      </section>
    );
  }
}

export default SliderContent;
