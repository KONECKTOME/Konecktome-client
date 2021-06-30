import React, { Component } from 'react'
import '../css/AboutUs.css'
import aboutUsIcon from '../Assets/about_us_icon.svg'

class About extends Component {
  state = {}
  render() {
    return (
      <div className="container" id="all-wrapper">
        <div>
          <div id="about-text-wrapper">
            <p className="about-text">
              KONECKTOME creates an avenue for you to have easy access to a
              secure, centralised platform where your personal details data can
              be stored, easily retrieved and used for any service you want to
              use it for, without any hassle.
            </p>
          </div>
          <div id="about-second-text-wrapper">
            <p className="about-text">
              We focus on personalisation, ease, and integration with your
              personal data, to enable you to efficiently sign up and purchase
              various services and products.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div id="image-holder-div">
              <img src={aboutUsIcon} />
            </div>
            <div>
              <p className="card-texts">
                KONECKTOME enables you to provide automatically full details to
                the accounts you have access to.
              </p>
            </div>
          </div>
          <div className="card">
            <div id="image-holder-div">
              <img src={aboutUsIcon} />
            </div>
            <div>
              <p className="card-texts">
                KONECTOME will recognise the website the user is visiting via
                its browser extension and automatically log them in.
              </p>
            </div>
          </div>
          <div className="card">
            <div id="image-holder-div">
              <img src={aboutUsIcon} />
            </div>
            <div className="card-texts">
              <p>
                Changes made within KONECTOME will require the use of biometrics
                (fingerprint and face recognition) to approve and update these
                changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
