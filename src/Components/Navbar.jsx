import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import logo from '../Assets/konecktome_logo.svg'
import stayTuned from '../Assets/stay_tuned.svg'
import '../css/Navbar.css'

class Navbar extends Component {
  state = {}
  render() {
    return (
      <Container>
        <div className="d-flex justify-content-between" id="logo-container">
          <img src={logo} />
          <img src={stayTuned} id="stay-tuned" />
        </div>
      </Container>
    )
  }
}

export default Navbar
