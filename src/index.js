import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// style
import "./sass/components/animations.scss";
import "./sass/components/buttons.scss";
import "./sass/components/fonts.scss";
import "./sass/components/globals.scss";
import "./sass/components/headings.scss";
import "./sass/components/inputs.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
