import React, { useEffect } from "react";
import "../Timeline.css";
import { Button } from "../Button";
import Timeline from "../Timeline";

function Experience({ isNight }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Timeline isNight={isNight} />
    </div>
  );
}

export default Experience;
