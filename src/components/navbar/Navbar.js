/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.css'

const Navbar = ({ brandName }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">{brandName}</div>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#">Home</a></li>
        <li className="navbar-item"><a href="#">Quote</a></li>
        <li className="navbar-item"><a href="#">Restaurants</a></li>
        <li className="navbar-item"><a href="#">Foods</a></li>
        <li className="navbar-item"><a href="#">Contact</a></li>
      </ul>
      <div className="navbar-button">
        <button className="get-started-button">GET STARTED</button>
      </div>
    </nav>
  );
};

export default Navbar;
