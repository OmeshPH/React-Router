import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Red from './components/Red';
import Blue from './components/Blue';
import Green from './components/Green';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <nav id="navbar">
      
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/green">Green</Link>
        <Link to="/">Home</Link>
        
      </nav>
      <div id="main-section">
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/blue" element={< Blue />} />
          <Route path="/red" element={< Red />} />
          <Route path="/green" element={<Green />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;