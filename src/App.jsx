import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Red from './components/Red.jsx';
import Blue from './components/Blue.jsx';

function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <Link to="/blue"> Blue </Link>

        <Link to="/red"> Red </Link>
      </nav>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;