import React, { PureComponent } from "react";
import "../assets/header.css";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

export class Header extends PureComponent {
  render() {
    return (
      <div className="nav">
        <div className="nav-top">
          <div className="nav-top-left">
            Hi!{" "}
            <a hrer="#" target="_blank">
              Sign in
            </a>
          </div>
          <div className="nav-top-right">
            <ul>
              <li>
                <a hrer="#" target="_blank">
                  Ship to
                </a>
              </li>
              <li>
                <a hrer="#" target="_blank">
                  Sell
                </a>
              </li>
              <li>
                <a hrer="#" target="_blank">
                  Ship to
                </a>
              </li>
              <li>
                <a hrer="#" target="_blank">
                  Watchlist
                </a>
              </li>
              <li>
                <a hrer="#" target="_blank">
                  My eBay
                </a>
              </li>
              <li>
                <a hrer="#" target="_blank">
                  <NotificationsNoneIcon />
                </a>
              </li>
              <li>
                <a hrer="#" target="_blank">
                  <ShoppingCartOutlinedIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-midlle">Middle</div>
        <div className="nav-bottom">BOTTOM</div>
      </div>
    );
  }
}

export default Header;
