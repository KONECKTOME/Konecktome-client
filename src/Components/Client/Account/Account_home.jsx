import React, { Component } from "react";
import "../../../css/Account/index.css";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import wishlist_icon from "../../../Assets/wishlist-card-icon.svg";

class Account_home extends React.Component {
  state = {
    test: [1, 2, 3, 4, 5, 6],
  };
  render() {
    return (
      <div id="account-wrapper">
        <div id="account-first-inner-div">
          <div>
            <p id="account-header">My Accounts</p>
          </div>
          <div id="account-first-inner-right-div">
            <div>
              <p className="account-header-right-options">All</p>
            </div>
            <div>
              <p className="account-header-right-options">Private Listings</p>
            </div>
          </div>
        </div>

        <div className="cards">
          {this.state.test.map((t) => {
            return (
              <div className="card">
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
                  <div id="account-view-details-text">View details</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Account_home;
