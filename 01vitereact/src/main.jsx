import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function Myapp() {
  return <h3>chai aur code</h3>;
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   Children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    visit google
  </a>
);

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google",
);

createRoot(document.getElementById("root")).render(reactElement);
