import React, { Component } from "react";
import "../../../css/Explore/Explore_details.css";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import placeholder_image from "../../../Assets/nav-placeholder-image.png";
import { Link, withRouter } from "react-router-dom";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import ExploreInstallationInfo from "./ExploreInstallationInfo";
import Loader from "../Loader/Loader";
import { Row, Col } from "react-bootstrap";
class Explore_details_right_col extends React.Component {
  static contextType = UserDetailsContext;
  state = {
    reviews: [1, 2, 3, 4],
    exploreRightColClass: "right",
    loading: true,
    paymentLoader: false,
    moreInfoNeededValue: this.props.userDetails.moreInfoNeeded,
  };

  addtoWishlist = async (dealId) => {
    const response = await fetch(
      `https://konecktomebackend.herokuapp.com/users/update-wishlist`,
      {
        method: "POST",
        body: JSON.stringify({
          userId: this.props.match.params.userid,
          dealId: dealId,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const details = await response.json();
    if (details.message === "Item Already In Wishlist") {
      this.props.showNotification(false, true);
    } else if (details.message === "New wishlist added for user") {
      this.props.showNotification(true, false);
      this.props.fetchUser();
    }
  };

  buyService = async () => {
    console.log(this.props.userDetails.moreInfoNeeded);
    if (
      this.props.userDetails.moreInfoNeeded === true ||
      this.props.userDetails.addressHistory.length == 0
    ) {
      this.props.moreInfoNeededFn();
    } else {
      this.props.showInstallationDateAndTime();
    }
  };

  render(props) {
    return (
      <div>
        {this.props.loading === true ? (
          <Loader />
        ) : (
          <>
            <div id="right-with-compare">
              <div id="explore-details-inner-right">
                <div id="explore-details-right-image-holder">
                  <img src={this.props.deal[0].companyLogo} />
                </div>
                <div id="explore-details-sub-inner-right-subheader-wrapper">
                  <div>
                    <p className="desktop-sub-header2">
                      {this.props.deal[0].dealName} By{" "}
                      {this.props.deal[0].companyName}
                    </p>
                  </div>
                  <div id="explore-details-sub-header-inner-wrapper">
                    <p>4.5</p>
                    <p>(28,112)</p>
                  </div>
                </div>
                <div id="explore-details-inner-right-btn-wrapper">
                  <div className="desktop-badge1">
                    <p className="desktop-badge-text">
                      {this.props.deal[0].tag}
                    </p>
                  </div>
                </div>
                <div id="explore-details-features">
                  <div id="explore-details-inner-right-text">
                    <p className="desktop-text">{this.props.deal[0].speed}</p>
                    <p className="desktop-text">
                      £{this.props.deal[0].dealContractPlans[0].setUpFee} Set Up
                      Fee
                    </p>
                    <p className="desktop-text">
                      £
                      {this.props.deal[0].dealContractPlans[0].contractDuration}
                    </p>
                  </div>
                  <div id="explore-details-inner-features-wrapper">
                    {this.props.deal[0].features.map((feature) => {
                      return (
                        <p className="desktop-text">{feature.featureText}</p>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div id="explore-details-inner-left">
                <div id="explore-details-inner-left-inner-wrapper">
                  <div>
                    <p className="desktop-price"> Price</p>
                    {this.props.deal[0].subTitle !== "" ? (
                      <p className="desktop-price-number">
                        £{this.props.deal[0].dealPrice} Per Month With{" "}
                        {this.props.deal[0].subTitle}
                      </p>
                    ) : (
                      <p className="desktop-price-number">
                        £{this.props.deal[0].dealPrice} Per Month
                      </p>
                    )}
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
                    {this.state.paymentLoader === true ? (
                      <div id="explore-loading"></div>
                    ) : (
                      <p className="desktop-big-button-text">Buy Now</p>
                    )}
                  </div>
                  {/* <Link to="/dashboard/pay-success/62af8dc3d86ce1c75d6e791a">
                    HERE
                  </Link> */}
                  {/* <div className="desktop-big-button-transparent">
                    <p className="desktop-big-button-transparent-text">
                      Chat with service provider
                    </p>
                  </div> */}
                  <div
                    className="desktop-big-button-transparent"
                    onClick={() => this.addtoWishlist(this.props.deal[0]._id)}
                  >
                    <p className="desktop-big-button-transparent-text">
                      Add to wishlist
                    </p>
                  </div>
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
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Explore_details_right_col);
