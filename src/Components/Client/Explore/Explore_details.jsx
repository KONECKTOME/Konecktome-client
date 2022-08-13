import React from "react";
import Explore_details_right_col from "./Explore_details_right_col";
import { Link, withRouter } from "react-router-dom";
import Explore_details_left_col from "./Explore_details_left_col";
import ExploreMoreInfo from "./ExploreMoreInfo";
import AddressModal from "../AddressModal/AddressModal";
import { UserDetailsContext } from "../Context/UserDetailsContext";

class Explore_details extends React.Component {
  static contextType = UserDetailsContext;
  state = {
    arr: [1, 2],
    deal: [],
    loading: true,
    show: null,
    wishlistSuccess: false,
    wishlistExist: false,
    moreInfoNeeded: false,
    editStatus: false,
    moreInfoNeededLoader: false,
    updateAddressDetails: null,
    updateUserDetails: null,
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

  moreInfoNeededFn = (updateUserDetails, updateAddressDetails) => {
    this.setState({ moreInfoNeededLoader: true });
    setTimeout(() => {
      if (updateUserDetails === true) {
        this.setState({
          moreInfoNeededLoader: false,
          updateUserDetails: true,
          moreInfoNeeded: true,
          editStatus: !this.state.editStatus,
        });
      } else if (updateAddressDetails === true) {
        this.setState({
          moreInfoNeededLoader: false,
          updateAddressDetails: true,
          moreInfoNeeded: true,
          editStatus: !this.state.editStatus,
        });
      }
    }, 2000);
  };

  hideAddressModal = () => {
    this.setState({
      editStatus: !this.state.editStatus,
    });
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
        {this.state.moreInfoNeededLoader === true ? (
          <div className="exist-notification-holder">
            <p>
              One Last thing, More Info Needed. Please Wait Whilst We Prepare...
            </p>
          </div>
        ) : null}
        {this.state.moreInfoNeeded === true ? (
          <ExploreMoreInfo
            userDetails={this.context.userDetails}
            dealId={this.state.deal[0]._id}
            addressStatus={this.state.updateAddressDetails}
            userDetailsStatus={this.state.updateUserDetails}
          />
        ) : (
          <>
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
                moreInfoNeededFn={(updateUserDetails, updateAddressDetails) =>
                  this.moreInfoNeededFn(updateUserDetails, updateAddressDetails)
                }
                moreInfoNeededLoader={() => this.moreInfoNeededLoader()}
                {...props}
              />
              <Explore_details_left_col
                deal={this.state.deal}
                loading={this.state.loading}
                {...props}
              />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Explore_details);
