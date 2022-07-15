import React, { Component } from "react";
import "../../../css/Explore/Explore_comparison.css";
import "../../../css/Explore/Explore_details.css";
import Explore_details_right_col from "./Explore_details_right_col";
import Explore_details_left_col from "./Explore_details_left_col";

class Explore_comparison extends React.Component {
  state = {
    deal: [],
    loading: true,
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
    console.log(this.state.deal);
  };
  render(props) {
    return (
      <div id="explore-both-wrapper">
        <div>
          <Explore_details_right_col
            deal={this.state.deal}
            loading={this.state.loading}
            {...props}
          />
          <div>
            <Explore_details_left_col deal={this.state.deal} {...props} />
          </div>
        </div>
      </div>
    );
  }
}

export default Explore_comparison;
