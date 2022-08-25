import React from 'react';
import { useSelector } from 'react-redux';

import './myProfile.css';

function MyProfile() {
  const missions = useSelector((state) => state.mission);
  const missionFilter = missions.filter((mission) => mission.joinmission === true);

  // Reserve rocket selector
  const rockets = useSelector((state) => state.rocket);
  const reserves = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div style={{ display: 'flex' }}>
      <article className="rocketProfileContainer">
      <h1 className="title">My Rockets</h1>
      {missionFilter.length !== 0 ? (
        <ul className="table">
          {missionFilter.map((mission) => (
            <li key={mission.id}>
              {mission.mission}
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <em>You don&apos;t have any missions joined at the moment</em>
        </p>
      )}
      </article>
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
    </div>
  );
}

export default MyProfile;
