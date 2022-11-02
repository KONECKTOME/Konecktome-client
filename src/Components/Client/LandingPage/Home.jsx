import React, { Component } from "react";
import Hero from "./Hero";
import About from "../../About";
import Footer from "./Footer";
import HeroNavbar from "./HeroNavbar";
import AboutUs from "./AboutUs";
import USP from "./USP";

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeroNavbar />
        <Hero />
        <AboutUs />
        <USP />
        <Footer />
      </div>
    );
  }
}

export default Home;
