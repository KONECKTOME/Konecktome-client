import React from "react";
import Explore_details_right_col from "./Explore_details_right_col";
import { Link, withRouter } from "react-router-dom";
import Explore_details_left_col from "./Explore_details_left_col";
import ExploreMoreInfo from "./ExploreMoreInfo";
import SmallLoader from "../Loader/SmallLoader";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import ExploreInstallationInfo from "./ExploreInstallationInfo";

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
    updateAddressAndUserDetails: null,
    dealDetails: [],
    displayIntallationDateAndTime: false,
  };

  componentDidMount = async () => {
    this.getDeal(this.props.match.params.dealId);
    this.getDeals();
  };

  getDeal = async (dealId) => {
    const response = await fetch(
      `http://localhost:3002/companies/get-deal-by-id/${dealId}`,
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

  getDeals = async () => {
    const response = await fetch(`http://localhost:3002/companies/all-deals`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const deals = await response.json();
    this.setState({ dealDetails: deals });
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

  showInstallationDateAndTime = () => {
    this.setState({ displayIntallationDateAndTime: true });
  };

  moreInfoNeededFn = () => {
    this.setState({
      moreInfoNeededLoader: true,
    });
    setTimeout(() => {
      this.setState({
        moreInfoNeededLoader: false,
        moreInfoNeeded: true,
      });
    }, 2000);
  };

  hideAddressModal = () => {
    this.setState({
      editStatus: !this.state.editStatus,
    });
  };

  render(props) {
    return (
      <>
        {this.state.displayIntallationDateAndTime === true ? (
          <ExploreInstallationInfo
            userId={this.props.userDetailsAsProps._id}
            fetchUser={() => this.props.fetchUser()}
            deal={this.state.deal}
            populateBoughtDeal={(installationDateAndTime) =>
              this.props.populateBoughtDeal(installationDateAndTime)
            }
          />
        ) : (
          <>
            {this.state.loading === true ? (
              <SmallLoader />
            ) : (
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
                      One Last thing, More Info Needed. Please Wait Whilst We
                      Prepare...
                    </p>
                  </div>
                ) : null}
                {this.state.moreInfoNeeded === true ? (
                  <ExploreMoreInfo
                    userDetails={this.props.userDetailsAsProps}
                    dealId={this.state.deal[0]._id}
                    addressStatus={this.state.updateAddressDetails}
                    userDetailsStatus={this.state.updateUserDetails}
                    updateAddressAndUserDetailsStatus={
                      this.state.updateAddressAndUserDetails
                    }
                    fetchUser={() => this.props.fetchUser()}
                    deal={this.state.deal}
                    populateBoughtDeal={(installationDateAndTime) =>
                      this.props.populateBoughtDeal(installationDateAndTime)
                    }
                  />
                ) : (
                  <>
                    <div id="explore-details-header-wrapper">
                      <p>
                        <Link
                          to={
                            "/dashboard/explore/" +
                            this.props.match.params.userid
                          }
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
                        userDetails={this.props.userDetailsAsProps}
                        deal={this.state.deal}
                        loading={this.state.loading}
                        fetchUser={() => this.props.fetchUser()}
                        populateBoughtDeal={(dealName) =>
                          this.props.populateBoughtDeal(dealName)
                        }
                        showNotification={(wishlistSuccess, wishlistExists) =>
                          this.showNotifications(
                            wishlistSuccess,
                            wishlistExists
                          )
                        }
                        moreInfoNeededFn={() => this.moreInfoNeededFn()}
                        moreInfoNeededLoader={() => this.moreInfoNeededLoader()}
                        showInstallationDateAndTime={() =>
                          this.showInstallationDateAndTime()
                        }
                        {...props}
                      />
                      <Explore_details_left_col
                        loading={this.state.loading}
                        deals={this.state.dealDetails}
                        getDeal={(dealId) => this.getDeal(dealId)}
                        {...props}
                      />
                    </div>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </>
    );
  }
}

export default withRouter(Explore_details);
