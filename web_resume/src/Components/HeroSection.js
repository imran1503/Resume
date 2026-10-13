import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-photo">
          <img
            src={process.env.PUBLIC_URL + "/images/ILPhoto2.jpg"}
            alt="Imran Latif"
          />
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow">FULL-STACK DEVELOPER</p>

          <h1 className="hero-headline">
            Hi, I'm Imran.
            <br />I build <span className="accent">web apps</span> that
            <br />
            ship and scale.
          </h1>

          <p className="hero-lede">
            I build full-stack web apps with a passion for robotics and
            simulation. Recent work spans React and Node on the front end,
            Python and ROS for autonomous systems, and game tooling for
            user-generated content.
          </p>

          <div className="hero-actions">
            <Link to="/experience" className="btn btn--primary">
              View work
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Download resume
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
              </svg>
            </a>
          </div>

          <div className="hero-status">
            <span>
              <i className="dot" /> Open to work
            </span>
            <span>Based in Ontario, Canada</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
