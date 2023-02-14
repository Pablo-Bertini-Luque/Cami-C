import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QueHago from "./pages/QueHago";
import Home from "./pages/Home";
import MisTrabajos from "./pages/MisTrabajos";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Portfolio" element={<MisTrabajos />} />
        <Route path="QueHago" element={<QueHago />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
