import React, { Component } from "react";
import "../../../css/Explore/Explore_details.css";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import placeholder_image from "../../../Assets/nav-placeholder-image.png";
import { Link, withRouter } from "react-router-dom";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import Loader from "../Loader/Loader";
import { Row, Col } from "react-bootstrap";
class Explore_details_right_col extends React.Component {
  static contextType = UserDetailsContext;
  state = {
    reviews: [1, 2, 3, 4],
    exploreRightColClass: "right",
    loading: true,
    paymentLoader: false,
  };

  addtoWishlist = async (dealId, dealName, price, subTitle) => {
    const response = await fetch(
      `http://localhost:3002/users/update-wishlist`,
      {
        method: "POST",
        body: JSON.stringify({
          userId: this.props.match.params.userid,
          companyId: "test",
          dealId: dealId,
          companyImage: "test",
          dealName: dealName,
          serviceProviderName: "test",
          serviceType: "test",
          price: price,
          description: subTitle,
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

  buyService = async (
    productName,
    serviceProvider,
    subscribePrice,
    oneOffprice
  ) => {
    if (
      this.context.userDetails.addressHistory.length === 0 ||
      this.context.userDetails.moreInfoNeeded === true
    ) {
      this.props.moreInfoNeededFn();
    } else {
      const productNameConcat =
        productName + " " + "By" + " " + serviceProvider;
      this.setState({ paymentLoader: true });
      const response = await fetch(
        `http://localhost:3002/payment/create-product-price`,
        {
          method: "POST",
          body: JSON.stringify({
            userId: this.props.match.params.userid,
            productName: productNameConcat,
            subscribePrice: subscribePrice,
            oneOffprice: oneOffprice,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const details = await response.json();
      if (details.url) {
        this.props.populateBoughtDeal(productNameConcat);
        window.location.href = details.url;
        this.setState({ paymentLoader: false });
      }
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
                <img src={image_placeholder} />
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
                    onClick={() =>
                      this.addtoWishlist(
                        this.props.deal[0]._id,
                        this.props.deal[0].dealName,
                        this.props.deal[0].dealPrice,
                        this.props.deal[0].subTitle
                      )
                    }
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
