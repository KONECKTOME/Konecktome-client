import React, { Component } from "react";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import wishlist_icon from "../../../Assets/wishlist-card-icon.svg";
import "../../../css/Explore/Explore_details.css";
import { Link, withRouter } from "react-router-dom";

class Explore_details_left_col extends React.Component {
  state = {
    deals: [1, 2, 3],
  };

  render() {
    return (
      <>
        <p className="desktop-sub-header2 left-col-heading">
          People viewing this deal, also viewed
        </p>
        <div id="left">
          {this.state.deals.slice(0, 2).map((item) => {
            return (
              <div className="card" id="explore-details-left-card">
                <div id="image-holder">
                  {/* <img src={item.companyLogo} className="card-image" /> */}
                </div>
                <div
                  id="account-card-inner-first-div"
                  onClick={() => this.goToDeal(item._id)}
                >
                  <p className="desktop-sub-header2">here</p>
                </div>

                <p className="desktop-sub-header2">here</p>

                <div>
                  <div className="desktop-badge1 mt-3">
                    <p className="desktop-badge-text ">here</p>
                  </div>
                </div>
                <div id="account-card-footer">
                  <div>
                    <p className="desktop-price"> Price</p>
                    <p className="desktop-price-number">£here</p>
                  </div>
                  <div
                    onClick={() => this.goToDeal(item._id)}
                    id="explore-details-left-cta"
                  >
                    <p className="desktop-cta">View Details</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default withRouter(Explore_details_left_col);
