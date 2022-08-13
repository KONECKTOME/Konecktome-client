import React, { Component } from "react";
import { Link } from "react-router-dom";
import ExploreUserDetails from "./ExploreUserDetails";
import ExploreAddress from "./ExploreAddress";
import { Row, Col } from "react-bootstrap";

class ExploreMoreInfo extends React.Component {
  state = {
    userDetails: {
      phone: "",
      profession: "",
      gender: "",
      dob: "",
    },
    userDetailsStatus: false,
    addressStatus: false,
    success: false,
    error: false,
    emptyfields: false,
    renderAddressAndUserDetails: false,
  };

  componentDidMount = () => {
    alert(this.props.userDetailsStatus);
    alert(this.props.addressStatus);
    if (
      this.props.userDetailsStatus === true &&
      this.props.addressStatus === true
    ) {
      this.setState({ renderAddressAndUserDetails: true });
    } else if (
      this.props.addressStatus === true &&
      this.props.userDetailsStatus === false
    ) {
      this.setState({ addressStatus: true });
    } else if (
      this.props.userDetailsStatus === true &&
      this.props.addressStatus === false
    ) {
      this.setState({ userDetailsStatus: true });
    }
  };

  updateUserDetails = (e) => {
    const userDetails = this.state.userDetails;
    const id = e.currentTarget.id;
    userDetails[id] = e.currentTarget.value;
    this.setState({ userDetails });
  };

  editProfessionAndDOB = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3002/users/update-dob-profession`,
      {
        method: "PUT",
        body: JSON.stringify({
          userId: this.props.userDetails._id,
          dob: this.state.userDetails.dob,
          profession: this.state.userDetails.profession,
          phone: this.state.userDetails.phone,
          gender: this.state.userDetails.gender,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const details = await response.json();
    if (details.message === "User profession and co updated!") {
      this.setState({
        success: true,
        userDetails: {
          phone: "",
          profession: "",
          gender: "",
          dob: "",
        },
      });
      setTimeout(() => this.setState({ success: false }), 1500);
      if (this.props.addressStatus === true) {
        this.setState({ addressStatus: true, userDetailsStatus: false });
      }
    } else if (details.message === "ERROR!") {
      this.setState({
        error: true,
      });
      setTimeout(() => this.setState({ error: false }), 1500);
    }
  };
  render() {
    return (
      <div>
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
                <ExploreUserDetails />
              </Col>
              <Col>
                <ExploreAddress />
              </Col>
            </Row>
          </div>
        ) : null}
        {this.state.addressStatus === true ? <ExploreAddress /> : null}
        {this.state.userDetailsStatus === true ? <ExploreUserDetails /> : null}
      </div>
    );
  }
}

export default ExploreMoreInfo;
