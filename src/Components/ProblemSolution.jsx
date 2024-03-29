import React, { Component } from "react";
import "../css/ProblemSolution.css";

class ProblemSolution extends React.Component {
  render() {
    return (
      <div id="problem-solution-wrapper">
        <h1 id="problem-soultion-header">The Problem</h1>
        <div id="ps-card-holder">
          <div className="ps-card">
            <p>
              The amount of insurance providers, financial services, and home
              utilities companies available to us are overwhelming which in turn
              doesn't allow us know which one is right for us.
            </p>
          </div>
          <div className="ps-card">
            <p id="ps-card-text">
              There does not seem to be an unbiased personal touch in helping us
              through our decision-making processes, leading us to end up with
              policies that were not quite what we wanted.
            </p>
          </div>
          <div className="ps-card">
            <p>
              Certain exclusions and terms can even leave us unqualified or
              without cover and we may not even know it.
            </p>
          </div>
        </div>
        {/* <div id="ps-card-holder">
          <div id="arrow-holder">
            <img src={downArrow} id="arrow" />
          </div>
          <div id="arrow-holder">
            <img src={downArrow} id="arrow" />
          </div>
          <div id="arrow-holder">
            <img src={downArrow} id="arrow" />
          </div>
        </div> */}
        <div id="solution-wrapper">
          <h1 id="problem-soultion-header">Our Solution</h1>
          <div id="ps-card-holder">
            <div className="ps-card">
              <p>
                At KONECKTOME, we provide secure storage and synchronisation of
                your personal and financial data to enable quick and easy
                purchases or switching of services.
              </p>
            </div>
            <div className="ps-card">
              <p>
                At KONECKTOME, we provide personal recommendation of the best
                financial services or utility provider that is specific to your
                needs.
              </p>
            </div>
            <div className="ps-card">
              <p>
                At KONECKTOME, we provide management of subscription payments
                that allows the need for multiple apps and websites to become
                obsolete.
              </p>
            </div>
          </div>
          {/* <div id="ps-card-holder">
            <div id="arrow-holder">
              <img src={tick} id="arrow" />
            </div>
            <div id="arrow-holder">
              <img src={tick} id="arrow" />
            </div>
            <div id="arrow-holder">
              <img src={tick} id="arrow" />
            </div>
          </div> */}
        </div>
        {/* <div id="ps-card-holder">
          <div id="ps-card">
            <div className="problem-holder">
              <p>
                We are continuously faced with making life decisions on which
                growing list of insurances, financial services, and home
                utilities to purchase from.
              </p>
            </div>
            <div id="arrow-holder">
              <img src={downArrow} id="arrow" />
            </div>
            <div className="problem-holder">
              <p>
                At Konecktome, we provide secure storage and synchronisation of
                your personal and financial data to enable quick and easy
                purchases or switching of services.
              </p>
            </div>
          </div>
          <div id="ps-card">
            <div className="problem-holder">
              <p>
                There does not seem to be an unbiased personal touch in helping
                us through our decision-making processes, leading us to end up
                with policies that were not quite what we wanted.
              </p>
            </div>
            <div id="arrow-holder">
              <img src={downArrow} id="arrow" />
            </div>
            <div className="problem-holder">
              <p>
                At Konecktome, we provide personal recommendation of the best
                financial services or utility provider that is specific to your
                needs.
              </p>
            </div>
          </div>
          <div id="ps-card">
            <div className="problem-holder">
              <p>
                Certain exclusions and terms can even leave us unqualified or
                without cover and we may not even know it.
              </p>
            </div>
            <div id="arrow-holder">
              <img src={downArrow} id="arrow" />
            </div>
            <div className="problem-holder">
              <p>
                At Konecktome, we provide Management of subscription payments
                that allows the need for multiple apps and websites to become
                obsolete.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default ProblemSolution;
