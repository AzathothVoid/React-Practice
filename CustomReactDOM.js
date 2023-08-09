import React from "react";
import ReactDOM from "react-dom";

class NomDOM {
  static render(HTMLData, TargetElement) {
    if (typeof HTMLData.props.children == "object") {
      console.log("Enter");
      console.log("Length of array: " + HTMLData.props.children.length);
      return TargetElement.append(this.searchElement(HTMLData));
    }

    return TargetElement.append(HTMLData.props.children);
  }

  static searchElement(data) {
    if (typeof data.props.children != "object") {
      let element = document.createElement(data.type);
      element.textContent = data.props.children;

      return element;
    }
    if (!this.checkIfArray(data.props.children)) {
      return this.searchElement(data.props.children);
    } else {
      let root = document.createElement(data.type);
      for (let i = 0; i < data.props.children.length; i++) {
        root.append(this.searchElement(data.props.children[i]));
      }

      return root;
    }
  }

  static checkIfArray(data) {
    return Array.isArray(data);
  }

  static checkDepth(data, counter) {
    if (typeof data.props.children == "object") {
      if (typeof data.props.children == "object") {
        return this.checkDepth(data.props.children[0], ++counter);
      }
      return this.checkDepth(data.props.children, ++counter);
    }
    return counter;
  }
}

const HTMLData = (
  <nav className="nav collapsible">
    <h1>ShorURL</h1>
    <ul>
      <li>Home</li>
      <li>Product</li>
      <li>Contact</li>
      <li>Statistics</li>
    </ul>
  </nav>
);

console.log(HTMLData);
console.log(typeof HTMLData.props.children);

//document.getElementById("root").append("hello", document.createElement("h1"));

//document.getElementById("root").appendChild();
NomDOM.render(HTMLData, document.getElementById("root"));
