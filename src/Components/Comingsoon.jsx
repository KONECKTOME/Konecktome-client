import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import illustration from '../Assets/background.svg'
import '../css/Comingsoon.css'

class Comingsoon extends Component {
  state = {}
  render() {
    return (
      <div id="landing-wrapper">
        <Container>
          <Row>
            <Col id="left-col2">
              <h3 id="coming-soon-text">Coming soon</h3>
              <h3 id="get-notified-text">
                Get Notified When <br></br> We Launch
              </h3>
              <form>
                <input type="text" placeholder="Enter your email" /> <br></br>
                <button id="btn">NOTIFY ME</button>
              </form>
            </Col>
            <Col id="right-col2">
              <img src={illustration} />
            </Col>
          </Row>
          {/* <div id="content-wrapper">
            <div id="right-col">
              <p id="right-col-header">Konecktome Coming Soon</p>
              <p id="right-col-text">
                Your very own personal details manager that connects your
                personal details with your accounts, making it effortless to
                manage your current accounts, create new accounts, switch
                accounts, make payments online, and so much more!
              </p>
            </div>
            <div id="left-col">
              <img src={illustration} />
            </div>
          </div> */}
        </Container>
      </div>
    )
  }
}

export default Comingsoon
