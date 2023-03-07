import React, { Component } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <Footer />
      </>
    );
  }
}

export default Home;
