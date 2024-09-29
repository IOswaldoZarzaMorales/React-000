import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EjemploProvider } from "./EjmploProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EjemploProvider>
      <App />
    </EjemploProvider>
  </React.StrictMode>
);
