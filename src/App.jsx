import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/about";
import services from "./Page/Services";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<about />} />
        <Route path="/services" element={<services/>}/> 
      </Routes>
    </Router>
  );
}
