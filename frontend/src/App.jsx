import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResultsProvider } from "./context/ResultsContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Results from "./pages/Results";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <ResultsProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ResultsProvider>
  );
}
