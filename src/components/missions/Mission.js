import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { toggleMission } from '../../redux/missions/missions';
import './missions.css';

const Mission = (props) => {
  const dispatch = useDispatch();

  const {
    id, missionName, description, joinmission, bgClass,
  } = props;

  const handleClick = () => {
    dispatch(toggleMission(id));
  };

  return (
    <table>
      <tbody>
        <tr className={bgClass}>
          <td style={{ width: '15%', fontWeight: '900' }}>{missionName}</td>
          <td style={{ width: '55%' }}>{description}</td>
          <td style={{
            width: '15%', fontSize: '12px',
          }}
          >
            {' '}
            { joinmission ? (
              <span style={{
                backgroundColor: 'grey', color: '#ffffff', padding: '5px', borderRadius: '8px', width: '100px', marginLeft: '10px',
              }}
              >
                NOT A MEMBER
              </span>
            ) : (
              <span style={{
                backgroundColor: 'blue', color: '#ffffff', padding: '5px', borderRadius: '8px', width: '100px', marginLeft: '10px',
              }}
              >
                ACTIVE MEMBER
              </span>
            ) }
            {' '}
            {' '}
          </td>
          <td>
            <button
              onClick={handleClick}
              type="button"
              style={{ height: '38px', border: 'none', backgroundColor: 'inherit' }}
            >
              { joinmission ? (
                <span style={{
                  padding: '10px', borderRadius: '5px', border: '1px solid red',
                }}
                >
                  Leave Mission
                </span>
              ) : (
                <span style={{
                  padding: '10px', borderRadius: '5px', border: '1px solid black',
                }}
                >
                  Join Mission
                </span>
              ) }
            </button>

          </td>
        </tr>
      </tbody>
    </table>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joinmission: PropTypes.bool.isRequired,
  bgClass: PropTypes.string.isRequired,
};

export default Mission;
