import React from 'react';
import Mission from './Mission';
import MissionHeader from './MissionHeader';

const initialData = [
  {
    id: 1,
    mission: 'Trace',
    description: 'Lorem ipsum',
    status: 'active',
  },
  {
    id: 2,
    mission: 'Check',
    description: 'Lorem ipsum Hjsjk jkdhjsad djfjdhfe',
    status: 'passive',
  },
  {
    id: 3,
    mission: 'Bookddgg',
    description: 'Lorem ipsum hdghkus hsdhgshd shhjs jnsdjhs hdhgd ',
    status: 'active',
  },
];

function Missions() {
  return (
    <div>
      <MissionHeader />
      {initialData.map((data) => (
        <Mission
          key={data.id}
          id={data.id}
          mission={data.mission}
          description={data.description}
          statuss={data.status}
        />
      ))}
    </div>
  );
}

export default Missions;
