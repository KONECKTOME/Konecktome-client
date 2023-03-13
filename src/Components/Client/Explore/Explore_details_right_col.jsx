import React, { Component } from "react";
import "../../../css/Explore/Explore_details.css";
import placeholder_image from "../../../Assets/nav-placeholder-image.png";
import { Link, withRouter } from "react-router-dom";

import Rating from "../../Reusable/Rating";
class Explore_details_right_col extends React.Component {
  state = {
    reviews: [1, 2, 3],
  };

  render(props) {
    return (
      <div id="right-wrapper">
        <div id="right-with-compare">
          <div id="explore-details-inner-right">
            <div id="explore-details-sub-inner-right-subheader-wrapper">
              <div>
                <p className="desktop-header">{this.props.brand.brandName}</p>
                <p className="desktop-sub-header">
                  {this.props.brand.brandDescription}
                </p>
              </div>
            </div>
            <div id="explore-details-sub-header-inner-wrapper">
              <Rating rating="4.5" size="20" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Explore_details_right_col);
