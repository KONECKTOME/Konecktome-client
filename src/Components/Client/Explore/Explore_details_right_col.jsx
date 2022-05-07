import React, { Component } from "react";
import "../../../css/Explore/Explore_details.css";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import placeholder_image from "../../../Assets/nav-placeholder-image.png";
import { Link } from "react-router-dom";
class Explore_details_right_col extends React.Component {
  state = {
    reviews: [1, 2, 3, 4],
    exploreRightColClass: "right",
  };

  //   componentDidMount = () => {
  //     this.checkExploreRightColClass();
  //   };

  checkExploreRightColClass = (id) => {
    const url = this.props.to;
    window.alert(url);
  };
  render(props) {
    return (
      <div id="right">
        <div id="explore-details-inner-right">
          <img src={image_placeholder} />
          <div id="explore-details-sub-inner-right-subheader-wrapper">
            <div>
              <p className="desktop-sub-header2">Some service provider name</p>
            </div>
            <div id="explore-details-sub-header-inner-wrapper">
              <p>4.5</p>
              <p>(28,112)</p>
            </div>
          </div>
          <div id="explore-details-inner-right-btn-wrapper">
            <div className="desktop-badge1">
              <p className="desktop-badge-text">Financial</p>
            </div>
          </div>
          <div id="explore-details-inner-right-text">
            <p className="desktop-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the… Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the… Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the…
            </p>
            <p className="desktop-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the… Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the… Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the…
            </p>
          </div>
          <div id="explore-details-inner-features-wrapper">
            <p className="desktop-sub-header2">Features</p>
            <p className="desktop-text">
              Lorem Ipsum is simply dummy text of the printing and
            </p>
            <p className="desktop-text">
              Lorem Ipsum is simply dummy text of the printing and
            </p>
            <p className="desktop-text">
              Lorem Ipsum is simply dummy text of the printing and
            </p>
            <p className="desktop-text">
              Lorem Ipsum is simply dummy text of the printing and
            </p>
            <p className="desktop-text">
              Lorem Ipsum is simply dummy text of the printing and
            </p>
          </div>
        </div>
        <div id="explore-details-inner-left">
          <div id="explore-details-inner-left-inner-wrapper">
            <div>
              <p className="desktop-price"> Price</p>
              <p className="desktop-price-number">£500</p>
            </div>
            <div className="desktop-big-button">
              <p className="desktop-big-button-text">Buy Now</p>
            </div>
            <div className="desktop-big-button-transparent">
              <p className="desktop-big-button-transparent-text">
                Chat with service provider
              </p>
            </div>
            <div className="desktop-big-button-transparent">
              <p className="desktop-big-button-transparent-text">
                Add to wishlist
              </p>
            </div>
            <Link to="/explore/compare" className="links">
              <div className="desktop-big-button-transparent">
                <p className="desktop-big-button-transparent-text">Compare</p>
              </div>
            </Link>
          </div>
          <div id="explore-details-review">
            <p className="desktop-sub-header2"> Reviews</p>
            {this.state.reviews.map((rr) => {
              return (
                <div id="explore-details-reviews-first-inner-div">
                  <div id="explore-details-reviews-inner-div">
                    <div>
                      <img src={placeholder_image} />
                    </div>
                    <div id="explore-details-review-details">
                      <p className="desktop-sub-header2">John Doe</p>
                      <p className="desktop-text">4.5</p>
                    </div>
                  </div>
                  <p className="desktop-text">
                    Lorem Ipsum is simply dummy text of the printing and
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Explore_details_right_col;
