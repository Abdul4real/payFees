import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./src/pages/aboutUsPage";
import Home from "./src/pages/landingPage";
import TrackPayment from "./src/pages/TPayment";
import Contact from "./src/pages/contactPage";


function App() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Track-Payments" element={<TrackPayment />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    );
  }
  
  export default App;
  