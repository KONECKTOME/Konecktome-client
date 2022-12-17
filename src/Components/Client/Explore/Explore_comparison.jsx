import React, { Component } from "react";
import "../../../css/Explore/Explore_comparison.css";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
// import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Explore_comparison extends React.Component {
  state = {};
  componentDidMount = async () => {
    console.log(this.props.compareItems);
  };

  render() {
    return (
      <div id="explore-both-wrapper">
        <p id="explore-compare-header">Compare Items</p>
        <div
          id="more-details-holder"
          onClick={() => this.props.showComparePage()}
        >
          <p className="desktop-cta mb-4">Go Back To Explore</p>
        </div>
        <div className="cards">
          {this.props.compareItems.map((item) => {
            return (
              <div className="card">
                <div>
                  <img src={image_placeholder} id="explore-compare-image" />
                </div>
                <div id="explore-compare-details-holder">
                  <p className="desktop-text fw-bold">{item.dealName}</p>
                  <p className="desktop-price-number">£{item.dealPrice}</p>
                  {item.features.map((feature) => {
                    return (
                      <p className="desktop-text">{feature.featureText}</p>
                    );
                  })}
                </div>
                <div
                  className="desktop-small-button mt-4 mb-0"
                  //   onClick={() =>
                  //     this.buyService(
                  //       this.props.deal[0].dealName,
                  //       this.props.deal[0].companyName,
                  //       this.props.deal[0].dealPrice,
                  //       this.props.deal[0].dealContractPlans[0].setUpFee
                  //     )
                  //   }
                >
                  {this.state.paymentLoader === true ? (
                    <div id="explore-loading"></div>
                  ) : (
                    <p className="desktop-big-button-text">Buy Now</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Explore_comparison);
