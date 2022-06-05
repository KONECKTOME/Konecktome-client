import React, { Component } from "react";
import "../../../css/Explore/Explore_details.css";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import placeholder_image from "../../../Assets/nav-placeholder-image.png";
import { Link, withRouter } from "react-router-dom";
import Loader from "../Loader/Loader";
class Explore_details_right_col extends React.Component {
  state = {
    reviews: [1, 2, 3, 4],
    exploreRightColClass: "right",
    loading: true,
  };

  componentDidMount = () => {
    if (window.location.href.indexOf("/dashboard/explore/compare") > -1) {
      this.setState({ exploreRightColClass: "right-with-compare" });
    }
  };

  render(props) {
    return (
      <div>
        {this.props.loading === true ? (
          <Loader />
        ) : (
          <div id={this.state.exploreRightColClass}>
            <div id="explore-details-inner-right">
              <img src={image_placeholder} />
              <div id="explore-details-sub-inner-right-subheader-wrapper">
                <div>
                  <p className="desktop-sub-header2">
                    {this.props.deal[0].dealName}
                  </p>
                  <p className="desktop-text">{this.props.deal[0].subTitle}</p>
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
                <p className="desktop-text">{this.props.deal[0].speed}</p>
                <p className="desktop-text">
                  £{this.props.deal[0].dealContractPlans[0].setUpFee} Set Up Fee
                </p>
                <p className="desktop-text">
                  £{this.props.deal[0].dealContractPlans[0].contractDuration}
                </p>
                {/* <p className="desktop-text">
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
            </p> */}
              </div>
              <div id="explore-details-inner-features-wrapper">
                <p className="desktop-sub-header2">Features</p>
                {this.props.deal[0].features.map((feature) => {
                  return <p className="desktop-text">{feature.featureText}</p>;
                })}
              </div>
            </div>
            <div id="explore-details-inner-left">
              <div id="explore-details-inner-left-inner-wrapper">
                <div>
                  <p className="desktop-price"> Price</p>
                  <p className="desktop-price-number">
                    £{this.props.deal[0].dealPrice} Per Month
                  </p>
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
                <div
                  id={
                    this.state.exploreRightColClass === "right"
                      ? "display-compare-btn"
                      : "hide-compare-btn"
                  }
                >
                  <Link
                    to={
                      "/dashboard/explore/compare/" +
                      this.props.match.params.userid +
                      "/" +
                      this.props.deal[0]._id
                    }
                    className="links"
                  >
                    <div className="desktop-big-button-transparent">
                      <p className="desktop-big-button-transparent-text">
                        Compare
                      </p>
                    </div>
                  </Link>
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
        )}
      </div>
    );
  }
}

export default withRouter(Explore_details_right_col);
