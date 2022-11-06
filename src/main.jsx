import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./Context/ThemeContext";
import ReactTooltip from 'react-tooltip';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
    <ReactTooltip className="tooltip_area" />
  </BrowserRouter>
);
