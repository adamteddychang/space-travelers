/* eslint-disable */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../Redux/missions/missions';

function Mission(props) {
  const { mission } = props;
  const dispatch = useDispatch();

  const joinTheMission = () => {
    dispatch(joinMission(mission.mission_id));
  };

  const leaveTheMission = () => {
    dispatch(leaveMission(mission.mission_id));
  };

  return (
    <tr key={mission.mission_id}>

      <td className="first-col">{mission.mission_name}</td>
      <td className="second-col">{mission.description}</td>
      <td className="third-col">
        {mission.joined === false || mission.joined === undefined
          ? <span className="available">Available</span>
          : <span className="Joined">Joined</span>}
      </td>
      <td className="fourth-col">
        
          {mission.joined === false || mission.joined === undefined
            ? <button type="button" className="Join" onClick={joinTheMission}>Join</button>
            : <button type="button" className="Leave" onClick={leaveTheMission}>Leave</button>}
        
      </td>
    </tr>
  );
}

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
