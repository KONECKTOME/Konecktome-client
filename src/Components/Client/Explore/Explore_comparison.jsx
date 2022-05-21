import React, { Component } from "react";
import "../../../css/Explore/Explore_comparison.css";
import Explore_details_right_col from "./Explore_details_right_col";
import Explore_details_left_col from "./Explore_details_left_col";

class Explore_comparison extends React.Component {
  render() {
    return (
      <div id="explore-details-wrapper">
        <div id="explore-details-header-wrapper">
          <p id="explore-details-header">Compare /</p>
        </div>
        <div id="explore-details-inner-wrapper">
          <Explore_details_right_col />
          <Explore_details_left_col />
        </div>
      </div>
    );
  }
}

export default Explore_comparison;
