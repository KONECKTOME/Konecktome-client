import React, { Component } from "react";
import life_insurance from "../../../Assets/reco-life-insurance.svg";
import home_icon from "../../../Assets/reco-home-icon.svg";
import mortgage_icon from "../../../Assets/reco-mortgage.svg";
import pet_icon from "../../../Assets/reco-pet-icon.svg";
import health_icon from "../../../Assets/reco-health.svg";
import car_icon from "../../../Assets/reco-car-insurance.svg";
import "../../../css/Details/index.css";

class Details_home extends React.Component {
  state = {};
  render() {
    return (
      <div id="details-wrapper">
        <div className="details-cards">
          <div className="details-card">
            <div className="details-card-inner-div">
              <div className="details-image-holder">
                <img src={home_icon} className="details-card-icon" />
              </div>
              <div>
                <p className="details-inner-text">Personal</p>
              </div>
            </div>
          </div>
          <div className="details-card">
            <div className="details-card-inner-div">
              <div className="details-image-holder">
                <img src={home_icon} className="details-card-icon" />
              </div>
              <div>
                <p className="details-inner-text">Home</p>
              </div>
            </div>
          </div>
          <div className="details-card">
            <div className="details-card-inner-div">
              <div className="details-image-holder">
                <img src={car_icon} className="details-card-icon" />
              </div>
              <div>
                <p className="details-inner-text">Vehicles</p>
              </div>
            </div>
          </div>
          <div className="details-card">
            <div className="details-card-inner-div">
              <div className="details-image-holder">
                <img src={health_icon} className="details-card-icon" />
              </div>
              <div>
                <p className="details-inner-text">Health</p>
              </div>
            </div>
          </div>
          <div className="details-card">
            <div className="details-card-inner-div">
              <div className="details-image-holder">
                <img src={home_icon} className="details-card-icon" />
              </div>
              <div>
                <p className="details-inner-text">Financial</p>
              </div>
            </div>
          </div>
          <div className="details-card">
            <div className="details-card-inner-div">
              <div className="details-image-holder">
                <img src={home_icon} className="details-card-icon" />
              </div>
              <div>
                <p className="details-inner-text">Legal</p>
              </div>
            </div>
          </div>
          <div className="details-card">
            <div className="details-card-inner-div">
              <div className="details-image-holder">
                <img src={pet_icon} className="details-card-icon" />
              </div>
              <div>
                <p className="details-inner-text">Pets</p>
              </div>
            </div>
          </div>
          <div className="details-card">
            <div className="details-card-inner-div">
              <div className="details-image-holder">
                <img src={home_icon} className="details-card-icon" />
              </div>
              <div>
                <p className="details-inner-text">Others</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details_home;
