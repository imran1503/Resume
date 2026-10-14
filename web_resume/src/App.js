import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/pages/home.js";
import Experience from "./Components/pages/Experience.js";
import ContactPage from "./Components/pages/ContactPage.js";
import { initGA, trackPage } from "./Components/Analytics";

function App() {
  const location = useLocation();
  const [isNight, setIsNight] = useState(() => {
    const hour = new Date().getHours();
    return hour >= 19 || hour < 7;
  });

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPage(location.pathname);
  }, [location]);

  return (
    <>
      <Navbar isNight={isNight} setIsNight={setIsNight} />
      <Routes>
        <Route path="/experience" element={<Experience isNight={isNight} />} />
        <Route path="/contactMe" element={<ContactPage isNight={isNight} />} />
        <Route path="/" element={<Home isNight={isNight} />} />
        <Route path="/IL_Web_Resume" element={<Home isNight={isNight} />} />
        <Route path="*" element={<Home isNight={isNight} />} />
      </Routes>
    </>
  );
}

export default App;
