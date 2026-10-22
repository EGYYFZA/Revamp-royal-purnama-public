import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { capture } from "./config.js";
import "./styles.css";

document.documentElement.classList.toggle("capture", capture);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
