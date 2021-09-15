import ComingSoon from "./Components/Comingsoon";

import About from "./Components/About";
import Footer from "./Components/Footer";
import FooterForm from "./Components/FooterForm";
import Index from "./Components/Client/Sidebar/Index";
import Dashboard_home from "./Components/Client/Dashboard/Dashboard_home";
import Explore_home from "./Components/Client/Explore/Explore_home";
import Account_home from "./Components/Client/Account/Account_home";
import Details_home from "./Components/Client/Details/Details_home";
import Navbar from "./Components/Client/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../src/App.css";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <div id="fe-wrapper">
          <div id="left-col">
            <Index />
          </div>
          <div id="right-col">
            <Navbar />
            <Route path="/dashboard" exact component={Dashboard_home} />
            <Route path="/account" exact component={Account_home} />
            <Route path="/details" exact component={Details_home} />
            <Route path="/explore" exact component={Explore_home} />
          </div>
        </div>
      </Router>
      {/* <Row>
        <Col lg={2}>
          <Index />
        </Col>
        <Col lg={9} id="right-col">
          <div>dhdh</div>
        </Col>
      </Row> */}
      {/* <Navbar />
      <ComingSoon />
      <About />
      <FooterForm />
      <Footer /> */}
    </div>
  );
}

export default App;
