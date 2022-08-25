import React from 'react';
import { useSelector } from 'react-redux';

function Missions() {
  const missions = useSelector((state) => state.mission);

  const missionFilter = missions.filter((mission) => mission.joinmission === true);

  return (
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
  );
}

export default Missions;
