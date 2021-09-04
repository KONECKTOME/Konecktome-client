import ComingSoon from "./Components/Comingsoon";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import FooterForm from "./Components/FooterForm";
import Index from "./Components/Client/Sidebar/Index";
import Dashboard_home from "./Components/Client/Dashboard/Dashboard_home";
import "../src/App.css";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div id="fe-wrapper">
        <div id="left-col">
          <Index />
        </div>
        <div id="right-col">
          <Dashboard_home />
        </div>
      </div>
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
