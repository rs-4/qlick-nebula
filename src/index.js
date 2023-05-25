import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AllRoutes from "./config/route";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AllRoutes></AllRoutes>
  </React.StrictMode>
);

reportWebVitals();
