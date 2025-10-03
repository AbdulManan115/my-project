import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";

import Services from "./Page/Services";
import Contact from "./Page/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}
