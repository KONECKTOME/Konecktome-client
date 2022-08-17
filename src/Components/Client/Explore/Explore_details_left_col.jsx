import React, { Component } from "react";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import wishlist_icon from "../../../Assets/wishlist-card-icon.svg";
import "../../../css/Explore/Explore_details.css";
import { Link, withRouter } from "react-router-dom";

class Explore_details_left_col extends React.Component {
  state = {
    arr: [1, 4],
    compareDeals: [],
  };

  componentDidMount = () => {
    const removeCurrentDeal = this.props.deals.filter(
      (deal) => deal._id !== this.props.match.params.dealId
    );
    this.setState({
      compareDeals: removeCurrentDeal,
    });
    console.log("compare", removeCurrentDeal);
  };
  render() {
    return (
      <div id="left">
        <p className="desktop-sub-header2">
          People viewing this deal, also viewed
        </p>
        {this.state.compareDeals.slice(0, 2).map((item) => {
          return (
            <div className="card">
              <div id="image-holder">
                <img src={image_placeholder} className="card-image" />
              </div>
              <div id="account-card-inner-first-div">
                <p className="desktop-sub-header2">
                  {item.dealName} By {item.companyName}
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
                  <p className="desktop-price-number">£{item.dealPrice}</p>
                </div>
                <div>
                  <Link className="links" to="/explore/details">
                    <p className="desktop-cta">View Details</p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(Explore_details_left_col);
