import React, { Component } from "react";
import { Link } from "react-router-dom";
import ExploreUserDetails from "./ExploreUserDetails";
import ExploreAddress from "./ExploreAddress";

class ExploreMoreInfo extends React.Component {
  state = {
    userDetailsStatus: false,
    addressStatus: false,
    success: false,
    error: false,
    emptyfields: false,
    renderAddressAndUserDetails: false,
  };

  componentDidMount = () => {
    if (
      this.props.userDetails.moreInfoNeeded === true &&
      this.props.userDetails.addressHistory.length == 0
    ) {
      this.setState({ renderAddressAndUserDetails: true });
    }
    if (
      this.props.userDetails.moreInfoNeeded === false &&
      this.props.userDetails.addressHistory.length === 0
    ) {
      this.setState({ addressStatus: true });
    }
    if (
      this.props.userDetails.moreInfoNeeded === true &&
      this.props.userDetails.addressHistory.length !== 0
    ) {
      this.setState({ userDetailsStatus: true });
    }
  };

  render() {
    return (
      <>
        <div id="explore-details-header-wrapper">
          <p>
            <Link
              to={"/dashboard/explore/" + this.props.userDetails._id}
              className="links"
            >
              <span id="explore-details-header">Explore</span>
              <span id="explore-details-header"> {">"} </span>
            </Link>
            <Link
              to={
                "/dashboard/explore/details/" +
                this.props.userDetails._id +
                "/" +
                this.props.dealId
              }
              className="links"
            >
              <span id="explore-details-header">Details</span>
              <span id="explore-details-header"> {">"} </span>
            </Link>
            <Link className="links">
              <span id="explore-details-active">More Info Needed</span>
            </Link>
          </p>
        </div>
        {this.state.renderAddressAndUserDetails === true ? (
          <div>
            <ExploreUserDetails
              renderAddressAndUserDetails={
                this.state.renderAddressAndUserDetails
              }
              userId={this.props.userDetails._id}
              fetchUser={() => this.props.fetchUser()}
              deal={this.props.deal}
            />
          </div>
        ) : (
          <></>
        )}
        {this.state.addressStatus === true ? (
          <div>
            <ExploreAddress
              userId={this.props.userDetails._id}
              fetchUser={() => this.props.fetchUser()}
              deal={this.props.deal}
            />
          </div>
        ) : null}
        {this.state.userDetailsStatus === true ? (
          <div className="explore-more-info-holder">
            <ExploreUserDetails
              userId={this.props.userDetails._id}
              fetchUser={() => this.props.fetchUser()}
              deal={this.props.deal}
            />
          </div>
        ) : null}
      </>
    );
  }
}

export default ExploreMoreInfo;
