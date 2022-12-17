import React, { Component } from "react";
import ComingSoon from "./Comingsoon";
import Navbar from "./Navbar";
import USP from "../Components/USP";
import Footer from "./Footer";
import FooterForm from "./FooterForm";
import About from "./About";

class Coming_soon_home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <ComingSoon />
        <About />
        <USP />
        <FooterForm />
        <Footer />
      </div>
    );
  }
}

export default Coming_soon_home;
