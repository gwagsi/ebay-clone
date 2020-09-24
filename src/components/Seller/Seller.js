import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Seller() {
  return (
    <div>
      <section className="container">
        <div className="container-top">
          <div className="top-card">
            <h2 className="top-card-title">Eyes Off Theses</h2>
            <p> Discover the top watched items on ebay</p>
            <button>
              Watch Out
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <img src="#" id="img" />
        </div>
      </section>
      <section className="container-middle">
        <div className="middle-stars">stars</div>
        <div className="middle-text">text</div>
        <button>
          Take the Survey
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </section>
      <section className="container-buttom">
        <div className="container-buttom">
          <div className="bottom-card">
            <h2 className="bottom-card-title">
              Shopping Made Easier, Since 1995
            </h2>
            <p>
              {" "}
              The eBay App makes it easier to search, buy and sell on the go
            </p>
            <button>
              Download the App
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <img src="#" id="img" />
        </div>
      </section>
    </div>
  );
}

export default Seller;
