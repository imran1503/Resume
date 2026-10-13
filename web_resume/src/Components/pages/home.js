import React from "react";
import HeroSection from "../HeroSection";
import Carousel from "../Carousel";
import "./home.css";

function Home() {
  return (
    <main className="home">
      <HeroSection />
      <Carousel />
    </main>
  );
}

export default Home;
