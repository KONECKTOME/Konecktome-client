import React, { Component } from 'react'
import '../css/ComingSoon2.css'
import { Container } from 'react-bootstrap'
import facebook from '../Assets/facebook_logo.svg'
import linkedIn from '../Assets/linkedin_logo.svg'
import twitter from '../Assets/twitter_logo.svg'

class ComingSoon2 extends Component {
  state = {}
  render() {
    return (
      <div id="second-coming-wrapper">
        <Container id="second-wrapper-div">
          <div>
            <p id="header-text">
              Get Notified <br></br> When we Launch
            </p>
          </div>
          <div id="form-div">
            <form>
              <input id="email-input" placeholder="Enter your email"></input>
              <button id="submit-button">Notify me</button>
            </form>
          </div>
          <div id="icons-wrapper" className="d-flex justify-content-between">
            <div>
              <img src={facebook} />
            </div>
            <div>
              <img src={twitter} />
            </div>
            <div>
              <img src={linkedIn} />
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default ComingSoon2
