import "./App.css";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/home.js";
import Experience from "./Components/pages/Experience.js";
import ContactPage from "./Components/pages/ContactPage.js";
import { useLocation } from "react-router-dom";
import { initGA, trackPage } from "./Components/Analytics";

function App() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPage(location.pathname);
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/experience" Component={Experience} />
        <Route path="/contactMe" Component={ContactPage} />
        <Route path="/" Component={Home} />
        <Route path="/IL_Web_Resume" Component={Home} />
        <Route path="*" Component={Home} />
      </Routes>
    </>
  );
}
export default App;
