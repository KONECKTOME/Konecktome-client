import React, { Component } from "react";
import ComingSoon from "./Comingsoon";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import ProblemSolution from "./ProblemSolution";
import FooterForm from "./FooterForm";

class Coming_soon_home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <ComingSoon />
        <ProblemSolution />
        <About />
        <FooterForm />
        <Footer />
      </div>
    );
  }
}

export default Coming_soon_home;