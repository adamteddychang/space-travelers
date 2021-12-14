import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../Redux/missions/missions';

function Mission(props) {
  const { mission } = props;
  const dispatch = useDispatch();

  const joinTheMission = () => {
    dispatch(joinMission(mission.mission_id));
  };

  const leaveTheMission = () =>{
    dispatch(leaveMission(mission.mission_id))
  }


  return (
    <tr key={mission.mission_id}>

      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>{mission.joined === false || mission.joined === undefined
            ? <span className="available" >Available</span>
            : <span className='Joined'>Joined</span>}
      </td>
      <td>
        <div>
          {mission.joined === false || mission.joined === undefined
            ? <button type="button" className="Join" onClick={joinTheMission}>Join</button>
            : <button type="button" className="Leave" onClick={leaveTheMission}>Leave</button>}
        </div>
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
