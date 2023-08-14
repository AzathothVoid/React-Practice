import React from "react";
import logo from "../assets/reactLogo.png";

export default function Main() {
  return (
    <main className="main">
      <h1 className="main__heading">Fun facts about React</h1>
      <ul className="list list--react">
        <li className="list__item">Was first released in 2023</li>
        <li className="list__item">Was originally created by Jordan Walke</li>
        <li className="list__item">Has well over 100k Stars on github</li>
        <li className="list__item">Is maintained by Facebook</li>
        <li className="list__item">
          Powers thousands of enterprises apps, inlcuding mobile apps
        </li>
      </ul>
    </main>
  );
}
