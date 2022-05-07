import React, { Component } from "react";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import wishlist_icon from "../../../Assets/wishlist-card-icon.svg";

class Wishlist extends React.Component {
  state = {
    test: [1, 2, 3, 5],
  };
  render() {
    return (
      <div id="favourites_wrapper">
        <p className="desktop-header">My wishlist</p>
        <div className="cards">
          {this.state.test.map((tt) => {
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
                    <p className="desktop-cta">View details</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Wishlist;
