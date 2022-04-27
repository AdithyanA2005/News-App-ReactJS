import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import LoaderState from "./context/Loader/LoaderState";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LoaderState>
      <App />
    </LoaderState>
  </BrowserRouter>
);
