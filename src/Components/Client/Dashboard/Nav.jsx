import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../../../css/Dashboard/Nav.css";
import service_prov_icon from "../../../Assets/dashboard_nav_service_icon.svg";
import fav_icon from "../../../Assets/dashboard_fav_icon.svg";
import email_icon from "../../../Assets/dashboard_nav_email_icon.svg";
import wishlist_icon from "../../../Assets/dashboard_nav_wishlist_icon.svg";

class Nav extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="dashboard-first-wrapper">
          <div id="dashboard-nav-wrapper">
            <div className="dashboard-nav-item">
              <div id="dashboard_nav_item_inner">
                <div id="dashboard-nav-icon-wrapper">
                  <img src={service_prov_icon} />
                </div>
                <div className="desktop-nav-header">Accounts</div>
                <div>
                  <p className="nav-item-number">{this.props.accountLength}</p>
                </div>
              </div>
            </div>
            <div className="dashboard-nav-item dashboard-nav-item-for-margin">
              <div id="dashboard_nav_item_inner">
                <div id="dashboard-nav-icon-wrapper">
                  <img src={fav_icon} />
                </div>
                <div className="desktop-nav-header">Wishlist</div>
                <div>
                  <p className="nav-item-number">{this.props.wishlistlength}</p>
                </div>
              </div>
            </div>
            <div className="dashboard-nav-item dashboard-nav-item-for-margin">
              <div id="dashboard_nav_item_inner">
                <div id="dashboard-nav-icon-wrapper">
                  <img src={email_icon} />
                </div>
                <div className="desktop-nav-header">History</div>
                <div>
                  <p className="nav-item-number">
                    {this.props.transactionHistory}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="dashboard-nav-item dashboard-nav-item-for-margin">
              <div id="dashboard_nav_item_inner">
                <div id="dashboard-nav-icon-wrapper">
                  <img src={wishlist_icon} />
                </div>
                <div className="desktop-nav-header">Wish List</div>
                <div>
                  <p className="nav-item-number">{this.props.wishlistLength}</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
