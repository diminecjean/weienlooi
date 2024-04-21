import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Links from "./pages/Links";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/weienlooi" element={<Home />} />
        <Route path="/weienlooi/gallery" element={<Gallery />} />
        <Route path="/weienlooi/links" element={<Links />} />
      </Routes>
    </div>
  );
};

export default App;
