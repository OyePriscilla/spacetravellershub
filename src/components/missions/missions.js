import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Mission from './Mission';
import MissionHeader from './MissionHeader';
import Footer from './footer';
import { fetchApi } from '../../redux/missions/missions';

function Missions() {
  const mission = useSelector((state) => state.mission);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!mission.length) dispatch(fetchApi());
  }, []);

  return (
    <div>
      <MissionHeader />
      {mission.map((data, index) => (
        <Mission
          bgClass={index % 2 === 0 ? 'backgroundGrey' : ''}
          key={data.id}
          id={data.id}
          missionName={data.mission}
          description={data.description}
          joinmission={data.joinmission}
        />
      ))}
      <Footer />
    </div>
  );
}

export default Missions;
