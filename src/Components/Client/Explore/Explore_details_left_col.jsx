import React, { Component } from "react";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import wishlist_icon from "../../../Assets/wishlist-card-icon.svg";
import "../../../css/Explore/Explore_details.css";
import { Link, withRouter } from "react-router-dom";

class Explore_details_left_col extends React.Component {
  state = {
    compareDeals: [],
  };

  componentDidMount = () => {
    this.shuffleDeals();
    console.log("from left", this.state.compareDeals);
  };

  shuffleDeals = async () => {
    await console.log("from shuffle", this.props.deals);
    const removeCurrentDeal = this.props.deals.filter(
      (deal) => deal._id !== this.props.match.params.dealId
    );
    const shuffled = removeCurrentDeal.sort(() => Math.random() - 0.5);
    this.setState({
      compareDeals: shuffled,
    });
    console.log("props", shuffled);
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.dealId !== prevProps.match.params.dealId) {
      this.props.getDeal(this.props.match.params.dealId);
      this.shuffleDeals();
    }
  }

  goToDeal = (dealId) => {
    this.props.history.push(
      "/dashboard/explore/details/" +
        this.props.match.params.userid +
        "/" +
        dealId
    );
  };
  render() {
    return (
      <div id="left">
        <p className="desktop-sub-header2">
          People viewing this deal, also viewed
        </p>
        {this.state.compareDeals.slice(0, 2).map((item) => {
          return (
            <div className="card" id="explore-details-left-card">
              <div id="image-holder">
                <img src={image_placeholder} className="card-image" />
              </div>
              <div id="account-card-inner-first-div">
                <p className="desktop-sub-header2">
                  {item.dealName} By {item.companyName}
                </p>
              </div>

              <p className="desktop-sub-header2">{item.subTitle}</p>

              <div>
                <div className="desktop-badge1">
                  <p className="desktop-badge-text">{item.tag}</p>
                </div>
              </div>
              <div id="account-card-footer">
                <div>
                  <p className="desktop-price"> Price</p>
                  <p className="desktop-price-number">£{item.dealPrice}</p>
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
    );
  }
}

export default withRouter(Explore_details_left_col);
