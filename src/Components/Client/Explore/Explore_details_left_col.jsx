import React, { Component } from "react";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import wishlist_icon from "../../../Assets/wishlist-card-icon.svg";
import "../../../css/Explore/Explore_details.css";
import { Link } from "react-router-dom";

class Explore_details_left_col extends React.Component {
  state = {
    arr: [1, 4],
  };
  render() {
    return (
      <div id="left">
        <p>Here</p>
        {this.state.arr.map((e) => {
          return (
            <div className="card">
              <div id="image-holder">
                <img src={image_placeholder} className="card-image" />
              </div>
              <div id="account-card-inner-first-div">
                <p className="desktop-sub-header2">
                  Some Service Provider Name
                </p>
              </div>
              <div>
                <p className="desktop-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the…
                </p>
                <div className="desktop-badge1">
                  <p className="desktop-badge-text">Financial</p>
                </div>
              </div>
              <div id="account-card-footer">
                <div>
                  <p className="desktop-price"> Price</p>
                  <p className="desktop-price-number">£500</p>
                </div>
                <div>
                  <Link className="links" to="/explore/details">
                    <p className="desktop-cta">Compare</p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Explore_details_left_col;
