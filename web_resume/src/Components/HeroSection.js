import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

// ─────────────────────────────────────────────────────────
// EDIT THIS LIST — add/remove words freely.
// The layout auto-distributes whatever is here.
// ─────────────────────────────────────────────────────────
const WORDS = [
  "React",
  "Node.js",
  "PHP",
  "MySQL",
  "AWS",
  "Docker",
  "JWT",
  "OAuth 2",
  "Python",
  "ROS",
  "Linux",
  "Tailwind",
  "Documentation",
  "Testing",
  "CI/CD",
  "Git",
  "Python",
];
// ─────────────────────────────────────────────────────────

function makePositions(count) {
  const slots = [];
  const sides = ["left", "right"];
  const bands = [8, 16, 24, 76, 84, 92]; // 3 rows top, 3 rows bottom
  const slotsPerSide = Math.max(bands.length, Math.ceil(count / 2));

  // Distribute rows evenly in the top and bottom bands
  const tops = [];
  for (let i = 0; i < slotsPerSide; i++) {
    const t = i / (slotsPerSide - 1 || 1);
    // Half in top band (4%–26%), half in bottom band (74%–96%)
    if (i < slotsPerSide / 2) {
      tops.push(4 + t * 2 * 22);
    } else {
      tops.push(74 + (t - 0.5) * 2 * 22);
    }
  }

  for (const side of sides) {
    for (const top of tops) {
      slots.push({ side, top, offset: 3 + Math.random() * 5 });
    }
  }

  // Shuffle so the first N picks aren't always left-side-first
  for (let i = slots.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [slots[i], slots[j]] = [slots[j], slots[i]];
  }

  return slots.slice(0, count);
}

function HeroSection({ isNight = false }) {
  const [positions] = useState(() => makePositions(WORDS.length));

  return (
    <section className={`hero${isNight ? " hero--night" : ""}`}>
      <div className="hero-grid" aria-hidden="true">
        {WORDS.map((word, i) => {
          const { side, top, offset } = positions[i] || {
            side: i % 2 === 0 ? "left" : "right",
            top: 10 + (i % 5) * 18,
            offset: 5,
          };
          return (
            <span
              key={word}
              className="hero-word"
              style={{
                top: `${top}%`,
                [side]: `${offset}%`,
              }}
            >
              {word}
            </span>
          );
        })}
      </div>

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
              href="/IL_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              View Resume
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
