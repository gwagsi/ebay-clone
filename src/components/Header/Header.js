import React, { PureComponent } from "react";
import "./header.css";
/**Importing material Icons */
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";

export class Header extends PureComponent {
  render() {
    return (
      <div className="nav">
        <div className="nav-top">
          <div className="nav-top-left">
            <div className="nav-top-left-first">
              Hi!{" "}
              <a href="#" target="_blank">
                Sign in{" "}
              </a>
              or <a href="#">Register</a>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    Daily Deals
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Help & Contract
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav-top-right">
            <ul>
              <li>
                <a href="#" target="_blank">
                  Ship to
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Sell
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Ship to
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Watchlist
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  My eBay
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <NotificationsNoneIcon />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <ShoppingCartOutlinedIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-midle">
          <img src="http://pngimg.com/uploads/ebay/ebay_PNG20.png" />
          <div className="shop">
            <ul>
              <li>Shop by</li>
              <li>category</li>
            </ul>
            <ExpandMoreOutlinedIcon />
          </div>
          <div className="search">
            <input placeholder="Search for anything" type="text" />
            <div className="category">
              <span>All Categories</span>
              <ExpandMoreOutlinedIcon className="icon" />
            </div>{" "}
          </div>
          <button type="submit">Search</button>
          <span>Advanced</span>
        </div>
        <div className="nav-bottom">
          <ul>
            <li>
              <a className="nav-bottom-active" href="#">
                {" "}
                Home
              </a>
            </li>
            <li>
              <a className="nav-bottom-icon-section" href="#">
                <span>
                  <FavoriteIcon
                    style={{ fontSize: 10 }}
                    className="nav-bottom-icon"
                  />
                </span>
                Saved
              </a>
            </li>
            <li>
              <a className="nav-bottom-links" href="#">
                Electronics
              </a>
            </li>
            <li>
              <a className="nav-bottom-links" href="#">
                {" "}
                Fashion
              </a>
            </li>
            <li>
              <a className="nav-bottom-links" href="#">
                {" "}
                Health & Beauty
              </a>
            </li>
            <li>
              <a className="nav-bottom-links" href="#">
                {" "}
                Motors
              </a>
            </li>
            <li>
              <a className="nav-bottom-links" href="#">
                {" "}
                Collectibles
              </a>
            </li>
            <li>
              <a className="nav-bottom-links" href="#">
                {" "}
                Sports
              </a>
            </li>
            <li>
              <a className="nav-bottom-links" href="#">
                {" "}
                Home & Garden
              </a>
            </li>
            <li>
              <a className="nav-bottom-links" href="#">
                {" "}
                Deals
              </a>
            </li>
            <li>
              <a className="nav-bottom-links" href="#">
                {" "}
                Under $10
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
