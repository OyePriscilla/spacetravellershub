import React from 'react';
import './rocket.css';
import PropTypes from 'prop-types';

const Rocket = ({ name, description, image }) => (
  <article>
    <div className="imgContainer">
      <img className="logoImg" src={image} alt="logo" />
    </div>
    <div className="details">
      <p className="name">{name}</p>
      <div className="description">
        <span className="rocketStatus" style={{ display: 'none' }}>RESERVED</span>
        {' '}
        {description}
        .
      </div>
      <div className="BookingBtn">
        <button type="button" className="reserveBtn">Reserve Rocket</button>
        <button type="button" className="cancelBtn" style={{ display: 'none' }}>Cancel Reservation</button>
      </div>
    </div>
  </article>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Rocket;
