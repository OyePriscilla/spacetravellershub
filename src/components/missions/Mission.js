import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const { mission, description, statuss } = props;

  return (
    <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
      <li>{mission}</li>
      <li>{description}</li>
      <li>{statuss}</li>
      <button type="button">Join Mission</button>
    </ul>
  );
};

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  statuss: PropTypes.string.isRequired,
};

export default Mission;
