import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { JoinMission } from '../../redux/missions/missions';

const Mission = (props) => {
  const dispatch = useDispatch();

  const { id, missionName, description } = props;

  const onJoinMission = () => {
    dispatch(JoinMission(id));
  };

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
      <button onClick={onJoinMission} type="button" style={{ padding: '10px', marginRight: '20px' }}>Join Mission</button>
    </ul>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
