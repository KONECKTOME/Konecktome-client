import ComingSoon from "./Components/Comingsoon";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import FooterForm from "./Components/FooterForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ComingSoon />
      <About />
      <FooterForm />
      <Footer />
    </div>
  );
}

export default App;
