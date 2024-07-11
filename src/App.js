import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <ul>
          <li><a href="#home"/></li>
          <li><a href="#findVenue"/></li>
          <li><a href="#contactUs"/>Home</li>
          <li><a href="#faq"/>Home</li>
          <li><a href="#booking"/>Home</li>
        </ul>
      </div> 
      <Footer/>
    </div>
  );
}

export default App;
