import React from 'react';
import { NavLink } from 'react-router-dom';
import spacetravellogo from '../image/spacetravellogo.png';
import './Nav.css';

const Nav = () => (
  <div className="container">
    <div className="subContainer">
      <div className="logoContainer">
        <img className="logoIcon" src={spacetravellogo} alt="logo" />
        <h1 className="logoDes">Space Traveller&apos;s Hub</h1>
      </div>
      <nav className="navigationLinks">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Missions
        </NavLink>
        <NavLink
          to="/myprofile"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          My Profile
        </NavLink>
      </nav>
    </div>
  </div>
);

export default Nav;
