import React from "react";
import ReactDOM from "react-dom";

function NavBar() {
  return (
    <nav className="nav collapsible">
      <ul className="list nav__list collapsible__content">
        <li className="nav__item">
          <a href="">Item 1</a>
        </li>
        <li className="nav__item">
          <a href="">Item 2</a>
        </li>
        <li className="nav__item">
          <a href="">Item 3</a>
        </li>
        <li className="nav__item">
          <a href="">Item 4</a>
        </li>
      </ul>
    </nav>
  );
}

function MainContent() {
  return (
    <div>
      <h1>First time testing componets in react</h1>
    </div>
  );
}

(function () {
  console.log("Sript Runnng");
})();

ReactDOM.render(
  <div>
    <NavBar />
    <MainContent />
  </div>,
  document.getElementById("root")
);
