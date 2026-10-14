import React from "react";
import HeroSection from "../HeroSection";
import Carousel from "../Carousel";
import "./home.css";

function Home({ isNight }) {
  return (
    <main className="home">
      <HeroSection isNight={isNight} />
      <Carousel />
    </main>
  );
}

export default Home;
