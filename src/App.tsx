import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Links from "./pages/Links";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/weienlooi" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  );
};

export default App;
