import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import ContactUs from "./ContactUs";
import FindVenue from "./FindVenue";
import FAQ from "./FAQ";
import Booking from "./Booking";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Router>
        <div className="content">
          <Routes>
            <Route path="/project2-3125" element={<Home />}/>
            <Route path="/findvenue" element={<FindVenue />}/>
            <Route path="/contactus" element={<ContactUs />}/>
            <Route path="/faq" element={<FAQ />}/>
            <Route path="/booking" element={<Booking />}/>
          </Routes>
        </div> 
        </Router>
        <Footer/>
      </div>
  );
}

export default App;
