import ComingSoon from "./Components/Comingsoon";
import Navbar from "./Components/Navbar";
import Coming_soon_home from "./Components/Coming_soon_home";
import Success from "./Components/Success";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Coming_soon_home} />
        <Route path="/success" exact component={Success} />
      </Router>
    </div>
  );
}

export default App;
