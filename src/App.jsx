import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Page1 from "./pages/page1.jsx"; 
import Dash from "./pages/dash.jsx";
import Footer from "./components/Footer.jsx"
import ScrollToHash from "./components/ScrollToHash";
import Partner from "./pages/Partner.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/Become a partner" element={<Partner />}/>
        </Routes>
        <Footer />
      </div>
      
      
      
    </Router>
    
      );
}

export default App; 