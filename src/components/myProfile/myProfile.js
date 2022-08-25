import React from 'react';
import './myProfile.css';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  // Reserve rocket selector
  const rockets = useSelector((state) => state.rocket);
  const reserves = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <article className="rocketProfileContainer">
      <h1 className="title">My Rockets</h1>
      {reserves.length !== 0 ? (
        <ul className="table">
          {reserves.map((reserve) => (
            <li key={reserve.id}>
              {reserve.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <em>You don&apos;t have any reserves at the moment</em>
        </p>
      )}
    </article>
  );
};

export default MyProfile;
