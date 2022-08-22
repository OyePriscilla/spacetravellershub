import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

function Nav() {
  return (
    <div className="container">
      <div className="subContainer">
        <div className="logoContainer">
          <h1 className="logo">Space Traveller&apos;s Hub</h1>
        </div>
        <nav className="navLinks">
          <NavLink to="/">Rockets</NavLink>
          <NavLink to="/missions">Missions</NavLink>
          <NavLink to="/myprofile">My Profile</NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
