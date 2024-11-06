// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// Tạo root của ứng dụng trong React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
