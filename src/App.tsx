import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';



const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/weienlooi" element={<Home />} />
      </Routes>
    </div>
  )
};

export default App;