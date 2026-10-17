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
    tag: "REACT / NODE",
  },
  {
    src: "/images/insulplantHome.png",
    title: "InsulPlant",
    tag: "PHP / MYSQL",
  },
  {
    src: "/images/firstSteamworks.png",
    title: "FIRST Steamworks 2017",
    tag: "ROBOTICS",
  },
  {
    src: "/images/carlaRos.png",
    title: "Autonomous Path Planning",
    tag: "PYTHON / ROS",
  },
  {
    src: "/images/carlaCamera.png",
    title: "Autonomous Camera Vision",
    tag: "COMPUTER VISION",
  },
  {
    src: "/images/BRIntro.png",
    title: "The Beat Revival Project",
    tag: "C# / REVERSE ENG",
  },
  {
    src: "/images/playerugc.png",
    title: "User Generated Content",
    tag: "GAME MODDING",
  },
];

const FaithArm = React.forwardRef((props, ref) => (
  <svg viewBox="0 0 600 300" ref={ref} className="faith-arm-svg" {...props}>
    <polygon points="600,50 250,100 230,220 600,250" fill="#f4e4db" />
    <polygon points="550,80 500,90 510,110 560,100" fill="#111" />
    <polygon points="480,130 400,145 410,170 490,155" fill="#111" />
    <polygon points="380,110 320,125 330,145 390,130" fill="#111" />
    <polygon points="450,180 380,195 390,220 460,205" fill="#111" />
    <polygon points="250,100 150,70 120,140 230,220" fill="#222" />
    <polygon points="230,110 190,125 200,160 240,145" fill="#e4002b" />
    <polygon points="150,70 50,40 20,110 120,140" fill="#1a1a1a" />
    <polygon points="50,40 -10,20 -20,60 40,70" fill="#1a1a1a" />
    <polygon points="-10,20 -20,60 -5,65 10,25" fill="#e4002b" />
    <polygon points="40,70 -30,65 -40,110 30,100" fill="#1a1a1a" />
    <polygon points="-30,65 -40,110 -25,110 -15,70" fill="#e4002b" />
    <polygon points="30,100 -20,120 -10,160 50,140" fill="#1a1a1a" />
    <polygon points="-20,120 -10,160 5,155 -5,125" fill="#e4002b" />
    <polygon points="50,140 10,170 40,210 90,170" fill="#1a1a1a" />
    <polygon points="10,170 40,210 55,200 25,175" fill="#e4002b" />
  </svg>
));

export default function Carousel({ isNight }) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const armRef = useRef(null);
  const cardRef = useRef(null);

  const handleSwipe = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    tl.set(armRef.current, { x: "0vw", y: "100vh", rotation: 90, opacity: 0 });

    tl.to(armRef.current, {
      x: "0vw",
      y: "25vh",
      rotation: 90,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    });

    tl.to(
      armRef.current,
      {
        x: "-50vw",
        y: "120vh",
        rotation: 90,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
      },
      "grab",
    );

    tl.to(
      cardRef.current,
      {
        x: "-50vw",
        y: "100vh",
        rotation: 15,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
      },
      "grab",
    );

    tl.call(() => {
      setIndex((prev) => (prev + 1) % items.length);
    });

    tl.fromTo(
      cardRef.current,
      { x: "0%", y: "-100vh", rotation: -10, opacity: 0 },
      {
        x: "0%",
        y: "0%",
        rotation: 0,
        opacity: 1,
        duration: 0.5,
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
          [ GRAB NEXT ]
        </button>
      </div>

      <div className="holo-desk">
        <div className="holo-grid"></div>

        <div className="holo-card-wrapper" ref={cardRef}>
          {/* NEW WRAPPER FOR IMAGE */}
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

      <FaithArm ref={armRef} />
    </section>
  );
}
