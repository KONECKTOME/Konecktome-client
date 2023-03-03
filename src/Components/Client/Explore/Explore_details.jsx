import React from "react";
import Explore_details_right_col from "./Explore_details_right_col";
import { Link, withRouter } from "react-router-dom";
import Explore_details_left_col from "./Explore_details_left_col";

class Explore_details extends React.Component {
  state = {
    arr: [1, 2],
  };

  render(props) {
    return (
      <>
        <div id="explore-details-wrapper">
          <div id="explore-details">
            <Explore_details_right_col />
            <Explore_details_left_col />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Explore_details);
