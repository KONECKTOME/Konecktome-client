import React, { Component, createRef } from "react";
import Explore_details_right_col from "./Explore_details_right_col";
import { Link, withRouter } from "react-router-dom";
import Explore_details_left_col from "./Explore_details_left_col";

class Explore_details extends React.Component {
  state = {
    arr: [1, 2],
    deal: [],
    loading: true,
    show: null,
    wishlistSuccess: false,
    wishlistExist: false,
  };

  componentDidMount = async () => {
    const response = await fetch(
      `http://localhost:3002/companies/get-deal-by-id/${this.props.match.params.dealId}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const deal = await response.json();
    this.setState({ deal: deal.message, loading: false });
  };

  showNotifications = (wishlistSuccess, wishlistExists) => {
    if (wishlistSuccess === true) {
      this.setState({ wishlistSuccess: true });
      setTimeout(() => this.setState({ wishlistSuccess: false }), 1500);
    }
    if (wishlistExists === true) {
      this.setState({ wishlistExist: true });
      setTimeout(() => this.setState({ wishlistExist: false }), 1500);
    }
  };

  render(props) {
    return (
      <div id="explore-details-wrapper">
        {this.state.wishlistSuccess === true ? (
          <div className="success-notification-holder">
            <p>Item Added to Wishlist</p>
          </div>
        ) : null}
        {this.state.wishlistExist === true ? (
          <div className="exist-notification-holder">
            <p>Item Already Exists In Wishlist</p>
          </div>
        ) : null}

        <div id="explore-details-header-wrapper">
          <p>
            <Link
              to={"/dashboard/explore/" + this.props.match.params.userid}
              className="links"
            >
              <span id="explore-details-header">Explore</span>
              <span id="explore-details-header"> {">"} </span>
            </Link>
            <Link className="links">
              <span id="explore-details-active">Details</span>
            </Link>
          </p>
        </div>
        <div id="explore-details">
          <Explore_details_right_col
            deal={this.state.deal}
            loading={this.state.loading}
            fetchUser={() => this.props.fetchUser()}
            populateBoughtDeal={(dealName) =>
              this.props.populateBoughtDeal(dealName)
            }
            showNotification={(wishlistSuccess, wishlistExists) =>
              this.showNotifications(wishlistSuccess, wishlistExists)
            }
            {...props}
          />
          <Explore_details_left_col
            deal={this.state.deal}
            loading={this.state.loading}
            {...props}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Explore_details);
