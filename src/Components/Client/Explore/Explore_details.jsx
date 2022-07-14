import React, { Component, createRef } from "react";
import Explore_details_right_col from "./Explore_details_right_col";
import { Link, withRouter } from "react-router-dom";
import Explore_details_left_col from "./Explore_details_left_col";

class Explore_details extends React.Component {
  constructor(props) {
    super(props);
    this.Ref = React.createRef();
  }
  state = {
    arr: [1, 2],
    deal: [],
    loading: true,
    show: null,
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
  // show_comparison = createRef();
  // show_comp = (data) => {
  //   this.show_comparison.current.showCompare();
  // };
  render(props) {
    return (
      <div id="explore-details-wrapper">
        <div id="explore-details-header-wrapper">
          <Link to="/explore" className="links">
            <p id="explore-details-header">Explore /</p>
          </Link>
          <p id="explore-details-header">Some service provider name</p>
        </div>
        <div id="explore-details">
          <Explore_details_right_col
            deal={this.state.deal}
            loading={this.state.loading}
            {...props}
          />
          <Explore_details_left_col />
        </div>
      </div>
    );
  }
}

export default withRouter(Explore_details);
