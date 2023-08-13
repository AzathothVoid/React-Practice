import Button from "./Button.js";
import React from "react"

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav__brand">
          <img
            src={require("../public/images/reactLogo.png")}
            alt="something"
          />
        </div>

        <ul className="list list--nav">
          <li className="nav__item">
            <Button content={"Pricing"} />
          </li>
          <li className="nav__item">
            <Button content={"About"} />
          </li>
          <li className="nav__item">
            <Button content={"Contact"} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
