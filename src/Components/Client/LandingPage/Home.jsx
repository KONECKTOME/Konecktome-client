import React, { Component } from "react";
import Hero from "./Hero";
import About from "../../About";
import Footer from "./Footer";
import HeroNavbar from "./HeroNavbar";

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeroNavbar />
        <Hero />
        <About />
        <Footer />
      </div>
    );
  }
}

export default Home;
