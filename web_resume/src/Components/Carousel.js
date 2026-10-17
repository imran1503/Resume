import React, { useState, useRef } from "react";
import gsap from "gsap";
import "./Carousel.css";

const items = [
  {
    src: "/images/2200Hang_New.jpeg",
    title: "FIRST Stronghold 2016",
    tag: "ROBOTICS",
  },
  {
    src: "/images/vflHome.png",
    title: "Valorant Fantasy League",
    tag: "React / Docker / C / Team Lead",
  },
  {
    src: "/images/insulplantHome.png",
    title: "InsulPlant",
    tag: "PHP / MYSQL",
  },
  {
    src: "/images/firstSteamworks.png",
    title: "FIRST Steamworks 2017",
    tag: "",
  },
  {
    src: "/images/carlaRos.png",
    title: "Autonomous Path Planning",
    tag: "ROS / Carla",
  },
  {
    src: "/images/carlaCamera.png",
    title: "Autonomous Camera Vision",
    tag: "ROS / Carla",
  },
  {
    src: "/images/BRIntro.png",
    title: "The Beat Revival Project",
    tag: "Reverse engineering",
  },
  {
    src: "/images/playerugc.png",
    title: "User Generated Content",
    tag: "GAME MODDING",
  },
];

export default function Carousel({ isNight }) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cardRef = useRef(null);
  const slashRef = useRef(null);

  const handleSwipe = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Google Analytics Event Tracking
    if (typeof window.gtag === "function") {
      window.gtag("event", "carousel_interaction", {
        event_category: "Engagement",
        event_label: items[index].title,
        value: index + 1,
      });
    }

    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    tl.set(slashRef.current, {
      x: "100vw",
      y: "-50vh",
      rotation: -45,
      opacity: 0,
    });
    tl.set(cardRef.current, { x: 0, y: 0, rotation: 0, opacity: 1, scale: 1 });

    tl.to(slashRef.current, {
      x: "-100vw",
      y: "50vh",
      opacity: 1,
      duration: 0.3,
      ease: "power2.in",
    });

    tl.to(
      cardRef.current,
      {
        x: -20,
        y: 10,
        duration: 0.05,
        repeat: 3,
        yoyo: true,
        ease: "none",
      },
      "-=0.1",
    );

    tl.to(cardRef.current, {
      x: "-100vw",
      y: "50vh",
      rotation: -15,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    });

    tl.to(
      slashRef.current,
      {
        opacity: 0,
        duration: 0.1,
      },
      "<",
    );

    tl.call(() => {
      setIndex((prev) => (prev + 1) % items.length);
    });

    tl.fromTo(
      cardRef.current,
      { x: 0, y: "-100vh", rotation: 10, opacity: 0, scale: 0.95 },
      {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      },
    );
  };

  return (
    <section className={`carousel-wrapper ${isNight ? "carousel-night" : ""}`}>
      <div className="carousel-header">
        <span className="eyebrow">PROJECTS // DATA STREAM</span>
        <button
          className="hud-btn"
          onClick={handleSwipe}
          disabled={isAnimating}
        >
          [ BREACH FILE ]
        </button>
      </div>

      <div className="holo-desk">
        <div className="holo-grid"></div>

        <div className="holo-card-wrapper" ref={cardRef}>
          <div className="holo-image-container">
            <img
              src={process.env.PUBLIC_URL + items[index].src}
              alt={items[index].title}
            />
            <div className="holo-card-scanlines"></div>
          </div>

          <div className="carousel-info">
            <span className="tag">
              FILE {String(index + 1).padStart(2, "0")} // {items[index].tag}
            </span>
            <h3>{items[index].title}</h3>
          </div>

          <div className="hud-corner top-left"></div>
          <div className="hud-corner top-right"></div>
          <div className="hud-corner bottom-left"></div>
          <div className="hud-corner bottom-right"></div>
        </div>
      </div>

      <div className="cyber-slash" ref={slashRef}></div>
    </section>
  );
}
