import "./App.css";
import Navbar from "./Components/Navbar";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/home.js";
import Experience from "./Components/pages/Experience.js";
import ContactPage from "./Components/pages/ContactPage.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/experience" Component={Experience} />
        <Route path="/contactMe" Component={ContactPage} />
        <Route path="/" Component={Home} />
        <Route path="/IL_Web_Resume" Component={Home} />
        <Route path="*" Component={Home} />
      </Routes>
    </Router>
  );
}
export default App;
