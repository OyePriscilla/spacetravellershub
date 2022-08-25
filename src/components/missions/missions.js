import React from 'react';
import { useSelector } from 'react-redux';

import Mission from './Mission';
import MissionHeader from './MissionHeader';

function Missions() {
  const mission = useSelector((state) => state.mission);

  return (
    <div>
      <MissionHeader />
      {mission.map((data) => (
        <Mission
          key={data.id}
          id={data.id}
          missionName={data.mission}
          description={data.description}
          joinmission={data.joinmission}
        />
      ))}
    </div>
  );
}

export default Missions;
