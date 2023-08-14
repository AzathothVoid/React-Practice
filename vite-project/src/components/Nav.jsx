import React from "react";
import logo from "../assets/reactLogo.png";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__branding">
        <img src={logo} alt="React Logo" />
        <h2 className="nav__branding__heading">ReactFacts</h2>
      </div>
      <p className="nav__content">React Course - Project 1</p>
    </nav>
  );
}
