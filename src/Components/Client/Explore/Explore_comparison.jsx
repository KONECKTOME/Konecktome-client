import React, { Component } from "react";
import "../../../css/Explore/Explore_comparison.css";
import Explore_details_right_col from "./Explore_details_right_col";

class Explore_comparison extends React.Component {
  render() {
    return (
      <div id="explore-details-wrapper">
        <div id="explore-details-header-wrapper">
          <p id="explore-details-header">Compare /</p>
        </div>
        <Explore_details_right_col />
      </div>
    );
  }
}

export default Explore_comparison;
