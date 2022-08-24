import React from 'react';
import './rocket.css';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { cancelReservation, reserveRocket } from '../../redux/rockets/rockets';

const Rocket = ({
  id, name, description, image,
}) => {
  // const dispatch = useDispatch();
  // dispatch(reserveRocket(id));

  return (
    <article>
      <div className="imgContainer">
        <img className="logoImg" src={image} alt={name} />
      </div>
      <div className="details">
        <h2 className="name">{name}</h2>
        <div className="description">
          <span className="rocketStatus" style={{ display: 'none' }}>RESERVED</span>
          {' '}
          {description}
          .
        </div>
        <div className="BookingBtn">
          <button type="button" className="reserveBtn" onClick={() => (reserveRocket(id))}>Reserve Rocket</button>
          <button type="button" className="cancelBtn" style={{ display: 'none' }} onClick={() => (cancelReservation(id))}>Cancel Reservation</button>
        </div>
      </div>
    </article>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Rocket;
