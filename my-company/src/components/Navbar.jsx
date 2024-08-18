// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul style={{backgroundColor:"green",display:"flex",justifyContent:"center",color:"white",}}>
        <li style={{padding:"10"}}>
          <Link to="/">Home</Link>
        </li>
        <li style={{padding:"10"}}>
          <Link to="/about">About</Link>
        </li>
        <li style={{padding:"10"}}>
          <Link to="/services">Services</Link>
        </li>
        <li style={{padding:"10"}}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
