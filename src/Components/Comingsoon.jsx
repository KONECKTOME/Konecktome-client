import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import illustration from '../Assets/background.svg'
import '../css/Comingsoon.css'
import facebook from '../Assets/facebook_logo.svg'
import linkedIn from '../Assets/linkedin_logo.svg'
import twitter from '../Assets/twitter_logo.svg'
import emailjs from 'emailjs-com'

class Comingsoon extends Component {
  state = {
    details: {
      name: '',
      email: '',
    },
    emailExists: false,
    successText: false,
    noTextError: false,
    subscribe: false,
  }

  updateDetails = (e) => {
    const details = this.state.details
    const id = e.currentTarget.id
    details[id] = e.currentTarget.value
    this.setState({ details })
  }

  register = async (e) => {
    e.preventDefault()
    if (this.state.details.name === '' || this.state.details.email === '') {
      this.setState({
        noTextError: true,
      })
      setTimeout(() => {
        this.setState({
          noTextError: false,
        })
      }, 1200)
    } else {
      const response = await fetch('http://localhost:3002/mail/new-user', {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.details.name,
          email: this.state.details.email,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      })
      const details = await response.json()
      if (details.message === 'This email already exists') {
        this.setState({
          emailExists: true,
        })
        setTimeout(() => {
          this.setState({
            emailExists: false,
          })
        }, 1200)
      } else if (details.message === 'Sign up successful') {
        if (this.state.subscribe === true) {
          const response = await fetch('http://localhost:3002/mail/marketing', {
            method: 'POST',
            body: JSON.stringify({
              name: this.state.details.name,
              email: this.state.details.email,
            }),
            headers: {
              'Content-type': 'application/json',
            },
          })
          this.setState({
            details: {
              name: '',
              email: '',
            },
            successText: true,
          })
          setTimeout(() => {
            this.setState({
              successText: false,
            })
          }, 1200)
        } else if (this.state.subscribe === false) {
          this.setState({
            details: {
              name: '',
              email: '',
            },
            successText: true,
          })
          setTimeout(() => {
            this.setState({
              successText: false,
            })
          }, 1200)
        }
      }
    }
  }
  render() {
    return (
      <div id="landing-wrapper">
        <Container>
          <Row>
            <Col id="left-col2">
              <h3 id="coming-soon-text">Coming soon</h3>
              <h3 id="get-notified-text">
                Get notified when <br></br> we launch
              </h3>
              <form>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={this.state.details.name}
                  onChange={(e) => this.updateDetails(e)}
                />
                <br></br>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={this.state.details.email}
                  onChange={(e) => this.updateDetails(e)}
                />
                <br></br>
                {this.state.noTextError === true ? (
                  <p id="no-text-error">Fields cannot be empty.</p>
                ) : (
                  <p></p>
                )}
                {this.state.successText === true ? (
                  <p id="success-text">
                    You have successfully signed up on our platform.
                  </p>
                ) : (
                  <p></p>
                )}
                {this.state.emailExists === true ? (
                  <p id="no-text-error">This email already exists.</p>
                ) : (
                  <p></p>
                )}
                <button id="btn" onClick={(e) => this.register(e)}>
                  NOTIFY ME
                </button>
              </form>
              <div id="icons-wrapper">
                <div>
                  <img src={facebook} />
                </div>
                <div>
                  <img src={linkedIn} />
                </div>
              </div>
            </Col>
            <Col id="right-col2">
              <img src={illustration} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Comingsoon
