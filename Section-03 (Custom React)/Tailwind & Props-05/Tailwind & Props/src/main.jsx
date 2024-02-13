import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import User from "./Components/User.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <User username="Laxman Krishnamurti" />
    <User username="Harshad Mehta" />
    <User username="Sonu Kumar" />
    <User username="Vikram Dhanush" />
    <User username="Aacharya Prashant" />
    <User username="Advait Foundation" />
  </React.StrictMode>
);
