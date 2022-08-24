import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const { missionName, description } = props;

  return (
    <ul style={{
      listStyle: 'none', display: 'flex', justifyContent: 'space-between', border: '1px solid gray', alignItems: 'center',
    }}
    >
      <li style={{ width: '10%', fontWeight: '900' }}>{missionName}</li>
      <li style={{ width: '50%' }}>{description}</li>
      <li style={{ width: '10%', fontSize: '12px' }}>
        <span>NOT A MEMBER</span>
        {' '}
      </li>
      <button type="button" style={{ padding: '10px', marginRight: '20px' }}>Join Mission</button>
    </ul>
  );
};

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
