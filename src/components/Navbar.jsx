import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
    </nav>
  );
}

export default Navbar;