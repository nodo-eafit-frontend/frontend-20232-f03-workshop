import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App title="Calculator" time={5000} />
    <section>Hola soy un section</section>
  </React.StrictMode>
);
