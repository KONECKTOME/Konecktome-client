import React, { Component } from "react";
import { Link } from "react-router-dom";
import ExploreUserDetails from "./ExploreUserDetails";
import ExploreAddress from "./ExploreAddress";
import { Row, Col } from "react-bootstrap";

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
      (this.props.userDetails.moreInfoNeeded =
        true && this.props.userDetails.addressHistory.length === 0)
    ) {
      this.setState({ renderAddressAndUserDetails: true });
    } else if (
      (this.props.userDetails.moreInfoNeeded =
        false && this.props.userDetails.addressHistory.length === 0)
    ) {
      this.setState({ addressStatus: true });
    } else if (
      (this.props.userDetails.moreInfoNeeded =
        true && this.props.userDetails.addressHistory.length !== 0)
    ) {
      this.setState({ userDetailsStatus: true });
    }
  };

  postUserDetailsAndAddress = (
    e,
    phone,
    profession,
    gender,
    dob,
    buildingName,
    addressLine1,
    addressLine2,
    town,
    city,
    postCode
  ) => {
    e.preventDefault();
    this.setState({ renderAddressAndUserDetails: false });
    this.setState({ addressStatus: true });
    // this.props.fetchUser();
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
            <Row>
              <Col>
                <ExploreUserDetails
                  renderAddressAndUserDetails={
                    this.state.renderAddressAndUserDetails
                  }
                />
              </Col>
              <Col>
                <ExploreAddress
                  renderAddressAndUserDetails={
                    this.state.renderAddressAndUserDetails
                  }
                />
              </Col>
            </Row>
            <div
              className="desktop-big-button"
              onClick={(e) => this.postUserDetailsAndAddress(e)}
            >
              <p className="desktop-big-button-text">Update Details</p>
            </div>
          </div>
        ) : (
          <></>
        )}
        {this.state.addressStatus === true ? <ExploreAddress /> : null}
        {this.state.userDetailsStatus === true ? <ExploreUserDetails /> : null}
      </>
    );
  }
}

export default ExploreMoreInfo;
