import React, { Component } from "react";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import wishlist_icon from "../../../Assets/wishlist-card-icon.svg";
import "../../../css/Explore/Explore_details.css";

class Explore_details_left_col extends React.Component {
  state = {
    arr: [1, 4],
  };
  render() {
    return (
      <div id="left">
        {this.state.arr.map((e) => {
          return (
            <div className="explore-details-card">
              <div id="image-holder">
                <img src={image_placeholder} id="card-image" />
              </div>
              <div id="account-card-inner-first-div">
                <p id="account-inner-header">Some Service Provider Name</p>
                <div>
                  <img src={wishlist_icon} />
                  <img src={wishlist_icon} />
                </div>
              </div>
              <div>
                <p id="acc-inner-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the…
                </p>
                <div id="account-badge">
                  <p id="badge-text">Financial</p>
                </div>
              </div>
              <div id="account-card-footer">
                <div>
                  <p id="account-price-text"> Price</p>
                  <p id="account-price-in-number">£500</p>
                </div>
                <div id="explore-details-view-button">
                  <p id="explore-details-view-button-text">Compare</p>
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
