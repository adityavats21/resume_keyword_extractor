#!/bin/bash

echo "🚀 Setting up modern UI frontend..."

# Create folders
mkdir -p src/components src/pages src/context

# ---------------- index.js ----------------
cat > src/index.js << 'FILE'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
FILE

# ---------------- index.css ----------------
cat > src/index.css << 'FILE'
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}
body {
  background: linear-gradient(135deg, #0b0f1a, #1b1f2d);
  color: white;
}
a { text-decoration: none; }
FILE

# ---------------- ResultsContext.js ----------------
cat > src/context/ResultsContext.js << 'FILE'
import { createContext } from "react";

const ResultsContext = createContext();
export default ResultsContext;
FILE

# ---------------- App.jsx ----------------
cat > src/App.jsx << 'FILE'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Results from "./pages/Results";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ResultsContext from "./context/ResultsContext";

export default function App() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <ResultsContext.Provider value={{ results, setResults, loading, setLoading, error, setError }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ResultsContext.Provider>
  );
}
FILE

# ---------------- Navbar.jsx ----------------
cat > src/components/Navbar.jsx << 'FILE'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%",
      padding: "20px",
      backdropFilter: "blur(20px)",
      background: "rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      zIndex: 999
    }}>
      <div style={{ maxWidth: "1200px", margin: "auto", display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#4dbdff" }}>ResumeAI</h1>
        <div style={{ display: "flex", gap: "25px" }}>
          <Link style={{ color: "#ccc" }} to="/">Home</Link>
          <Link style={{ color: "#ccc" }} to="/results">Results</Link>
          <Link style={{ color: "#ccc" }} to="/about">About</Link>
          <Link style={{ color: "#ccc" }} to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
FILE

# ---------------- FileUpload.jsx ----------------
cat > src/components/FileUpload.jsx << 'FILE'
import { useState, useContext } from "react";
import ResultsContext from "../context/ResultsContext";

export default function FileUpload() {
  const { setResults, setLoading, setError } = useContext(ResultsContext);
  const [file, setFile] = useState(null);

  const upload = async () => {
    if (!file) return setError("Please upload a PDF");

    setLoading(true);

    const fd = new FormData();
    fd.append("resume", file);

    try {
      const res = await fetch("http://127.0.0.1:5000/extract", {
        method: "POST",
        body: fd
      });

      const data = await res.json();
      setResults(data);

      window.location.href = "/results";
    } catch (e) {
      setError("Backend error");
    }

    setLoading(false);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <input type="file" accept="application/pdf" onChange={e => setFile(e.target.files[0])} />
      <button onClick={upload} style={{
        marginTop: "20px",
        padding: "10px 20px",
        background: "linear-gradient(45deg,#9d4dff,#4dbdff)",
        borderRadius: "8px",
        color: "#fff"
      }}>
        Extract Keywords
      </button>
    </div>
  );
}
FILE

# ---------------- Home.jsx ----------------
cat > src/pages/Home.jsx << 'FILE'
import FileUpload from "../components/FileUpload";

export default function Home() {
  return (
    <div style={{ paddingTop: "150px", textAlign: "center" }}>
      <h1 style={{ fontSize: "40px", fontWeight: "700", color: "#4dbdff" }}>
        AI Resume Keyword Extractor
      </h1>
      <FileUpload />
    </div>
  );
}
FILE

# ---------------- Results.jsx ----------------
cat > src/pages/Results.jsx << 'FILE'
import { useContext } from "react";
import ResultsContext from "../context/ResultsContext";

export default function Results() {
  const { results } = useContext(ResultsContext);

  if (!results) return <h1 style={{ paddingTop: "150px", textAlign: "center" }}>No results yet.</h1>;

  return (
    <div style={{ paddingTop: "150px", textAlign: "center" }}>
      <h1 style={{ color: "#4dbdff", marginBottom: "20px" }}>Results</h1>
      <pre style={{ textAlign: "left", margin: "auto", width: "400px" }}>
        {JSON.stringify(results, null, 2)}
      </pre>
    </div>
  );
}
FILE

# ---------------- About.jsx ----------------
cat > src/pages/About.jsx << 'FILE'
export default function About() {
  return (
    <h1 style={{ paddingTop: "150px", textAlign: "center" }}>About ResumeAI</h1>
  );
}
FILE

# ---------------- Contact.jsx ----------------
cat > src/pages/Contact.jsx << 'FILE'
export default function Contact() {
  return (
    <h1 style={{ paddingTop: "150px", textAlign: "center" }}>Contact — Made by Aditya Vats ❤️</h1>
  );
}
FILE

echo "✅ UI Frontend setup completed!"
