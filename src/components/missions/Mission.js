import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { toggleMission } from '../../redux/missions/missions';

const Mission = (props) => {
  const dispatch = useDispatch();

  const {
    id, missionName, description, joinmission,
  } = props;

  const handleClick = () => {
    dispatch(toggleMission(id));
  };

  return (
    <ul style={{
      listStyle: 'none', display: 'flex', justifyContent: 'space-between', border: '1px solid gray', alignItems: 'center',
    }}
    >
      <li style={{ width: '10%', fontWeight: '900' }}>{missionName}</li>
      <li style={{ width: '50%' }}>{description}</li>
      <li style={{ width: '10%', fontSize: '12px' }}>
        { joinmission ? <span>NOT A MEMBER</span> : <span>ACTIVE MEMBER</span> }
        {' '}
      </li>
      <button onClick={handleClick} type="button" style={{ padding: '10px', marginRight: '20px' }}>
        { joinmission ? 'Leave Mission' : 'Join Mission' }
      </button>
    </ul>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joinmission: PropTypes.bool.isRequired,
};

export default Mission;
