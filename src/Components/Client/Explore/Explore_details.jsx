import React, { Component } from "react";
import Explore_details_right_col from "./Explore_details_right_col";
import { Link } from "react-router-dom";

class Explore_details extends React.Component {
  state = {
    arr: [1, 2],
  };
  render() {
    return (
      <div id="explore-details-wrapper">
        <div id="explore-details-header-wrapper">
          <Link to="/explore" className="links">
            <p id="explore-details-header">Explore /</p>
          </Link>
          <p id="explore-details-header">Some service provider name</p>
        </div>
        <Explore_details_right_col />
      </div>
    );
  }
}

export default Explore_details;
