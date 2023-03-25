import React, { Component } from "react";
import Articles from "./Articles";
import Footer from "./Footer";
import Hero from "./Hero";
import LeadingBrands from "./LeadingBrands";
import Navbar from "./Navbar";
import Services from "./Services";

class Home extends Component {
  state = {};

  componentDidMount = async () => {
    this.impression();
  };

  impression = async () => {
    const response = await fetch(
      `http://localhost:3002/impressions/new-impressions`,
      {
        method: "POST",
        body: JSON.stringify({
          page: "Landing",
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    let landing = await response.json();
  };
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <Services />
        <Articles />
        {/* <LeadingBrands /> */}
        <Footer />
      </>
    );
  }
}

export default Home;
