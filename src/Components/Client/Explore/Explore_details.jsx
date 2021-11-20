import React, { Component } from "react";
import "../../../css/Explore/Explore_details.css";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import wishlist_icon from "../../../Assets/wishlist-card-icon.svg";
import placeholder_image from "../../../Assets/nav-placeholder-image.png";

class Explore_details extends React.Component {
  state = {
    arr: [1, 2],
    reviews: [1, 2, 3, 4],
  };
  render() {
    return (
      <div id="explore-details-wrapper">
        <div id="explore-details-header-wrapper">
          <p id="explore-details-header">Explore > </p>
          <p id="explore-details-header">Some service provider name</p>
        </div>
        <div id="explore-details-inner-wrapper">
          <div id="right">
            <div id="explore-details-inner-right">
              <img src={image_placeholder} />
              <div id="explore-details-sub-inner-right-subheader-wrapper">
                <div>
                  <p id="explore-details-sub-header">
                    Some service provider name
                  </p>
                </div>
                <div id="explore-details-sub-header-inner-wrapper">
                  <p>4.5</p>
                  <p>(28,112)</p>
                </div>
              </div>
              <div id="explore-details-inner-right-btn-wrapper">
                <div id="account-badge">
                  <p id="badge-text">Social</p>
                </div>
                <div id="account-badge">
                  <p id="badge-text">Financial</p>
                </div>
              </div>
              <div id="explore-details-inner-right-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the… Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the… Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the…
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the… Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the… Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the…
                </p>
              </div>
              <div id="explore-details-inner-features-wrapper">
                <p id="explore-details-sub-header">Features</p>
                <p id="explore-details-features-text">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
                <p id="explore-details-features-text">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
                <p id="explore-details-features-text">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
                <p id="explore-details-features-text">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
                <p id="explore-details-features-text">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
              </div>
            </div>
            <div id="explore-details-inner-left">
              <div id="explore-details-inner-left-inner-wrapper">
                <div>
                  <p id="explore-details-price-text"> Price</p>
                  <p id="explore-details-price-in-number">£500</p>
                </div>
                <div id="explore-details-right-col-buy-now-btn">
                  <p id="explore-details-right-col-buy-now-btn-text">Buy Now</p>
                </div>
                <div id="explore-details-right-col-btn">
                  <p id="explore-details-right-col-btn-text">
                    Chat with service provider
                  </p>
                </div>
                <div id="explore-details-right-col-btn">
                  <p id="explore-details-right-col-btn-text">Add to wishlist</p>
                </div>
                <div id="explore-details-right-col-btn">
                  <p id="explore-details-right-col-btn-text">Compare</p>
                </div>
              </div>
              <div id="explore-details-review">
                <p id="explore-details-price-text"> Reviews</p>
                {this.state.reviews.map((rr) => {
                  return (
                    <div id="explore-details-reviews-first-inner-div">
                      <div id="explore-details-reviews-inner-div">
                        <div>
                          <img src={placeholder_image} />
                        </div>
                        <div id="explore-details-review-details">
                          <p id="explore-details-review-name">John Doe</p>
                          <p id="explore-details-review-name">4.5</p>
                        </div>
                      </div>
                      <p id="explore-details-features-text">
                        Lorem Ipsum is simply dummy text of the printing and
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
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
        </div>
      </div>
    );
  }
}

export default Explore_details;
