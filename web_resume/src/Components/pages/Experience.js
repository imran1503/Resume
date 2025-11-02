import React, { useEffect } from "react";
import "../Timeline.css";
import { Button } from "../Button";
import Timeline from "../Timeline";

function Experience() {

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Exp">
      <Timeline />
    </div>
  );
}

export default Experience;
