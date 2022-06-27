import React, { useContext, createContext, useState, useEffect } from "react";
import ComingSoon from "./Components/Comingsoon";
import About from "./Components/About";
import Footer from "./Components/Footer";
import FooterForm from "./Components/FooterForm";
import Index from "./Components/Client/Sidebar/Index";
import Dashboard_home from "./Components/Client/Dashboard/Dashboard_home";
import Explore_home from "./Components/Client/Explore/Explore_home";
import Account_home from "./Components/Client/Account/Account_home";
import Details_home from "./Components/Client/Details/Details_home";
import History_home from "./Components/Client/History/History_home";
import Navbar from "./Components/Client/Navbar/Navbar";
import Explore_comparison from "./Components/Client/Explore/Explore_comparison";
import Recommendations_home from "./Components/Client/Recommendations/Recommendations_home";
import Settings_home from "./Components/Client/Settings/Settings_home";
import Notifications_home from "./Components/Client/Notifications/Notifications_home";
import Favourites_home from "./Components/Client/Favourites/Favourites_home";
import Wishlist from "./Components/Client/Wishlist/Wishlist";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import "../src/App.css";
import { Row, Col } from "react-bootstrap";
import Explore_details from "./Components/Client/Explore/Explore_details";
import { UserDetailsContext } from "./Components/Client/Context/UserDetailsContext";
import { Alert } from "bootstrap";

const App = (props) => {
  const [userDetails, setUserDetails] = useState({});
  let user = { name: "Tania", loggedIn: true };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const id = props.match.params.userid;
    const response = await fetch(
      `http://localhost:3002/users/get-user-by-id/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const userDetails = await response.json();
    await setUserDetails(userDetails);
  };

  return (
    <div className="App">
      <Router>
        <div id="fe-wrapper">
          <div id="left-col">
            <Index />
          </div>
          <div id="right-col">
            <UserDetailsContext.Provider value={{ userDetails }}>
              <Navbar />
              <Route
                path="/dashboard/:userid"
                exact
                component={Dashboard_home}
              />
              <Route
                path="/dashboard/settings/:userid"
                exact
                render={(props) => (
                  <Settings_home fetchUser={() => getUser()} {...props} />
                )}
              />
              <Route
                path="/dashboard/account/:userid"
                exact
                component={Account_home}
              />
              <Route
                path="/dashboard/history/:userid"
                exact
                component={History_home}
              />
              <Route
                path="/dashboard/notifications/:userid"
                exact
                component={Notifications_home}
              />
              <Route
                path="/dashboard/favourites/:userid"
                exact
                component={Favourites_home}
              />
              <Route
                path="/dashboard/wishlist/:userid"
                exact
                component={Wishlist}
              />
            </UserDetailsContext.Provider>

            <Route
              path="/dashboard/explore/:userid"
              exact
              component={Explore_home}
            />
            <Route
              path="/dashboard/explore/details/:userid/:dealId"
              exact
              component={Explore_details}
            />

            <Route
              path="/dashboard/recommendations/:userid"
              exact
              component={Recommendations_home}
            />
            <Route
              path="/dashboard/explore/compare/:userid/:dealId"
              exact
              component={Explore_comparison}
            />
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
};

export default App;
