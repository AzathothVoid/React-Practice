import React from "react";
import ReactDOM from "react-dom/client";

function ReactInfo() {
  return (
    <div>
      <section>
        <img src="./react-logo.png" alt="React Logo" />
      </section>
      <section>
        <header>
          <h1>Fun Facts about React</h1>
        </header>
        <div>
          <ul>
            <li>Was First released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on github</li>
            <li>Is maintained by facebook</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactInfo />);
