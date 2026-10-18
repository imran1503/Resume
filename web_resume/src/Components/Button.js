import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];
const SIZES = ["btn--small", "btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  MyLink,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const className = `btn ${checkButtonStyle} ${checkButtonSize}`;

  // If it's an external link, use a standard <a> tag
  if (MyLink && MyLink.startsWith("http")) {
    return (
      <a
        href={MyLink}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  // If it's an internal route, use React Router <Link>
  if (MyLink) {
    return (
      <Link to={MyLink} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // Fallback if there's no link, just a button
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
