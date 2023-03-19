import React, { Component } from "react";
import Articles from "./Articles";
import Footer from "./Footer";
import Hero from "./Hero";
import LeadingBrands from "./LeadingBrands";
import Navbar from "./Navbar";
import Services from "./Services";

class Home extends Component {
  state = {};
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
