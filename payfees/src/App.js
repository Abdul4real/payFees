import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/aboutUsPage";
import Home from "./pages/landingPage";
import TrackPayment from "./pages/TPayment";
import Contact from "./pages/contactPage";
import PaymentFormPage from "./components/Payment Form Landing Page/PaymentFormPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/track-payments" element={<TrackPayment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment-form" element={<PaymentFormPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
