import React from "react";
import ReactDOM from "react-dom/client";

function Button({ content }) {
  return <div className="btn">{content}</div>;
}

function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav__brand">
          <img src={require("./public/images/reactLogo.png")} alt="something" />
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

function MainContent() {
  return (
    <div className="bg">
      <section className="block block--white block-content">
        <header className="block-content__header">
          <h1 className="block-content__header__heading">
            Why i want to learn react
          </h1>
        </header>
        <div>
          <ul>
            <li>For money</li>
            <li>To learn a new skill</li>
            <li>For my resume</li>
            <li>For experience</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__content">
        <small>&copy; 2023 Nauman development. All rights reserved.</small>
      </p>
    </footer>
  );
}

function ReactInfo() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactInfo />);
