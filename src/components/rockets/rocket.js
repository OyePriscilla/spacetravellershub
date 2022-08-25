import React from 'react';
import './rocket.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rockets';

const Rocket = ({
  id, name, description, image, reserved,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(reserveRocket(id));
  };

  return (
    <article>
      <div className="imgContainer">
        <img className="logoImg" src={image} alt={name} />
      </div>
      <div className="details">
        <h2 className="name">{name}</h2>
        <div className="description">
          {reserved && (<span className="rocketStatus">RESERVED</span>)}
          {description}
          .
        </div>
        <div className="BookingBtn">
          <button type="button" className={reserved ? 'cancelBtn' : 'reserveBtn'} onClick={handleClick}>
            {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
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
  reserved: PropTypes.bool.isRequired,
};
export default Rocket;
