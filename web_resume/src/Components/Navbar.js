import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isNight, setIsNight }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          IMRAN LATIF
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/experience"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Experience
            </Link>
          </li>

          <li className="nav-item">
            <a
              href="https://github.com/imran1503"
              className="nav-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          </li>

          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/imranalatif1503/"
              className="nav-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
          </li>

          <li className="nav-item">
            <a
              href="https://artemis1503.itch.io/"
              className="nav-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-itch-io" />
            </a>
          </li>

          <li className="nav-item">
            <button
              type="button"
              className="nav-theme-toggle"
              onClick={() => setIsNight((v) => !v)}
              aria-label={
                isNight ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              <i className={isNight ? "fas fa-sun" : "fas fa-moon"} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
