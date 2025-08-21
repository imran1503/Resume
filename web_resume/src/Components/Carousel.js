import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css"; // External CSS file

export default function Carousel({
  items = null,
  autoPlay = true,
  interval = 5000,
  showArrows = false,
  showIndicators = true,
  className = "simple-carousel full-width",
}) {
const defaultItems = [
  { src: process.env.PUBLIC_URL + "/images/2200Hang_New.jpeg", alt: "2200", caption: "FIRST Stronghold 2016" },
  { src: process.env.PUBLIC_URL + "/images/vflHome.png", alt: "VFL image", caption: "Home page of VFL" },
  { src: process.env.PUBLIC_URL + "/images/insulplantHome.png", alt: "InsulPlant image" },
  { src: process.env.PUBLIC_URL + "/images/firstSteamworks.png", alt: "2200", caption: "FIRST Steamworks 2017" },
  { src: process.env.PUBLIC_URL + "/images/carlaRos.png", alt: "2200", caption: "Capstone Project - Autonmous Vehicle Path Planning" },
  { src: process.env.PUBLIC_URL + "/images/carlaCamera.png", alt: "2200", caption: "Capstone Project - Autonmous Vehicle Path Planning" },
];

const normalizedItems = (items && items.length > 0)
  ? items.map(item =>
      typeof item === 'string' || item?.src ? (
        <div className="carousel-content">
          <img
            src={typeof item === 'string' ? item : item.src}
            alt={item.alt || 'carousel-item'}
            className="carousel-image"
          />
          {item.caption && <div className="carousel-caption">{item.caption}</div>}
        </div>
      ) : item
    )
    : defaultItems.map(i =>
      <div className="carousel-content" key={i.src}>
        <img src={i.src} alt={i.alt} className="carousel-image" />
        {i.caption && <div className="carousel-caption">{i.caption}</div>}
      </div>
    );

  const count = normalizedItems.length;
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  const goTo = (to) => {
    const safe = ((to % count) + count) % count;
    setIndex(safe);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (!autoPlay) return;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % count);
    }, interval);
    return () => clearInterval(intervalRef.current);
  }, [autoPlay, interval, count]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !autoPlay) return;
    const onEnter = () => clearInterval(intervalRef.current);
    const onLeave = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => setIndex(i => (i + 1) % count), interval);
    };
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [autoPlay, interval, count]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <div ref={containerRef} className={`${className}`}>
      <div className="carousel-viewport">
        <section className="projects-section">
          <div className="carousel-title">Projects & Highlights</div>
        </section>
        <div
          className="carousel-track"
          style={{ width: `${count * 100}%`, transform: `translateX(-${index * (100 / count)}%)` }}
        >
          {normalizedItems.map((child, i) => (
            <div key={i} className="carousel-slide taller" style={{ width: `${100 / count}%` }}>
              {child}
            </div>
          ))}
        </div>

        {showArrows && (
          <>
            <button aria-label="Previous" onClick={prev} className="carousel-arrow left aligned">‹</button>
            <button aria-label="Next" onClick={next} className="carousel-arrow right aligned">›</button>
          </>
        )} {showIndicators && (
        <div className="carousel-indicators">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`carousel-indicator ${i === index ? 'active' : ''}`}
            ></button>
          ))}
        </div>
      )}
    </div>
      </div>

     
  );
}
