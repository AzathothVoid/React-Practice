import { useState } from "react";
import Main from "./components/Main.jsx";
import Nav from "./components/Nav.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
