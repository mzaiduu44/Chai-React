import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const reactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Google"
);

createRoot(document.getElementById("root")).render(reactElement);
