import React, { Component } from "react";
import "../../../css/Explore/Explore_details.css";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import placeholder_image from "../../../Assets/nav-placeholder-image.png";
import { Link, withRouter } from "react-router-dom";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import ExploreInstallationInfo from "./ExploreInstallationInfo";
import Loader from "../Loader/Loader";
import { Row, Col } from "react-bootstrap";
import Rating from "../../Reusable/Rating";
class Explore_details_right_col extends React.Component {
  static contextType = UserDetailsContext;
  state = {
    reviews: [1, 2, 3],
  };

  render(props) {
    return (
      <div id="right-wrapper">
        <div id="right-with-compare">
          <div id="explore-details-inner-right">
            <div id="explore-details-right-image-holder">
              {/* <img src={this.props.deal[0].companyLogo} /> */}
            </div>
            <div id="explore-details-sub-inner-right-subheader-wrapper">
              <div>
                <p className="desktop-sub-header2">here</p>
              </div>
            </div>
            <div id="explore-details-sub-header-inner-wrapper">
              <Rating rating="4.5" size="20" />
              <p>(28,112)</p>
            </div>
            <div id="explore-details-inner-right-btn-wrapper">
              <div className="desktop-badge1">
                <p className="desktop-badge-text"> here</p>
              </div>
            </div>
            <div id="explore-details-features">
              <div id="explore-details-inner-right-text">
                <p className="desktop-text"> here</p>
                <p className="desktop-text">here</p>
                <p className="desktop-text">here</p>
              </div>
              <div id="explore-details-inner-features-wrapper">
                here
                {/* {this.props.deal[0].features.map((feature) => {
                  return <p className="desktop-text">{feature.featureText}</p>;
                })} */}
              </div>
            </div>
          </div>
          <div id="explore-details-inner-left">
            <div id="explore-details-inner-left-inner-wrapper">
              <div>
                <p className="desktop-sub-header2"> Price</p>
                <p className="desktop-price-number">here</p>
                {/* {this.props.deal[0].subTitle !== "" ? (
                  <p className="desktop-price-number">
                    £{this.props.deal[0].dealPrice} Per Month With{" "}
                    {this.props.deal[0].subTitle}
                  </p>
                ) : (
                  <p className="desktop-price-number">
                    £{this.props.deal[0].dealPrice} Per Month
                  </p>
                )} */}
              </div>
              <div
                className="desktop-big-button"
                onClick={() =>
                  this.buyService(
                    this.props.deal[0].dealName,
                    this.props.deal[0].companyName,
                    this.props.deal[0].dealPrice,
                    this.props.deal[0].dealContractPlans[0].setUpFee
                  )
                }
              >
                here
                {/* {this.state.paymentLoader === true ? (
                  <div id="explore-loading"></div>
                ) : (
                  <p className="desktop-big-button-text">Buy Now</p>
                )} */}
              </div>

              <div className="desktop-big-button-transparent">
                <p className="desktop-big-button-transparent-text">
                  Add to wishlist
                </p>
              </div>
            </div>
            <div id="explore-details-review">
              <p className="desktop-sub-header2 mb-4"> Reviews</p>
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
      </div>
    );
  }
}

export default withRouter(Explore_details_right_col);
